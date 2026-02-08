'use client';

import React from 'react';
import { useStacksAuth } from '@/hooks/use-stacks-auth';
import Button from './Button';

export default function ConnectWallet() {
    const { userData, isSignedIn, signIn, signOut } = useStacksAuth();

    if (isSignedIn && userData) {
        const address = userData.profile.stxAddress.testnet; // Default to testnet
        return (
            <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-zinc-600 hidden sm:block">
                    {address.slice(0, 6)}...{address.slice(-4)}
                </span>
                <Button variant="outline" size="sm" onClick={signOut} className="text-red-500 border-red-200 hover:bg-red-50">
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
