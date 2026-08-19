import React from 'react';
import Container from '../layout/Container';
import Section from '../layout/Section';
import Button from '../common/Button';

export default function AdmissionsCTA() {
  return (
    <Section className="bg-primary text-white">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-12 md:py-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">Siap Memulai Perjalanan Anda?</h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl">
            Bergabunglah dengan ribuan mahasiswa yang telah memilih STAINUS sebagai pondasi untuk masa depan yang sukses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="bg-white text-primary hover:bg-bg-soft w-full sm:w-auto px-10 text-lg font-bold border-none shadow-sm hover:scale-105 transition-transform">
              Daftar Sekarang
            </Button>
            {/* <Button size="lg" variant="ghost" className="border border-white/30 hover:bg-white/10 text-white w-full sm:w-auto px-10 text-lg font-bold">
              Hubungi Bagian Pendaftaran
            </Button> */}
          </div>
        </div>
      </Container>
    </Section>
  );
}
