import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto px-6 lg:px-8 xl:px-10 max-w-[1280px] w-full", className)}>
      {children}
    </div>
  );
}
