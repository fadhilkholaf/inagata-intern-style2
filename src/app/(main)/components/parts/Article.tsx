import Badge from '@/components/Badge';
import { ButtonLink } from '@/components/global/Button';
import { H2, P } from '@/components/global/Text';
import Image from 'next/image';

const articles: { title: string; description: string }[] = [
  {
    title: 'Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah',
    description:
      'Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman . . .'
  },
  {
    title: 'Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah',
    description:
      'Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman . . .'
  },
  {
    title: 'Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah',
    description:
      'Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman . . .'
  }
];

export default function Article() {
  return (
    <section className="mt-32 flex w-screen flex-col gap-y-10 px-20 py-12">
      <div className="flex flex-col gap-y-1 text-center">
        <P className="text-2xl font-medium text-[#4FACF6]">
          Artikel seputar pendidikan
        </P>
        <H2 className="text-dark-blue">Artikel Terbaru</H2>
      </div>
      <div className="flex justify-between gap-x-16">
        {articles &&
          articles.map((article, index) => (
            <div
              key={index}
              className="flex w-full flex-col gap-y-3"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={`${index * 100}`}
            >
              <div className="relative flex justify-center pb-5">
                <div className="group h-80 overflow-hidden rounded-3xl">
                  <Image
                    src={`/images/article/1.png`}
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
            </div>
          ))}
      </div>
    </section>
  );
}
