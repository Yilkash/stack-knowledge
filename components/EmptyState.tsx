import { cn } from "@/lib/utils";
import { SearchX } from "lucide-react";
import Button from "./Button";

interface EmptyStateProps {
    title?: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
    className?: string;
}

export default function EmptyState({
    title = "No results found",
    description = "Try adjusting your search or filters to find what you're looking for.",
    actionLabel,
    onAction,
    className,
}: EmptyStateProps) {
    return (
        <div className={cn("flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-500", className)}>
            <div className="bg-zinc-100 dark:bg-zinc-900/50 p-4 rounded-full mb-4">
                <SearchX className="w-12 h-12 text-zinc-400 dark:text-zinc-500" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {title}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mb-6">
                {description}
            </p>
            {actionLabel && onAction && (
                <Button onClick={onAction} variant="outline">
                    {actionLabel}
                </Button>
            )}
        </div>
    );
}
