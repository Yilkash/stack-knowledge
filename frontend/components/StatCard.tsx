interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function StatCard({ label, value, icon, trend }: StatCardProps) {
  return (
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-black uppercase tracking-tighter text-muted-foreground">{label}</p>
        {icon && <div className="text-primary">{icon}</div>}
      </div>
      <p className="text-3xl font-black text-foreground tabular-nums">{value}</p>
      {trend && (
        <p className={`text-xs mt-2 font-bold ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}% <span className="text-muted-foreground font-medium uppercase ml-1">vs last month</span>
        </p>
      )}
    </div>
  );
}
