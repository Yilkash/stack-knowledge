import { cn } from '@/lib/utils';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
}

/**
 * Component for displaying key platform features with an icon.
 * Used primarily on the home page hero section.
 * 
 * @param {FeatureCardProps} props - The component props
 */
export default function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
    return (
        <div className={cn(
            "p-8 glass rounded-3xl border border-white/10 shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 group",
            className
        )}>
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed italic">{description}</p>
        </div>
    );
}
