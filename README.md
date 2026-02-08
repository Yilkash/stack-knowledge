# StackKnowledge 🎓

![Stacks](https://img.shields.io/badge/Secured_by-Stacks_Bitcoin_L2-7F56D9?style=for-the-badge&logo=stacks)
![Next.js](https://img.shields.io/badge/Built_with-Next.js_14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=for-the-badge&logo=typescript)

**StackKnowledge** is a decentralized "Share-to-Earn" educational platform built on the **Stacks Blockchain**. It incentivizes students to share high-quality academic resources (past questions, handouts) and features an **AI-powered Study Buddy** that provides answers *strictly* based on the uploaded materials.

> **Why Stacks?** We use Stacks to anchor intellectual property and reputation on Bitcoin. Every upload is registered on-chain, and tips are settled in STX (Bitcoin L2).

---

## 🏗️ Architecture

### System Overview
The platform connects a modern Web2 interface with Web3 incentives and AI logic.

```mermaid
graph TD
    User(("👨‍🎓 Student"))
    
    subgraph "Frontend Layer (Next.js)"
        UI["Web Interface"]
        Auth["Stacks Connect Wallet"]
        Chat["AI Chat Interface"]
    end

    subgraph "Smart Contract Layer (Stacks L2)"
        Registry["knowledge-registry.clar"]
        Reputation["Reputation Score"]
        Tipping["STX Tipping Logic"]
    end

    subgraph "AI & Storage Layer"
        Gaia["Decentralized Storage (Gaia/IPFS)"]
        LLM["AI RAG Engine (OpenAI)"]
    end

    User -->|"Connects Wallet"| Auth
    User -->|"Uploads PDF"| UI
    UI -->|"Stores File"| Gaia
    UI -->|"Registers Hash & Metadata"| Registry
    
    User -->|"Tips Uploader (STX)"| Tipping
    Tipping -->|"Updates Score"| Reputation
    
    User -->|"Asks Question"| Chat
    Chat -->|"Retrieves Context"| Gaia
    Chat -->|"Generates Answer"| LLM
```

---

## 🚀 Key Features

### 1. 📚 Share-to-Earn (S2E)
-   **Upload Resources:** Students upload handouts and past exams.
-   **On-Chain Registry:** Resource metadata (Title, Hash, Uploader) is stored permanently in the `knowledge-registry` smart contract.
-   **Earn STX:** Other students can **tip STX** to the uploader if the material helped them study.

### 2. 🤖 Context-Aware AI Tutor
-   **Strict RAG (Retrieval-Augmented Generation):** The AI answers questions *only* using the context from the specific handout you are viewing.
-   **No Hallucinations:** Prevents the AI from making up facts; it must cite the document.

### 3. 🏆 On-Chain Reputation
-   **Verified Contributions:** Your contribution history is public and verifiable on the Stacks blockchain.
-   **Top Contributors:** The contract tracks tip volume and reputation scores.

---

## 🛠️ Technology Stack

| Component | Tech | Description |
| :--- | :--- | :--- |
| **Blockchain** | **Stacks (Clarinet)** | Smart contracts for registry and tipping via `knowledge-registry.clar`. |
| **Frontend** | **Next.js 15 (App Router)** | React framework with Server Components. |
| **Styling** | **Tailwind CSS** | Modern utility-first styling with Glassmorphism UI. |
| **Integration** | **Stacks.js** | Wallet connection (`@stacks/connect`) and transaction handling. |
| **Language** | **TypeScript** | Type-safe development for both frontend and testing. |

---

## ⚡ Getting Started

### Prerequisites
-   Node.js 18+
-   [Clarinet](https://github.com/hirosystems/clarinet) (for smart contracts)
-   Stacks Wallet (Leather or Xverse)

### Installation

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/Yilkash/stack-knowledge.git
    cd stack-knowledge
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    npm install
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

4.  **Run Smart Contract Tests:**
    ```bash
    clarinet test
    ```

---

## 📜 Smart Contract Interface

The `knowledge-registry` contract exposes the following functions:

-   `(register-resource (name (string-utf8 100)) ...)`: Registers a new file.
-   `(tip-resource (resource-id uint) (amount uint))`: Sends STX to the resource owner.
-   `(get-resource (resource-id uint))`: Fetches metadata.
-   `(get-user-reputation (user principal))`: Returns total reputation.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

*Verified on Stacks Testnet* 🟣