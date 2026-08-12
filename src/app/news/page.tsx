import React from 'react';
import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import NewsCard from '@/components/news/NewsCard';
import AdmissionsCTA from '@/components/home/AdmissionsCTA';

export const metadata: Metadata = {
  title: 'Berita | STAINUS Garut',
  description: 'Berita terbaru, pengumuman, dan acara di STAINUS Garut.',
};

const allNews = [
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
  },
  {
    id: 'news-4',
    title: 'Penandatanganan MoU dengan Universitas Timur Tengah',
    description: 'STAINUS menjalin kerjasama internasional untuk pertukaran mahasiswa dan kolaborasi penelitian ilmiah.',
    date: '25 Jul 2026',
    category: 'Kerjasama',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function NewsPage() {
  return (
    <>
      <PageHero 
        title="Berita & Informasi"
        description="Dapatkan kabar terbaru, pengumuman, dan liputan kegiatan seputar kampus STAINUS."
      />
      
      <Section>
        <Container>
          {/* Featured News */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-text-heading">Berita Utama</h2>
            <NewsCard {...allNews[0]} featured />
          </div>

          <hr className="border-t border-border-main my-12" />

          {/* Latest News */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-text-heading">Berita Terbaru</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allNews.slice(1).map(article => (
                <NewsCard key={article.id} {...article} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <AdmissionsCTA />
    </>
  );
}
