import React from 'react';
import Card from './Card';
import Button from './Button';
import TipButton from './TipButton';

interface ResourceProps {
    id: number;
    title: string;
    description: string;
    uploader: string;
    tips: number;
    onTip: (amount: number) => void;
    onChat: () => void;
}

export default function ResourceCard({ title, description, uploader, tips, onTip, onChat }: ResourceProps) {
    return (
        <Card className="flex flex-col p-6 transition-all hover:scale-[1.01] hover:shadow-2xl bg-white/80 dark:bg-zinc-900/80 h-full border-border">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 line-clamp-1" title={title}>{title}</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Uploaded by <span className="font-mono">{uploader.slice(0, 6)}...{uploader.slice(-4)}</span></p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-100 dark:border-green-800">
                    {tips} STX Tips
                </div>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3 text-sm flex-grow">{description}</p>

            <div className="flex bg-zinc-50/50 dark:bg-zinc-800/50 p-2 rounded-xl gap-2 mt-auto border border-zinc-100 dark:border-zinc-700">
                <Button variant="primary" size="sm" onClick={onChat} className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 border-0 hover:from-blue-700 hover:to-indigo-700">
                    Chat with AI
                </Button>
                <TipButton onTip={onTip} />
            </div>
        </Card>
    );
}
