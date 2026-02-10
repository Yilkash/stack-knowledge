# 🏗️ StackKnowledge Architecture

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER INTERFACE                          │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │   Home   │  │Resources │  │ Profile  │  │Analytics │      │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘      │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                    │
│  │Resource  │  │Leaderboard│  │  Upload  │                    │
│  │ Detail   │  │          │  │          │                    │
│  └──────────┘  └──────────┘  └──────────┘                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      COMPONENT LAYER                            │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │SearchBar │  │ Rating   │  │  Toast   │  │  Badge   │      │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘      │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │Pagination│  │ReviewCard│  │ StatCard │  │  Error   │      │
│  │          │  │          │  │          │  │ Boundary │      │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘      │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       HOOKS LAYER                               │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │useContract│ │useToast  │  │useDebounce│ │useLocal  │      │
│  │          │  │          │  │          │  │Storage   │      │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘      │
│                                                                 │
│  ┌──────────┐  ┌──────────┐                                   │
│  │useStacks │  │useInfinite│                                   │
│  │Auth      │  │Scroll    │                                   │
│  └──────────┘  └──────────┘                                   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       API LAYER                                 │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │/api/     │  │/api/     │  │/api/     │  │/api/     │      │
│  │resources │  │reviews   │  │upload    │  │user      │      │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘      │
│                                                                 │
│  ┌──────────────────────────────────────────────────┐          │
│  │            Middleware Layer                      │          │
│  │  • Rate Limiting                                 │          │
│  │  • Security Headers                              │          │
│  │  • Input Validation                              │          │
│  └──────────────────────────────────────────────────┘          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    UTILITY LAYER                                │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │  Cache   │  │Analytics │  │  Search  │  │Notification│     │
│  │          │  │          │  │  Index   │  │  Service  │     │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘      │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                    │
│  │ Logging  │  │Validation│  │Accessibility│                   │
│  │          │  │          │  │          │                    │
│  └──────────┘  └──────────┘  └──────────┘                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                  BLOCKCHAIN LAYER                               │
│                                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │         Stacks Blockchain (Bitcoin L2)         │            │
│  │                                                │            │
│  │  ┌──────────────────────────────────────────┐ │            │
│  │  │   knowledge-registry.clar                │ │            │
│  │  │                                          │ │            │
│  │  │  • register-resource                    │ │            │
│  │  │  • tip-resource                         │ │            │
│  │  │  • add-review                           │ │            │
│  │  │  • increment-download                   │ │            │
│  │  │  • get-resource                         │ │            │
│  │  │  • get-user-reputation                  │ │            │
│  │  └──────────────────────────────────────────┘ │            │
│  └────────────────────────────────────────────────┘            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   STORAGE LAYER                                 │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                    │
│  │  IPFS    │  │  Pinata  │  │  Gaia    │                    │
│  │          │  │          │  │          │                    │
│  └──────────┘  └──────────┘  └──────────┘                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagrams

### 1. Resource Upload Flow

```
User
  │
  ├─► Select File
  │
  ├─► Fill Metadata (Title, Description, Category)
  │
  ▼
UploadModal Component
  │
  ├─► Validate File (size, type)
  │
  ├─► POST /api/upload
  │     │
  │     ├─► Upload to IPFS/Pinata
  │     │
  │     └─► Return IPFS Hash
  │
  ├─► useContract.registerResource()
  │     │
  │     ├─► Call knowledge-registry.clar
  │     │
  │     ├─► Store metadata on-chain
  │     │
  │     └─► Return Resource ID
  │
  ├─► Show Success Toast
  │
  └─► Redirect to Resource Detail
```

### 2. Tipping Flow

```
User (on Resource Detail Page)
  │
  ├─► Click "Tip" Button
  │
  ▼
TipButton Component
  │
  ├─► Enter Amount (STX)
  │
  ├─► useContract.tipResource(resourceId, amount)
  │     │
  │     ├─► Open Stacks Wallet
  │     │
  │     ├─► User Confirms Transaction
  │     │
  │     ├─► Call tip-resource in contract
  │     │     │
  │     │     ├─► Transfer STX to uploader (95%)
  │     │     │
  │     │     ├─► Transfer platform fee (5%)
  │     │     │
  │     │     ├─► Update resource.total-tips
  │     │     │
  │     │     └─► Update user reputation
  │     │
  │     └─► Return Transaction ID
  │
  ├─► Show Success Toast
  │
  ├─► Update UI (new tip amount)
  │
  └─► Send Notification to Uploader
```

