;; knowledge-registry
;; Enhanced contract with reviews, categories, and advanced features

;; Constants
(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))
(define-constant err-not-found (err u101))
(define-constant err-already-exists (err u102))
(define-constant err-invalid-amount (err u103))
(define-constant err-transfer-failed (err u104))
(define-constant err-unauthorized (err u105))
(define-constant err-invalid-rating (err u106))

;; Data Variables
(define-data-var total-resources uint u0)
(define-data-var total-reviews uint u0)
(define-data-var platform-fee-percentage uint u5) ;; 5% platform fee

;; Maps
(define-map resources
	{ resource-id: uint }
	{
		uploader: principal,
		title: (string-utf8 100),
		description: (string-utf8 500),
		url: (string-utf8 255),
		category: (string-utf8 50),
		total-tips: uint,
		download-count: uint,
		rating-sum: uint,
		rating-count: uint,
		created-at: uint,
		is-active: bool
	}
)

(define-map user-reputation
	{ user: principal }
	{ 
		score: uint,
		total-uploads: uint,
		total-tips-received: uint,
		total-tips-given: uint
	}
)

(define-map reviews
	{ review-id: uint }
	{
		resource-id: uint,
		reviewer: principal,
		rating: uint,
		comment: (string-utf8 500),
		created-at: uint
	}
)

(define-map user-reviews
	{ user: principal, resource-id: uint }
	{ has-reviewed: bool }
)

;; Read-only functions

;; Get metadata for a specific resource
(define-read-only (get-resource (resource-id uint))
	(map-get? resources { resource-id: resource-id })
)

(define-read-only (get-total-resources)
	(var-get total-resources)
)

;; Get user stats and reputation score
(define-read-only (get-user-reputation (user principal))
	(default-to 
		{ score: u0, total-uploads: u0, total-tips-received: u0, total-tips-given: u0 }
		(map-get? user-reputation { user: user })
	)
)

(define-read-only (get-review (review-id uint))
	(map-get? reviews { review-id: review-id })
)

(define-read-only (has-user-reviewed (user principal) (resource-id uint))
	(default-to false 
		(get has-reviewed (map-get? user-reviews { user: user, resource-id: resource-id }))
	)
)

;; Calculate average rating for a resource
(define-read-only (get-resource-rating (resource-id uint))
	(let
		(
			(resource (unwrap! (map-get? resources { resource-id: resource-id }) (err u0)))
			(rating-sum (get rating-sum resource))
			(rating-count (get rating-count resource))
		)
		(if (> rating-count u0)
			(ok (/ rating-sum rating-count))
			(ok u0)
		)
	)
)

;; Public functions

;; Register a new educational resource
(define-public (register-resource 
	(title (string-utf8 100)) 
	(description (string-utf8 500)) 
	(url (string-utf8 255))
	(category (string-utf8 50))
)
	(let
		(
			(resource-id (+ (var-get total-resources) u1))
			(user-rep (get-user-reputation tx-sender))
		)
		(map-insert resources
			{ resource-id: resource-id }
			{
				uploader: tx-sender,
				title: title,
				description: description,
				url: url,
				category: category,
				total-tips: u0,
				download-count: u0,
				rating-sum: u0,
				rating-count: u0,
				created-at: block-height,
				is-active: true
			}
		)
		(map-set user-reputation
			{ user: tx-sender }
			(merge user-rep { total-uploads: (+ (get total-uploads user-rep) u1) })
		)
		(var-set total-resources resource-id)
		(ok resource-id)
	)
)

(define-public (tip-resource (resource-id uint) (amount uint))
	(let
		(
			(resource (unwrap! (map-get? resources { resource-id: resource-id }) err-not-found))
			(uploader (get uploader resource))
			(current-tips (get total-tips resource))
			(platform-fee (/ (* amount (var-get platform-fee-percentage)) u100))
			(uploader-amount (- amount platform-fee))
			(uploader-rep (get-user-reputation uploader))
			(tipper-rep (get-user-reputation tx-sender))
		)
		(asserts! (> amount u0) err-invalid-amount)
		(asserts! (get is-active resource) err-not-found)
		
		;; Transfer to uploader
		(try! (stx-transfer? uploader-amount tx-sender uploader))
		;; Transfer platform fee to contract owner
		(try! (stx-transfer? platform-fee tx-sender contract-owner))
		
		;; Update resource tips
		(map-set resources
			{ resource-id: resource-id }
			(merge resource { total-tips: (+ current-tips amount) })
		)
		
		;; Update uploader reputation
		(map-set user-reputation
			{ user: uploader }
			(merge uploader-rep { 
				score: (+ (get score uploader-rep) u1),
				total-tips-received: (+ (get total-tips-received uploader-rep) amount)
			})
		)
		
		;; Update tipper reputation
		(map-set user-reputation
			{ user: tx-sender }
			(merge tipper-rep { 
				total-tips-given: (+ (get total-tips-given tipper-rep) amount)
			})
		)
		
		(ok true)
	)
)

(define-public (add-review (resource-id uint) (rating uint) (comment (string-utf8 500)))
	(let
		(
			(resource (unwrap! (map-get? resources { resource-id: resource-id }) err-not-found))
			(review-id (+ (var-get total-reviews) u1))
			(current-rating-sum (get rating-sum resource))
			(current-rating-count (get rating-count resource))
		)
		(asserts! (and (>= rating u1) (<= rating u5)) err-invalid-rating)
		(asserts! (not (has-user-reviewed tx-sender resource-id)) err-already-exists)
		(asserts! (get is-active resource) err-not-found)
		
		;; Create review
		(map-insert reviews
			{ review-id: review-id }
			{
				resource-id: resource-id,
				reviewer: tx-sender,
				rating: rating,
				comment: comment,
				created-at: block-height
			}
		)
		
		;; Mark user as reviewed
		(map-set user-reviews
			{ user: tx-sender, resource-id: resource-id }
			{ has-reviewed: true }
		)
		
		;; Update resource rating
		(map-set resources
			{ resource-id: resource-id }
			(merge resource {
				rating-sum: (+ current-rating-sum rating),
				rating-count: (+ current-rating-count u1)
			})
		)
		
		(var-set total-reviews review-id)
		(ok review-id)
	)
)

(define-public (increment-download (resource-id uint))
	(let
		(
			(resource (unwrap! (map-get? resources { resource-id: resource-id }) err-not-found))
			(current-downloads (get download-count resource))
		)
		(asserts! (get is-active resource) err-not-found)
		(map-set resources
			{ resource-id: resource-id }
			(merge resource { download-count: (+ current-downloads u1) })
		)
		(ok true)
	)
)

(define-public (deactivate-resource (resource-id uint))
	(let
		(
			(resource (unwrap! (map-get? resources { resource-id: resource-id }) err-not-found))
		)
		(asserts! (is-eq tx-sender (get uploader resource)) err-unauthorized)
		(map-set resources
			{ resource-id: resource-id }
			(merge resource { is-active: false })
		)
		(ok true)
	)
)
