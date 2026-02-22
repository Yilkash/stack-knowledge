export default function ActivityChart() {
  return (
    <div className="w-full h-48 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl flex items-end justify-between p-4 gap-2">
        {[40, 60, 45, 90, 65, 80, 55].map((h, i) => (
            <div key={i} className="flex-1 bg-primary/20 rounded-t-lg relative group" style={{ height: `${h}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {h * 10}
                </div>
            </div>
        ))}
    </div>
  );
}