### 3. Review Submission Flow

```
User (on Resource Detail Page)
  │
  ├─► Select Rating (1-5 stars)
  │
  ├─► Write Comment
  │
  ├─► Click "Submit Review"
  │
  ▼
Review Form
  │
  ├─► Validate Input
  │     │
  │     ├─► Rating: 1-5
  │     │
  │     └─► Comment: 10-500 chars
  │
  ├─► useContract.addReview(resourceId, rating, comment)
  │     │
  │     ├─► Call add-review in contract
  │     │     │
  │     │     ├─► Check: user hasn't reviewed
  │     │     │
  │     │     ├─► Store review on-chain
  │     │     │
  │     │     ├─► Update resource rating
  │     │     │
  │     │     └─► Return Review ID
  │     │
  │     └─► Return Success
  │
  ├─► Fetch Updated Reviews
  │
  ├─► Show Success Toast
  │
  └─► Display New Review
```

### 4. Search Flow

```
User (on Resources Page)
  │
  ├─► Type Search Query
  │
  ▼
SearchBar Component
  │
  ├─► useDebounce(query, 500ms)
  │
  ├─► Select Category (optional)
  │
  ├─► Click "Search"
  │
  ▼
Search Handler
  │
  ├─► GET /api/resources?query=...&category=...
  │     │
  │     ├─► Check Cache
  │     │     │
  │     │     ├─► Cache Hit → Return Cached Results
  │     │     │
  │     │     └─► Cache Miss → Continue
  │     │
  │     ├─► Query Search Index
  │     │
  │     ├─► Filter by Category
  │     │
  │     ├─► Sort Results
  │     │
  │     ├─► Paginate
  │     │
  │     └─► Return Results
  │
  ├─► Update Resource Grid
  │
  └─► Track Analytics (search_performed)
```

---

## Component Hierarchy

```
App
├── ErrorBoundary
│   └── Layout
│       ├── NavBar
│       │   ├── Logo
│       │   ├── Navigation Links
│       │   └── ConnectWallet
│       │       └── useStacksAuth
│       │
│       ├── Main Content
│       │   ├── Home Page
│       │   │   ├── Hero
│       │   │   ├── FeatureCard (x3)
│       │   │   └── Footer
│       │   │
│       │   ├── Resources Page
│       │   │   ├── SearchBar
│       │   │   ├── ResourceCard (xN)
│       │   │   └── Pagination
│       │   │
│       │   ├── Resource Detail Page
│       │   │   ├── Resource Info
│       │   │   ├── TipButton
│       │   │   ├── Rating Display
│       │   │   ├── Review Form
│       │   │   │   └── Rating Input
│       │   │   └── ReviewCard (xN)
│       │   │
│       │   ├── Profile Page
│       │   │   ├── StatCard (x4)
│       │   │   └── ResourceCard (xN)
│       │   │
│       │   ├── Leaderboard Page
│       │   │   └── Leaderboard Table
│       │   │
│       │   └── Analytics Page
│       │       ├── StatCard (x4)
│       │       ├── Category Chart
│       │       └── Activity Feed
│       │
│       └── Footer
│
└── Toast Container
    └── Toast (xN)
```

---

## State Management

### Global State
- **User Authentication** (useStacksAuth)
  - userData
  - isSignedIn
  - signIn()
  - signOut()

- **Notifications** (notificationService)
  - notifications[]
  - notify()
  - markAsRead()

- **Toast Messages** (useToast)
  - toasts[]
  - showToast()
  - removeToast()

### Local State (per page/component)
- Resources list
- Current page
- Search filters
- Loading states
- Error states

### Persistent State (localStorage)
- User preferences
- Recent searches
- Cached data

---

