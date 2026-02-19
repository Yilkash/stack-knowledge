import Link from 'next/link';
import { motion } from 'framer-motion';
import { APP_DESCRIPTION } from '@/lib/constants';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full opacity-50 dark:opacity-20 animate-pulse"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-8 leading-[1.1]">
                        Decentralized <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600">
                            Knowledge.
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
                >
                    The premier platform for students to share, learn, and earn. Verified exam resources, strictly from the source.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row justify-center gap-6"
                >
                    <Link href="/resources" className="group relative px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)] overflow-hidden">
                        <span className="relative z-10">Start Learning</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </Link>
                    <Link href="/upload" className="px-10 py-5 glass text-foreground rounded-2xl font-bold text-lg transition-all hover:bg-white/10 hover:scale-105 border border-white/10">
                        Share & Earn STX
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
