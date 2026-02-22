"use client";

import NavBar from '@/components/NavBar';
import Button from '@/components/Button';
import TipButton from '@/components/TipButton';
import ReviewCard from '@/components/ReviewCard';
import { useParams } from 'next/navigation';
import { Download, Share2, Shield } from 'lucide-react';

export default function ResourceDetail() {
    const params = useParams();

    return (
        <main className="min-h-screen bg-background">
            <NavBar />
            <div className="max-w-5xl mx-auto px-4 pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-black uppercase rounded-full tracking-widest">General</span>
                                <span className="flex items-center gap-1 text-[10px] font-black uppercase text-green-500 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                                    <Shield size={10} /> Verified
                                </span>
                            </div>
                            <h1 className="text-5xl font-black tracking-tighter mb-4">Resource Details - {params.id}</h1>
                            <p className="text-muted-foreground text-lg italic leading-relaxed">
                                This is a detailed view of the educational resource. Mock data for demonstration.
                            </p>
                        </div>

                        <div className="h-96 bg-zinc-100 dark:bg-zinc-900 rounded-3xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-12">
                             <p className="text-zinc-400 font-bold">PDF Preview Placeholder</p>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-2xl font-black tracking-tighter uppercase mb-6">Student Reviews</h2>
                            <div className="space-y-4">
                                <ReviewCard reviewer="SP1...5" rating={5} comment="This saved my life during finals!" date="2 DAYS AGO" />
                                <ReviewCard reviewer="SP3...9" rating={4} comment="Clear and concise notes." date="1 WEEK AGO" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="p-8 glass rounded-3xl border border-white/10 sticky top-32">
                            <div className="mb-8">
                                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Total Tips Earned</p>
                                <p className="text-4xl font-black tabular-nums">1.5k STX</p>
                            </div>
                            
                            <div className="flex flex-col gap-3">
                                <Button size="lg" className="rounded-2xl gap-2 font-black shadow-lg">
                                    <Download size={18} /> DOWNLOAD PDF
                                </Button>
                                <TipButton resourceId={Number(params.id)} />
                                <Button variant="outline" size="lg" className="rounded-2xl gap-2 font-black border-2">
                                    <Share2 size={18} /> SHARE
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
