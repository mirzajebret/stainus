import React from 'react';
import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionTitle from '@/components/common/SectionTitle';
import Image from 'next/image';
import AdmissionsCTA from '@/components/home/AdmissionsCTA';

export const metadata: Metadata = {
  title: 'Hukum Keluarga Islam (HKI) | STAINUS Garut',
  description: 'Program Studi Hukum Keluarga Islam (HKI) di STAINUS Garut.',
};

export default function HKIPage() {
  return (
    <>
      <PageHero 
        title="Hukum Keluarga Islam (HKI)"
        description="Mencetak ahli hukum keluarga Islam yang kompeten, berintegritas, dan mampu menyelesaikan persoalan hukum modern."
      />
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                label="Profil Lulusan"
                title="Masa Depan Karir Anda"
                description="Lulusan Program Studi Hukum Keluarga Islam (Ahwal Al-Syakhshiyyah) dipersiapkan untuk menjadi praktisi hukum Islam yang profesional di berbagai bidang."
              />
              <ul className="space-y-4 text-text-body mt-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Hakim di Pengadilan Agama</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Panitera / Pegawai Pencatat Nikah (KUA)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Advokat / Pengacara Syariah</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Konsultan Hukum Keluarga dan Kewarisan Islam</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/hukum_keluarga_islam.png" 
                alt="Hukum Keluarga Islam" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>
      <AdmissionsCTA />
    </>
  );
}
