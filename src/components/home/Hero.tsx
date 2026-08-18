import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../common/Button';
import Container from '../layout/Container';
import { ArrowRight, Award, Users, BookOpen } from 'lucide-react';

const badges = [
  { icon: Award, text: 'Terakreditasi BAN-PT', sub: 'Peringkat B' },
  { icon: Users, text: '120+ Mahasiswa', sub: 'Aktif saat ini' },
  { icon: BookOpen, text: '2 Program Studi', sub: 'Hukum & Ekonomi' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* ── Background Image with Overlay ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
          alt="STAINUS Campus"
          fill
          className="object-cover"
          priority
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
      </div>

      {/* ── Decorative geometric elements ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl z-0 translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl z-0" />

      {/* ── Top accent line ── */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-10" />

      <Container className="relative z-10 pt-16 pb-20">
        <div className="max-w-5xl">

          {/* Label badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            PMB 2025 / 2026 — Pendaftaran Dibuka
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-[62px] font-extrabold text-white leading-[1.08] tracking-tight mb-6">
            Membangun Peradaban Islam{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-300">
              yang Unggul
            </span>{' '}
            dan Profesional
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            Sekolah Tinggi Agama Islam Nusantara (STAINUS) Garut — mempersiapkan generasi
            masa depan yang berilmu, berakhlak, dan berwawasan global.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/admissions">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base px-10 shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200"
                iconRight={<ArrowRight size={18} />}
              >
                Daftar Sekarang
              </Button>
            </Link>
            <Link href="/programs">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base px-10 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 rounded-full backdrop-blur-sm transition-all duration-200"
              >
                Jelajahi Program Studi
              </Button>
            </Link>
          </div>

          {/* Info badges */}
          <div className="flex flex-wrap gap-4">
            {badges.map(({ icon: Icon, text, sub }) => (
              <div
                key={text}
                className="flex items-center gap-3 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl px-5 py-3"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-primary/30 rounded-xl shrink-0">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-none">{text}</p>
                  <p className="text-white/60 text-xs mt-1">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-50">
        <span className="text-white text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
