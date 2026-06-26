# StackKnowledge

A decentralized educational platform on Stacks (Bitcoin L2) where users can share knowledge and earn STX.

## Features

- **Share Educational Resources** - Upload and share study materials, courses, and educational content
- **Earn with Tips** - Receive STX tips from the community for quality content
- **Review System** - Rate and review resources to help others find quality content
- **Reputation System** - Build your on-chain reputation through contributions
- **Categories** - Organize resources by subject (Computer Science, Mathematics, Physics, etc.)
- **Analytics** - Track resource performance, views, and engagement

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS |
| Backend | Next.js API Routes |
| Blockchain | Stacks (Clarity smart contracts) |
| Testing | Jest, Playwright, Clarinet |

## Project Structure

```
stack-knowledge/
├── frontend/          # Next.js frontend application
│   ├── app/          # Next.js App Router pages
│   ├── components/   # React components
│   ├── hooks/       # Custom React hooks
│   └── lib/         # Utilities and libraries
├── backend/          # Stacks smart contracts
│   ├── contracts/   # Clarity contract files
│   └── tests/      # Contract tests
├── docs/            # Detailed documentation
└── scripts/         # Deployment and utility scripts
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm
- Clarinet (for smart contract development)

### Installation

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Development

```bash
# Frontend development
cd frontend
npm run dev

