import {
    makeContractCall,
    AnchorMode,
    PostConditionMode,
    uintCV,
    makeSTXTokenTransfer,
    makeRandomPrivKey,
    getAddressFromPrivateKey
} from '@stacks/transactions';
import { STACKS_MAINNET } from '@stacks/network';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env'), override: true });

const HIRO_API = 'https://api.mainnet.hiro.so';
const PRIVATE_KEY = process.env.PRIVATE_KEY;
if (!PRIVATE_KEY) {
    console.error("❌ PRIVATE_KEY is not defined in .env");
    process.exit(1);
}

const MAIN_ADDRESS = getAddressFromPrivateKey(PRIVATE_KEY, 'mainnet');
const CONTRACT_ADDRESS = 'SPMY0KQSPCPP4PBDY6ZDZ315C7P1SQKGMDZETJ7M';
const CONTRACT_NAME = 'knowledge-registry-v2';

const ARMY_SIZE = 300;
const TX_HEX_FILE = '/tmp/titan_sk_tx.hex';
const BRIDGE = 'scripts/.titan_bridge.py';
const ARMY_FILE = 'scripts/.titan_army.json';

function makeKey() {
    const pk = makeRandomPrivKey();
    const address = getAddressFromPrivateKey(pk, 'mainnet');
    return { pk, address };
}

function pyGet(url: string, retries = 5): any {
    for (let i = 0; i < retries; i++) {
        try {
            const out = execSync(`python3 ${BRIDGE} "${url}" GET`, { timeout: 15000 }).toString();
            let parsed = JSON.parse(out);
            // Handle hex balances from v2 API
            if (parsed.balance && parsed.balance.startsWith('0x')) {
                parsed.balance = parseInt(parsed.balance, 16).toString();
            }
            return parsed;
        } catch { execSync('sleep 2'); }
    }
    return {};
}

function pyBroadcast(hex: string): any {
    try {
        fs.writeFileSync(TX_HEX_FILE, hex, 'utf-8');
        return JSON.parse(execSync(`python3 ${BRIDGE} "${HIRO_API}/v2/transactions" BROADCAST ${TX_HEX_FILE}`, { timeout: 15000 }).toString());
    } catch { return { error: 'bridge-broadcast-failed' }; }
}

async function sleep(ms: number) {
    return new Promise(r => setTimeout(r, ms));
}

async function main() {
    console.log("🔥 TITAN OFFENSIVE: AUTO-RECOVERY MODE 🛰️ (STACK-KNOWLEDGE)");
    console.log(`📡 Orchestrator Wallet: ${MAIN_ADDRESS}`);

    let army: any[] = [];
    if (fs.existsSync(ARMY_FILE)) {
        army = JSON.parse(fs.readFileSync(ARMY_FILE, 'utf-8'));
        console.log(`⚔️ Reloaded Titan Army (${army.length} wallets)`);
    } else {
        console.log(`⚔️ Recruiting Titan Army (${ARMY_SIZE} wallets)...`);
        for (let i = 0; i < ARMY_SIZE; i++) { army.push(makeKey()); }
        fs.writeFileSync(ARMY_FILE, JSON.stringify(army, null, 2));
    }

    const AGGRESSIVE_PASSES = 50;  // BURN MODE: Run 50 passes to consume all STX today
    let passCount = 0;

    while (true) {
        passCount++;
        let stats = { funded: 0, triggered: 0, pending: 0 };

        let nonceData = pyGet(`${HIRO_API}/extended/v1/address/${MAIN_ADDRESS}/nonces`);
        let mainNonce = nonceData.possible_next_nonce ?? 0;
        let mainSTX = parseInt(pyGet(`${HIRO_API}/extended/v1/address/${MAIN_ADDRESS}/stx`).balance ?? "0");

        const mode = passCount <= AGGRESSIVE_PASSES ? "🔥 AGGRESSIVE" : "🛡️ ECONOMY";
        console.log(`\n[Pass #${passCount}] ${mode} MODE`);
        console.log(`📡 Wallet: ${mainSTX} microSTX | Nonce: ${mainNonce}`);

        for (let i = 0; i < army.length; i++) {
            const user = army[i];
            const bal = parseInt(pyGet(`${HIRO_API}/extended/v1/address/${user.address}/stx`).balance ?? "0");

            if (bal < 5000) {
                // Need funding
                if (mainSTX < 40000) {
                    stats.pending++;
                    continue;
                }

                try {
                    const tx = await makeSTXTokenTransfer({
                        recipient: user.address, amount: 25000,
                        senderKey: PRIVATE_KEY!, nonce: mainNonce, fee: 8000,
                        anchorMode: AnchorMode.Any, network: STACKS_MAINNET
                    } as any);
                    const res = pyBroadcast(tx.serialize());
                    if (!res.error) {
                        mainNonce++; mainSTX -= 33000;
                        process.stdout.write(`💸`);
                    } else { process.stdout.write(`❌`); }
                } catch { process.stdout.write(`⚠️`); }
                await sleep(1000);
            } else {
                stats.funded++;
                // Try interaction
                try {
                    const userNonce = pyGet(`${HIRO_API}/extended/v1/address/${user.address}/nonces`).possible_next_nonce ?? 0;
                    const tx = await makeContractCall({
                        contractAddress: CONTRACT_ADDRESS, contractName: CONTRACT_NAME,
                        functionName: 'record-view', functionArgs: [uintCV(1)],
                        senderKey: user.pk, nonce: userNonce, fee: 2500,
                        anchorMode: AnchorMode.Any, postConditionMode: PostConditionMode.Allow,
                        network: STACKS_MAINNET
                    } as any);
                    const res = pyBroadcast(tx.serialize());
                    if (!res.error) { stats.triggered++; process.stdout.write(`O`); }
                    else { process.stdout.write(`X`); }
                } catch { process.stdout.write(`!`); }
                await sleep(1500);
            }
        }

        console.log(`\n🏆 Pass #${passCount} Complete: ${stats.funded} Funded, ${stats.triggered} Interacted, ${stats.pending} Waiting for Funds.`);

        if (passCount < AGGRESSIVE_PASSES) {
            console.log(`⚡ BURN MODE: Sleeping 60s before next pass (${AGGRESSIVE_PASSES - passCount} passes remaining)...`);
            await sleep(60000); // 60 seconds - maximum burn rate
        } else {
            console.log(`🛡️ Economy phase activated. Sleeping 24 HOURS until next daily pass...`);
            await sleep(86400000); // 24 hours
        }
    }
}

main().catch(console.error);
