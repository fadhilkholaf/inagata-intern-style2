import React from 'react';
import HeroDetailArtikel from './components/parts/HeroDetailArtikel';
import DetailArtikel from './components/parts/DetailArtikel';

export default function ArtikelDetail({
  params
}: {
  params: { title: string };
}) {
  return (
    <main className="flex flex-col">
      <HeroDetailArtikel />
      <DetailArtikel title={params.title.split('-').join(' ')} />
    </main>
  );
}
