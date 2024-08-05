import { Button } from '@/components/global/Button';
import { P, H1 } from '@/components/global/Text';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-end bg-cover bg-bottom bg-no-repeat px-4 lg:flex-row lg:justify-normal lg:px-20">
      <div className="z-10 flex w-full flex-col gap-y-4 lg:w-1/2">
        <H1 className="text-white">
          Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik
        </H1>
        <P className="text-white">
          jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk
          kehidupan yang lebih bermanfaat
        </P>
        <Button className="mt-6">Daftar Sekarang</Button>
      </div>
      <Image
        src="/images/hero/hero-image1.svg"
        alt="hero"
        width={500}
        height={500}
        className="right-0 z-0 h-1/2 w-auto lg:absolute lg:mr-20 lg:h-5/6"
      />
      <Image
        src="/images/hero/hero-foreground.svg"
        alt="hero"
        width={500}
        height={500}
        className="absolute left-0 top-0 -z-[10] h-screen w-screen object-cover object-bottom"
      />
      <Image
        src="/images/hero/hero-vector1.svg"
        alt="hero"
        width={500}
        height={500}
        className="absolute -bottom-4 left-0 -z-[11]"
      />
      <Image
        src="/images/hero/hero-vector2.svg"
        alt="hero"
        width={500}
        height={500}
        className="absolute right-0 top-0 -z-[12]"
      />
    </section>
  );
}
