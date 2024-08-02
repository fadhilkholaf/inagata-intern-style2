import { ButtonLink } from '@/components/global/Button';
import { H2, P } from '@/components/global/Text';
import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <section className="mt-32 flex w-screen items-center gap-x-32 px-20 py-32">
      <Image
        src="/images/about-image.svg"
        alt="about"
        width={500}
        height={500}
        className="w-1/3"
      />
      <div className="flex w-2/3 flex-col gap-y-6">
        <H2 className="text-dark-blue">Tentang Kami</H2>
        <P className="text-dark-blue">
          Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu
          anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum
          terbaik agar anak bisa memilih minat nya dan fokus mengembangkan minat
          tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang
          hingga saat ini.
        </P>
        <ButtonLink href="/tentang" className="mt-4">
          Baca Selengkapnya
        </ButtonLink>
      </div>
    </section>
  );
}
