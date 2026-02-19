'use client';

import { useState, useEffect, useCallback } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { formatAddress, formatSTX, cn } from '@/lib/utils';
import { Leader } from '@/types';
import { motion } from 'framer-motion';

/**
 * Platform Leaderboard showcasing top contributors ranked by reputation, uploads, or tips.
 * Promotes healthy competition and community engagement.
 */
export default function LeaderboardPage() {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [sortBy, setSortBy] = useState<'reputation' | 'uploads' | 'tips'>('reputation');
  const [loading, setLoading] = useState(true);

  const fetchLeaderboard = useCallback(async () => {
    setLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // TODO: Fetch from blockchain
    const mockLeaders = Array.from({ length: 10 }, (_, i) => ({
      rank: i + 1,
      address: `ST${Math.random().toString(36).substring(2, 15).toUpperCase()}`,
      reputation: 500 - i * 50,
      totalUploads: 50 - i * 5,
      totalTips: 10000000 - i * 1000000,
      uploads: 50 - i * 5,
      score: 500 - i * 50,
      tipsReceived: 10000000 - i * 1000000
    }));
    setLeaders(mockLeaders);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard, sortBy]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />

      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
              Hall of <span className="text-primary">Fame</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium italic">
              Celebrating the champions of open knowledge and peer support.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(['reputation', 'uploads', 'tips'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setSortBy(type)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all ${sortBy === type
                ? 'bg-primary text-primary-foreground shadow-xl'
                : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground'
                }`}
            >
              By {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className="glass rounded-[32px] border border-white/5 shadow-2xl overflow-hidden">
          <div className="p-8 border-b border-white/5 bg-white/5 flex justify-between items-center">
            <h3 className="text-2xl font-black uppercase tracking-widest text-primary">Top Contributors</h3>
            <div className="text-xs font-bold text-muted-foreground uppercase bg-white/5 px-4 py-2 rounded-full">Updated Live</div>
          </div>

          <div className="divide-y divide-white/5">
            {loading ? (
              [...Array(5)].map((_, i) => (
                <div key={i} className="p-8 animate-pulse flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-full" />
                  <div className="flex-1 space-y-3">
                    <div className="h-4 bg-white/5 rounded w-1/4" />
                    <div className="h-3 bg-white/5 rounded w-1/2" />
                  </div>
                  <div className="w-20 h-8 bg-white/5 rounded-xl" />
                </div>
              ))
            ) : (
              leaders.map((user, index) => (
                <motion.div
                  key={user.address}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 flex items-center gap-6 hover:bg-white/5 transition-colors group"
                >
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center font-black text-xl border-2 transition-transform group-hover:scale-110",
                    index === 0 ? "bg-yellow-500/20 border-yellow-500 text-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.2)]" :
                      index === 1 ? "bg-zinc-400/20 border-zinc-400 text-zinc-400" :
                        index === 2 ? "bg-amber-600/20 border-amber-600 text-amber-600" :
                          "bg-white/5 border-white/10 text-muted-foreground"
                  )}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-bold font-mono tracking-tight group-hover:text-primary transition-colors">
                      {user.address.slice(0, 8)}...{user.address.slice(-6)}
                    </p>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-tighter mt-1">
                      {user.uploads} Uploads • {formatSTX(user.tipsReceived || 0)} Tips Received
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-foreground">{user.score}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary">Reputation</div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
