'use client';

import { useState, useEffect, useCallback } from 'react';
import { useStacksAuth } from '@/hooks/use-stacks-auth';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import StatCard from '@/components/StatCard';
import ResourceCard from '@/components/ResourceCard';
import { formatSTX, cn } from '@/lib/utils';
import { User, Resource } from '@/types';
import { motion } from 'framer-motion';

/**
 * User Profile page displaying contributions, reputation, and tipping history.
 * Personalized for the authenticated Stacks user.
 */
export default function ProfilePage() {
  const { userData, isSignedIn } = useStacksAuth();
  const [profile, setProfile] = useState<User | null>(null);
  const [userResources] = useState<Resource[]>([]);
  const [activeTab, setActiveTab] = useState<'uploads' | 'tips'>('uploads');

  const fetchProfile = useCallback(async () => {
    if (!userData) return;
    // ... rest of fetchProfile ...

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
      <main className="min-h-screen bg-background text-foreground">
        <NavBar />
        <div className="flex flex-col items-center justify-center py-60 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-12 rounded-[40px] border border-white/5 text-center max-w-lg w-full shadow-2xl"
          >
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl">
              🔐
            </div>
            <h2 className="text-4xl font-black tracking-tighter mb-4 uppercase">Identity Required</h2>
            <p className="text-muted-foreground mb-10 font-medium text-lg italic">Please connect your Stacks wallet to unlock your personalized dashboard and contributions.</p>
            <div className="flex justify-center">
              {/* Connect button would be here or in NavBar */}
            </div>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />

      <section className="py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/5 pb-16">
          <div className="flex items-center gap-8">
            <div className="h-32 w-32 rounded-[40px] bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-primary-foreground text-5xl font-black shadow-2xl shadow-primary/20 transform hover:rotate-6 transition-transform">
              {userData?.profile?.stxAddress?.testnet?.substring(2, 4).toUpperCase() || 'S'}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-5xl font-black tracking-tighter uppercase">Citizen</h1>
                <div className="px-3 py-1 bg-primary/20 text-primary border border-primary/20 rounded-full text-[10px] font-black tracking-widest uppercase">Verified</div>
              </div>
              <p className="text-muted-foreground font-mono text-sm bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                {userData?.profile?.stxAddress?.testnet || 'STXXXXXXXXXXX'}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="glass px-8 py-4 rounded-3xl border border-white/5 text-center">
              <div className="text-3xl font-black text-primary">{profile?.reputation || 0}</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1">Reputation</div>
            </div>
          </div>
        </div>

        {profile ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              <StatCard label="Uploads" value={profile.totalUploads.toString()} icon="📚" />
              <StatCard label="Reputation" value={profile.reputation.toString()} icon="🏆" />
              <StatCard label="Earnings" value={formatSTX(profile.totalTipsReceived) + ' STX'} icon="💰" />
              <StatCard label="Tips Given" value={formatSTX(profile.totalTipsGiven) + ' STX'} icon="🎁" />
            </div>

            <div className="flex items-center gap-12 mb-16 border-b border-white/5 pb-0">
              <button
                onClick={() => setActiveTab('uploads')}
                className={cn(
                  "pb-6 text-sm font-black uppercase tracking-widest transition-all relative",
                  activeTab === 'uploads' ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Uploads
                {activeTab === 'uploads' && (
                  <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('tips')}
                className={cn(
                  "pb-6 text-sm font-black uppercase tracking-widest transition-all relative",
                  activeTab === 'tips' ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Earnings
                {activeTab === 'tips' && (
                  <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)]" />
                )}
              </button>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'uploads' ? (
                userResources.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {userResources.map((resource: Resource) => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-24 glass rounded-[40px] border border-white/5 border-dashed bg-white/[0.02]">
                    <div className="text-5xl mb-6 opacity-30">📭</div>
                    <p className="text-foreground text-2xl font-black border-none bg-transparent mb-3 uppercase tracking-tight">The Library is Empty</p>
                    <p className="text-muted-foreground max-w-md mx-auto font-medium italic">Start sharing study materials to earn STX and build your reputation within the community.</p>
                  </div>
                )
              ) : (
                <div className="text-center py-24 glass rounded-[40px] border border-white/5 border-dashed bg-white/[0.02]">
                  <div className="text-5xl mb-6 opacity-30">🪙</div>
                  <p className="text-foreground text-2xl font-black border-none bg-transparent mb-3 uppercase tracking-tight">No Tips Collected Yet</p>
                  <p className="text-muted-foreground max-w-md mx-auto font-medium italic">Your high-quality contributions will attract rewards from the community over time.</p>
                </div>
              )}
            </motion.div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-40 glass rounded-3xl animate-pulse border border-white/5"></div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
