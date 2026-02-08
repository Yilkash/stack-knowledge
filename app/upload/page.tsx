'use client';

import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import UploadModal from '@/components/UploadModal';

export default function UploadPage() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <main className="min-h-screen bg-zinc-50">
            <NavBar />
            <div className="pt-32 pb-20 flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-3xl font-bold text-zinc-900 mb-8">Share Knowledge, Earn Crypto</h1>
                <div className="relative z-10">
                    <UploadModal isOpen={isModalOpen} onClose={() => window.location.href = '/'} />
                </div>
            </div>
        </main>
    );
}
