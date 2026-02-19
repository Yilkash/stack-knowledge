"use client";

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

/**
 * Component for displaying key metrics and statistics.
 * Includes support for icons and trend indicators (positive/negative).
 * 
 * @param {StatCardProps} props - The component props
 */
export default function StatCard({ label, value, icon, trend, className }: StatCardProps) {
  return (
    <div className={cn(
      "p-8 glass rounded-[32px] border border-white/5 hover:border-primary/30 transition-all hover:scale-[1.05] group",
      className
    )}>
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
        {trend && (
          <div className={cn(
            "px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border",
            trend.isPositive ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'
          )}>
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-4xl font-black tracking-tight text-foreground">{value}</p>
        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
