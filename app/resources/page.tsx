import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ResourceCard from '@/components/ResourceCard';

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-zinc-50">
            <NavBar />

            <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-zinc-900 mb-8">Latest Resources</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Mock Data for now */}
                    <ResourceCard
                        id={1}
                        title="Introduction to Linear Algebra"
                        description="Comprehensive notes covering matrices, determinants, and vector spaces. Perfect for first-year engineering students."
                        uploader="SP3...T21"
                        tips={120}
                        onTip={() => { }}
                        onChat={() => { }}
                    />
                    <ResourceCard
                        id={2}
                        title="Macroeconomics Finals 2023"
                        description="Past question paper with detailed solutions and examiner comments."
                        uploader="SP1...A45"
                        tips={85}
                        onTip={() => { }}
                        onChat={() => { }}
                    />
                    <ResourceCard
                        id={3}
                        title="Organic Chemistry - Reactions"
                        description="Handwritten cheat sheet for all major reaction mechanisms."
                        uploader="SP2...B99"
                        tips={250}
                        onTip={() => { }}
                        onChat={() => { }}
                    />
                </div>
            </div>

            <Footer />
        </main>
    );
}
