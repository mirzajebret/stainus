import React from 'react';
import Card from './Card';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <Card className={cn("p-8 hover:scale-[1.02] transition-transform duration-200", className)}>
      <div className="w-12 h-12 bg-bg-soft rounded-2xl flex items-center justify-center text-primary mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-text-heading mb-3">{title}</h3>
      <p className="text-text-body">{description}</p>
    </Card>
  );
}
