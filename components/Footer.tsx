import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-zinc-50 border-t border-zinc-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold text-zinc-900">StackKnowledge</span>
                        <p className="text-sm text-zinc-500 mt-2">© 2024 StackKnowledge. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">Twitter</Link>
                        <Link href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">GitHub</Link>
                        <Link href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">Discord</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
