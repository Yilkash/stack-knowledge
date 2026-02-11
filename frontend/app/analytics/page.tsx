'use client';

import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import StatCard from '@/components/StatCard';

export default function AnalyticsPage() {
  const [stats, setStats] = useState({
    totalResources: 0,
    totalUsers: 0,
    totalTips: 0,
    totalDownloads: 0
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    // TODO: Fetch from blockchain
    setStats({
      totalResources: 1234,
      totalUsers: 567,
      totalTips: 50000000,
      totalDownloads: 8900
    });
  };

  return (
    <main className="min-h-screen bg-zinc-50">
      <NavBar />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Platform Analytics</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard
              label="Total Resources"
              value={stats.totalResources}
              icon="📚"
              trend={{ value: 12, isPositive: true }}
            />
            <StatCard
              label="Active Users"
              value={stats.totalUsers}
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
              value={stats.totalDownloads}
              icon="⬇️"
              trend={{ value: 20, isPositive: true }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Popular Categories</h2>
              <div className="space-y-4">
                {['Mathematics', 'Computer Science', 'Physics', 'Chemistry'].map((cat, i) => (
                  <div key={cat} className="flex items-center justify-between">
                    <span className="text-zinc-700">{cat}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-zinc-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600"
                          style={{ width: `${100 - i * 20}%` }}
                        />
                      </div>
                      <span className="text-sm text-zinc-500">{100 - i * 20}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-2xl">📚</span>
                  <span className="text-zinc-700">New resource uploaded</span>
                  <span className="text-zinc-400 ml-auto">2m ago</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-2xl">💰</span>
                  <span className="text-zinc-700">5 STX tip received</span>
                  <span className="text-zinc-400 ml-auto">5m ago</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-2xl">⭐</span>
                  <span className="text-zinc-700">New 5-star review</span>
                  <span className="text-zinc-400 ml-auto">10m ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
