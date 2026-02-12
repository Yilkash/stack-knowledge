'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import TipButton from '@/components/TipButton';
import Rating from '@/components/Rating';
import ReviewCard from '@/components/ReviewCard';
import Badge from '@/components/Badge';
import { formatAddress, formatDate, formatSTX } from '@/lib/utils';
import { Resource, Review } from '@/types';

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
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <div className="animate-pulse text-zinc-500 font-medium text-lg">Loading resource...</div>
    </div>
  );

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950/50">
      <NavBar />

      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8 overflow-hidden relative">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">{resource.category}</Badge>
                  <span className="text-sm text-zinc-400 font-medium">•</span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    Uploaded {formatDate(resource.createdAt)}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">{resource.title}</h1>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">{resource.description}</p>
              </div>
              <div className="flex-shrink-0">
                <TipButton resourceId={resource.id} />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-zinc-100 dark:border-zinc-800">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Total Tips</p>
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 font-mono">{formatSTX(resource.totalTips)} STX</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Rating</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{resource.rating}</p>
                  <Rating value={resource.rating || 0} readonly size="sm" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Reviews</p>
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{resource.reviewCount}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Downloads</p>
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{resource.downloads}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
                  {resource.uploader.substring(0, 2)}
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">Uploader</p>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{formatAddress(resource.uploader)}</p>
                </div>
              </div>
              <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl hover:opacity-90 transition-opacity font-bold text-lg shadow-lg shadow-zinc-200 dark:shadow-none">
                Download Resource
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Write a Review</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-2 uppercase tracking-wider">Your Rating</label>
                <Rating
                  value={newReview.rating}
                  onChange={(rating) => setNewReview({ ...newReview, rating })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-2 uppercase tracking-wider">Your Comment</label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-zinc-900 dark:text-zinc-100"
                  rows={4}
                  placeholder="Share your thoughts about this resource..."
                />
              </div>
              <button
                onClick={handleSubmitReview}
                className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-bold shadow-lg shadow-blue-500/25"
              >
                Submit Review
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Community Reviews ({reviews.length})</h2>
            {reviews.length > 0 ? (
              <div className="space-y-6">
                {reviews.map((review: Review) => (
                  <ReviewCard key={review.id} {...review} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border-2 border-dashed border-zinc-100 dark:border-zinc-800 rounded-xl">
                <p className="text-zinc-400">No reviews yet. Be the first to share your feedback!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
