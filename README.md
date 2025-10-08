# FOFs DAO Playground

A **Fairly Odd Fellas**-themed DAO Playground.  
This project demonstrates how to use **WalletConnect v2** libraries (`@walletconnect/core`, `@walletconnect/jsonrpc-ws-connection`, `@walletconnect/keyvaluestorage`) to connect wallets, vote on proposals, and persist sessions.

---

## ✨ Features
- 🔌 WalletConnect v2 integration  
- 🗳 On-chain proposal voting playground  
- 🗄 Session persistence with KeyValueStorage  
- 🎨 Fairly Odd Fellas-themed UI and CLI messages  
- 📦 NFT collection integration (CA: `0x049ee6d2249c242611e1b704f0babaa8157d69eb`)  

---

## 📦 Installation
\`\`\`bash
git clone https://github.com/arawrdn/fofs-dao-playground.git
cd fofs-dao-playground
npm install
\`\`\`

---

## 🚀 Usage
\`\`\`bash
npm start
\`\`\`
Runs the DAO Playground locally. Open `http://localhost:3000` to interact.

---

## ⚙️ Setup
- Project ID: **`180a7164cfa9e5388daf1160841f65a0`** (embedded)  
- Make sure your wallet supports WalletConnect v2  
- Connect wallet → view proposals → cast votes  
- Edit proposals in `src/proposals.js`  

---

## 📖 Guide
1. **Connect Wallet**  
   - Start the app with `npm start`  
   - Connect your wallet via WalletConnect v2  
2. **View Proposals**  
   - See demo proposals in `src/proposals.js`  
   - Each proposal has a `title` and `description`  
3. **Vote**  
   - Vote actions are simulated and saved to session storage (`fofs_dao`)  
4. **Persist Session**  
   - Votes and sessions persist via KeyValueStorage even after restarting  

---

## 📝 Notes
- **Deployer Address**: 0x2A6b5204B83C7619c90c4EB6b5365AA0b7d912F7  
- **NFT Collection**: 0x049ee6d2249c242611e1b704f0babaa8157d69eb  
- **GitHub Repo**: https://github.com/arawrdn/fofs-dao-playground  
- **WalletConnect Project ID**: 180a7164cfa9e5388daf1160841f65a0  
