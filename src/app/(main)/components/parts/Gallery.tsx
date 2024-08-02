import { ButtonLink } from '@/components/global/Button';
import { H2, P } from '@/components/global/Text';
import Image from 'next/image';

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
  }
];

export default function Gallery() {
  return (
    <section className="mt-32 flex w-screen flex-col gap-y-10 bg-[#E9EFFF] px-20 py-28">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-1">
          <P className="text-2xl font-medium text-accent">Galeri</P>
          <H2 className="text-dark-blue">Dokumentasi Sekolah</H2>
        </div>
        <ButtonLink href="/galeri" className="rounded bg-[#F2B828]">
          Lihat Semua
        </ButtonLink>
      </div>
      <div className="flex justify-between gap-x-16">
        {documentations &&
          documentations.map((documentation, index) => (
            <div
              key={index}
              className="flex w-full flex-col gap-y-1"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={`${index * 100}`}
            >
              <div className="group h-80 overflow-hidden rounded-3xl">
                <Image
                  src={`/images/documentation/${index + 1}.png`}
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
