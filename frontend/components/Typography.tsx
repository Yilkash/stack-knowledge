import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

/**
 * Standard Heading component for consistent section titles.
 * 
 * @param {Props} props - The component props
 */
export function Heading({ children, className }: Props) {
  return <h2 className={cn("text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100", className)}>{children}</h2>;
}

/**
 * Standard Paragraph component for consistent body text.
 * 
 * @param {Props} props - The component props
 */
export function Paragraph({ children, className }: Props) {
  return <p className={cn("text-zinc-600 dark:text-zinc-400 leading-relaxed", className)}>{children}</p>;
}
