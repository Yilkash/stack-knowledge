import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

'use client';

/**
 * Intelligent AI Chat interface for resource interrogation and knowledge synthesis.
 */
export default function ChatPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <NavBar />

            <section className="py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
                    KNOWLEDGE <span className="text-primary italic">SYNTHESIS</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl font-medium italic mb-12">
                    Harness the power of community-verified intelligence through our advanced AI interrogation protocols.
                </p>

                <div className="w-full max-w-4xl glass rounded-[40px] p-12 lg:p-20 border border-white/5 shadow-2xl flex flex-col items-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-[32px] flex items-center justify-center text-primary text-4xl mb-8 animate-pulse">
                        🤖
                    </div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Neural Interface Initializing</h2>
                    <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs mb-12">Protocol Version 2.0.4-BETA</p>

                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-12">
                        <div className="h-full bg-primary w-1/3 animate-progress"></div>
                    </div>

                    <button className="px-12 py-5 bg-foreground text-background rounded-[24px] font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all">
                        Authenticate to Sync
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
