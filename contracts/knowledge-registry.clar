;; knowledge-registry
;; Contract to manage educational resources and tipping

;; Constants
(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))
(define-constant err-not-found (err u101))
(define-constant err-already-exists (err u102))
(define-constant err-invalid-amount (err u103))
(define-constant err-transfer-failed (err u104))

;; Data Variables
(define-data-var total-resources uint u0)

;; Maps
(define-map resources
	{ resource-id: uint }
	{
		uploader: principal,
		title: (string-utf8 100),
		description: (string-utf8 500),
		url: (string-utf8 255), ;; Link to Gaia/IPFS
		total-tips: uint,
		created-at: uint
	}
)

(define-map user-reputation
	{ user: principal }
	{ score: uint }
)

;; Read-only functions
(define-read-only (get-resource (resource-id uint))
	(map-get? resources { resource-id: resource-id })
)

(define-read-only (get-total-resources)
	(var-get total-resources)
)

;; Public functions
(define-public (register-resource (title (string-utf8 100)) (description (string-utf8 500)) (url (string-utf8 255)))
	(let
		(
			(resource-id (+ (var-get total-resources) u1))
		)
		(map-insert resources
			{ resource-id: resource-id }
			{
				uploader: tx-sender,
				title: title,
				description: description,
				url: url,
				total-tips: u0,
				created-at: block-height
			}
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
		)
		(asserts! (> amount u0) err-invalid-amount)
		(try! (stx-transfer? amount tx-sender uploader))
		;; Update resource tips
		(map-set resources
			{ resource-id: resource-id }
			(merge resource { total-tips: (+ current-tips amount) })
		)
		;; Update reputation logic (+1 score for getting a tip)
		(let
			(
				(current-score (default-to u0 (get score (map-get? user-reputation { user: uploader }))))
			)
			(map-set user-reputation
				{ user: uploader }
				{ score: (+ current-score u1) }
			)
		)
		(ok true)
	)
)
