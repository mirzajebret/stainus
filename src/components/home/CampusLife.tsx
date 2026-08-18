import React from 'react';
import Container from '../layout/Container';
import Section from '../layout/Section';
import SectionTitle from '../common/SectionTitle';
import ImageCard from '../common/ImageCard';

const campusImages = [
  { src: "images/gedung-utama-kampus.png", caption: "Gedung Utama Kampus" },
  { src: "images/hero-bg-mahasiswa.png", caption: "Diskusi Mahasiswa" },
  { src: "fotbar_staff.png", caption: "Staff Kampus" }

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
