import { cn } from '@/lib/utils';
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

/**
 * Generic Card container component with glassmorphism effects.
 * Acts as a base for most content sections and interactive elements.
 * 
 * @param {CardProps} props - The component props
 */
export default function Card({ children, className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-white/70 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-white/80",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
