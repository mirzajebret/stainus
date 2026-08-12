import React from 'react';
import Image from 'next/image';
import Card from './Card';
import { cn } from '@/lib/utils';

interface ImageCardProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}

export default function ImageCard({ src, alt, caption, className }: ImageCardProps) {
  return (
    <Card className={cn("p-0 group cursor-pointer", className)}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-4 bg-bg-main border-t border-border-main">
        <p className="text-sm font-medium text-text-body">{caption}</p>
      </div>
    </Card>
  );
}
