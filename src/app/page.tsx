import React from 'react';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import ChairmanWelcome from '@/components/home/ChairmanWelcome';
import ProgramsPreview from '@/components/home/ProgramsPreview';
import CampusLife from '@/components/home/CampusLife';
import LatestNews from '@/components/home/LatestNews';
import AdmissionsCTA from '@/components/home/AdmissionsCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ChairmanWelcome />
      <ProgramsPreview />
      <CampusLife />
      <LatestNews />
      <AdmissionsCTA />
    </>
  );
}
