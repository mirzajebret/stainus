import React from 'react';
import Container from '../layout/Container';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';
import NewsCard from '../news/NewsCard';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const newsArticles = [
  {
    id: 'news-1',
    title: 'STAINUS Garut Gelar Seminar Nasional Pendidikan Islam Berkemajuan',
    description: 'Seminar nasional ini mengundang pakar pendidikan dari berbagai universitas terkemuka untuk membahas arah pendidikan Islam di era digital.',
    date: '10 Aug 2026',
    category: 'Akademik',
    imageUrl: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'news-2',
    title: 'Mahasiswa HKI Juara 1 Debat Hukum Tingkat Nasional',
    description: 'Tim debat mahasiswa Program Studi Hukum Keluarga Islam berhasil menorehkan prestasi gemilang di kompetisi tingkat nasional tahun ini.',
    date: '05 Aug 2026',
    category: 'Prestasi',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'news-3',
    title: 'Penerimaan Mahasiswa Baru Gelombang 2 Resmi Dibuka',
    description: 'Kesempatan emas bagi lulusan SMA/SMK/MA sederajat untuk bergabung bersama STAINUS Garut pada tahun akademik 2026/2027.',
    date: '01 Aug 2026',
    category: 'Pengumuman',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function LatestNews() {
  return (
    <Section className="bg-bg-soft">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionTitle 
            label="Berita Terbaru"
            title="Info Kampus & Acara"
            className="mb-0"
          />
          <Link href="/news">
            <Button variant="outline" iconRight={<ArrowRight size={18} />}>Lihat Semua Berita</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map(article => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
