"use client";

import NavBar from '@/components/NavBar';
import StatCard from '@/components/StatCard';
import { useStacksAuth } from '@/hooks/use-stacks-auth';
import { Coins, BookOpen, Trophy, Users } from 'lucide-react';

export default function ProfilePage() {
    const { userData, isSignedIn } = useStacksAuth();

    if (!isSignedIn) return <div className="p-20 text-center">Please sign in.</div>;

    const address = userData?.profile?.stxAddress?.testnet || "Unknown";

    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
            <NavBar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="flex items-end gap-6">
                        <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center text-4xl font-black text-white shadow-2xl">
                            {address.slice(2, 4).toUpperCase()}
                        </div>
                        <div>
                            <h1 className="text-4xl font-black tracking-tighter">{address.slice(0, 10)}...{address.slice(-6)}</h1>
                            <div className="flex gap-4 mt-2">
                                <p className="text-xs font-bold uppercase tracking-widest"><span className="text-primary">124</span> Followers</p>
                                <p className="text-xs font-bold uppercase tracking-widest"><span className="text-primary">89</span> Following</p>
                            </div>
                        </div>
                    </div>
                    <button className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-2xl font-black text-sm uppercase tracking-tighter hover:scale-105 transition-transform">
                        Edit Profile
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard label="Reputation" value="450" icon={<Trophy size={20} />} />
                    <StatCard label="Followers" value="124" icon={<Users size={20} />} trend={{ value: 15, isPositive: true }} />
                    <StatCard label="Tips Earned" value="1.2k" icon={<Coins size={20} />} />
                    <StatCard label="Resources" value="12" icon={<BookOpen size={20} />} />
                </div>
            </div>
        </main>
    );
}
