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
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.3fr_0.85fr] gap-10 xl:gap-14 items-center">

          {/* =========================
              FOTO WK 2 - HJ. NETI
          ========================== */}
          <div className="relative order-1">
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-3xl z-0" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-3xl z-0" />

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-border-main/50 z-10">
              <Image
                src="/images/foto_risan_sugiyasin.png"
                alt="Hj. Neti Yuliawati, S.IP., M.Si."
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 28vw"
              />

              {/* Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />

              {/* Identity */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-base xl:text-lg leading-tight">
                  Risan Sugiayasin, S.Pd., M.Pd.
                </p>
                <p className="text-white/75 text-xs xl:text-sm mt-1">
                  Ketua STAINUS Garut
                </p>
              </div>
            </div>
          </div>

          {/* =========================
              TEXT / SAMBUTAN
          ========================== */}
          <div className="order-2">
            <SectionTitle
              label="Sambutan Ketua"
              title="Selamat Datang di STAINUS Garut"
            />

            {/* Quote */}
            <div className="relative pl-6 mb-7 border-l-4 border-primary/30">
              <Quote
                size={20}
                className="text-primary/40 absolute -top-1 -left-2.5 fill-primary/10"
              />

              <p className="text-text-body text-base lg:text-lg leading-relaxed italic text-text-muted">
                &ldquo;Pendidikan bukan hanya tentang memperoleh pengetahuan,
                tetapi juga tentang membentuk karakter, integritas, dan
                kepemimpinan.&rdquo;
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 text-text-body leading-relaxed mb-7 text-sm lg:text-base">
              <p>
                Selamat datang di website resmi Sekolah Tinggi Agama Islam
                Nusantara (STAINUS) Garut. Sebagai salah satu institusi
                pendidikan tinggi Islam terkemuka di Jawa Barat, kami
                berkomitmen untuk menyediakan pendidikan berkualitas yang
                memadukan keunggulan akademik dengan nilai-nilai Islam.
              </p>

              <p>
                Di STAINUS, kami percaya bahwa pendidikan adalah amanah mulia.
                Kami mengundang Anda untuk bergabung dengan komunitas kami
                yang inklusif, dinamis, dan berwawasan global.
              </p>
            </div>

            {/* Key points */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                'Akademik Berkualitas',
                'Lingkungan Islami',
                'Dosen Berpengalaman',
                'Fasilitas Modern',
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-xs lg:text-sm text-text-body font-medium"
                >
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>

                  {point}
                </div>
              ))}
            </div>

            {/* Button */}
            <Link href="/profile">
              <Button
                variant="outline"
                iconRight={<ArrowRight size={18} />}
              >
                Baca Selengkapnya
              </Button>
            </Link>
          </div>

          {/* =========================
              FOTO KETUA - RISAN
          ========================== */}
          <div className="relative order-3">
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-3xl z-0" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/5 rounded-3xl z-0" />

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-border-main/50 z-10">
              <Image
                src="/images/foto_hj_neti.png"
                alt="Hj. Neti Yuliawati, S.IP., M.Si."
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 28vw"
              />

              {/* Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />

              {/* Identity */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-base xl:text-lg leading-tight">
                  Hj. Neti Yuliawati, S.IP., M.Si.
                </p>

                <p className="text-white/75 text-xs xl:text-sm mt-1">
                  WK 2 STAINUS Garut
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
