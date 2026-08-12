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
    id: 'pai',
    name: 'Pendidikan Agama Islam (PAI)',
    description: 'Mencetak pendidik agama Islam yang profesional, inovatif, dan berakhlak mulia untuk tingkat dasar hingga menengah.',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'hki',
    name: 'Hukum Keluarga Islam (HKI)',
    description: 'Menghasilkan ahli hukum keluarga Islam yang kompeten, berintegritas, dan mampu menyelesaikan persoalan hukum modern.',
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop'
  },
  {
    id: 'mpi',
    name: 'Manajemen Pendidikan Islam (MPI)',
    description: 'Mempersiapkan tenaga manajerial kependidikan yang ahli dalam mengelola institusi pendidikan Islam masa depan.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'es',
    name: 'Ekonomi Syariah (ES)',
    description: 'Menghasilkan praktisi dan pemikir ekonomi syariah yang handal untuk lembaga keuangan bank maupun non-bank.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop'
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
