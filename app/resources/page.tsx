'use client';

import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import ResourceCard from '@/components/ResourceCard';
import Pagination from '@/components/Pagination';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function ResourcesPage() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchResources = async (query = '', category = '', page = 1) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/resources?query=${query}&category=${category}&page=${page}`);
      const data = await res.json();
      setResources(data.resources);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Failed to fetch resources:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-50">
      <NavBar />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Browse Resources</h1>
          
          <div className="mb-12">
            <SearchBar onSearch={(q, c) => fetchResources(q, c, 1)} />
          </div>

          {loading ? (
            <div className="py-20">
              <LoadingSpinner size="lg" />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource: any) => (
                  <ResourceCard key={resource.id} {...resource} />
                ))}
              </div>
              
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => {
                  setCurrentPage(page);
                  fetchResources('', '', page);
                }}
              />
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
