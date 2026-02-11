'use client';

import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import UploadModal from '@/components/UploadModal';

export default function UploadPage() {
    const [isModalOpen] = useState(true);

    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
            <NavBar />

            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-zinc-50 to-zinc-50 dark:from-blue-900/20 dark:via-zinc-950 dark:to-zinc-950 opacity-70"></div>

            <div className="pt-32 pb-20 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                    Share Knowledge, Earn Crypto
                </h1>
                <div className="relative z-10 w-full max-w-lg">
                    <UploadModal isOpen={isModalOpen} onClose={() => window.location.href = '/'} />
                </div>
            </div>
        </main>
    );
}
