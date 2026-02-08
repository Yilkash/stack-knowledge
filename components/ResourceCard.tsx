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

export default function ResourceCard({ id, title, description, uploader, tips, onTip, onChat }: ResourceProps) {
    return (
        <Card className="flex flex-col p-6 transition-all hover:scale-[1.01] hover:shadow-2xl bg-white/80 h-full">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-zinc-900 line-clamp-1" title={title}>{title}</h3>
                    <p className="text-xs text-zinc-500 mt-1">Uploaded by <span className="font-mono">{uploader.slice(0, 6)}...{uploader.slice(-4)}</span></p>
                </div>
                <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-100">
                    {tips} STX Tips
                </div>
            </div>

            <p className="text-zinc-600 mb-6 line-clamp-3 text-sm flex-grow">{description}</p>

            <div className="flex bg-zinc-50/50 p-2 rounded-xl gap-2 mt-auto border border-zinc-100">
                <Button variant="primary" size="sm" onClick={onChat} className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 border-0">
                    Chat with AI
                </Button>
                <TipButton onTip={onTip} />
            </div>
        </Card>
    );
}
