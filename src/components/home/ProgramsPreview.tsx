import React from 'react';
import Container from '../layout/Container';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';
import ProgramCard from '../programs/ProgramCard';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const featuredPrograms = [
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
    name: 'Manajemen Pendidikan Islam',
    description: 'Mempersiapkan tenaga manajerial kependidikan yang ahli dalam mengelola institusi pendidikan Islam masa depan.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function ProgramsPreview() {
  return (
    <Section className="bg-bg-soft">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionTitle 
            label="Program Studi"
            title="Jelajahi Program Akademik Kami"
            description="Jelajahi program studi terakreditasi kami yang dirancang untuk mempersiapkan karir sukses dan kontribusi berarti bagi masyarakat."
            className="mb-0 max-w-2xl"
          />
          <Link href="/programs">
            <Button variant="outline" iconRight={<ArrowRight size={18} />}>Lihat Semua Program</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPrograms.map(program => (
            <ProgramCard key={program.id} {...program} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
