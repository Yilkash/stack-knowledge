# Deployment Guide

## Vercel Deployment (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel --prod`

## Docker Deployment

1. Build image: `docker build -t stackknowledge .`
2. Run container: `docker run -p 3000:3000 stackknowledge`

## Environment Variables

Required variables:
- `NEXT_PUBLIC_NETWORK`: testnet or mainnet
- `NEXT_PUBLIC_CONTRACT_ADDRESS`: Deployed contract address
- `NEXT_PUBLIC_CONTRACT_NAME`: Contract name
- `NEXT_PUBLIC_OPENAI_API_KEY`: OpenAI API key
- `NEXT_PUBLIC_PINATA_API_KEY`: Pinata API key

## Smart Contract Deployment

1. Update `Clarinet.toml` with your settings
2. Test: `clarinet test`
3. Deploy: `clarinet deploy --testnet`

## Post-Deployment

1. Verify contract on explorer
2. Test wallet connection
3. Upload test resource
4. Monitor analytics
