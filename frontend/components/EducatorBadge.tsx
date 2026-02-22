import { BadgeCheck } from 'lucide-react';

export default function EducatorBadge() {
  return (
    <div className="flex items-center gap-1 px-2 py-0.5 bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20 text-[10px] font-black uppercase tracking-widest">
      <BadgeCheck size={10} />
      Verified Educator
    </div>
  );
}
