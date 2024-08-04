import ArticleList from './components/parts/ArticleList';
import HeroArtikel from './components/parts/HeroArtikel';

export default function page() {
  return (
    <main className="flex flex-col">
      <HeroArtikel />
      <ArticleList />
    </main>
  );
}
