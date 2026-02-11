import { Skeleton } from "./Skeleton"
import Card from "./Card"

export default function ResourceCardSkeleton() {
    return (
        <Card className="flex flex-col p-6 h-[280px] w-full bg-white/80 dark:bg-zinc-900/80 border-border">
            <div className="flex justify-between items-start mb-4">
                <div className="space-y-2">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-6 w-20 rounded-full" />
            </div>

            <div className="space-y-2 mt-2 flex-grow">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
            </div>

            <div className="flex gap-2 mt-auto pt-4">
                <Skeleton className="h-10 flex-1 rounded-full" />
                <Skeleton className="h-10 w-24 rounded-full" />
            </div>
        </Card>
    )
}
