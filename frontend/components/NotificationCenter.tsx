import { Bell } from 'lucide-react';
import { useState } from 'react';

export default function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
        </button>
        {isOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-background border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-2xl p-4 z-50">
                <h3 className="font-black text-xs uppercase tracking-widest mb-4">Notifications</h3>
                <div className="space-y-3">
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                        <p className="text-xs font-bold text-foreground">SP1...X just tipped you 5 STX! 💰</p>
                        <p className="text-[10px] text-muted-foreground mt-1 font-medium">5 MINUTES AGO</p>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}
