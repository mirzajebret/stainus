import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn("bg-bg-main rounded-2xl border border-border-main shadow-sm overflow-hidden", className)}>
      {children}
    </div>
  );
}
