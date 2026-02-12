'use client';

import { useState, useEffect, useCallback } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { formatAddress, formatSTX } from '@/lib/utils';
import { Leader } from '@/types';

export default function LeaderboardPage() {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [sortBy, setSortBy] = useState<'reputation' | 'uploads' | 'tips'>('reputation');
  const [loading, setLoading] = useState(true);

  const fetchLeaderboard = useCallback(async () => {
    setLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 0));

    // TODO: Fetch from blockchain
    const mockLeaders = Array.from({ length: 10 }, (_, i) => ({
      rank: i + 1,
      address: `ST${Math.random().toString(36).substring(2, 15).toUpperCase()}`,
      reputation: 500 - i * 50,
      totalUploads: 50 - i * 5,
      totalTips: 10000000 - i * 1000000
    }));
    setLeaders(mockLeaders);
    setLoading(false);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      await fetchLeaderboard();
    };
    loadData();
  }, [fetchLeaderboard, sortBy]);

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950/50">
      <NavBar />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">Leaderboard 🏆</h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            Recognizing the top contributors and knowledge sharers in the Stacks ecosystem.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(['reputation', 'uploads', 'tips'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setSortBy(type)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all ${sortBy === type
                ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-xl'
                : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                }`}
            >
              By {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl shadow-zinc-200/50 dark:shadow-none border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-800">
                  <th className="px-8 py-6 text-xs font-bold text-zinc-400 uppercase tracking-widest">Rank</th>
                  <th className="px-8 py-6 text-xs font-bold text-zinc-400 uppercase tracking-widest">User</th>
                  <th className="px-8 py-6 text-xs font-bold text-zinc-400 uppercase tracking-widest">Reputation</th>
                  <th className="px-8 py-6 text-xs font-bold text-zinc-400 uppercase tracking-widest">Uploads</th>
                  <th className="px-8 py-6 text-xs font-bold text-zinc-400 uppercase tracking-widest">Total Tips</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {loading ? (
                  [...Array(10)].map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan={5} className="px-8 py-6">
                        <div className="h-8 bg-zinc-100 dark:bg-zinc-800 rounded-xl w-full"></div>
                      </td>
                    </tr>
                  ))
                ) : (
                  leaders.map((leader: Leader) => (
                    <tr key={leader.rank} className="hover:bg-zinc-50 dark:hover:bg-zinc-950/50 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-lg font-bold">
                          {leader.rank === 1 ? '🥇' : leader.rank === 2 ? '🥈' : leader.rank === 3 ? '🥉' : leader.rank}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">{formatAddress(leader.address)}</span>
                      </td>
                      <td className="px-8 py-6 font-bold text-zinc-900 dark:text-zinc-100">{leader.reputation}</td>
                      <td className="px-8 py-6 text-zinc-600 dark:text-zinc-400">{leader.totalUploads} materials</td>
                      <td className="px-8 py-6 text-zinc-900 dark:text-zinc-100 font-bold">{formatSTX(leader.totalTips)} STX</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
