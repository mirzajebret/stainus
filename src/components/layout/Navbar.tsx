"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Container from './Container';
import Button from '../common/Button';

const links = [
  { href: '/', label: 'Beranda' },
  { href: '/profile', label: 'Profil' },
  { href: '/programs', label: 'Program Studi' },
  { href: '/admissions', label: 'PMB' },
  { href: '/news', label: 'Berita' },
  { href: '/contact', label: 'Kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 h-[80px] transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border-main/50" : "bg-bg-main"
    )}>
      <Container className="h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <Image src="/images/LOGO-STAINUS-GARUT.png" alt="Logo STAINUS" width={40} height={40} className="object-contain" />
          <span className="font-extrabold text-2xl text-text-heading tracking-tight">STAINUS</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          {links.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-lg font-medium text-sm transition-colors",
                pathname === link.href 
                  ? "text-primary bg-primary/5" 
                  : "text-text-body hover:text-primary hover:bg-bg-soft"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-4 pl-4 border-l border-border-main">
            <Button size="sm">Daftar Sekarang</Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-50 p-2 text-text-heading hover:bg-bg-soft rounded-md transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Drawer */}
      <div className={cn(
        "fixed inset-0 bg-bg-main z-40 transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-24 px-6",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col gap-2">
          {links.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-bold py-4 px-4 rounded-xl transition-colors",
                pathname === link.href ? "text-primary bg-primary/5" : "text-text-heading hover:bg-bg-soft"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button className="mt-8 w-full" size="lg">Daftar Sekarang</Button>
        </div>
      </div>
    </nav>
  );
}
