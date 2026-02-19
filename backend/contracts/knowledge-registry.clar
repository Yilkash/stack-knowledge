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

(define-map resource-tags
	{ resource-id: uint }
	{ tags: (list 10 (string-utf8 20)) }
)

(define-map featured-resources
	{ resource-id: uint }
	{ is-featured: bool, featured-at: uint }
)

(define-map reported-resources
	{ resource-id: uint, reporter: principal }
	{ reason: (string-utf8 100), created-at: uint }
)

(define-map verified-educators
	{ user: principal }
	{ is-verified: bool, verified-at: uint, verified-by: principal }
)

(define-map resource-archived
	{ resource-id: uint }
	{ is-archived: bool }
)

(define-map contract-owners
	{ owner: principal }
	{ is-owner: bool }
)

(define-map contributor-rewards
	{ user: principal }
	{ amount: uint, last-claimed: uint }
)

(define-map platform-analytics
	{ metric: (string-utf8 50) }
	{ value: uint }
)

(define-map categories
	{ name: (string-utf8 50) }
	{ description: (string-utf8 200), created-at: uint }
)

(define-map viewing-history
	{ user: principal, resource-id: uint }
	{ last-viewed: uint, view-count: uint }
)

(define-map reputation-levels
	{ user: principal }
	{ level: uint, badge: (string-utf8 20) }
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

(define-read-only (get-resource-tags (resource-id uint))
	(map-get? resource-tags { resource-id: resource-id })
)

(define-read-only (is-resource-featured (resource-id uint))
	(default-to false (get is-featured (map-get? featured-resources { resource-id: resource-id })))
)

(define-read-only (is-user-verified (user principal))
	(default-to false (get is-verified (map-get? verified-educators { user: user })))
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
				created-at: burn-block-height,
				is-active: true
			}
		)
		(map-set user-reputation
			{ user: tx-sender }
			(merge user-rep { total-uploads: (+ (get total-uploads user-rep) u1) })
		)
		(var-set total-resources resource-id)
		(update-analytics "total-resources" u1)
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
		
		(update-analytics "total-tips" amount)
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
				created-at: burn-block-height
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

(define-public (set-resource-tags (resource-id uint) (tags (list 10 (string-utf8 20))))
	(let
		(
			(resource (unwrap! (map-get? resources { resource-id: resource-id }) err-not-found))
		)
		(asserts! (is-eq tx-sender (get uploader resource)) err-unauthorized)
		(map-set resource-tags
			{ resource-id: resource-id }
			{ tags: tags }
		)
		(ok true)
	)
)

(define-public (set-featured-resource (resource-id uint) (is-featured bool))
	(begin
		(asserts! (is-eq tx-sender contract-owner) err-owner-only)
		(unwrap! (map-get? resources { resource-id: resource-id }) err-not-found)
		(map-set featured-resources
			{ resource-id: resource-id }
			{ is-featured: is-featured, featured-at: burn-block-height }
		)
		(ok true)
	)
)

(define-public (verify-educator (user principal) (is-verified bool))
	(begin
		(asserts! (is-eq tx-sender contract-owner) err-owner-only)
		(map-set verified-educators
			{ user: user }
			{ is-verified: is-verified, verified-at: burn-block-height, verified-by: tx-sender }
		)
		(ok true)
	)
)

(define-public (update-resource-metadata (resource-id uint) (title (string-utf8 100)) (description (string-utf8 500)))
	(let
		(
			(resource (unwrap! (map-get? resources { resource-id: resource-id }) err-not-found))
		)
		(asserts! (is-eq tx-sender (get uploader resource)) err-unauthorized)
		(map-set resources
			{ resource-id: resource-id }
			(merge resource { title: title, description: description })
		)
		(ok true)
	)
)

(define-public (transfer-resource-ownership (resource-id uint) (new-uploader principal))
	(let
		(
			(resource (unwrap! (map-get? resources { resource-id: resource-id }) err-not-found))
		)
		(asserts! (is-eq tx-sender (get uploader resource)) err-unauthorized)
		(map-set resources
			{ resource-id: resource-id }
			(merge resource { uploader: new-uploader })
		)
		(ok true)
	)
)

