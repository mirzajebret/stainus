import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Card from '../common/Card';
import { cn } from '@/lib/utils';

interface ProgramCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  className?: string;
}

export default function ProgramCard({ id, name, description, imageUrl, className }: ProgramCardProps) {
  return (
    <Link href={`/programs`} className="block group">
      <Card className={cn("p-0 overflow-hidden h-full flex flex-col group-hover:scale-[1.02] transition-transform duration-300 group-hover:shadow-md border border-border-main/60", className)}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={imageUrl} alt={name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-text-heading mb-3 group-hover:text-primary transition-colors tracking-tight">{name}</h3>
          <p className="text-text-body mb-8 flex-1 leading-relaxed">{description}</p>
          <div className="flex items-center text-primary font-semibold text-sm mt-auto tracking-wide">
            Pelajari Lebih Lanjut <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
