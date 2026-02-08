import Link from 'next/link';
import React from 'react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-white to-white opacity-50"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6">
                    Check Exam Stress <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                        at the Door.
                    </span>
                </h1>
                <p className="mt-4 text-xl text-zinc-600 max-w-2xl mx-auto mb-10">
                    Access verified past questions and handouts. Ask our AI study buddy questions strictly based on your course materials.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/resources" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30">
                        Start Learning
                    </Link>
                    <Link href="/upload" className="px-8 py-4 bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 rounded-full font-semibold transition-all shadow-sm hover:shadow-md">
                        Share & Earn STX
                    </Link>
                </div>
            </div>
        </section>
    );
}
