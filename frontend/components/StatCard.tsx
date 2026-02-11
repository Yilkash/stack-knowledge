import { cn } from '@/lib/utils';
import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export default function StatCard({ label, value, icon, trend, className }: StatCardProps) {
  return (
    <div className={cn(
      "p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300",
      className
    )}>
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{label}</p>
        {icon && <span className="text-zinc-500 dark:text-zinc-400">{icon}</span>}
      </div>
      <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{value}</p>
      {trend && (
        <p className={cn(
          "text-sm mt-2 font-medium flex items-center gap-1",
          trend.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
        )}>
          {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
        </p>
      )}
    </div>
  );
}
