import { Award } from 'lucide-react';

export default function QualityBadge({ level }: { level: 'bronze' | 'silver' | 'gold' | 'platinum' }) {
  const meta = {
    bronze: "text-amber-600 bg-amber-600/10 border-amber-600/20",
    silver: "text-zinc-400 bg-zinc-400/10 border-zinc-400/20",
    gold: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
    platinum: "text-primary bg-primary/10 border-primary/20"
  };

  return (
    <div className={`flex items-center gap-1 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${meta[level]}`}>
      <Award size={12} /> {level} Rank
    </div>
  );
}
