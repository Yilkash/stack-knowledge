import { Sparkles } from 'lucide-react';

export default function AISummary({ text }: { text: string }) {
  return (
    <div className="p-6 bg-primary/5 border-2 border-primary/10 rounded-3xl relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={16} className="text-primary animate-pulse" />
        <h4 className="text-xs font-black uppercase tracking-widest text-primary">AI-Generated Summary</h4>
      </div>
      <p className="text-sm text-foreground/80 leading-relaxed font-medium">
        {text}
      </p>
    </div>
  );
}
