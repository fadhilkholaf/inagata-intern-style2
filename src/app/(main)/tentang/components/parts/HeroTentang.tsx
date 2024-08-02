import { Button } from '@/components/global/Button';
import { P, H1 } from '@/components/global/Text';
import Image from 'next/image';

export default function HeroTentang() {
  return (
    <section className="flex h-screen w-screen items-center justify-between bg-cover bg-bottom bg-no-repeat px-20">
      <div className="z-10 flex w-1/3 flex-col gap-y-4">
        <H1 className="text-white">Tentang Kami</H1>
        <P className="text-white">Informasi tentang kami</P>
      </div>
      <Image
        src="/images/hero/hero-image2.svg"
        alt="hero"
        width={500}
        height={500}
        className="h-5/6 w-3/5"
      />
      <Image
        src="/images/hero//hero-foreground.svg"
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
        src="/images/hero//hero-vector2.svg"
        alt="hero"
        width={500}
        height={500}
        className="absolute right-0 top-0 -z-[12]"
      />
    </section>
  );
}
