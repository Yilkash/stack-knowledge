"use client";

import NavBar from '@/components/NavBar';
import StatCard from '@/components/StatCard';
import { useStacksAuth } from '@/hooks/use-stacks-auth';
import { Coins, BookOpen, Trophy, Send } from 'lucide-react';

export default function ProfilePage() {
    const { userData, isSignedIn } = useStacksAuth();

    if (!isSignedIn) return <div className="p-20 text-center">Please sign in.</div>;

    const address = userData?.profile?.stxAddress?.testnet || "Unknown";

    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
            <NavBar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="flex items-end gap-6 mb-12">
                    <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center text-4xl font-black text-white shadow-2xl">
                        {address.slice(2, 4).toUpperCase()}
                    </div>
                    <div>
                        <h1 className="text-4xl font-black tracking-tighter">{address.slice(0, 10)}...{address.slice(-6)}</h1>
                        <p className="text-muted-foreground font-medium">Community Member since Feb 2026</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard label="Reputation" value="450" icon={<Trophy size={20} />} trend={{ value: 12, isPositive: true }} />
                    <StatCard label="Uploads" value="12" icon={<BookOpen size={20} />} />
                    <StatCard label="Tips Earned" value="1.2k" icon={<Coins size={20} />} trend={{ value: 5, isPositive: true }} />
                    <StatCard label="Tips Given" value="340" icon={<Send size={20} />} />
                </div>
            </div>
        </main>
    );
}
