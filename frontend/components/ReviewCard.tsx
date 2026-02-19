'use client';

import { formatDate, cn } from '@/lib/utils';
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
      "p-8 glass rounded-[32px] border border-white/5 hover:border-primary/20 transition-all group",
      className
    )}>
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-xs">
            {reviewer.substring(2, 4).toUpperCase()}
          </div>
          <div>
            <p className="font-black text-foreground text-sm uppercase tracking-tighter group-hover:text-primary transition-colors">
              {reviewer.slice(0, 6)}...{reviewer.slice(-4)}
            </p>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{formatDate(createdAt)}</p>
          </div>
        </div>
        <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/5">
          <Rating value={rating} readonly size="sm" />
        </div>
      </div>

      <p className="text-muted-foreground font-medium italic leading-relaxed mb-8 border-l-2 border-primary/20 pl-6 text-lg">
        "{comment}"
      </p>

      <div className="flex items-center gap-6">
        <button className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
          <span>👍</span> Helpful ({helpful})
        </button>
        <button className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-destructive transition-colors">
          Report
        </button>
      </div>
    </div>
  );
}
