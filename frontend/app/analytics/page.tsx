"use client";

import NavBar from '@/components/NavBar';
import StatCard from '@/components/StatCard';
import { BarChart3, Users, FileText, Gift } from 'lucide-react';

export default function AnalyticsPage() {
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
            <NavBar />
            <div className="max-w-7xl mx-auto px-4 pt-32 pb-20">
                <div className="mb-12">
                    <h1 className="text-5xl font-black tracking-tighter uppercase mb-2">Platform <span className="text-primary">Insights</span></h1>
                    <p className="text-muted-foreground font-medium">Real-time statistics from the Stacks blockchain.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard label="Total Resources" value="1,284" icon={<FileText size={20} />} trend={{ value: 8, isPositive: true }} />
                    <StatCard label="Active Students" value="4,560" icon={<Users size={20} />} trend={{ value: 12, isPositive: true }} />
                    <StatCard label="Total Tips" value="45.2k" icon={<Gift size={20} />} trend={{ value: 15, isPositive: true }} />
                    <StatCard label="Growth Rate" value="24%" icon={<BarChart3 size={20} />} trend={{ value: 2, isPositive: true }} />
                </div>
            </div>
        </main>
    );
}
