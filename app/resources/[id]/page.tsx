'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import TipButton from '@/components/TipButton';
import Rating from '@/components/Rating';
import ReviewCard from '@/components/ReviewCard';
import Badge from '@/components/Badge';
import { formatAddress, formatDate, formatSTX } from '@/lib/utils';

export default function ResourceDetailPage() {
  const params = useParams();
  const [resource, setResource] = useState<any>(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  useEffect(() => {
    fetchResource();
    fetchReviews();
  }, [params.id]);

  const fetchResource = async () => {
    // TODO: Fetch from blockchain
    setResource({
      id: params.id,
      title: 'Introduction to Calculus',
      description: 'Comprehensive calculus notes covering limits, derivatives, and integrals',
      uploader: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
      category: 'Mathematics',
      totalTips: 5000000,
      rating: 4.5,
      reviewCount: 12,
      downloads: 150,
      createdAt: Date.now() - 86400000 * 7
    });
  };

  const fetchReviews = async () => {
    const res = await fetch(`/api/reviews?resourceId=${params.id}`);
    const data = await res.json();
    setReviews(data.reviews);
  };

  const handleSubmitReview = async () => {
    await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        resourceId: params.id,
        ...newReview
      })
    });
    fetchReviews();
    setNewReview({ rating: 5, comment: '' });
  };

  if (!resource) return <div>Loading...</div>;

  return (
    <main className="min-h-screen bg-zinc-50">
      <NavBar />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{resource.title}</h1>
                <p className="text-zinc-600 mb-4">{resource.description}</p>
                <div className="flex items-center gap-4 flex-wrap">
                  <Badge>{resource.category}</Badge>
                  <span className="text-sm text-zinc-500">
                    By {formatAddress(resource.uploader)}
                  </span>
                  <span className="text-sm text-zinc-500">
                    {formatDate(resource.createdAt)}
                  </span>
                </div>
              </div>
              <TipButton resourceId={resource.id} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-zinc-200">
              <div>
                <p className="text-sm text-zinc-500">Total Tips</p>
                <p className="text-xl font-bold">{formatSTX(resource.totalTips)} STX</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">Rating</p>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold">{resource.rating}</p>
                  <Rating value={resource.rating} readonly size="sm" />
                </div>
              </div>
              <div>
                <p className="text-sm text-zinc-500">Reviews</p>
                <p className="text-xl font-bold">{resource.reviewCount}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">Downloads</p>
                <p className="text-xl font-bold">{resource.downloads}</p>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                Download Resource
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Write a Review</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Rating</label>
              <Rating
                value={newReview.rating}
                onChange={(rating) => setNewReview({ ...newReview, rating })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Comment</label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Share your thoughts about this resource..."
              />
            </div>
            <button
              onClick={handleSubmitReview}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit Review
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Reviews ({reviews.length})</h2>
            <div className="space-y-4">
              {reviews.map((review: any) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
