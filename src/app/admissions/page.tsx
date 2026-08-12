import React from 'react';
import { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

export const metadata: Metadata = {
  title: 'PMB | STAINUS Garut',
  description: 'Informasi pendaftaran mahasiswa baru dan biaya pendidikan di STAINUS Garut.',
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero 
        title="Penerimaan Mahasiswa Baru (PMB)"
        description="Mari bergabung menjadi bagian dari generasi unggul Islami di STAINUS Garut."
      />
      
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-16">
              <div id="requirements">
                <SectionTitle title="Persyaratan Pendaftaran" />
                <Card className="p-8">
                  <ul className="list-disc pl-5 space-y-3 text-text-body">
                    <li>Lulusan SMA/SMK/MA/Sederajat dari semua jurusan.</li>
                    <li>Fotokopi Ijazah/STTB yang dilegalisir (3 lembar).</li>
                    <li>Fotokopi Transkrip Nilai/SKHUN yang dilegalisir (3 lembar).</li>
                    <li>Fotokopi KTP dan Kartu Keluarga (KK) masing-masing 3 lembar.</li>
                    <li>Pasfoto berwarna terbaru ukuran 3x4 dan 4x6 masing-masing 4 lembar.</li>
                  </ul>
                </Card>
              </div>

              <div id="flow">
                <SectionTitle title="Alur Pendaftaran" />
                <div className="space-y-6">
                  {[
                    { title: "1. Pendaftaran Online", desc: "Mengisi formulir pendaftaran melalui website PMB STAINUS." },
                    { title: "2. Pembayaran Biaya Pendaftaran", desc: "Membayar biaya pendaftaran sesuai instruksi pada sistem." },
                    { title: "3. Upload Berkas", desc: "Mengunggah dokumen persyaratan ke sistem pendaftaran." },
                    { title: "4. Tes Seleksi Masuk", desc: "Mengikuti ujian saringan masuk (CBT/Wawancara)." },
                    { title: "5. Pengumuman Kelulusan", desc: "Melihat hasil seleksi melalui website resmi." },
                    { title: "6. Daftar Ulang", desc: "Melakukan registrasi ulang dan pembayaran biaya pendidikan." }
                  ].map((step, i) => (
                    <Card key={i} className="p-6 flex gap-6 items-start hover:border-primary/50 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-text-heading mb-2">{step.title.substring(3)}</h4>
                        <p className="text-text-body">{step.desc}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-[100px] space-y-6">
                <Card className="bg-bg-soft border-primary/20 p-8">
                  <h3 className="text-xl font-bold text-text-heading mb-4">Informasi Penting</h3>
                  <div className="space-y-4 text-text-body text-sm mb-8">
                    <div>
                      <span className="block font-semibold">Gelombang 1</span>
                      Januari - April 2026
                    </div>
                    <hr className="border-border-main" />
                    <div>
                      <span className="block font-semibold">Gelombang 2</span>
                      Mei - Juli 2026
                    </div>
                    <hr className="border-border-main" />
                    <div>
                      <span className="block font-semibold">Biaya Pendaftaran</span>
                      Rp 250.000,-
                    </div>
                  </div>
                  <Button className="w-full">Daftar Sekarang</Button>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