(define-public (set-platform-fee-percentage (new-fee uint))
	(begin
		(asserts! (is-eq tx-sender contract-owner) err-owner-only)
		(asserts! (<= new-fee u100) err-invalid-amount)
		(var-set platform-fee-percentage new-fee)
		(ok true)
	)
)

(define-public (report-resource (resource-id uint) (reason (string-utf8 100)))
	(begin
		(unwrap! (map-get? resources { resource-id: resource-id }) err-not-found)
		(map-set reported-resources
			{ resource-id: resource-id, reporter: tx-sender }
			{ reason: reason, created-at: burn-block-height }
		)
		(ok true)
	)
)

(define-public (delete-review (review-id uint))
	(let
		(
			(review (unwrap! (map-get? reviews { review-id: review-id }) err-not-found))
			(resource-id (get resource-id review))
			(resource (unwrap! (map-get? resources { resource-id: resource-id }) err-not-found))
			(rating (get rating review))
		)
		(asserts! (is-eq tx-sender (get reviewer review)) err-unauthorized)
		
		;; Update resource rating
		(map-set resources
			{ resource-id: resource-id }
			(merge resource {
				rating-sum: (- (get rating-sum resource) rating),
				rating-count: (- (get rating-count resource) u1)
			})
		)
		
		;; Remove review from maps
		(map-delete reviews { review-id: review-id })
		(map-delete user-reviews { user: tx-sender, resource-id: resource-id })
		
		(ok true)
	)
)

(define-public (toggle-resource-archival (resource-id uint))
	(let
		(
			(resource (unwrap! (map-get? resources { resource-id: resource-id }) err-not-found))
			(current-archived (default-to false (get is-archived (map-get? resource-archived { resource-id: resource-id }))))
		)
		(asserts! (is-eq tx-sender (get uploader resource)) err-unauthorized)
		(map-set resource-archived
			{ resource-id: resource-id }
			{ is-archived: (not current-archived) }
		)
		(ok true)
	)
)

(define-public (set-contract-owner (owner principal) (is-owner bool))
	(begin
		(asserts! (is-eq tx-sender contract-owner) err-owner-only)
		(map-set contract-owners
			{ owner: owner }
			{ is-owner: is-owner }
		)
		(ok true)
	)
)

(define-public (distribute-reward (user principal) (amount uint))
	(begin
		(asserts! (is-eq tx-sender contract-owner) err-owner-only)
		(let
			(
				(current-rewards (default-to { amount: u0, last-claimed: u0 } (map-get? contributor-rewards { user: user })))
			)
			(map-set contributor-rewards
				{ user: user }
				{ amount: (+ (get amount current-rewards) amount), last-claimed: burn-block-height }
			)
			(ok true)
		)
	)
)

(define-public (set-category (name (string-utf8 50)) (description (string-utf8 200)))
	(begin
		(asserts! (is-eq tx-sender contract-owner) err-owner-only)
		(map-set categories
			{ name: name }
			{ description: description, created-at: burn-block-height }
		)
		(ok true)
	)
)

(define-public (record-view (resource-id uint))
	(let
		(
			(current-view (default-to { last-viewed: burn-block-height, view-count: u0 } (map-get? viewing-history { user: tx-sender, resource-id: resource-id })))
		)
		(unwrap! (map-get? resources { resource-id: resource-id }) err-not-found)
		(map-set viewing-history
			{ user: tx-sender, resource-id: resource-id }
			{ 
				last-viewed: burn-block-height, 
				view-count: (+ (get view-count current-view) u1) 
			}
		)
		(update-analytics "total-views" u1)
		(ok true)
	)
)

(define-public (set-reputation-level (user principal) (level uint) (badge (string-utf8 20)))
	(begin
		(asserts! (is-eq tx-sender contract-owner) err-owner-only)
		(map-set reputation-levels
			{ user: user }
			{ level: level, badge: badge }
		)
		(ok true)
	)
)

;; Private function to update analytics
(define-private (update-analytics (metric (string-utf8 50)) (delta uint))
	(let
		(
			(current-val (default-to u0 (get value (map-get? platform-analytics { metric: metric }))))
		)
		(map-set platform-analytics
			{ metric: metric }
			{ value: (+ current-val delta) }
		)
	)
)
