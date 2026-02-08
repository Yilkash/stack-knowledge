```
import Link from 'next/link';
import React from 'react';

import ConnectWallet from './ConnectWallet';

export default function NavBar() {
    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-zinc-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                            StackKnowledge
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8 items-center">
                            <Link href="/resources" className="text-zinc-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Resources
                            </Link>
                            <Link href="/upload" className="text-zinc-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Upload
                            </Link>
                            <ConnectWallet />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
```
