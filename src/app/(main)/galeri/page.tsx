import Gallery from './components/parts/Gallery';
import HeroGaleri from './components/parts/HeroGaleri';

export default function Galeri() {
  return (
    <main className="flex flex-col">
      <HeroGaleri />
      <Gallery />
    </main>
  );
}
