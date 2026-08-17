import React from 'react';
import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Card from '@/components/common/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/common/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kontak | STAINUS Garut',
  description: 'Hubungi STAINUS Garut untuk pertanyaan seputar pendaftaran, program studi, dan informasi umum.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Hubungi Kami"
        description="Kami siap membantu Anda. Jangan ragu untuk menghubungi kami jika ada pertanyaan."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-2xl font-bold mb-6 text-text-heading">Informasi Kontak</h2>

              <Card className="p-6 flex items-start gap-4 bg-bg-soft">
                <MapPin className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-text-heading mb-1">Alamat Kampus</h4>
                  <p className="text-text-body text-sm leading-relaxed">
                    Jl. Pembangunan No. 161A, Sukagalih, Kecamatan Tarogong Kidul,<br />
                    Kabupaten Garut, Jawa Barat<br />
                  </p>
                </div>
              </Card>

              <Card className="p-6 flex items-start gap-4 bg-bg-soft">
                <Phone className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-text-heading mb-1">Telepon & WA</h4>
                  <p className="text-text-body text-sm mb-1">+62 262 123456</p>
                  <p className="text-text-body text-sm">+62 812 3456 7890 (WA)</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start gap-4 bg-bg-soft">
                <Mail className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-text-heading mb-1">Email</h4>
                  <p className="text-text-body text-sm mb-1">info@stainus.ac.id</p>
                  <p className="text-text-body text-sm">pmb@stainus.ac.id</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start gap-4 bg-bg-soft">
                <Clock className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-text-heading mb-1">Jam Operasional</h4>
                  <p className="text-text-body text-sm mb-1">Senin - Jumat: 08.00 - 16.00</p>
                  <p className="text-text-body text-sm">Sabtu: 08.00 - 12.00</p>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-8">
              <Card className="p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-8 text-text-heading">Kirim Pesan</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Nama Lengkap" placeholder="Masukkan nama lengkap" required />
                    <Input label="Email" type="email" placeholder="contoh@email.com" required />
                  </div>
                  <Input label="Subjek" placeholder="Subjek pesan" required />
                  <Textarea label="Pesan Anda" placeholder="Tuliskan pesan atau pertanyaan Anda di sini..." required />
                  <Button size="lg" className="w-full md:w-auto px-12">Kirim Pesan</Button>
                </form>
              </Card>
            </div>

          </div>
        </Container>
      </Section>
    </>
  );
}
