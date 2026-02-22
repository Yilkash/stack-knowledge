export default function SuggestedQuestions({ onSelect }: { onSelect: (q: string) => void }) {
  const qs = ["Can you summarize this resource?", "Explain the main formulas.", "Generate a quiz."];
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {qs.map(q => (
        <button 
            key={q} 
            onClick={() => onSelect(q)}
            className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900 hover:bg-primary hover:text-white transition-all rounded-xl text-[10px] font-black uppercase tracking-widest"
        >
            {q}
        </button>
      ))}
    </div>
  );
}
