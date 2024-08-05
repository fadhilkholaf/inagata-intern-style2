'use client';

import { P } from '@/components/global/Text';
import Featured from '../Featured';
import Badge from '@/components/Badge';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const articles: { title: string; description: string }[] = [
  {
    title: 'Teknik Belajar Tepat Agar Anak Tak Mudah Bosan',
    description:
      'Menggunakan teknik belajar yang tepat sangatlkah penting agar anak bisa menyerap materi dengan baik namun tetap . . .'
  },
  {
    title: 'Metode Tanya Jawab Untuk Evaluasi Materi Di Sekolah',
    description:
      'Untuk mengetahui seberapa paham anak tentang materi yang diberikan, guru biasa mengadakan sesi tanya jawab agar . . .'
  },
  {
    title: 'Berlibur Bersama Agar Anak Tidak Jenuh ',
    description:
      'Anak tentunya akanjenuh jika terus menerus belajar, mereka juga perlu berlibur sejenak apalagi bersama dengan teman . . .'
  },
  {
    title: 'Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah',
    description:
      'Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman . . .'
  },
  {
    title: 'Permainan Yang Bagus Untuk Perkembangan Anak',
    description:
      'Selain belajar, anak-anak tentunya perlu untuk bermain, namun permainan apasaja kah yang dapat membantu perkembangan . . .'
  },
  {
    title: 'Di Sekolah Belajar, Di Rumah pun Apakah Harus Belajar?',
    description:
      'Jika anak merasa dirinya sudah cukup hanya dengan belajar disekolah, kita sebagai orang tua harus bisa memberi . . .'
  },
  {
    title: 'Tetap Menjaga Kesehatan Anak Selama Di Sekolah',
    description:
      'Virus dan bakteri tentu ada dimana saja, oleh sebab itu kita perlu memperhatikan kesehatan anak agar tidak mudah tertular . . .'
  },
  {
    title: 'Mewarnai Membantu Meningkatkan Kreativitas Anak?',
    description:
      'Banyak kegiatan bisa dilakukan di rumah dan disekolah untuk meningkatkan kreativitas anak. Banyak pendapaf diluar sana bahwa  . . .'
  },
  {
    title: 'Perlukah Belajar Menggambar Dan Mewarnai Di Sekolah?',
    description:
      'Banyak kegiatan bisa dilakukan di rumah dan disekolah untuk meningkatkan kreativitas anak. Banyak pendapaf diluar sana bahwa . . .'
  }
];

export default function ArticleList() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const generateDelay = (index: number) => {
    let column = windowWidth < 640 ? 1 : windowWidth < 1280 ? 2 : 3;
    switch (index % column) {
      case 0:
        return 0;
      case 1:
        return 100;
      case 2:
        return 200;
      default:
        return 300;
    }
  };

  return (
    <section className="mt-32 flex w-screen flex-col gap-y-10 px-4 py-28 lg:px-20">
      <Featured />
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 xl:grid-cols-3">
        {articles &&
          articles.map((article, index) => (
            <div
              key={index}
              className="flex w-full flex-col gap-y-3"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={`${generateDelay(index)}`}
            >
              <div className="relative flex w-full justify-center pb-5">
                <div className="group h-80 w-full overflow-hidden rounded-3xl">
                  <Image
                    src={`/images/article/${index + 2}.png`}
                    alt="artikel"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover transition-transform ease-in-out group-hover:scale-110"
                  />
                </div>
                <Badge className="absolute bottom-0 text-white">
                  12 Desember 2021
                </Badge>
              </div>
              <P className="mt-3 text-xl font-semibold text-dark-blue">
                {article.title}
              </P>
              <P className="text-[#2E334E]">{article.description}</P>
              <Link
                href={'/artikel/' + article.title.split(/[,\s]+/).join('-')}
                className="mt-3"
              >
                <P className="text-base font-semibold text-[#4FACF6]">
                  Baca selengkapnya
                </P>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}
