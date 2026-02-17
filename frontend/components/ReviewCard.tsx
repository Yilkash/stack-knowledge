'use client';

import { formatAddress, formatDate, cn } from '@/lib/utils';
import Rating from './Rating';

interface ReviewCardProps {
  reviewer: string;
  rating: number;
  comment: string;
  createdAt: number;
  helpful?: number;
  className?: string;
}

/**
 * Component for displaying a user review with rating, comment, and helpfulness count.
 * 
 * @param {ReviewCardProps} props - The component props
 */
export default function ReviewCard({ reviewer, rating, comment, createdAt, helpful = 0, className }: ReviewCardProps) {
  return (
    <div className={cn(
      "p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300",
      className
    )}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">{formatAddress(reviewer)}</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{formatDate(createdAt)}</p>
        </div>
        <Rating value={rating} readonly size="sm" />
      </div>

      <p className="text-zinc-700 dark:text-zinc-300 mb-4">{comment}</p>

      <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
        <button className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
          <span>👍</span> Helpful ({helpful})
        </button>
      </div>
    </div>
  );
}
