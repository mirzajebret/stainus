import React from 'react';
import Image from 'next/image';
import Button from '../common/Button';
import Container from '../layout/Container';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-secondary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
          alt="STAINUS Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-secondary/80 backdrop-blur-[2px]"></div>
      </div>
      
      <Container className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold text-white leading-[1.1] tracking-tight mb-8">
            Membangun Peradaban Islam yang Unggul dan Profesional
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
            Sekolah Tinggi Agama Islam Nusantara (STAINUS) Garut mempersiapkan generasi masa depan dengan wawasan global dan nilai-nilai keislaman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto text-lg px-10">Daftar Sekarang</Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-10 border-none">Pelajari Lebih Lanjut</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
