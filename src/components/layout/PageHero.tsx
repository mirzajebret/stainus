import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  description: string;
  className?: string;
  breadcrumbs?: BreadcrumbItem[];
  badge?: string;
}

export default function PageHero({ title, description, className, breadcrumbs, badge }: PageHeroProps) {
  return (
    <div className={cn(
      "relative bg-secondary text-white overflow-hidden",
      "pt-28 pb-16 md:pt-32 md:pb-20",
      className
    )}>
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary-deep" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <Container className="relative z-10">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-6 text-white/60 text-sm">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home size={13} />
              <span>Beranda</span>
            </Link>
            {breadcrumbs.map((item, i) => (
              <React.Fragment key={i}>
                <ChevronRight size={13} className="opacity-40" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link>
                ) : (
                  <span className="text-white/90 font-medium">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {badge && (
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {badge}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white mb-4 tracking-tight leading-[1.08]">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
          {description}
        </p>
      </Container>
    </div>
  );
}
