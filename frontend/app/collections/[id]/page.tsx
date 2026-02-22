"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ResourceCard from '@/components/ResourceCard';
import { useParams } from 'next/navigation';

export default function CollectionDetail() {
    const params = useParams();
    return (
        <main className="min-h-screen bg-background text-foreground">
            <NavBar />
            <div className="max-w-7xl mx-auto px-4 pt-32 pb-20">
                <div className="mb-12 border-b-4 border-primary pb-8">
                    <h1 className="text-6xl font-black tracking-tighter uppercase mb-2">Collection: {params.id}</h1>
                    <p className="text-muted-foreground font-medium text-xl">Curated list of essential study materials.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Mock Resources */}
                    {[1, 2, 3].map(id => (
                        <div key={id} className="h-64 bg-zinc-100 dark:bg-zinc-900 rounded-3xl animate-pulse"></div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