## Security Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      SECURITY LAYERS                            │
│                                                                 │
│  Layer 1: Network Security                                     │
│  ┌──────────────────────────────────────────────────┐          │
│  │  • HTTPS Only                                    │          │
│  │  • CSP Headers                                   │          │
│  │  • CORS Configuration                            │          │
│  └──────────────────────────────────────────────────┘          │
│                                                                 │
│  Layer 2: Application Security                                 │
│  ┌──────────────────────────────────────────────────┐          │
│  │  • Rate Limiting (10 req/min)                   │          │
│  │  • Input Validation                              │          │
│  │  • XSS Prevention                                │          │
│  │  • SQL Injection Prevention (N/A - blockchain)   │          │
│  └──────────────────────────────────────────────────┘          │
│                                                                 │
│  Layer 3: Authentication                                       │
│  ┌──────────────────────────────────────────────────┐          │
│  │  • Stacks Wallet Authentication                  │          │
│  │  • Signature Verification                        │          │
│  │  • Session Management                            │          │
│  └──────────────────────────────────────────────────┘          │
│                                                                 │
│  Layer 4: Smart Contract Security                             │
│  ┌──────────────────────────────────────────────────┐          │
│  │  • Access Control (tx-sender checks)             │          │
│  │  • Input Validation (asserts!)                   │          │
│  │  • Reentrancy Protection                         │          │
│  │  • Integer Overflow Protection (Clarity safe)    │          │
│  └──────────────────────────────────────────────────┘          │
│                                                                 │
│  Layer 5: Data Security                                        │
│  ┌──────────────────────────────────────────────────┐          │
│  │  • IPFS Content Addressing                       │          │
│  │  • On-chain Metadata Verification                │          │
│  │  • Immutable Storage                             │          │
│  └──────────────────────────────────────────────────┘          │
└─────────────────────────────────────────────────────────────────┘
```

---

## Performance Optimizations

### Frontend
- **Code Splitting:** Dynamic imports for routes
- **Image Optimization:** Next.js Image component
- **Lazy Loading:** Components loaded on demand
- **Memoization:** React.memo for expensive components
- **Debouncing:** Search input debounced (500ms)

### Backend
- **Caching:** In-memory cache with TTL
- **Pagination:** Limit results per page (12)
- **Indexing:** Search index for fast queries
- **Compression:** Gzip compression enabled

### Blockchain
- **Batch Operations:** Group multiple reads
- **Optimistic Updates:** Update UI before confirmation
- **Transaction Queuing:** Queue pending transactions

---

## Deployment Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         PRODUCTION                              │
│                                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │              Vercel Edge Network               │            │
│  │                                                │            │
│  │  ┌──────────────────────────────────────────┐ │            │
│  │  │         Next.js Application              │ │            │
│  │  │                                          │ │            │
│  │  │  • Server Components                    │ │            │
│  │  │  • API Routes                           │ │            │
│  │  │  • Static Assets                        │ │            │
│  │  └──────────────────────────────────────────┘ │            │
│  └────────────────────────────────────────────────┘            │
│                         │                                       │
│                         ▼                                       │
│  ┌────────────────────────────────────────────────┐            │
│  │           Stacks Blockchain Network            │            │
│  │                                                │            │
│  │  • Mainnet / Testnet                          │            │
│  │  • Smart Contracts                            │            │
│  │  • Transaction Processing                     │            │
│  └────────────────────────────────────────────────┘            │
│                         │                                       │
│                         ▼                                       │
│  ┌────────────────────────────────────────────────┐            │
│  │              Storage Services                  │            │
│  │                                                │            │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐   │            │
│  │  │  IPFS    │  │  Pinata  │  │  Gaia    │   │            │
│  │  └──────────┘  └──────────┘  └──────────┘   │            │
│  └────────────────────────────────────────────────┘            │
└─────────────────────────────────────────────────────────────────┘
```

---

## Technology Stack Details

### Frontend
- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript 5
- **State:** React Hooks + Context
- **Forms:** Native HTML5 + Validation

### Backend
- **Runtime:** Node.js 20
- **API:** Next.js API Routes
- **Validation:** Custom validators
- **Caching:** In-memory cache
- **Logging:** Custom logger

### Blockchain
- **Network:** Stacks (Bitcoin L2)
- **Language:** Clarity
- **SDK:** @stacks/connect, @stacks/transactions
- **Wallet:** Leather, Xverse

### Storage
- **Files:** IPFS / Pinata
- **Metadata:** On-chain (Stacks)
- **Cache:** In-memory

### DevOps
- **CI/CD:** GitHub Actions
- **Hosting:** Vercel
- **Containers:** Docker
- **Testing:** Jest, Playwright
- **Linting:** ESLint, Prettier

---

## Scalability Considerations

### Horizontal Scaling
- Stateless API design
- CDN for static assets
- Multiple blockchain nodes

### Vertical Scaling
- Optimized queries
- Efficient caching
- Code splitting

### Database Scaling (Future)
- Off-chain indexer
- PostgreSQL for metadata
- Redis for caching

---

**This architecture supports 10,000+ users and 100,000+ resources!** 🚀