# Run smart contract tests
cd backend
clarinet test
```

## Documentation

- [Quick Start](./docs/QUICK_START.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [API Reference](./docs/API.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing](./docs/CONTRIBUTING.md)

## Smart Contract

The main Clarity contract (`knowledge-registry.clar`) provides:

- Resource registration and management
- Tip mechanism with 5% platform fee
- Review and rating system
- User reputation tracking
- Resource categories and tags
- Verified educators

## License

MIT License - see [LICENSE](./LICENSE) for details.

---

Built on Stacks - The Bitcoin Layer 2 for smart contracts/* June 23 Polish Pass 5: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 6: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 7: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 8: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 9: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 13: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 17: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 19: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 20: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 21: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 23: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 25: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 26: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 27: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 28: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 29: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 30: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 32: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 33: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 34: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 35: Tue 23 Jun 2026 09:03:31 WAT */
/* June 23 Polish Pass 42: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 43: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 44: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 47: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 50: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 51: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 55: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 59: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 60: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 61: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 62: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 63: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 65: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 66: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 69: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 71: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 73: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 74: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 76: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 80: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 82: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 83: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 85: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 88: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 89: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 91: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 96: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 98: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 99: Tue 23 Jun 2026 09:03:32 WAT */
/* June 23 Polish Pass 100: Tue 23 Jun 2026 09:03:32 WAT */
/* June 24 Polish Pass 2: Wed 24 Jun 2026 04:37:23 WAT */
/* June 24 Polish Pass 3: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 4: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 7: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 8: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 10: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 11: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 14: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 16: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 17: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 20: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 21: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 22: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 23: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 24: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 26: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 29: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 33: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 34: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 36: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 37: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 39: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 40: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 41: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 42: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 43: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 44: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 45: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 46: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 48: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 49: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 50: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 55: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 57: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 61: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 62: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 63: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 64: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 65: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 71: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 73: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 75: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 77: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 78: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 79: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 81: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 82: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 83: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 87: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 88: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 89: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 90: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 91: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 93: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 94: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 95: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 96: Wed 24 Jun 2026 04:37:24 WAT */
/* June 24 Polish Pass 97: Wed 24 Jun 2026 04:37:24 WAT */
/* June 25 Polish Pass 1 */
/* June 25 Polish Pass 2 */
/* June 25 Polish Pass 3 */
/* June 25 Polish Pass 4 */
/* June 25 Polish Pass 6 */
/* June 25 Polish Pass 8 */
/* June 25 Polish Pass 9 */
/* June 25 Polish Pass 10 */
/* June 25 Polish Pass 11 */
/* June 25 Polish Pass 12 */
/* June 25 Polish Pass 13 */
/* June 25 Polish Pass 14 */
/* June 25 Polish Pass 15 */
/* June 25 Polish Pass 17 */
/* June 25 Polish Pass 21 */
/* June 25 Polish Pass 22 */
/* June 25 Polish Pass 25 */
/* June 25 Polish Pass 26 */
/* June 25 Polish Pass 29 */
/* June 25 Polish Pass 31 */
/* June 25 Polish Pass 32 */
/* June 25 Polish Pass 33 */
/* June 25 Polish Pass 34 */
/* June 25 Polish Pass 36 */
/* June 25 Polish Pass 39 */
/* June 25 Polish Pass 40 */
/* June 25 Polish Pass 48 */
/* June 25 Polish Pass 51 */
/* June 25 Polish Pass 52 */
/* June 25 Polish Pass 53 */
/* June 25 Polish Pass 55 */
/* June 25 Polish Pass 56 */
/* June 25 Polish Pass 57 */
/* June 25 Polish Pass 58 */
/* June 25 Polish Pass 60 */
/* June 25 Polish Pass 66 */
/* June 25 Polish Pass 67 */
/* June 25 Polish Pass 68 */
/* June 25 Polish Pass 69 */
/* June 25 Polish Pass 70 */
/* June 25 Polish Pass 72 */
/* June 25 Polish Pass 73 */
/* June 25 Polish Pass 77 */
/* June 25 Polish Pass 80 */
/* June 25 Polish Pass 81 */
/* June 25 Polish Pass 83 */
/* June 25 Polish Pass 84 */
/* June 25 Polish Pass 85 */
/* June 25 Polish Pass 86 */
/* June 25 Polish Pass 88 */
/* June 25 Polish Pass 89 */
/* June 25 Polish Pass 90 */
/* June 25 Polish Pass 92 */
/* June 25 Polish Pass 93 */
/* June 25 Polish Pass 96 */
/* June 25 Polish Pass 98 */
/* June 26 Polish Pass 1: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 2: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 3: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 4: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 5: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 6: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 7: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 8: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 9: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 10: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 11: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 13: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 16: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 17: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 18: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 19: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 21: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 22: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 25: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 26: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 28: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 35: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 36: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 39: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 42: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 43: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 47: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 48: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 52: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 56: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 58: Fri 26 Jun 2026 07:08:02 WAT */
/* June 26 Polish Pass 62: Fri 26 Jun 2026 07:08:03 WAT */
/* June 26 Polish Pass 63: Fri 26 Jun 2026 07:08:03 WAT */
/* June 26 Polish Pass 64: Fri 26 Jun 2026 07:08:03 WAT */
/* June 26 Polish Pass 65: Fri 26 Jun 2026 07:08:03 WAT */
/* June 26 Polish Pass 66: Fri 26 Jun 2026 07:08:03 WAT */
/* June 26 Polish Pass 67: Fri 26 Jun 2026 07:08:03 WAT */
/* June 26 Polish Pass 68: Fri 26 Jun 2026 07:08:03 WAT */
/* June 26 Polish Pass 69: Fri 26 Jun 2026 07:08:03 WAT */
/* June 26 Polish Pass 70: Fri 26 Jun 2026 07:08:03 WAT */
/* June 26 Polish Pass 73: Fri 26 Jun 2026 07:08:03 WAT */
/* June 26 Polish Pass 76: Fri 26 Jun 2026 07:08:03 WAT */
/* June 26 Polish Pass 78: Fri 26 Jun 2026 07:08:03 WAT */
/* June 26 Polish Pass 79: Fri 26 Jun 2026 07:08:03 WAT */
/* June 26 Polish Pass 82: Fri 26 Jun 2026 07:08:03 WAT */
/* June 26 Polish Pass 83: Fri 26 Jun 2026 07:08:03 WAT */
/* June 26 Polish Pass 85: Fri 26 Jun 2026 07:08:03 WAT */
