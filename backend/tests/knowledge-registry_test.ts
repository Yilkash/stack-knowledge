import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v1.0.0/index.ts';
import { assertEquals } from 'https://deno.land/std@0.90.0/testing/asserts.ts';

/**
 * Test the resource registration flow.
 * Ensures that a new resource can be added to the registry and returns the expected ID.
 */
Clarinet.test({
    name: "Can register a new resource",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const deployer = accounts.get('deployer')!;

        let block = chain.mineBlock([
            Tx.contractCall('knowledge-registry', 'register-resource', [
                types.utf8("Introduction to Calculus"),
                types.utf8("Comprehensive calculus notes"),
                types.utf8("ipfs://QmTest123"),
                types.utf8("Mathematics")
            ], deployer.address)
        ]);

        block.receipts[0].result.expectOk().expectUint(1);
        assertEquals(block.receipts[0].result, '(ok u1)');
    },
});

Clarinet.test({
    name: "Can tip a resource",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const deployer = accounts.get('deployer')!;
        const wallet1 = accounts.get('wallet_1')!;

        let block = chain.mineBlock([
            Tx.contractCall('knowledge-registry', 'register-resource', [
                types.utf8("Test Resource"),
                types.utf8("Test Description"),
                types.utf8("ipfs://test"),
                types.utf8("Computer Science")
            ], deployer.address),
            Tx.contractCall('knowledge-registry', 'tip-resource', [
                types.uint(1),
                types.uint(1000000)
            ], wallet1.address)
        ]);

        block.receipts[1].result.expectOk().expectBool(true);
    },
});

Clarinet.test({
    name: "Can add review to resource",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const deployer = accounts.get('deployer')!;
        const wallet1 = accounts.get('wallet_1')!;

        let block = chain.mineBlock([
            Tx.contractCall('knowledge-registry', 'register-resource', [
                types.utf8("Test Resource"),
                types.utf8("Test Description"),
                types.utf8("ipfs://test"),
                types.utf8("Physics")
            ], deployer.address),
            Tx.contractCall('knowledge-registry', 'add-review', [
                types.uint(1),
                types.uint(5),
                types.utf8("Excellent resource!")
            ], wallet1.address)
        ]);

        block.receipts[1].result.expectOk().expectUint(1);
    },
});
