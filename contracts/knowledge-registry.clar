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
