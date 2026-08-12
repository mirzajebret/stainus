import React from 'react';
import Card from './Card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function StatCard({ number, label, icon, className }: StatCardProps) {
  return (
    <Card className={cn("p-8 flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-transform duration-200", className)}>
      {icon && <div className="text-primary mb-4">{icon}</div>}
      <div className="text-4xl md:text-[44px] font-extrabold text-primary mb-2 tracking-tight">{number}</div>
      <div className="text-text-body font-medium">{label}</div>
    </Card>
  );
}
