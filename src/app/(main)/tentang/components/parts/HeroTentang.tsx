import Image from 'next/image';

import { P, H1 } from '@/components/global/Text';

export default function HeroTentang() {
  return (
    <section className="mt-20 flex h-screen w-screen flex-col items-center justify-around bg-cover bg-bottom bg-no-repeat px-4 lg:mt-0 lg:flex-row lg:justify-between lg:px-20">
      <div className="z-10 flex w-full flex-col gap-y-4 lg:w-1/3">
        <H1 className="text-white">Tentang Kami</H1>
        <P className="text-white">Informasi tentang kami</P>
      </div>
      <Image
        src="/images/hero/hero-image2.svg"
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
