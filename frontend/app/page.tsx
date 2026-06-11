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
/* Activity Surge 48: Wed 20 May 2026 06:05:04 WAT */
/* Day 11 Polish Pass 6: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 12: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 17: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 20: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 22: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 25: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 29: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 33: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 37: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 44: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 49: Thu 21 May 2026 06:28:18 WAT */
/* Day 12 Polish Pass 8: Fri 22 May 2026 07:24:44 WAT */
/* Day 12 Polish Pass 17: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 19: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 23: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 25: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 30: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 33: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 46: Fri 22 May 2026 07:24:45 WAT */
/* Day 13 Polish Pass 7: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 14: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 22: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 26: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 27: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 33: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 36: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 39: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 50: Sat 23 May 2026 07:13:18 WAT */
/* Day 14 Polish Pass 7: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 12: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 14: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 16: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 20: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 26: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 30: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 34: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 39: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 43: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 45: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 47: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 2: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 7: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 13: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 15: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 17: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 18: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 21: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 28: Tue May 26 04:25:02 WAT 2026 */
/* Day 14 Polish Pass 31: Tue May 26 04:25:02 WAT 2026 */
/* Day 14 Polish Pass 42: Tue May 26 04:25:02 WAT 2026 */
/* Day 14 Polish Pass 45: Tue May 26 04:25:02 WAT 2026 */
/* Day 14 Polish Pass 3: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 4: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 7: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 8: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 9: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 13: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 20: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 21: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 35: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 36: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 38: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 41: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 42: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 43: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 45: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 46: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 48: Tue May 26 04:26:16 WAT 2026 */
/* Day 14 Polish Pass 1: Wed May 27 05:24:43 WAT 2026 */
/* Day 14 Polish Pass 3: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 4: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 5: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 9: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 12: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 15: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 18: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 27: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 32: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 34: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 41: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 47: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 49: Wed May 27 05:24:44 WAT 2026 */
/* Day 14 Polish Pass 50: Wed May 27 05:24:44 WAT 2026 */
/* Day 18 Polish Pass 3: Fri 29 May 2026 05:29:08 WAT */
/* Day 18 Polish Pass 7: Fri 29 May 2026 05:29:08 WAT */
/* Day 18 Polish Pass 22: Fri 29 May 2026 05:29:09 WAT */
/* Day 18 Polish Pass 29: Fri 29 May 2026 05:29:09 WAT */
/* Day 18 Polish Pass 31: Fri 29 May 2026 05:29:09 WAT */
/* Day 18 Polish Pass 33: Fri 29 May 2026 05:29:09 WAT */
/* Day 19 Polish Pass 1: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 2: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 8: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 11: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 14: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 16: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 30: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 33: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 36: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 37: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 44: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 47: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 48: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 53: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 56: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 59: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 61: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 67: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 68: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 69: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 73: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 79: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 81: Sat 30 May 2026 09:19:40 WAT */
/* Day 19 Polish Pass 85: Sat 30 May 2026 09:19:41 WAT */
/* Day 19 Polish Pass 88: Sat 30 May 2026 09:19:41 WAT */
/* Day 19 Polish Pass 93: Sat 30 May 2026 09:19:41 WAT */
/* Day 19 Polish Pass 94: Sat 30 May 2026 09:19:41 WAT */
/* Day 20 Polish Pass 1: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 4: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 5: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 6: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 7: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 13: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 14: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 17: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 18: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 21: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 23: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 28: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 29: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 33: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 37: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 39: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 41: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 43: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 44: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 52: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 53: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 56: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 64: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 73: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 79: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 86: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 88: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 90: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 95: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 97: Sun 31 May 2026 07:00:12 WAT */
/* Day 20 Polish Pass 98: Sun 31 May 2026 07:00:12 WAT */
/* Day 21 Polish Pass 1: Thu 11 Jun 2026 13:18:28 WAT */
/* Day 21 Polish Pass 6: Thu 11 Jun 2026 13:18:28 WAT */
/* Day 21 Polish Pass 15: Thu 11 Jun 2026 13:18:28 WAT */
