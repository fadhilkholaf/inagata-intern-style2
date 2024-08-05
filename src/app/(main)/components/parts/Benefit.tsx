import { H2, P } from '@/components/global/Text';
import { cn } from '@/utils/cn';
import Image from 'next/image';

const benefits: { image: string; title: string; description: string }[] = [
  {
    image: 'book.svg',
    title: 'Menggunakan Kurikulum Terbaru',
    description:
      'Sekolah kami menerapkan kurikulum terbaru saat proses belajar agar siswa mendapatakan materi terbaru sesuai ketentuan'
  },
  {
    image: 'clock.svg',
    title: 'Efektifitas Waktu Saat Belajar Disekolah',
    description:
      'Sekolah kami memiliki waktu belajar yang dirancang agar para siswa tidak jenuh dan dapat menerima pelajaran dengan baik'
  },
  {
    image: 'pen.svg',
    title: 'Penyaluran Bakat dan Minat',
    description:
      'Sekolah kami memiliki berbagai macam kegitan akademik maupun non akademik untuk menyalurkan bakat dan minat siswa'
  }
];

export default function Benefit({ tentang }: { tentang?: boolean }) {
  return (
    <section className="mt-32 flex w-screen flex-col gap-y-20 px-4 py-12 lg:px-20">
      <div className={cn('flex flex-col gap-y-1', { 'text-center': tentang })}>
        <P className="text-2xl font-medium text-accent">Kenapa Memilih Kami</P>
        <H2 className="text-dark-blue">Keunggulan Sekolah Kami</H2>
      </div>
      <div className="flex flex-col justify-between gap-12 lg:flex-row">
        {benefits &&
          benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex w-full flex-col gap-y-4"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={`${index * 100}`}
            >
              <Image
                src={`/images/icons/${benefit.image}`}
                alt="icon"
                width={500}
                height={500}
                className="h-20 w-20"
              />
              <P className="text-2xl font-semibold">{benefit.title}</P>
              <P className="mt-2 text-lg text-[#A3A6A6]">
                {benefit.description}
              </P>
            </div>
          ))}
      </div>
    </section>
  );
}
