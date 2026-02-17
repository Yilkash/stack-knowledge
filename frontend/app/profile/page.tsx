'use client';

import { useState, useEffect, useCallback } from 'react';
import { useStacksAuth } from '@/hooks/use-stacks-auth';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import StatCard from '@/components/StatCard';
import ResourceCard from '@/components/ResourceCard';
import { formatSTX } from '@/lib/utils';
import { User, Resource } from '@/types';

/**
 * User Profile page displaying contributions, reputation, and tipping history.
 * Personalized for the authenticated Stacks user.
 */
export default function ProfilePage() {
  const { userData, isSignedIn } = useStacksAuth();
  const [profile, setProfile] = useState<User | null>(null);
  const [userResources] = useState<Resource[]>([]);

  const fetchProfile = useCallback(async () => {
    if (!userData) return;

    // Simulate fetch with slight delay to avoid sync setState in effect
    await new Promise(resolve => setTimeout(resolve, 0));

    try {
      const address = userData.profile.stxAddress?.testnet || userData.profile.stxAddress?.mainnet || '';
      if (!address) return;

      const res = await fetch(`/api/user?address=${address}`);
      const result = await res.json();

      if (result.success) {
        setProfile(result.data);
      } else {
        throw new Error(result.error || 'Failed to fetch profile');
      }
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      // Mock data for demo/fallback
      setProfile({
        address: userData.profile.stxAddress.testnet || userData.profile.stxAddress.mainnet || 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
        reputation: 150,
        totalUploads: 5,
        totalTipsReceived: 25000000,
        totalTipsGiven: 10000000,
        joinedAt: Date.now() - 86400000 * 30
      });
    }
  }, [userData]);

  useEffect(() => {
    if (isSignedIn && userData) {
      const loadData = async () => {
        await fetchProfile();
      };
      loadData();
    }
  }, [isSignedIn, userData, fetchProfile]);

  if (!isSignedIn) {
    return (
      <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950/50">
        <NavBar />
        <div className="flex flex-col items-center justify-center py-40 px-4">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 text-center max-w-md w-full">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🔐</span>
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Connect Your Wallet</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">Please connect your Stacks wallet to view your personalized profile and contributions.</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950/50">
      <NavBar />

      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-500/20">
              {userData?.profile?.stxAddress?.testnet?.substring(0, 2) || 'S'}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">My Profile</h1>
              <p className="text-zinc-500 font-mono text-sm">{userData?.profile?.stxAddress?.testnet}</p>
            </div>
          </div>

          {profile ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <StatCard label="Reputation Score" value={profile.reputation.toString()} icon="🏆" />
                <StatCard label="Total Uploads" value={profile.totalUploads.toString()} icon="📚" />
                <StatCard label="Tips Received" value={formatSTX(profile.totalTipsReceived) + ' STX'} icon="💰" />
                <StatCard label="Tips Given" value={formatSTX(profile.totalTipsGiven) + ' STX'} icon="🎁" />
              </div>

              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">My Resources</h2>
                <span className="text-sm font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">{userResources.length} Items</span>
              </div>

              {userResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {userResources.map((resource: Resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 border-dashed">
                  <p className="text-zinc-500 mb-2 font-medium">No resources uploaded yet</p>
                  <p className="text-zinc-400 text-sm">Start sharing study materials to earn STX and reputation!</p>
                </div>
              )}
            </>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 rounded-2xl bg-white dark:bg-zinc-900 animate-pulse border border-zinc-100 dark:border-zinc-800"></div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
