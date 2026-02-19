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
    <div className={cn("flex gap-2", className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => !readonly && onChange?.(star)}
          disabled={readonly}
          className={cn(
            "transition-all duration-300 focus:outline-none",
            readonly ? 'cursor-default' : 'cursor-pointer hover:scale-125 hover:-rotate-12',
            star <= value ? 'text-primary fill-primary shadow-[0_0_15px_rgba(14,165,233,0.3)]' : 'text-zinc-800'
          )}
        >
          <Star className={cn(sizeClasses[size], "fill-current")} />
        </button>
      ))}
    </div>
  );
}
