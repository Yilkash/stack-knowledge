'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Rating from '@/components/Rating';
import ReviewCard from '@/components/ReviewCard';
import { formatAddress, formatDate, formatSTX } from '@/lib/utils';
import { Resource, Review } from '@/types';
import { motion } from 'framer-motion';

/**
 * Resource Detail page providing comprehensive information and AI chat integration.
 * Displays resource metadata and user reviews.
 */
export default function ResourceDetailPage() {
  const params = useParams();
  const resourceId = params?.id as string;
  const [resource, setResource] = useState<Resource | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  const fetchResource = useCallback(async () => {
    // Simulate fetch
    await new Promise(resolve => setTimeout(resolve, 0));
    setResource({
      id: parseInt(resourceId),
      title: 'Introduction to Calculus',
      description: 'Comprehensive calculus notes covering limits, derivatives, and integrals',
      uploader: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
      category: 'Mathematics',
      totalTips: 5000000,
      rating: 4.5,
      reviewCount: 12,
      downloads: 150,
      createdAt: Date.now() - 86400000 * 7,
      url: 'ipfs://example'
    });
  }, [resourceId]);

  const fetchReviews = useCallback(async () => {
    try {
      // Simulate fetch delay if using hardcoded fallback or if API is slow
      const res = await fetch(`/api/reviews?resourceId=${resourceId}`);
      const data = await res.json();
      setReviews(data.reviews || []);
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
      // Fallback
      setReviews([]);
    }
  }, [resourceId]);

  useEffect(() => {
    if (resourceId) {
      const loadData = async () => {
        await fetchResource();
        await fetchReviews();
      };
      loadData();
    }
  }, [resourceId, fetchResource, fetchReviews]);

  const handleSubmitReview = async () => {
    try {
      await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resourceId: resourceId,
          ...newReview
        })
      });
      fetchReviews();
      setNewReview({ rating: 5, comment: '' });
    } catch (error) {
      console.error('Failed to submit review:', error);
    }
  };

  if (!resource) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="animate-pulse text-muted-foreground font-black text-2xl uppercase tracking-tighter">Initializing Library...</div>
    </div>
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />

      <section className="py-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-[40px] p-12 lg:p-16 border border-white/5 shadow-2xl mb-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-primary-400 to-primary-600"></div>

            <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="px-5 py-2 bg-primary/20 text-primary rounded-full text-xs font-black uppercase tracking-widest border border-primary/20">
                    {resource.category}
                  </div>
                  <span className="text-sm text-muted-foreground font-bold uppercase tracking-tighter">
                    UPLOADED {formatDate(resource.createdAt)}
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 tracking-tighter leading-tight uppercase group-hover:text-primary transition-colors">
                  {resource.title}
                </h1>
                <p className="text-muted-foreground text-xl leading-relaxed font-medium italic mb-10 max-w-2xl">{resource.description}</p>

                <div className="flex flex-wrap items-center gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {resource.uploader.substring(2, 4).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">CONTRIBUTOR</p>
                      <p className="text-sm font-bold font-mono">{formatAddress(resource.uploader)}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 min-w-[280px]">
                <TipButton resourceId={resource.id} />
                <button className="w-full px-10 py-5 bg-foreground text-background rounded-[20px] hover:scale-105 transition-all font-black text-lg shadow-2xl flex items-center justify-center gap-3">
                  <span>DOWNLOAD</span>
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/5">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">TOTAL EARNINGS</p>
                <p className="text-3xl font-black text-primary font-mono">{formatSTX(resource.totalTips)} STX</p>
              </div>
              <div className="space-y-2 border-l border-white/5 pl-8">
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">TRUST RATING</p>
                <div className="flex items-center gap-3">
                  <p className="text-3xl font-black text-foreground">{resource.rating}</p>
                  <Rating value={resource.rating || 0} readonly size="sm" />
                </div>
              </div>
              <div className="space-y-2 border-l border-white/5 pl-8">
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">TESTIMONIALS</p>
                <p className="text-3xl font-black text-foreground">{resource.reviewCount}</p>
              </div>
              <div className="space-y-2 border-l border-white/5 pl-8">
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">UTILIZATIONS</p>
                <p className="text-3xl font-black text-foreground">{resource.downloads}</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-12">
              <div className="glass rounded-[32px] p-10 border border-white/5">
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                  <div className="w-2 h-8 bg-primary rounded-full"></div>
                  Community Feedback
                </h2>
                {reviews.length > 0 ? (
                  <div className="space-y-8">
                    {reviews.map((review: Review) => (
                      <ReviewCard key={review.id} {...review} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 border-2 border-dashed border-white/5 rounded-3xl bg-white/[0.01]">
                    <p className="text-muted-foreground font-medium italic text-lg">No reviews yet. Be the first to share your experience!</p>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="glass rounded-[32px] p-10 border border-white/5 sticky top-32">
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-8">Share Feedback</h2>
                <div className="space-y-8">
                  <div>
                    <label className="block text-[10px] font-black text-muted-foreground mb-4 uppercase tracking-widest">Rating Scale</label>
                    <Rating
                      value={newReview.rating}
                      onChange={(rating) => setNewReview({ ...newReview, rating })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-muted-foreground mb-4 uppercase tracking-widest">Detailed Commentary</label>
                    <textarea
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground/50 font-medium italic"
                      rows={5}
                      placeholder="Was this resource helpful? share your thoughts..."
                    />
                  </div>
                  <button
                    onClick={handleSubmitReview}
                    className="w-full py-5 bg-primary text-primary-foreground rounded-2xl hover:scale-[1.02] transition-all font-black text-lg shadow-xl shadow-primary/20 uppercase tracking-widest"
                  >
                    POST TESTIMONIAL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
