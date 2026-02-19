import Link from 'next/link';
import Container from './Container';
import Logo from './Logo';
import { SOCIAL_LINKS, APP_NAME } from '@/lib/constants';

export default function Footer() {
    return (
        <footer className="bg-background border-t border-white/5 py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <Logo />
                        <p className="text-muted-foreground mt-6 max-w-sm font-medium leading-relaxed">
                            Building the future of educational resource sharing on the Stacks blockchain. Learn, share, and earn together.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-foreground font-black uppercase tracking-widest text-sm mb-6">Links</h4>
                        <div className="flex flex-col space-y-4 font-bold text-muted-foreground">
                            <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
                            <Link href="/upload" className="hover:text-primary transition-colors">Upload</Link>
                            <Link href="/profile" className="hover:text-primary transition-colors">Profile</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-foreground font-black uppercase tracking-widest text-sm mb-6">Social</h4>
                        <div className="flex flex-col space-y-4 font-bold text-muted-foreground">
                            <Link href={SOCIAL_LINKS.twitter} target="_blank" className="hover:text-primary transition-colors">Twitter</Link>
                            <Link href={SOCIAL_LINKS.github} target="_blank" className="hover:text-primary transition-colors">GitHub</Link>
                            <Link href={SOCIAL_LINKS.discord} target="_blank" className="hover:text-primary transition-colors">Discord</Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-muted-foreground">
                    <p>© 2026 {APP_NAME}. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link href="/terms" className="hover:text-foreground">Terms</Link>
                        <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
