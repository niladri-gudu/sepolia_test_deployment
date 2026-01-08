# Counter DApp - Sepolia Testnet

A simple decentralized counter application deployed on the Sepolia testnet. This project demonstrates basic smart contract interaction using React, Ethers.js, and RainbowKit for wallet connection.

## Overview

This is a learning project that implements a basic counter smart contract with increment functionality. Users can connect their wallet and interact with the contract deployed on Sepolia testnet.

## Features

- 🔗 Wallet connection using RainbowKit and WalletConnect
- ➕ Increment counter
- 🔍 View current counter value
- 📱 Responsive design

## Tech Stack

- **Frontend**: Next.js
- **Web3 Libraries**: Ethers.js, RainbowKit, Wagmi
- **Smart Contract**: Solidity
- **Blockchain**: Sepolia Testnet
- **Development**: Hardhat

## Project Structure

```
sepolia_test_deployment/
├── blockchain/           # Smart contract and deployment scripts
│   ├── contracts/       # Solidity contracts
│   ├── scripts/         # Deployment scripts
│   └── .env            # Blockchain configuration
├── app/                # Next.js application pages
├── components/         # React components
├── .env                # Frontend configuration
└── package.json
```

## Prerequisites

- Node.js (v16 or higher)
- pnpm (v8 or higher)
- MetaMask or another Web3 wallet
- Sepolia testnet ETH (get from [Sepolia faucet](https://sepoliafaucet.com/))

## Installation

1. Clone the repository:
```bash
git clone https://github.com/niladri-gudu/sepolia_test_deployment.git
cd sepolia_test_deployment
```

2. Install dependencies for the frontend:
```bash
pnpm install
```

3. Install dependencies for the blockchain folder:
```bash
cd blockchain
pnpm install
cd ..
```

## Configuration

### Frontend Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
```

To get your WalletConnect Project ID:
1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Create a new project
3. Copy the Project ID

### Blockchain Environment Variables

Create a `.env` file in the `blockchain/` directory:

```env
PRIVATE_KEY=your_wallet_private_key
SEPOLIA_RPC_URL=your_alchemy_sepolia_rpc_url
```

To get your Alchemy RPC URL:
1. Sign up at [Alchemy](https://www.alchemy.com/)
2. Create a new app on Sepolia network
3. Copy the HTTPS RPC URL

**⚠️ Security Warning**: Never commit your `.env.local` or `blockchain/.env` files or share your private keys. These files are already included in `.gitignore`.

## Running the Application

1. Start the frontend development server:
```bash
pnpm dev
```

2. Open your browser and navigate to `http://localhost:3000`

3. Connect your wallet using the RainbowKit interface

4. Interact with the counter using the increment button

## Smart Contract Deployment

If you want to deploy your own instance of the contract:

1. Navigate to the blockchain folder:
```bash
cd blockchain
```

2. Compile the contract:
```bash
npx hardhat compile
```

3. Deploy to Sepolia:
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

4. Update the contract address in your frontend code

## Learning Resources

This project was created for learning purposes and demonstrates:
- Smart contract development with Solidity
- Deploying contracts to testnets
- Frontend integration with Web3
- Wallet connection handling
- Transaction signing and sending

## Acknowledgments

- [Hardhat](https://hardhat.org/) - Ethereum development environment
- [RainbowKit](https://www.rainbowkit.com/) - Wallet connection UI
- [Alchemy](https://www.alchemy.com/) - Blockchain infrastructure
- [Sepolia Testnet](https://sepolia.dev/) - Ethereum testnet

---

**Note**: This is a learning project deployed on a testnet. Do not use this code in production without proper security audits and testing.
