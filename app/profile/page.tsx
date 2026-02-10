'use client';

import { useState, useEffect } from 'react';
import { useStacksAuth } from '@/hooks/use-stacks-auth';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import StatCard from '@/components/StatCard';
import ResourceCard from '@/components/ResourceCard';
import { formatSTX } from '@/lib/utils';

export default function ProfilePage() {
  const { userData, isSignedIn } = useStacksAuth();
  const [profile, setProfile] = useState<any>(null);
  const [userResources, setUserResources] = useState([]);

  useEffect(() => {
    if (isSignedIn && userData) {
      fetchProfile();
    }
  }, [isSignedIn, userData]);

  const fetchProfile = async () => {
    const address = userData?.profile.stxAddress.testnet;
    const res = await fetch(`/api/user?address=${address}`);
    const data = await res.json();
    setProfile(data.user);
  };

  if (!isSignedIn) {
    return (
      <main className="min-h-screen bg-zinc-50">
        <NavBar />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
            <p className="text-zinc-600">Please connect your wallet to view your profile</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50">
      <NavBar />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">My Profile</h1>
          
          {profile && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <StatCard label="Reputation Score" value={profile.reputation} icon="🏆" />
                <StatCard label="Total Uploads" value={profile.totalUploads} icon="📚" />
                <StatCard label="Tips Received" value={formatSTX(profile.totalTipsReceived) + ' STX'} icon="💰" />
                <StatCard label="Tips Given" value={formatSTX(profile.totalTipsGiven) + ' STX'} icon="🎁" />
              </div>

              <h2 className="text-2xl font-bold mb-6">My Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userResources.map((resource: any) => (
                  <ResourceCard key={resource.id} {...resource} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
