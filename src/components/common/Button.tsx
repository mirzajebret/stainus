import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  children,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover rounded-full",
    secondary: "bg-bg-main border border-primary text-primary hover:bg-bg-soft rounded-full",
    outline: "border border-border-main text-text-heading hover:bg-bg-soft rounded-full",
    ghost: "bg-transparent hover:bg-bg-soft text-text-heading rounded-md",
    link: "bg-transparent text-primary hover:underline underline-offset-4 px-0",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-6 text-base", // 48px height per DESIGN_SYSTEM
    lg: "h-14 px-8 text-lg",
  };

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    variant !== 'link' && sizes[size],
    className
  );

  const innerContent = (
    <>
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </>
  );

  if (href) {
    const { type, ...linkProps } = props as any; // Strip button-specific props
    return (
      <Link href={href} className={combinedClassName} {...linkProps}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {innerContent}
    </button>
  );
}
