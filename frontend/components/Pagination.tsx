import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination() {
  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      <button className="p-2 rounded-xl border-2 border-zinc-200 hover:bg-zinc-100 transition-colors disabled:opacity-50">
        <ChevronLeft size={20} />
      </button>
      <span className="font-black text-sm uppercase tracking-widest">Page 1 of 10</span>
      <button className="p-2 rounded-xl border-2 border-zinc-200 hover:bg-zinc-100 transition-colors">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
