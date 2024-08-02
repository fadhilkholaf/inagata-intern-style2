import Image from 'next/image';

import About from './components/parts/About';
import Article from './components/parts/Article';
import Benefit from './components/parts/Benefit';
import Gallery from './components/parts/Gallery';
import Hero from './components/parts/Hero';

export default function Dashboard() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Benefit />
      <div className="relative">
        <Image
          src="/images/vector/1.svg"
          alt="vector"
          width={500}
          height={500}
          className="absolute right-0 -z-10 h-[600px] w-fit -translate-y-1/2"
        />
      </div>
      <About />
      <div className="relative">
        <Image
          src="/images/vector/2.svg"
          alt="vector"
          width={500}
          height={500}
          className="absolute left-0 h-[500px] w-fit -translate-y-1/2"
        />
      </div>
      <Gallery />
      <Article />
      <div className="relative">
        <Image
          src="/images/vector/3.svg"
          alt="vector"
          width={500}
          height={500}
          className="absolute right-0 -z-10 h-[300px] w-fit -translate-y-1/2"
        />
      </div>
    </main>
  );
}
