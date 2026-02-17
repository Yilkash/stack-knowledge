'use client';

import { useStacksAuth } from '@/hooks/use-stacks-auth';
import Button from './Button';
import { formatAddress } from '@/lib/utils';

/**
 * Wallet connection component that handles sign-in/sign-out logic.
 * Displays the user's STX address and a sign-out button when authenticated.
 */
export default function ConnectWallet() {
    const { userData, isSignedIn, signIn, signOut } = useStacksAuth();

    if (isSignedIn && userData) {
        const address = userData.profile.stxAddress.testnet; // Default to testnet
        return (
            <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hidden sm:block">
                    {formatAddress(address)}
                </span>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={signOut}
                    className="text-red-500 border-red-200 hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-900/20"
                >
                    Sign Out
                </Button>
            </div>
        );
    }

    return (
        <Button onClick={signIn} className="shadow-lg hover:shadow-blue-500/30">
            Connect Wallet
        </Button>
    );
}
