import React from 'react';
import Container from '../layout/Container';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';
import ImageCard from '../common/ImageCard';

const campusImages = [
  { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop", caption: "Gedung Utama Kampus" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop", caption: "Diskusi Mahasiswa" },
  { src: "https://images.unsplash.com/photo-1565022536102-f7645c84354a?q=80&w=2073&auto=format&fit=crop", caption: "Perpustakaan Modern" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop", caption: "Seminar Akademik" }
];

export default function CampusLife() {
  return (
    <Section>
      <Container>
        <SectionTitle 
          label="Kehidupan Kampus"
          title="Pengalaman di STAINUS"
          description="Komunitas akademik yang dinamis di mana mahasiswa mengembangkan kepemimpinan, kreativitas, dan kedalaman spiritual."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {campusImages.map((img, i) => (
            <ImageCard key={i} src={img.src} alt={img.caption} caption={img.caption} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
