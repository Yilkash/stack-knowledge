import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingProps {
  value: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Rating({ value, onChange, readonly = false, size = 'md', className }: RatingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={cn("flex gap-1", className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => !readonly && onChange?.(star)}
          disabled={readonly}
          className={cn(
            "transition-all duration-200 focus:outline-none",
            readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110',
            star <= value ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-300 dark:text-zinc-600'
          )}
        >
          <Star className={sizeClasses[size]} />
        </button>
      ))}
    </div>
  );
}
