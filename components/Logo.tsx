import { BookOpen } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-blue-600 p-1.5 rounded-lg">
        <BookOpen className="w-5 h-5 text-white" />
      </div>
      <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-100">StackKnowledge</span>
    </div>
  );
}
