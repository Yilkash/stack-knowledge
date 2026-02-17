import { cn } from '@/lib/utils';
import React from 'react';

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
            "p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300",
            className
        )}>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
        </div>
    );
}
