require('dotenv').config();
const {
    makeContractDeploy,
    broadcastTransaction,
    AnchorMode
} = require('@stacks/transactions');
const { createNetwork, STACKS_MAINNET, STACKS_TESTNET } = require('@stacks/network');
const fs = require('fs');
const path = require('path');

async function deploy() {
    const privateKey = process.env.STX_PRIVATE_KEY;
    if (!privateKey) {
        console.error('Error: STX_PRIVATE_KEY is not defined in .env');
        process.exit(1);
    }

    const isMainnet = process.env.STX_NETWORK === 'mainnet';
    const network = isMainnet ? createNetwork(STACKS_MAINNET) : createNetwork(STACKS_TESTNET);

    const contractName = 'knowledge-registry';
    const contractPath = path.resolve(__dirname, '../contracts/knowledge-registry.clar');

    if (!fs.existsSync(contractPath)) {
        console.error(`Error: Contract file not found at ${contractPath}`);
        process.exit(1);
    }

    const codeBody = fs.readFileSync(contractPath).toString();

    console.log(`Deploying ${contractName} to ${isMainnet ? 'Mainnet' : 'Testnet'}...`);

    try {
        const txOptions = {
            contractName,
            codeBody,
            senderKey: privateKey,
            network,
            anchorMode: AnchorMode.Any,
            postConditionMode: 0x01, // Allow
        };

        const transaction = await makeContractDeploy(txOptions);
        const result = await broadcastTransaction({ transaction, network });

        if (result.error) {
            console.error('Broadcast Error:', result.error);
            if (result.reason) console.error('Reason:', result.reason);
        } else {
            console.log('--- Deployment Successful ---');
            console.log('Transaction ID:', result.txid);
            console.log(`Explorer URL: https://explorer.hiro.so/txid/${result.txid}?chain=${isMainnet ? 'mainnet' : 'testnet'}`);
        }
    } catch (error) {
        console.error('Deployment Failed:', error);
    }
}

deploy();
