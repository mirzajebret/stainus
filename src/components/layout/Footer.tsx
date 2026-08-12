import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image src="/images/LOGO-STAINUS-GARUT.png" alt="Logo STAINUS" width={40} height={40} className="object-contain brightness-0 invert" />
              <span className="font-extrabold text-2xl tracking-tight">STAINUS</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              Sekolah Tinggi Agama Islam Nusantara Garut. 
              Membangun peradaban Islam yang unggul, profesional, dan berakhlak mulia dengan wawasan global.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Tautan Cepat</h4>
            <ul className="space-y-4">
              <li><Link href="/profile" className="text-white/80 hover:text-primary transition-colors text-sm">Profil</Link></li>
              <li><Link href="/programs" className="text-white/80 hover:text-primary transition-colors text-sm">Program Studi</Link></li>
              <li><Link href="/admissions" className="text-white/80 hover:text-primary transition-colors text-sm">PMB</Link></li>
              <li><Link href="/news" className="text-white/80 hover:text-primary transition-colors text-sm">Berita</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-primary transition-colors text-sm">Kontak</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Hubungi Kami</h4>
            <ul className="space-y-4 text-white/80 text-sm leading-relaxed">
              <li>Jl. Raya Garut - Tasikmalaya No. 123<br/>Garut, Jawa Barat 44151</li>
              <li>Tel: +62 262 123456</li>
              <li>Email: info@stainus.ac.id</li>
              <li>WA: +62 812 3456 7890</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Media Sosial</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors text-sm">Instagram</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors text-sm">Facebook</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors text-sm">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} STAINUS. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
