import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { ModeToggle } from './ModeToggle';
import ConnectWallet from './ConnectWallet';
import Container from './Container';
import Logo from './Logo';
import { cn } from '@/lib/utils';

export default function NavBar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const navLinks = [
        { href: '/resources', label: 'Resources' },
        { href: '/upload', label: 'Upload' },
        { href: '/profile', label: 'Profile' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background/60 backdrop-blur-xl border-b border-white/5">
            <Container>
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="hover:scale-105 transition-transform">
                            <Logo />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "px-5 py-2 rounded-full text-sm font-bold transition-all hover:bg-white/5",
                                        pathname === link.href
                                            ? "text-primary bg-primary/10"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="w-[1px] h-6 bg-white/10 mx-4" />
                            <div className="flex items-center gap-4">
                                <ConnectWallet />
                                <ModeToggle />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ModeToggle />
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors bg-white/5 rounded-xl"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
                    >
                        <Container>
                            <div className="px-4 py-8 space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            "block px-6 py-4 rounded-2xl text-lg font-bold transition-all",
                                            pathname === link.href
                                                ? "text-primary bg-primary/10"
                                                : "text-foreground hover:bg-white/5"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="pt-4 px-2">
                                    <ConnectWallet />
                                </div>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
