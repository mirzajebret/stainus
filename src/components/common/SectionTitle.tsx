import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  description?: string;
  label?: string;
  className?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({ title, description, label, className, align = 'left' }: SectionTitleProps) {
  return (
    <div className={cn("mb-12", align === 'center' ? "mx-auto text-center" : "", className)}>
      {label && (
        <div className={cn("flex items-center gap-2 mb-3", align === 'center' && "justify-center")}>
          <span className="w-8 h-px bg-primary" />
          <span className="text-primary font-bold tracking-widest uppercase text-xs">{label}</span>
          <span className="w-8 h-px bg-primary" />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[38px] font-bold text-text-heading mb-4 tracking-tight leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className={cn("text-lg text-text-muted leading-relaxed", align === 'center' ? "max-w-2xl mx-auto" : "max-w-2xl")}>
          {description}
        </p>
      )}
    </div>
  );
}
