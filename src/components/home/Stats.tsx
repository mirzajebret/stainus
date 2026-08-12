import React from 'react';
import Container from '../layout/Container';
import Section from '../layout/Section';
import StatCard from '../common/StatCard';
import { Users, BookOpen, GraduationCap, Building } from 'lucide-react';

export default function Stats() {
  return (
    <Section className="bg-bg-soft pb-0 md:pb-0 lg:pb-0 pt-0 md:pt-0 lg:pt-0 -mt-16 relative z-20">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 py-12">
          <StatCard number="25+" label="Tahun Pengalaman" icon={<Building size={32} />} className="shadow-md" />
          <StatCard number="1,200+" label="Mahasiswa Aktif" icon={<Users size={32} />} className="shadow-md" />
          <StatCard number="8" label="Program Studi" icon={<BookOpen size={32} />} className="shadow-md" />
          <StatCard number="5,000+" label="Alumni Sukses" icon={<GraduationCap size={32} />} className="shadow-md" />
        </div>
      </Container>
    </Section>
  );
}
