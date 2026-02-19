"use client";

import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import ActivityFeed from '@/components/ActivityFeed';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import { ShieldCheck, Bot, Coins } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <Hero />
      <SearchBar onSearch={(q, c) => console.log(q, c)} />

      <section className="py-20 bg-zinc-50 dark:bg-zinc-950/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground font-mono tracking-tighter">WHY STACKKNOWLEDGE?</h2>
            <p className="mt-4 text-muted-foreground font-medium">The first decentralized knowledge base that pays you to learn.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Features existing... */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FeatureCard
                title="Verified Resources"
                description="Access past questions and handouts verified by the community on the Stacks blockchain."
                icon={<ShieldCheck size={32} />}
                className="h-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FeatureCard
                title="AI Study Buddy"
                description="Ask questions and get answers strictly from your course materials. No hallucinations."
                icon={<Bot size={32} />}
                className="h-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FeatureCard
                title="Earn Crypto"
                description="Upload high-quality notes and earn STX tips from students who find them helpful."
                icon={<Coins size={32} />}
                className="h-full"
              />
            </motion.div>
          </div>

          <ActivityFeed />
        </div>
      </section>

      <Footer />
    </main>
  );
}
