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
    name: 'Prodi Hukum Keluarga Islam',
    description: 'Menghasilkan ahli hukum keluarga Islam yang kompeten, berintegritas, dan mampu menyelesaikan persoalan hukum modern.',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'hki',
    name: 'Prodi Ekonomi Syariah',
    description: 'Lulusan dipersiapkan menjadi profesional dan wirausahawan yang kompeten di bidang ekonomi dan keuangan syariah.',
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop'
  }
];

export default function ProgramsPreview() {
  return (
    <Section className="bg-bg-soft">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionTitle 
            label="Program Studi"
            title="Program Studi Stainus Garut"
            description="Jelajahi program studi terakreditasi kami yang dirancang untuk mempersiapkan karir sukses dan kontribusi berarti bagi masyarakat."
            className="mb-0 max-w-2xl"
          />
          <Link href="/programs">
            <Button variant="outline" iconRight={<ArrowRight size={18} />}>Lihat Semua Program</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredPrograms.map(program => (
            <ProgramCard key={program.id} {...program} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
