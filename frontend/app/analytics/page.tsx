'use client';

import { useState, useEffect, useCallback } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import StatCard from '@/components/StatCard';

/**
 * Platform Analytics dashboard providing real-time insights into resource distribution,
 * category popularity, and recent on-chain activity.
 */
export default function AnalyticsPage() {
  const [stats, setStats] = useState({
    totalResources: 0,
    totalUsers: 0,
    totalTips: 0,
    totalDownloads: 0
  });
  const [loading, setLoading] = useState(true);

  const fetchAnalytics = useCallback(async () => {
    setLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // TODO: Fetch from blockchain/backend
    setStats({
      totalResources: 1234,
      totalUsers: 567,
      totalTips: 50000000,
      totalDownloads: 8900
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchAnalytics();
  }, [fetchAnalytics]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />

      <section className="py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-white/5 pb-16">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tighter uppercase leading-none">
              Platform <span className="text-primary">Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium italic max-w-2xl">
              Deep-dive metrics and real-time observability into the StackKnowledge decentralized ecosystem.
            </p>
          </div>

          <div
            className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-8 py-4 rounded-full border border-primary/20 shadow-2xl shadow-primary/10"
          >
            <span className="w-3 h-3 rounded-full bg-primary animate-ping"></span>
            Observing Mainnet activity
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <StatCard
            label="Digital Assets"
            value={stats.totalResources.toString()}
            icon="📚"
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            label="Active Citizens"
            value={stats.totalUsers.toString()}
            icon="👥"
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            label="Total Economy (STX)"
            value={(stats.totalTips / 1000000).toFixed(2)}
            icon="💰"
            trend={{ value: 15, isPositive: true }}
          />
          <StatCard
            label="Utilizations"
            value={stats.totalDownloads.toString()}
            icon="⬇️"
            trend={{ value: 20, isPositive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div
            className="lg:col-span-3 glass rounded-[40px] p-12 border border-white/5 shadow-2xl"
          >
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
              <div className="w-2 h-8 bg-primary rounded-full"></div>
              Domain Dominance
            </h2>
            <div className="space-y-10">
              {['Mathematics', 'Computer Science', 'Physics', 'Chemistry', 'Economics'].map((cat, i) => (
                <div key={cat} className="space-y-4 group">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors">{cat}</span>
                    <span className="text-xs font-black text-primary bg-primary/10 px-4 py-1 rounded-full">{100 - i * 15}% Reach</span>
                  </div>
                  <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden border border-white/5 p-1">
                    <div
                      style={{ width: `${100 - i * 15}%` }}
                      className="h-full bg-gradient-to-r from-primary via-primary-400 to-primary-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="lg:col-span-2 glass rounded-[40px] p-12 border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
              <div className="text-[8px] font-black uppercase tracking-[0.3em] text-primary/30 rotate-90 origin-right">REALTIME_STREAM</div>
            </div>

            <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
              <div className="w-2 h-8 bg-primary rounded-full"></div>
              Activity Stream
            </h2>
            <div className="space-y-8">
              {loading ? (
                [...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse flex items-start gap-6 p-6 glass rounded-2xl border border-white/5">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl"></div>
                    <div className="flex-1 space-y-3">
                      <div className="h-4 bg-white/5 rounded w-3/4"></div>
                      <div className="h-2 bg-white/5 rounded w-1/4"></div>
                    </div>
                  </div>
                ))
              ) : (
                [
                  { icon: "📚", text: "New intelligence asset deployed", time: "2m ago", color: "text-primary" },
                  { icon: "💰", text: "5 STX micro-tip authorized", time: "5m ago", color: "text-emerald-500" },
                  { icon: "⭐", text: "New 5-star peer testimonial", time: "10m ago", color: "text-primary-400" },
                  { icon: "👥", text: "New network citizen joined", time: "15m ago", color: "text-violet-500" },
                  { icon: "⬇️", text: "Knowledge asset synchronized", time: "18m ago", color: "text-zinc-500" },
                  { icon: "💬", text: "AI verification cycle started", time: "22m ago", color: "text-indigo-500" },
                ].map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-6 p-6 rounded-[28px] hover:bg-white/5 transition-all border border-transparent hover:border-white/5 group"
                  >
                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-lg shadow-black/20">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-black text-sm uppercase tracking-tight group-hover:text-primary transition-colors">{activity.text}</p>
                      <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest mt-2 bg-white/5 px-3 py-1 rounded-full w-fit">{activity.time}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <button className="w-full mt-12 py-5 text-xs font-black text-muted-foreground hover:text-primary transition-all uppercase tracking-[0.3em] border border-white/5 rounded-2xl hover:bg-white/5">
              Access Full Archives
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
