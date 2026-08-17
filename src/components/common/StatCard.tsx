import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function StatCard({ number, label, icon, className }: StatCardProps) {
  return (
    <div className={cn(
      "group relative bg-white rounded-2xl border border-border-main hover:border-primary/20 p-8",
      "flex flex-col items-center justify-center text-center",
      "hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300",
      className
    )}>
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {icon && (
        <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-2xl text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      )}
      <div className="text-4xl md:text-[44px] font-extrabold text-primary mb-1.5 tracking-tight">
        {number}
      </div>
      <div className="text-text-body font-medium text-sm">{label}</div>
    </div>
  );
}
