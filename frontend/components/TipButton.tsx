import { cn } from '@/lib/utils';
import { useState } from 'react';
import Button from './Button';
import { useContract } from '@/hooks/use-contract';

interface TipButtonProps {
    resourceId: number;
}

/**
 * TipButton component providing predefined tipping options (1, 5, 10 STX).
 * Integrates with the useContract hook for blockchain transaction execution.
 */
export default function TipButton({ resourceId }: TipButtonProps) {
    const [showOptions, setShowOptions] = useState(false);
    const { tipResource, loading } = useContract();

    const handleTip = async (amount: number) => {
        await tipResource(resourceId, amount * 1000000); // STX to microSTX
        setShowOptions(false);
    };

    if (showOptions) {
        return (
            <div className="flex gap-3 items-center animate-in slide-in-from-right-8 duration-500 glass p-2 rounded-2xl border border-white/5 shadow-2xl">
                {[1, 5, 10].map((amount) => (
                    <button
                        key={amount}
                        disabled={loading}
                        onClick={() => handleTip(amount)}
                        className={cn(
                            "px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all border",
                            "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20 hover:scale-110",
                            loading && "opacity-50 cursor-not-allowed"
                        )}
                    >
                        {amount} STX
                    </button>
                ))}
                <button
                    onClick={() => setShowOptions(false)}
                    className="p-2 text-muted-foreground hover:text-foreground transition-all hover:rotate-90"
                >
                    <span className="sr-only">Cancel</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
        );
    }

    return (
        <Button
            variant="outline"
            size="lg"
            onClick={() => setShowOptions(true)}
            className="items-center gap-4 border-primary/20 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transform active:scale-95 transition-all font-black px-10 py-5 rounded-[20px] shadow-2xl shadow-primary/10"
            disabled={loading}
        >
            <span className="text-2xl animate-pulse">⚡</span>
            <span className="uppercase tracking-widest">{loading ? 'PROCESSING...' : 'SUPPORT CONTRIBUTOR'}</span>
        </Button>
    );
}
