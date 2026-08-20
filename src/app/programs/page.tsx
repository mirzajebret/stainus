import React from 'react';
import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionTitle from '@/components/common/SectionTitle';
import ProgramCard from '@/components/programs/ProgramCard';
import AdmissionsCTA from '@/components/home/AdmissionsCTA';

export const metadata: Metadata = {
  title: 'Program Studi | STAINUS Garut',
  description: 'Jelajahi program studi terakreditasi yang ditawarkan oleh STAINUS Garut.',
};

const allPrograms = [
  {
    id: 'hki',
    name: 'Hukum Keluarga Islam (HKI)',
    description: 'Menghasilkan ahli hukum keluarga Islam yang kompeten, berintegritas, dan mampu menyelesaikan persoalan hukum modern.',
    imageUrl: '/images/hukum_keluarga_islam.png'
  },
  {
    id: 'es',
    name: 'Ekonomi Syariah (ES)',
    description: 'Lulusan dipersiapkan menjadi profesional dan wirausahawan yang kompeten di bidang ekonomi dan keuangan syariah.',
    imageUrl: '/images/ekonomi_syariah.png'
  }
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero 
        title="Program Studi"
        description="Jelajahi program studi kami yang dirancang untuk mempersiapkan mahasiswa menuju karir sukses dan kontribusi berarti bagi masyarakat."
      />
      
      <Section>
        <Container>
          <SectionTitle 
            label="Program Studi"
            title="Pilihan Program Studi"
            description="STAINUS Garut menyelenggarakan program studi jenjang Strata 1 (S1) yang telah terakreditasi oleh BAN-PT."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {allPrograms.map(program => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </Container>
      </Section>
      
      <AdmissionsCTA />
    </>
  );
}
