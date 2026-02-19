import { cn } from '@/lib/utils';

/**
 * Reusable Badge component for displaying tags, categories, or status indicators.
 * Supports multiple style variants including filled and outline.
 */
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
  ...props
}: BadgeProps) {
  const variants = {
    default: 'bg-zinc-900 text-zinc-100 border-zinc-800',
    success: 'bg-green-500/10 text-green-500 border-green-500/20',
    warning: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    error: 'bg-red-500/10 text-red-500 border-red-500/20',
    info: 'bg-primary/10 text-primary border-primary/20',
    outline: 'bg-transparent text-muted-foreground border-white/10'
  };

  const sizes = {
    sm: 'px-3 py-1 text-[10px] uppercase font-black tracking-widest',
    md: 'px-4 py-1.5 text-xs uppercase font-black tracking-widest',
    lg: 'px-5 py-2 text-sm uppercase font-black tracking-widest'
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
