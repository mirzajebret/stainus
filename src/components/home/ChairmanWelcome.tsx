import React from 'react';
import Image from 'next/image';
import Container from '../layout/Container';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

export default function ChairmanWelcome() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-border-main/50">
            <Image 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
              alt="Chairman of STAINUS"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <SectionTitle 
              label="Sambutan"
              title="Selamat Datang di STAINUS Garut"
            />
            <div className="prose prose-lg text-text-body mb-10 text-lg leading-relaxed space-y-6">
              <p>
                Selamat datang di website resmi Sekolah Tinggi Agama Islam Nusantara (STAINUS) Garut. Sebagai salah satu institusi pendidikan tinggi Islam terkemuka di Indonesia, kami berkomitmen untuk menyediakan pendidikan berkualitas yang memadukan keunggulan akademik dengan nilai-nilai Islam.
              </p>
              <p>
                Di STAINUS, kami percaya bahwa pendidikan bukan hanya tentang memperoleh pengetahuan, tetapi juga tentang membentuk karakter, integritas, dan kepemimpinan. Kami mengundang Anda untuk bergabung dengan komunitas kami yang inklusif dan dinamis.
              </p>
            </div>
            <div className="flex flex-col mb-10 p-6 bg-bg-soft rounded-2xl border border-border-main/50">
              <span className="font-extrabold text-xl text-text-heading mb-1">Dr. H. Ahmad Saefuddin, M.Ag.</span>
              <span className="text-primary font-semibold">Ketua STAINUS Garut</span>
            </div>
            <Button variant="outline">Baca Selengkapnya</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
