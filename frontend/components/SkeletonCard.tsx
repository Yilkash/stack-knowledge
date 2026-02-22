export default function SkeletonCard() {
  return (
    <div className="p-8 bg-zinc-100 dark:bg-zinc-900 rounded-3xl animate-pulse h-80">
        <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-3/4 mb-4"></div>
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-full mb-2"></div>
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-5/6 mb-8"></div>
        <div className="h-12 bg-zinc-200 dark:bg-zinc-800 rounded-2xl w-full"></div>
    </div>
  );
}
