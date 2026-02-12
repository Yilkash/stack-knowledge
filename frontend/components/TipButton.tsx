import { cn } from '@/lib/utils';
import React, { useState } from 'react';
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
            <div className="flex gap-2 items-center animate-in slide-in-from-right-4 duration-200">
                {[1, 5, 10].map((amount) => (
                    <button
                        key={amount}
                        disabled={loading}
                        onClick={() => handleTip(amount)}
                        className={cn(
                            "px-4 py-1.5 rounded-full text-sm font-bold transition-all border",
                            "bg-green-500/10 text-green-600 border-green-200 hover:bg-green-500 hover:text-white hover:border-green-500",
                            "dark:bg-green-500/10 dark:text-green-400 dark:border-green-900/50 dark:hover:bg-green-500 dark:hover:text-white",
                            loading && "opacity-50 cursor-not-allowed"
                        )}
                    >
                        {amount} STX
                    </button>
                ))}
                <button
                    onClick={() => setShowOptions(false)}
                    className="ml-1 text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
                >
                    <span className="sr-only">Cancel</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
        );
    }

    return (
        <Button
            variant="outline"
            size="lg"
            onClick={() => setShowOptions(true)}
            className="items-center gap-2 border-green-200 text-green-600 hover:bg-green-50 dark:border-green-800/50 dark:text-green-400 dark:hover:bg-green-900/20 font-bold px-6"
            disabled={loading}
        >
            <span className="text-xl">❤️</span> {loading ? 'Processing...' : 'Tip Author'}
        </Button>
    );
}
