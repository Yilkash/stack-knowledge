import Link from 'next/link';
import React from 'react';
import Container from './Container';
import Logo from './Logo';

export default function Footer() {
    return (
        <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-12 transition-colors duration-300">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Logo />
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">© 2024 StackKnowledge. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Twitter</Link>
                        <Link href="#" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</Link>
                        <Link href="#" className="text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Discord</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
