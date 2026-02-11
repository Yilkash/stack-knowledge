import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages <= 1) return null;

  return (
    <div className={cn("flex justify-center items-center gap-2 mt-8", className)}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
      >
        <ChevronLeft className="w-4 h-4 mr-1" /> Previous
      </Button>

      <div className="flex gap-1 overflow-x-auto max-w-[200px] md:max-w-none scrollbar-hide">
        {pages.map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onPageChange(page)}
            className={cn(
              "w-9 h-9 p-0",
              currentPage !== page && "dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
            )}
          >
            {page}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
      >
        Next <ChevronRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );
}
