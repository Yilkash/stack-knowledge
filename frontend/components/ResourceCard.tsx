import React from 'react';
import Card from './Card';
import Button from './Button';
import TipButton from './TipButton';
import Link from 'next/link';
import { formatSTX } from '@/lib/utils';
import { Resource } from '@/types';

interface ResourceProps {
    resource: Resource;
}

/**
 * Card component for displaying resource summaries.
 * Includes interactive elements for tipping and details navigation.
 */
export default function ResourceCard({ resource }: ResourceProps) {
    const { id, title, description, uploader, totalTips } = resource;

    return (
        <Card className="flex flex-col p-6 transition-all hover:scale-[1.01] hover:shadow-xl bg-white dark:bg-zinc-900 h-full border-border group">
            <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                    <Link href={`/resources/${id}`}>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 line-clamp-1 group-hover:text-blue-600 transition-colors" title={title}>
                            {title}
                        </h3>
                    </Link>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                        Uploaded by <span className="font-mono">{uploader.slice(0, 6)}...{uploader.slice(-4)}</span>
                    </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-100 dark:border-green-800">
                    {formatSTX(totalTips)} STX
                </div>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3 text-sm flex-grow">{description}</p>

            <div className="flex bg-zinc-50 dark:bg-zinc-950 p-2 rounded-xl gap-2 mt-auto border border-zinc-100 dark:border-zinc-800">
                <Link href={`/resources/${id}`} className="flex-1">
                    <Button variant="default" size="sm" className="w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900">
                        View & Chat
                    </Button>
                </Link>
                <TipButton resourceId={id} />
            </div>
        </Card>
    );
}
