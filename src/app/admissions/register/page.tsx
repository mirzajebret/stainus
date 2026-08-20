"use client";

import React, { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import { submitRegistration } from "./actions";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function RegisterPage() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    try {
      const result = await submitRegistration(formData);
      setStatus(result);
      if (result.success) {
        (event.target as HTMLFormElement).reset();
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Terjadi kesalahan saat memproses formulir. Silakan coba lagi nanti."
      });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <PageHero
        title="Formulir Pendaftaran PMB"
        description="Lengkapi data diri Anda di bawah ini untuk mendaftar sebagai mahasiswa baru di STAINUS Garut."
      />

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="mb-10 text-center">
                <h2 className="text-2xl font-bold text-text-heading mb-4">
                  Data Calon Mahasiswa
                </h2>
                <p className="text-text-body">
                  Mohon isi formulir berikut dengan data yang valid dan benar. Tim PMB kami akan menggunakan data ini untuk menghubungi Anda terkait proses selanjutnya.
                </p>
              </div>

              {status && (
                <div
                  className={`p-4 rounded-xl mb-8 flex items-start gap-3 ${
                    status.success ? "bg-green-50 text-green-900 border border-green-200" : "bg-red-50 text-red-900 border border-red-200"
                  }`}
                >
                  {status.success ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <p className="font-medium text-sm">{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-text-heading">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Masukkan nama lengkap"
                      className="w-full px-4 py-3 rounded-lg border border-border-main focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white text-text-heading"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-text-heading">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Contoh: email@gmail.com"
                      className="w-full px-4 py-3 rounded-lg border border-border-main focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white text-text-heading"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-text-heading">
                      Nomor Telepon / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Contoh: 081234567890"
                      className="w-full px-4 py-3 rounded-lg border border-border-main focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white text-text-heading"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="previousSchool" className="block text-sm font-semibold text-text-heading">
                      Asal Sekolah (SMA/SMK/MA) *
                    </label>
                    <input
                      type="text"
                      id="previousSchool"
                      name="previousSchool"
                      required
                      placeholder="Contoh: SMAN 1 Garut"
                      className="w-full px-4 py-3 rounded-lg border border-border-main focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white text-text-heading"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="program" className="block text-sm font-semibold text-text-heading">
                    Pilihan Program Studi *
                  </label>
                  <div className="relative">
                    <select
                      id="program"
                      name="program"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border-main focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white text-text-heading appearance-none"
                    >
                      <option value="" disabled selected>Pilih Program Studi</option>
                      <option value="Hukum Keluarga Islam (S1)">Hukum Keluarga Islam (S1)</option>
                      <option value="Ekonomi Syariah (S1)">Ekonomi Syariah (S1)</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-text-muted">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.41 0.589966L6 5.16997L10.59 0.589966L12 1.99997L6 7.99997L0 1.99997L1.41 0.589966Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isPending}
                  >
                    {isPending ? "Sedang Mengirim..." : "Kirim Formulir Pendaftaran"}
                  </Button>
                  <p className="text-center text-sm text-text-muted mt-4">
                    Dengan mendaftar, Anda menyetujui seluruh ketentuan dan persyaratan PMB STAINUS Garut.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
