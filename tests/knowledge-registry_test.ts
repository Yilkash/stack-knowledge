
import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v1.4.2/index.ts';
import { assertEquals } from 'https://deno.land/std@0.170.0/testing/asserts.ts';

Clarinet.test({
    name: "Ensure that users can register a resource",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const deployer = accounts.get("deployer")!;
        const wallet1 = accounts.get("wallet_1")!;

        let block = chain.mineBlock([
            Tx.contractCall("knowledge-registry", "register-resource", [
                types.utf8("Intro to CS"),
                types.utf8("Best CS course"),
                types.utf8("ipfs://QmHash")
            ], wallet1.address)
        ]);

        assertEquals(block.receipts.length, 1);
        assertEquals(block.height, 2);

        block.receipts[0].result.expectOk().expectUint(1);
    },
});

Clarinet.test({
    name: "Ensure that users can tip a resource and reputation updates",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const deployer = accounts.get("deployer")!;
        const wallet1 = accounts.get("wallet_1")!;
        const wallet2 = accounts.get("wallet_2")!;

        // 1. Register resource
        let block = chain.mineBlock([
            Tx.contractCall("knowledge-registry", "register-resource", [
                types.utf8("Pro Tip PDF"),
                types.utf8("Best content"),
                types.utf8("ipfs://QmHash")
            ], wallet1.address)
        ]);
        block.receipts[0].result.expectOk().expectUint(1);

        // 2. Tip the resource
        block = chain.mineBlock([
            Tx.contractCall("knowledge-registry", "tip-resource", [
                types.uint(1),
                types.uint(100)
            ], wallet2.address)
        ]);

        block.receipts[0].result.expectOk().expectBool(true);

        // 3. Verify reputation updated
        let reputation = chain.callReadOnlyFn(
            "knowledge-registry",
            "get-user-reputation",
            [types.principal(wallet1.address)],
            deployer.address
        );
        reputation.result.expectUint(1);
    },
});
