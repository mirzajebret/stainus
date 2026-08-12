import React from 'react';
import { cn } from '@/lib/utils';

export default function Divider({ className }: { className?: string }) {
  return <hr className={cn("border-t border-border-main my-8", className)} />;
}
