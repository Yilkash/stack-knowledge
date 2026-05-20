"use client";

import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import ActivityFeed from '@/components/ActivityFeed';
import FeatureCard from '@/components/FeatureCard';
import FeaturedResources from '@/components/FeaturedResources';
import Footer from '@/components/Footer';
import { ShieldCheck, Bot, Coins } from 'lucide-react';
import { motion } from 'framer-motion';
import { Resource } from '@/types';

const FEATURED_RESOURCES: Resource[] = [
  {
    id: 1,
    title: "Introduction to Computer Science 101 - Lecture Notes",
    description: "Comprehensive notes covering binary, logic gates, and basic algorithms. Perfect for mid-term preparation.",
    uploader: "SP3X...A1B2",
    url: "ipfs://mock1",
    totalTips: 450,
    createdAt: Date.now(),
    category: "Computer Science",
    tags: ["CS101", "Notes", "Logic Gates"]
  },
  {
    id: 2,
    title: "Organic Chemistry II - Midterm Handbook",
    description: "Reaction mechanisms, stereochemistry, and spectroscopy summaries for Chm202 students.",
    uploader: "SP1K...Z9Y8",
    url: "ipfs://mock2",
    totalTips: 280,
    createdAt: Date.now(),
    category: "Chemistry",
    tags: ["Organic", "Chemistry", "Study Guide"]
  },
  {
    id: 3,
    title: "Macroeconomics Principles - Past Question Pack",
    description: "Verified past questions from 2020-2024 with detailed solution keys and model answers.",
    uploader: "SP2M...X3W2",
    url: "ipfs://mock3",
    totalTips: 620,
    createdAt: Date.now(),
    category: "Economics",
    tags: ["Macro", "Economics", "Exam Prep"]
  }
];

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

          <FeaturedResources resources={FEATURED_RESOURCES} />

          <ActivityFeed />
        </div>
      </section>

      <Footer />
    </main >
  );
}
/* Activity Surge 2: Wed 20 May 2026 06:05:03 WAT */
/* Activity Surge 3: Wed 20 May 2026 06:05:03 WAT */
/* Activity Surge 4: Wed 20 May 2026 06:05:03 WAT */
/* Activity Surge 7: Wed 20 May 2026 06:05:03 WAT */
/* Activity Surge 15: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 20: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 23: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 38: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 42: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 46: Wed 20 May 2026 06:05:04 WAT */
