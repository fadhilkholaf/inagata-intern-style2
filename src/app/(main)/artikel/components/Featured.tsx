import Badge from '@/components/Badge';
import { P } from '@/components/global/Text';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Featured() {
  return (
    <article className="flex w-full flex-col gap-4 lg:flex-row">
      <div
        className="group w-full overflow-hidden rounded-3xl"
        data-aos="fade-up"
      >
        <Image
          src={`/images/article/1.png`}
          alt="artikel"
          width={500}
          height={500}
          className="h-full w-full object-cover transition-transform ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="flex w-full flex-col gap-y-4">
        <Badge className="text-white">12 Desember 2021</Badge>
        <P className="text-4xl font-bold text-dark-blue">
          Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
        </P>
        <div className="flex flex-col gap-2">
          <P className="text-justify text-[#3A3B41]">
            Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin
            kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman
            sekelas saya. begitupun sebagian besar orang tua, mimpi mereka
            adalah melihat anaknya kembali ke aktivitas sekolah secara langsung.
            Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya
            selama pandemi lebih banyak menghabiskan waktu di. . .{' '}
          </P>
          <P className="text-base text-[#3A3B41]">Penulis : Shinta A.P</P>
          <Link
            href={
              '/artikel/' +
              'Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah'
                .split(/[,\s]+/)
                .join('-')
            }
          >
            <P className="text-base font-semibold text-[#4FACF6]">
              Baca selengkapnya
            </P>
          </Link>
        </div>
      </div>
    </article>
  );
}
