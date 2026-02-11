import Link from 'next/link';
import Button from '@/components/Button';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-950 px-4 text-center">
            <div className="bg-zinc-100 dark:bg-zinc-900/50 p-6 rounded-full mb-6 relative">
                <FileQuestion className="w-16 h-16 text-zinc-400 dark:text-zinc-500" />
                <div className="absolute -top-2 -right-2 bg-red-500 rounded-full w-6 h-6 border-4 border-zinc-50 dark:border-zinc-950" />
            </div>
            <h1 className="text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tighter">404</h1>
            <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300 mb-6">Page Not Found</h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-md text-lg">
                The resource or page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link href="/">
                <Button size="lg" className="px-8">Return Home</Button>
            </Link>
        </div>
    );
}
