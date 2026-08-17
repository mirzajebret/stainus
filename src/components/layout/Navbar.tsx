"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Container from './Container';
import Button from '../common/Button';

const IconInstagram = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
const IconFacebook = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const IconYoutube = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);


const links = [
  { href: '/', label: 'Beranda' },
  {
    href: '/profile', label: 'Profil', children: [
      { href: '/profile#visi-misi', label: 'Visi & Misi' },
      { href: '/profile#sejarah', label: 'Sejarah' },
      { href: '/profile#struktur', label: 'Struktur Organisasi' },
    ]
  },
  { href: '/programs', label: 'Program Studi' },
  { href: '/admissions', label: 'PMB' },
  { href: '/news', label: 'Berita' },
  { href: '/contact', label: 'Kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* ── LAYER 1 : Contact Info Bar ── */}
      <div className="bg-secondary text-white/90 hidden lg:block">
        <Container className="flex items-center justify-between py-2">
          {/* Left: Contact info */}
          <div className="flex items-center gap-6 text-[13px]">
            <a href="tel:+6226123456" className="flex items-center gap-1.5 hover:text-white transition-colors group">
              <Phone size={13} className="text-primary group-hover:text-accent transition-colors" />
              <span>+62 262 123456</span>
            </a>
            <a href="mailto:info@stainus.ac.id" className="flex items-center gap-1.5 hover:text-white transition-colors group">
              <Mail size={13} className="text-primary group-hover:text-accent transition-colors" />
              <span>info@stainus.ac.id</span>
            </a>
            <div className="flex items-center gap-1.5 text-white/70">
              <MapPin size={13} className="text-primary" />
              <span>Jl. Pembangunan No. 161A, Sukagalih, Kecamatan Tarogong Kidul, Kabupaten Garut, Jawa Barat</span>
            </div>

          </div>

          {/* Right: Social media */}
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
              <IconInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
              <IconFacebook />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-accent transition-colors">
              <IconYoutube />
            </a>
            <span className="w-px h-4 bg-white/20 mx-1" />
            <Link
              href="/admissions"
              className="text-[12px] font-semibold bg-primary/80 hover:bg-primary px-3 py-0.5 rounded-full transition-colors"
            >
              Daftar PMB 2025
            </Link>
          </div>
        </Container>
      </div>

      {/* ── LAYER 2 : Main Navigation ── */}
      <nav
        className={cn(
          "w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(192,57,43,0.08)] border-b border-border-main/60"
            : "bg-white border-b border-border-main/40"
        )}
      >
        <Container className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <Image
                src="/images/LOGO-STAINUS-GARUT.png"
                alt="Logo STAINUS"
                width={44}
                height={44}
                className="object-contain relative z-10"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-xl text-text-heading tracking-tight group-hover:text-primary transition-colors">
                STAINUS GARUT
              </span>
              <span className="text-[10px] text-text-muted font-medium tracking-widest uppercase">
                Sekolah Tinggi Agama Islam Nusantara Garut
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map(link => (
              <div key={link.href} className="relative group">
                {link.children ? (
                  <>
                    <button
                      onMouseEnter={() => setActiveDropdown(link.href)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors",
                        pathname.startsWith(link.href) && link.href !== '/'
                          ? "text-primary bg-primary/5"
                          : "text-text-body hover:text-primary hover:bg-bg-soft"
                      )}
                    >
                      {link.label}
                      <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    {/* Dropdown */}
                    <div
                      onMouseEnter={() => setActiveDropdown(link.href)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className={cn(
                        "absolute top-full left-0 mt-1 w-52 bg-white rounded-xl border border-border-main shadow-lg shadow-black/5 overflow-hidden transition-all duration-200",
                        activeDropdown === link.href
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      )}
                    >
                      {link.children.map(child => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-text-body hover:text-primary hover:bg-primary/5 transition-colors border-b border-border-main/40 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
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
                )}
              </div>
            ))}

            <div className="ml-3 pl-3 border-l border-border-main">
              <Button size="sm" className="font-semibold tracking-wide">
                Daftar Sekarang
              </Button>
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
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Mobile top strip */}
        <div className="bg-secondary px-6 py-3 flex items-center gap-6 text-white/80 text-xs">
          <a href="tel:+6226123456" className="flex items-center gap-1.5">
            <Phone size={12} className="text-primary" />
            +62 262 123456
          </a>
          <a href="mailto:info@stainus.ac.id" className="flex items-center gap-1.5">
            <Mail size={12} className="text-primary" />
            info@stainus.ac.id
          </a>
        </div>

        <div className="flex flex-col gap-1 pt-20 px-6 pb-8 overflow-y-auto">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-base font-semibold py-3.5 px-4 rounded-xl transition-colors flex items-center justify-between",
                pathname === link.href
                  ? "text-primary bg-primary/5"
                  : "text-text-heading hover:bg-bg-soft"
              )}
            >
              {link.label}
              {link.children && <ChevronDown size={16} className="opacity-40" />}
            </Link>
          ))}

          <div className="mt-6 space-y-3">
            <Button className="w-full" size="lg">Daftar Sekarang</Button>
            <Button variant="outline" className="w-full" size="lg">Hubungi Kami</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
