import { H2, P } from '@/components/global/Text';
import Image from 'next/image';
import React from 'react';
import { Input, TextArea } from '../Input';
import { Button } from '@/components/global/Button';

export default function Form() {
  return (
    <section className="mt-32 flex w-screen flex-col gap-y-16 px-20">
      <div className="flex flex-col gap-y-1 text-center">
        <P className="text-2xl font-medium text-[#4FACF6]">
          Dapatkan informasi lengkap
        </P>
        <H2 className="text-dark-blue">Kontak Kami</H2>
      </div>
      <div className="flex justify-between gap-32">
        <div className="flex h-fit w-2/5 flex-col gap-y-16">
          <div className="flex items-center gap-6">
            <Image
              src="/images/icons/phone.svg"
              alt="phone"
              width={500}
              height={500}
              className="h-20 w-20"
            />
            <div className="flex flex-col gap-y-2">
              <P className="text-2xl font-semibold text-[#2E334E]">
                (+62) 812 698 15172
              </P>
              <P className="text-2xl font-semibold text-[#2E334E]">
                (0341) 545 987
              </P>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Image
              src="/images/icons/mail.svg"
              alt="email"
              width={500}
              height={500}
              className="h-20 w-20"
            />
            <div className="flex flex-col gap-y-2">
              <P className="text-2xl font-semibold text-[#2E334E]">
                contact@sekolahanak.Com
              </P>
              <P className="text-2xl font-semibold text-[#2E334E]">
                info@sekolah.anak.com
              </P>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Image
              src="/images/icons/location.svg"
              alt="location"
              width={500}
              height={500}
              className="h-20 w-20"
            />
            <div className="flex flex-col gap-y-2">
              <P className="text-2xl font-semibold text-[#2E334E]">
                jL. Soekarno hatta J-12
              </P>
              <P className="text-2xl font-semibold text-[#2E334E]">malang</P>
            </div>
          </div>
        </div>
        <form className="flex w-3/5 flex-col gap-y-10">
          <Input type="text" placeholder="Nama Anda" required />
          <Input type="email" placeholder="Email Anda" required />
          <Input type="tel" placeholder="Nomor Telepon" />
          <TextArea placeholder="Pesan Anda" required className="h-40" />
          <Button className="w-full" type="reset">
            Kirim Pesan
          </Button>
        </form>
      </div>
    </section>
  );
}
