'use client';

import { useEffect } from 'react';
import Button from '@/components/Button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-950 px-4 text-center">
            <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-full mb-6">
                <AlertTriangle className="w-16 h-16 text-red-500 dark:text-red-400" />
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Something went wrong!</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md text-lg">
                An unexpected error has occurred. Our team has been notified.
            </p>
            <div className="flex gap-4">
                <Button size="lg" onClick={() => reset()}>Try again</Button>
                <Button size="lg" variant="outline" onClick={() => window.location.href = '/'}>
                    Go Home
                </Button>
            </div>
        </div>
    );
}
/* Activity Surge 6: Wed 20 May 2026 06:05:03 WAT */
/* Activity Surge 10: Wed 20 May 2026 06:05:03 WAT */
