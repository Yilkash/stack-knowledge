import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import LoadingSpinner from './LoadingSpinner';

/**
 * Core Button component with modular variants and loading state support.
 * Follows the project's design system for consistent interactivity.
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    children?: ReactNode;
    isLoading?: boolean;
}

const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700/90 focus:ring-blue-500 shadow-md hover:shadow-lg transition-all",
    primary: "bg-blue-600 text-white hover:bg-blue-700/90 focus:ring-blue-500 shadow-md hover:shadow-lg transition-all",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 focus:ring-zinc-500",
    outline: "border border-zinc-200 bg-transparent hover:bg-zinc-50 text-zinc-900 focus:ring-zinc-500",
    ghost: "bg-transparent hover:bg-zinc-100 text-zinc-700 focus:ring-zinc-500",
    destructive: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
};

const sizes = {
    sm: "h-9 px-3 text-sm rounded-md",
    md: "h-11 px-6 text-sm rounded-full",
    lg: "h-12 px-8 text-base rounded-full",
    icon: "h-10 w-10 p-0 rounded-full",
};

export default function Button({
    variant = 'default',
    size = 'md',
    className,
    children,
    isLoading,
    disabled,
    ...props
}: ButtonProps) {

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
                variants[variant],
                sizes[size],
                className
            )}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <LoadingSpinner className="mr-2 h-4 w-4" />}
            {children}
        </button>
    );
}
