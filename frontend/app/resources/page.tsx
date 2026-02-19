'use client';

import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import ResourceCard from '@/components/ResourceCard';
import Pagination from '@/components/Pagination';
import ResourceCardSkeleton from '@/components/ResourceCardSkeleton';
import EmptyState from '@/components/EmptyState';
import { motion } from 'framer-motion';
import { Resource } from '@/types';

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
                  <ResourceCard key={resource.id} resource={resource} />
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
      </section>

      <Footer />
    </main>
  );
}
