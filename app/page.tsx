import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <Hero />

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900">Why StackKnowledge?</h2>
            <p className="mt-4 text-zinc-600">The first decentralized knowledge base that pays you to learn.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Verified Resources"
              description="Access past questions and handouts verified by the community on the Stacks blockchain."
              icon={<span className="text-2xl">📚</span>}
            />
            <FeatureCard
              title="AI Study Buddy"
              description="Ask questions and get answers strictly from your course materials. No hallucinations."
              icon={<span className="text-2xl">🤖</span>}
            />
            <FeatureCard
              title="Earn Crypto"
              description="Upload high-quality notes and earn STX tips from students who find them helpful."
              icon={<span className="text-2xl">💰</span>}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
