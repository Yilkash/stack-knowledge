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
            <div className="flex gap-2">
                <button onClick={() => onTip(1)} className="px-3 py-1 bg-green-100 text-green-700 rounded-full hover:bg-green-200 text-sm font-medium">1 STX</button>
                <button onClick={() => onTip(5)} className="px-3 py-1 bg-green-100 text-green-700 rounded-full hover:bg-green-200 text-sm font-medium">5 STX</button>
                <button onClick={() => setShowOptions(false)} className="text-zinc-400 hover:text-zinc-600">x</button>
            </div>
        );
    }

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={() => setShowOptions(true)}
            className="items-center gap-2 border-green-200 text-green-700 hover:bg-green-50"
            disabled={isLoading}
        >
            <span>❤️</span> {isLoading ? 'Sending...' : 'Tip Author'}
        </Button>
    );
}
