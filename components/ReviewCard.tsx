'use client';

import { formatAddress, formatDate } from '@/lib/utils';
import Rating from './Rating';

interface ReviewCardProps {
  reviewer: string;
  rating: number;
  comment: string;
  createdAt: number;
  helpful?: number;
}

export default function ReviewCard({ reviewer, rating, comment, createdAt, helpful = 0 }: ReviewCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl border border-zinc-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="font-medium text-zinc-900">{formatAddress(reviewer)}</p>
          <p className="text-sm text-zinc-500">{formatDate(createdAt)}</p>
        </div>
        <Rating value={rating} readonly size="sm" />
      </div>
      
      <p className="text-zinc-700 mb-4">{comment}</p>
      
      <div className="flex items-center gap-4 text-sm text-zinc-500">
        <button className="hover:text-blue-600 transition-colors">
          👍 Helpful ({helpful})
        </button>
      </div>
    </div>
  );
}
