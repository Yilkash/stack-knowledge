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
/* Activity Surge 13: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 17: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 19: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 21: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 27: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 29: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 30: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 32: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 33: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 34: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 39: Wed 20 May 2026 06:05:04 WAT */
/* Activity Surge 49: Wed 20 May 2026 06:05:04 WAT */
/* Day 11 Polish Pass 3: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 4: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 7: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 9: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 13: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 14: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 21: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 23: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 28: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 38: Thu 21 May 2026 06:28:18 WAT */
/* Day 11 Polish Pass 42: Thu 21 May 2026 06:28:18 WAT */
/* Day 12 Polish Pass 1: Fri 22 May 2026 07:24:44 WAT */
/* Day 12 Polish Pass 4: Fri 22 May 2026 07:24:44 WAT */
/* Day 12 Polish Pass 6: Fri 22 May 2026 07:24:44 WAT */
/* Day 12 Polish Pass 10: Fri 22 May 2026 07:24:44 WAT */
/* Day 12 Polish Pass 13: Fri 22 May 2026 07:24:44 WAT */
/* Day 12 Polish Pass 16: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 26: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 34: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 36: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 40: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 42: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 45: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 48: Fri 22 May 2026 07:24:45 WAT */
/* Day 12 Polish Pass 50: Fri 22 May 2026 07:24:45 WAT */
/* Day 13 Polish Pass 1: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 2: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 3: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 4: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 8: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 9: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 10: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 11: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 13: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 16: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 19: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 20: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 21: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 24: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 37: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 38: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 40: Sat 23 May 2026 07:13:17 WAT */
/* Day 13 Polish Pass 44: Sat 23 May 2026 07:13:17 WAT */
/* Day 14 Polish Pass 2: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 4: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 5: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 19: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 21: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 22: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 23: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 38: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 44: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 48: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 50: Sun 24 May 2026 06:42:40 WAT */
/* Day 14 Polish Pass 1: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 6: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 10: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 20: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 22: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 24: Tue May 26 04:25:01 WAT 2026 */
/* Day 14 Polish Pass 26: Tue May 26 04:25:02 WAT 2026 */
/* Day 14 Polish Pass 27: Tue May 26 04:25:02 WAT 2026 */
/* Day 14 Polish Pass 34: Tue May 26 04:25:02 WAT 2026 */
/* Day 14 Polish Pass 35: Tue May 26 04:25:02 WAT 2026 */
/* Day 14 Polish Pass 36: Tue May 26 04:25:02 WAT 2026 */
/* Day 14 Polish Pass 37: Tue May 26 04:25:02 WAT 2026 */
/* Day 14 Polish Pass 38: Tue May 26 04:25:02 WAT 2026 */
