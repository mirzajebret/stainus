import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

interface PageHeroProps {
  title: string;
  description: string;
  className?: string;
}

export default function PageHero({ title, description, className }: PageHeroProps) {
  return (
    <div className={cn("bg-bg-soft py-16 md:py-24 border-b border-border-main", className)}>
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-[48px] font-bold text-text-heading mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-text-body">
            {description}
          </p>
        </div>
      </Container>
    </div>
  );
}
