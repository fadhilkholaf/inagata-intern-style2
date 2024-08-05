import { H2, P } from '@/components/global/Text';
import React from 'react';

export default function Profile() {
  return (
    <section className="mt-32 flex w-screen flex-col gap-y-4 px-4 py-24 lg:px-20">
      <P className="text-2xl font-medium text-[#4FACF6]">Profil Singkat</P>
      <H2 className="text-dark-blue">Sekolah Alam Insan Mulia Berkarya</H2>
      <P className="text-lg font-medium text-[#3A3B41] lg:text-2xl">
        Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu
        anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum
        terbaik agar anak bisa memilih minat nya dan fokus mengembangkan minat
        tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang
        hingga saat ini. berlokasikan di jl. SoekarnoHatta Blok J No. 245,
        Lowokwaru, Blimbing, Kota Malang. Sejak berdirinya sekolah ini, sudah
        lebih dari 250.000 siswa lulus dari sekolah kami. Dengan menjunjung
        tinggi kejujuran, kedisiplinan dan semangat belajar yang tinggi kami
        berharap bisa terus meghasilkan siswa-siswa lulusan terbaik dari sekolah
        ini.
      </P>
    </section>
  );
}
