import React from 'react';
import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionTitle from '@/components/common/SectionTitle';
import Image from 'next/image';
import AdmissionsCTA from '@/components/home/AdmissionsCTA';

export const metadata: Metadata = {
  title: 'Ekonomi Syariah (ES) | STAINUS Garut',
  description: 'Program Studi Ekonomi Syariah di STAINUS Garut.',
};

export default function ESPage() {
  return (
    <>
      <PageHero 
        title="Ekonomi Syariah"
        description="Mempersiapkan lulusan menjadi profesional dan wirausahawan yang kompeten di bidang ekonomi dan keuangan syariah."
      />
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                label="Profil Lulusan"
                title="Peluang Karir Lulusan"
                description="Lulusan Program Studi Ekonomi Syariah memiliki prospek karir yang sangat luas di berbagai sektor industri keuangan dan bisnis syariah yang sedang berkembang pesat."
              />
              <ul className="space-y-4 text-text-body mt-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Praktisi Perbankan Syariah</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Manajer Keuangan Syariah</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Wirausahawan (Sociopreneur)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                  <span>Dewan Pengawas Syariah / Analis Ekonomi</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/ekonomi_syariah.png" 
                alt="Ekonomi Syariah" 
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
