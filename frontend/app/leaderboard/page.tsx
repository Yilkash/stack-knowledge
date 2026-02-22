"use client";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import { formatSTX } from '@/lib/utils';

const MOCK_LEADERS = [
    { address: "SP1...A1", reputation: 1200, uploads: 45, tips: 5600 },
    { address: "SP2...B2", reputation: 980, uploads: 32, tips: 4200 },
    { address: "SP3...C3", reputation: 850, uploads: 28, tips: 3100 },
];

export default function LeaderboardPage() {
    return (
        <main className="min-h-screen bg-background">
            <NavBar />
            <div className="max-w-4xl mx-auto px-4 pt-32 pb-20">
                <h1 className="text-5xl font-black tracking-tighter uppercase mb-12 text-center">Platform <span className="text-primary">Leaders</span></h1>
                
                <div className="space-y-4">
                    {MOCK_LEADERS.map((leader, i) => (
                        <Card key={i} className="flex items-center gap-6 p-6 glass hover:scale-[1.01] transition-all">
                            <span className="text-4xl font-black text-primary/20 w-12">{i + 1}</span>
                            <div className="flex-1">
                                <p className="font-black text-foreground">{leader.address}</p>
                                <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{leader.uploads} UPLOADS</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xl font-black text-foreground">{leader.reputation}</p>
                                <p className="text-[10px] text-primary font-bold uppercase">REPUTATION</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
