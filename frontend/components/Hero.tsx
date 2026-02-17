import { APP_DESCRIPTION } from '@/lib/constants';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-background to-background dark:from-blue-950 dark:via-background dark:to-background opacity-50 dark:opacity-30"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6">
                        Check Exam Stress <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                            at the Door.
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4 text-xl text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto mb-10"
                >
                    {APP_DESCRIPTION}. Access verified past questions and handouts, and chat with our AI Study Buddy.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center gap-4"
                >
                    <Link href="/resources" className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 bg-blue-600 dark:bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30">
                        Start Learning
                    </Link>
                    <Link href="/upload" className="px-8 py-4 bg-background hover:bg-zinc-50 dark:hover:bg-zinc-800 text-foreground border border-input dark:border-zinc-800 rounded-full font-semibold transition-all shadow-sm hover:shadow-md">
                        Share & Earn STX
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
