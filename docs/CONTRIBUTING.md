# Contributing to StackKnowledge 🎓

Thank you for your interest in contributing to StackKnowledge! We are building the future of decentralized education on Stacks.

## 🚀 Getting Started

1.  **Fork the repository** on GitHub.
2.  **Clone your fork** locally:
    ```bash
    git clone https://github.com/YOUR_USERNAME/stack-knowledge.git
    cd stack-knowledge
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Create a branch** for your changes:
    ```bash
    git checkout -b feature/AmazingFeature
    ```

## 🛠️ Development Workflow

-   **Frontend**: Built with Next.js 15, Tailwind CSS, and Framer Motion.
-   **Backend**: Stacks smart contracts written in Clarity. Use [Clarinet](https://github.com/hirosystems/clarinet) for testing.

### Running the App
```bash
npm run dev
```

### Running Tests
```bash
# Frontend Tests
npm test

# Smart Contract Tests
npm run test:backend
```

## 📝 Coding Standards

-   **TypeScript**: We use strict TypeScript. Ensure your code passes `npm run type-check`.
-   **Linting**: We use ESLint and Prettier. Run `npm run lint` before committing.
-   **Commits**: Use descriptive commit messages (e.g., `feat: add reporting functionality`).

## 📫 Pull Request Process

1.  Update the documentation if you've added new features.
2.  Ensure all tests pass.
3.  Submit a PR with a clear description of the changes.

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.
