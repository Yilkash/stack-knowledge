'use client';

import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import ResourceCard from '@/components/ResourceCard';
import Pagination from '@/components/Pagination';
import ResourceCardSkeleton from '@/components/ResourceCardSkeleton';
import EmptyState from '@/components/EmptyState';
import { motion, AnimatePresence } from 'framer-motion';
import { Resource } from '@/types';
import { X } from 'lucide-react';
import Link from 'next/link';

/**
 * Main resources page displaying a searchable list of educational materials.
 * Supports pagination and category filtering.
 */
export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentQuery, setCurrentQuery] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const fetchResources = async (query = '', category = '', page = 1) => {
    setLoading(true);
    try {
      // In a real app, use URLSearchParams
      const res = await fetch(`/api/resources?query=${query}&category=${category}&page=${page}`);
      const data = await res.json();
      setResources(data.resources || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error('Failed to fetch resources:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query: string, category: string) => {
    setCurrentQuery(query);
    setCurrentCategory(category);
    setCurrentPage(1);
    fetchResources(query, category, 1);
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchResources(currentQuery, currentCategory, page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    fetchResources();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />

      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              RESOURCES <span className="text-primary">&</span> NOTES
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed italic">
              Empowering your academic journey with the best peer-shared materials on the Stacks blockchain.
            </p>
          </motion.div>
        </div>

        <div className="mb-20 glass p-4 rounded-3xl border border-white/5 shadow-2xl">
          <SearchBar onSearch={handleSearch} />
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <ResourceCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            {resources.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {resources.map((resource: Resource) => (
                  <div key={resource.id} onClick={() => setSelectedResource(resource)}>
                    <ResourceCard resource={resource} />
                  </div>
                ))}
              </motion.div>
            ) : (
              <EmptyState
                title="No resources found"
                description="We couldn't find any resources matching your criteria."
                actionLabel="Clear Filters"
                onAction={() => handleSearch('', '')}
              />
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              className="mt-12"
            />
          </>
        )}

        <AnimatePresence>
          {selectedResource && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedResource(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-full max-w-xl bg-background border-l border-white/5 z-[70] shadow-2xl p-12 overflow-y-auto"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="px-4 py-1 bg-primary/10 rounded-full border border-primary/20 text-[10px] font-black tracking-widest text-primary uppercase">
                    {selectedResource.category}
                  </div>
                  <button onClick={() => setSelectedResource(null)} className="text-muted-foreground hover:text-foreground">
                    <X size={24} />
                  </button>
                </div>

                <h2 className="text-4xl font-black tracking-tighter uppercase mb-6">{selectedResource.title}</h2>
                <div className="flex items-center gap-4 mb-10 text-xs font-black uppercase tracking-widest text-muted-foreground">
                  <span>By {selectedResource.uploader.slice(0, 10)}...</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                  <span>{(selectedResource as any).rating || 4.5} Rating</span>
                </div>

                <div className="glass p-8 rounded-3xl border border-white/5 mb-10">
                  <p className="text-foreground/80 leading-relaxed italic mb-8">
                    {selectedResource.description || "This high-density intelligence asset contains curated peer-verified insights for the Stacks ecosystem."}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-2xl">
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Economy</div>
                      <div className="text-lg font-black text-primary">{(selectedResource.totalTips / 1000000).toFixed(2)} STX</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl">
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Deployed</div>
                      <div className="text-lg font-black">2 days ago</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Link
                    href={`/resources/${selectedResource.id}`}
                    className="w-full py-5 bg-foreground text-background text-center font-black uppercase tracking-widest rounded-2xl hover:scale-[1.02] transition-all"
                  >
                    View Full Intelligence
                  </Link>
                  <button className="w-full py-5 border border-white/5 bg-white/5 font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all">
                    Authorize Quick Download
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </main>
  );
}
