"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import FeaturedResources from '@/components/FeaturedResources';
import { motion } from 'framer-motion';

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
        >
            <h1 className="text-6xl font-black tracking-tighter uppercase mb-4">
                Explore <span className="text-primary italic">Knowledge</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
                Find the best study materials, verified by the Stacks student community.
            </p>
        </motion.div>

        <SearchBar onSearch={(q, c) => console.log(q, c)} />
        
        <div className="mt-20">
            <FeaturedResources resources={[]} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
