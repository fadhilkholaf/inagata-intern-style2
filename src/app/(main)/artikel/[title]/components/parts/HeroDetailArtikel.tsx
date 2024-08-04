import Image from 'next/image';

export default function HeroDetailArtikel() {
  return (
    <section className="flex h-[115vh] w-screen items-end justify-between bg-cover bg-bottom bg-no-repeat px-20">
      <Image
        src="/images/article/1.png"
        alt="hero"
        width={500}
        height={500}
        className="h-screen w-full rounded-3xl object-cover"
      />
      <Image
        src="/images/hero/hero-foreground.svg"
        alt="hero"
        width={500}
        height={500}
        className="absolute left-0 top-0 -z-[10] h-[854px] w-screen object-cover object-bottom"
      />
    </section>
  );
}
