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
      {label && <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">{label}</span>}
      <h2 className="text-3xl md:text-4xl lg:text-[36px] font-bold text-text-heading mb-4 tracking-tight">
        {title}
      </h2>
      {description && <p className="text-lg text-text-body max-w-2xl">{description}</p>}
    </div>
  );
}
