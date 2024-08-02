import { ButtonLink } from '@/components/global/Button';
import { H2, P } from '@/components/global/Text';
import Image from 'next/image';

const documentations: { title: string; description: string }[] = [
  {
    title: 'Jeannete Ong',
    description: 'Kepala Sekolah'
  },
  {
    title: 'John Smith',
    description: 'Kepala Staff'
  },
  {
    title: 'Lidya M.P',
    description: 'Guru Matematika'
  },
  {
    title: 'William',
    description: 'Guru Fisika'
  }
];

export default function Teacher() {
  return (
    <section className="mt-32 flex w-screen flex-col gap-y-10 bg-[#E9EFFF] px-20 py-28">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-y-1">
          <P className="text-2xl font-medium text-accent">
            Perkenalkan Anggota Sekolah
          </P>
          <H2 className="text-dark-blue">Guru & Staff Sekolah</H2>
        </div>
        <ButtonLink href="/galeri" className="rounded bg-[#F2B828]">
          Lihat Semua
        </ButtonLink>
      </div>
      <div className="flex justify-between gap-x-10">
        {documentations &&
          documentations.map((documentation, index) => (
            <div
              key={index}
              className="flex w-full flex-col gap-y-1 text-center"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={`${index * 100}`}
            >
              <div className="group h-96 overflow-hidden rounded-3xl">
                <Image
                  src={`/images/teacher/${index + 1}.png`}
                  alt="guru"
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
