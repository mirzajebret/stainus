import React from 'react';
import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import FeatureCard from '@/components/common/FeatureCard';
import { BookOpen, Target, Heart, Award } from 'lucide-react';
import AdmissionsCTA from '@/components/home/AdmissionsCTA';

export const metadata: Metadata = {
  title: 'Profil | STAINUS Garut',
  description: 'Pelajari sejarah, visi, misi, dan nilai-nilai dasar STAINUS Garut.',
};

export default function ProfilePage() {
  return (
    <>
      <PageHero 
        title="Profile STAINUS"
        description="Mengenal lebih dekat Sekolah Tinggi Agama Islam Nusantara Garut."
      />
      
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionTitle label="Sejarah" title="Sejarah Singkat" />
              <div className="prose prose-lg text-text-body space-y-4">
                <p>
                  Sekolah Tinggi Agama Islam Nusantara (STAINUS) Garut didirikan dengan semangat untuk mencerdaskan kehidupan bangsa dan mengembangkan ilmu pengetahuan agama Islam yang rahmatan lil 'alamin.
                </p>
                <p>
                  Sejak berdiri, STAINUS terus berupaya meningkatkan kualitas pendidikan dan pengajaran, penelitian, serta pengabdian kepada masyarakat, sesuai dengan Tri Dharma Perguruan Tinggi.
                </p>
              </div>
            </div>
            
            <div className="space-y-12">
              <div>
                <SectionTitle label="Visi" title="Visi Kami" className="mb-6" />
                <Card className="bg-primary text-white border-none p-8">
                  <p className="text-xl font-medium leading-relaxed">
                    "Menjadi Perguruan Tinggi Agama Islam yang unggul, profesional, dan berdaya saing global"
                  </p>
                </Card>
              </div>
              
              <div>
                <SectionTitle label="Misi" title="Misi Kami" className="mb-6" />
                <ul className="space-y-4 text-text-body">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">1.</span>
                    Menyelenggarakan pendidikan dan pengajaran yang bermutu dalam bidang Ilmu Agama Islam.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">2.</span>
                    Mengembangkan penelitian ilmiah yang inovatif untuk kemajuan ilmu pengetahuan dan penyelesaian masalah sosial keagamaan.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">3.</span>
                    Melaksanakan pengabdian kepada masyarakat yang berbasis pada pemberdayaan dan nilai-nilai keislaman.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      <Section className="bg-bg-soft">
        <Container>
          <SectionTitle 
            label="Core Values"
            title="Nilai-Nilai Dasar"
            description="Nilai-nilai yang menjadi landasan setiap langkah dan budaya akademik di STAINUS Garut."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FeatureCard 
              icon={<BookOpen />}
              title="Profesionalitas"
              description="Bekerja dengan keahlian, tanggung jawab, dan komitmen tinggi."
            />
            <FeatureCard 
              icon={<Target />}
              title="Keunggulan"
              description="Senantiasa berusaha mencapai hasil terbaik dalam setiap aspek."
            />
            <FeatureCard 
              icon={<Heart />}
              title="Integritas"
              description="Menjunjung tinggi kejujuran dan etika moral islami."
            />
            <FeatureCard 
              icon={<Award />}
              title="Inovasi"
              description="Kreatif dalam menemukan solusi dan beradaptasi dengan perubahan."
            />
          </div>
        </Container>
      </Section>
      
      <AdmissionsCTA />
    </>
  );
}
