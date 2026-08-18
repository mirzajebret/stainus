import React from 'react';
import Image from 'next/image';
import Container from '../layout/Container';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { Quote, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ChairmanWelcome() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column with decorative elements */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-primary/20 rounded-3xl z-0" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-3xl z-0" />

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-border-main/50 z-10">
              <Image
                src="images/foto_hj_neti.png"
                alt="Ketua STAINUS Garut"
                fill
                className="object-cover"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-lg leading-tight">Hj. Neti Yuliawati, S.IP,. M.Si</p>
                <p className="text-white/75 text-sm mt-1">WK 2 STAINUS Garut</p>
              </div>
            </div>

            {/* Experience badge */}
            {/* <div className="absolute -right-6 top-10 bg-primary text-white rounded-2xl px-4 py-3 shadow-lg shadow-primary/30 z-20 hidden lg:block">
              <p className="text-3xl font-extrabold leading-none">25+</p>
              <p className="text-white/80 text-xs mt-1 font-medium">Tahun<br />Berpengalaman</p>
            </div> */}
          </div>

          {/* Text column */}
          <div>
            <SectionTitle
              label="Sambutan Ketua"
              title="Selamat Datang di STAINUS Garut"
            />

            {/* Quote */}
            <div className="relative pl-6 mb-8 border-l-4 border-primary/30">
              <Quote size={20} className="text-primary/40 absolute -top-1 -left-2.5 fill-primary/10" />
              <p className="text-text-body text-lg leading-relaxed italic text-text-muted">
                &ldquo;Pendidikan bukan hanya tentang memperoleh pengetahuan,
                tetapi juga tentang membentuk karakter, integritas, dan kepemimpinan.&rdquo;
              </p>
            </div>

            <div className="space-y-4 text-text-body leading-relaxed mb-8">
              <p>
                Selamat datang di website resmi Sekolah Tinggi Agama Islam Nusantara (STAINUS) Garut.
                Sebagai salah satu institusi pendidikan tinggi Islam terkemuka di Jawa Barat, kami berkomitmen
                untuk menyediakan pendidikan berkualitas yang memadukan keunggulan akademik dengan nilai-nilai Islam.
              </p>
              <p>
                Di STAINUS, kami percaya bahwa pendidikan adalah amanah mulia. Kami mengundang
                Anda untuk bergabung dengan komunitas kami yang inklusif, dinamis, dan berwawasan global.
              </p>
            </div>

            {/* Key points */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                'Akademik Berkualitas',
                'Lingkungan Islami',
                'Dosen Berpengalaman',
                'Fasilitas Modern',
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-text-body font-medium">
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                  {point}
                </div>
              ))}
            </div>

            <Link href="/profile">
              <Button variant="outline" iconRight={<ArrowRight size={18} />}>
                Baca Selengkapnya
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
