import Card from './Card';
import Button from './Button';
import TipButton from './TipButton';
import Link from 'next/link';
import { formatSTX } from '@/lib/utils';
import { Resource } from '@/types';

interface ResourceProps {
    resource: Resource;
}

/**
 * Card component for displaying resource summaries.
 * Includes interactive elements for tipping and details navigation.
 * 
 * @param {Object} props - Component props
 * @param {Resource} props.resource - The resource data to display
 */
export default function ResourceCard({ resource }: ResourceProps) {
    const { id, title, description, uploader, totalTips } = resource;

    return (
        <Card className="flex flex-col p-8 glass rounded-3xl border border-white/5 hover:border-primary/30 transition-all hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(14,165,233,0.1)] h-full group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
                <div className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-primary/20">
                    {formatSTX(totalTips)} STX
                </div>
            </div>

            <div className="mb-6">
                <Link href={`/resources/${id}`}>
                    <h3 className="text-2xl font-black text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-tight mb-3" title={title}>
                        {title}
                    </h3>
                </Link>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-mono text-[10px] text-primary font-bold">
                        {uploader.slice(2, 4)}
                    </div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-tighter">
                        BY <span className="text-foreground">{uploader.slice(0, 6)}...{uploader.slice(-4)}</span>
                    </p>
                </div>
            </div>

            <p className="text-muted-foreground mb-8 line-clamp-3 text-sm font-medium leading-relaxed italic">{description}</p>

            <div className="flex gap-3 mt-auto">
                <Link href={`/resources/${id}`} className="flex-[2]">
                    <Button variant="default" size="lg" className="w-full rounded-2xl bg-primary text-primary-foreground font-black shadow-lg hover:shadow-primary/20">
                        OPEN
                    </Button>
                </Link>
                <div className="flex-1">
                    <TipButton resourceId={id} />
                </div>
            </div>
        </Card>
    );
}
