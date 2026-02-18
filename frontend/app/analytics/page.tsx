'use client';

export const dynamic = 'force-dynamic';

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
    await new Promise(resolve => setTimeout(resolve, 0));

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
    const loadData = async () => {
      await fetchAnalytics();
    };
    loadData();
  }, [fetchAnalytics]);

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950/50">
      <NavBar />

      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">Platform Analytics</h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg">Real-time insights into the StackKnowledge ecosystem activity.</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-full border border-emerald-100 dark:border-emerald-800/50">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Live Updates Enabled
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <StatCard
            label="Total Resources"
            value={stats.totalResources.toString()}
            icon="📚"
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            label="Active Users"
            value={stats.totalUsers.toString()}
            icon="👥"
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            label="Total Tips (STX)"
            value={(stats.totalTips / 1000000).toFixed(2)}
            icon="💰"
            trend={{ value: 15, isPositive: true }}
          />
          <StatCard
            label="Total Downloads"
            value={stats.totalDownloads.toString()}
            icon="⬇️"
            trend={{ value: 20, isPositive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 flex items-center gap-3">
              <span className="text-blue-500">📊</span> Popular Categories
            </h2>
            <div className="space-y-8">
              {['Mathematics', 'Computer Science', 'Physics', 'Chemistry', 'Economics'].map((cat, i) => (
                <div key={cat} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-900 dark:text-zinc-100 font-semibold">{cat}</span>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{100 - i * 15}% usage</span>
                  </div>
                  <div className="w-full h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-1000"
                      style={{ width: `${100 - i * 15}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 flex items-center gap-3">
              <span className="text-amber-500">⚡</span> Recent Activity
            </h2>
            <div className="space-y-6">
              {loading ? (
                [...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse flex items-start gap-4 p-4">
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-xl"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-zinc-100 dark:bg-zinc-800 rounded w-3/4"></div>
                      <div className="h-3 bg-zinc-50 dark:bg-zinc-900 rounded w-1/4"></div>
                    </div>
                  </div>
                ))
              ) : (
                [
                  { icon: "📚", text: "New resource uploaded", time: "2m ago", color: "text-blue-500" },
                  { icon: "💰", text: "5 STX tip received", time: "5m ago", color: "text-emerald-500" },
                  { icon: "⭐", text: "New 5-star review", time: "10m ago", color: "text-amber-500" },
                  { icon: "👥", text: "New user registered", time: "15m ago", color: "text-violet-500" },
                  { icon: "⬇️", text: "Resource downloaded", time: "18m ago", color: "text-zinc-500" },
                  { icon: "💬", text: "AI chat initiated", time: "22m ago", color: "text-indigo-500" },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-950/50 transition-colors border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800">
                    <span className="text-2xl flex-shrink-0">{activity.icon}</span>
                    <div className="flex-1">
                      <p className="text-zinc-900 dark:text-zinc-100 font-medium text-sm leading-tight">{activity.text}</p>
                      <p className="text-zinc-400 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <button className="w-full mt-6 py-3 text-sm font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors uppercase tracking-widest">
              View All Activity
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
