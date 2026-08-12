import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { cn } from '@/lib/utils';

interface NewsCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
  className?: string;
}

export default function NewsCard({ id, title, description, date, category, imageUrl, featured = false, className }: NewsCardProps) {
  return (
    <Link href={`/news`} className="block group">
      <Card className={cn("p-0 overflow-hidden h-full flex transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 border border-border-main/60", 
        featured ? "flex-col md:flex-row" : "flex-col",
        className
      )}>
        <div className={cn("relative overflow-hidden", featured ? "aspect-video md:aspect-auto md:w-1/2" : "aspect-video")}>
          <Image src={imageUrl} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className={cn("p-6 md:p-8 flex flex-col flex-1", featured ? "md:p-12 justify-center" : "")}>
          <div className="flex items-center gap-4 mb-5">
            <Badge>{category}</Badge>
            <div className="flex items-center text-sm font-medium text-text-muted">
              <Calendar size={14} className="mr-1.5" />
              {date}
            </div>
          </div>
          <h3 className={cn("font-bold text-text-heading mb-4 group-hover:text-primary transition-colors tracking-tight", featured ? "text-2xl md:text-4xl leading-tight" : "text-xl leading-snug")}>
            {title}
          </h3>
          <p className={cn("text-text-body flex-1 leading-relaxed", featured ? "text-lg mb-8" : "mb-8 line-clamp-3")}>
            {description}
          </p>
          <div className="flex items-center text-primary font-semibold text-sm mt-auto tracking-wide">
            Baca Artikel <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
