'use client';

import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { formatAddress, formatSTX } from '@/lib/utils';

export default function LeaderboardPage() {
  const [leaders, setLeaders] = useState([]);
  const [sortBy, setSortBy] = useState<'reputation' | 'uploads' | 'tips'>('reputation');

  useEffect(() => {
    fetchLeaderboard();
  }, [sortBy]);

  const fetchLeaderboard = async () => {
    // TODO: Fetch from blockchain
    const mockLeaders = Array.from({ length: 10 }, (_, i) => ({
      rank: i + 1,
      address: `ST${Math.random().toString(36).substring(2, 15).toUpperCase()}`,
      reputation: 500 - i * 50,
      totalUploads: 50 - i * 5,
      totalTips: 10000000 - i * 1000000
    }));
    setLeaders(mockLeaders);
  };

  return (
    <main className="min-h-screen bg-zinc-50">
      <NavBar />
      
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Leaderboard 🏆</h1>
          
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setSortBy('reputation')}
              className={`px-6 py-3 rounded-lg font-medium ${
                sortBy === 'reputation'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-zinc-700 border border-zinc-200'
              }`}
            >
              By Reputation
            </button>
            <button
              onClick={() => setSortBy('uploads')}
              className={`px-6 py-3 rounded-lg font-medium ${
                sortBy === 'uploads'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-zinc-700 border border-zinc-200'
              }`}
            >
              By Uploads
            </button>
            <button
              onClick={() => setSortBy('tips')}
              className={`px-6 py-3 rounded-lg font-medium ${
                sortBy === 'tips'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-zinc-700 border border-zinc-200'
              }`}
            >
              By Tips
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">User</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">Reputation</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">Uploads</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900">Total Tips</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {leaders.map((leader: any) => (
                  <tr key={leader.rank} className="hover:bg-zinc-50">
                    <td className="px-6 py-4">
                      <span className="text-2xl">
                        {leader.rank === 1 ? '🥇' : leader.rank === 2 ? '🥈' : leader.rank === 3 ? '🥉' : leader.rank}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium">{formatAddress(leader.address)}</td>
                    <td className="px-6 py-4">{leader.reputation}</td>
                    <td className="px-6 py-4">{leader.totalUploads}</td>
                    <td className="px-6 py-4">{formatSTX(leader.totalTips)} STX</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
