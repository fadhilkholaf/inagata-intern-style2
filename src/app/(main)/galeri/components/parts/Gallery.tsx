'use client';

import Image from 'next/image';

import { H2, P } from '@/components/global/Text';
import { useEffect, useState } from 'react';

const documentations: { title: string; description: string }[] = [
  {
    title: 'Belajar Mengajar',
    description:
      'Kegiatan belajar mengajar diadakan setiap hari Senin hingga Jum’at'
  },
  {
    title: 'Sharing Session',
    description: 'Kegiatan menukar pendapat dan pikiran anatara guru dan siswa'
  },
  {
    title: 'Presentasi Projek',
    description:
      'Kegiatan menunjukan hasil pekerjaan dari guru untuk melatih keberanian'
  },
  {
    title: 'Belajar Mengajar',
    description:
      'Kegiatan belajar mengajar diadakan setiap hari Senin hingga Jum’at'
  },
  {
    title: 'Sharing Session',
    description: 'Kegiatan menukar pendapat dan pikiran anatara guru dan siswa'
  },
  {
    title: 'Presentasi Projek',
    description:
      'Kegiatan menunjukan hasil pekerjaan dari guru untuk melatih keberanian'
  },
  {
    title: 'Belajar Mengajar',
    description:
      'Kegiatan belajar mengajar diadakan setiap hari Senin hingga Jum’at'
  },
  {
    title: 'Sharing Session',
    description: 'Kegiatan menukar pendapat dan pikiran anatara guru dan siswa'
  },
  {
    title: 'Presentasi Projek',
    description:
      'Kegiatan menunjukan hasil pekerjaan dari guru untuk melatih keberanian'
  },
  {
    title: 'Belajar Mengajar',
    description:
      'Kegiatan belajar mengajar diadakan setiap hari Senin hingga Jum’at'
  },
  {
    title: 'Sharing Session',
    description: 'Kegiatan menukar pendapat dan pikiran anatara guru dan siswa'
  },
  {
    title: 'Presentasi Projek',
    description:
      'Kegiatan menunjukan hasil pekerjaan dari guru untuk melatih keberanian'
  }
];

export default function Gallery() {
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
      <div className="flex flex-col gap-y-1 text-center">
        <P className="text-2xl font-medium text-[#4FACF6]">Galeri</P>
        <H2 className="text-dark-blue">Dokumentasi Sekolah</H2>
      </div>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 xl:grid-cols-3">
        {documentations &&
          documentations.map((documentation, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-1"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={`${generateDelay(index)}`}
            >
              <div className="group h-80 w-full overflow-hidden rounded-3xl">
                <Image
                  src={`/images/gallery/${index + 1}.png`}
                  alt="dokumentasi"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover transition-transform ease-in-out group-hover:scale-110"
                />
              </div>
              <P className="mt-5 text-2xl font-semibold text-dark-blue">
                {documentation.title}
              </P>
              <P className="text-base text-[#2E334E]">
                {documentation.description}
              </P>
            </div>
          ))}
      </div>
    </section>
  );
}
