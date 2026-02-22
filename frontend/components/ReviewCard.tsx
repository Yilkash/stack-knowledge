import Card from './Card';
import Rating from './Rating';
import { formatAddress } from '@/lib/utils';

interface ReviewCardProps {
  reviewer: string;
  rating: number;
  comment: string;
  date: string;
}

export default function ReviewCard({ reviewer, rating, comment, date }: ReviewCardProps) {
  return (
    <Card className="p-6 bg-white dark:bg-zinc-900 border-border shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-black text-foreground">{formatAddress(reviewer)}</p>
          <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{date}</p>
        </div>
        <Rating value={rating} />
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed italic border-l-2 border-primary/20 pl-4">
        "{comment}"
      </p>
    </Card>
  );
}
