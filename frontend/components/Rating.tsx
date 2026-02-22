import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  max?: number;
}

export default function Rating({ value, max = 5 }: RatingProps) {
  return (
    <div className="flex gap-0.5">
      {[...Array(max)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < value ? 'fill-yellow-400 text-yellow-400' : 'text-zinc-300 dark:text-zinc-700'}
        />
      ))}
    </div>
  );
}
