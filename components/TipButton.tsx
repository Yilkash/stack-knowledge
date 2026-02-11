import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import Button from './Button';

interface TipButtonProps {
    onTip: (amount: number) => void;
    isLoading?: boolean;
}

export default function TipButton({ onTip, isLoading = false }: TipButtonProps) {
    const [showOptions, setShowOptions] = useState(false);

    if (showOptions) {
        return (
            <div className="flex gap-2 items-center">
                <button
                    onClick={() => onTip(1)}
                    className={cn(
                        "px-3 py-1 rounded-full text-sm font-medium transition-colors",
                        "bg-green-100 text-green-700 hover:bg-green-200",
                        "dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50"
                    )}
                >
                    1 STX
                </button>
                <button
                    onClick={() => onTip(5)}
                    className={cn(
                        "px-3 py-1 rounded-full text-sm font-medium transition-colors",
                        "bg-green-100 text-green-700 hover:bg-green-200",
                        "dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50"
                    )}
                >
                    5 STX
                </button>
                <button
                    onClick={() => setShowOptions(false)}
                    className="ml-1 text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
                >
                    x
                </button>
            </div>
        );
    }

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={() => setShowOptions(true)}
            className="items-center gap-2 border-green-200 text-green-700 hover:bg-green-50 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/20"
            disabled={isLoading}
        >
            <span>❤️</span> {isLoading ? 'Sending...' : 'Tip Author'}
        </Button>
    );
}
