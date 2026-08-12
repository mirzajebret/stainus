import React from 'react';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
  className?: string;
}

export default function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-dashed border-border-main bg-bg-soft", className)}>
      <div className="text-text-muted mb-4 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-text-heading mb-2">{title}</h3>
      <p className="text-text-body mb-6 max-w-md">{description}</p>
      {action}
    </div>
  );
}
