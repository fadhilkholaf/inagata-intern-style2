'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { cn } from '@/utils/cn';
import NavbarMenu from './NavbarMenu';

const menus: { title: string; href: string }[] = [
  { title: 'Dashboard', href: '/' },
  { title: 'Tentang', href: '/tentang' },
  { title: 'Galeri', href: '/galeri' },
  { title: 'Artikel', href: '/artikel' },
  { title: 'Kontak', href: '/kontak' }
];

export default function Navbar() {
  const [active, setActive] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed z-50 flex h-20 w-screen items-center justify-between bg-transparent px-4 transition-all duration-300 ease-in-out lg:px-20',
        {
          'bg-[#734192]': scrolled
        }
      )}
    >
      <Image
        src="/images/icons/inagata.svg"
        alt="Logo"
        width={500}
        height={500}
        className="z-10 h-10 w-fit"
      />
      <div
        className={cn(
          'fixed left-0 top-0 flex h-screen w-full origin-top flex-col gap-10 overflow-hidden bg-[#734192] px-4 pt-24 transition-all duration-300 ease-in-out md:static md:h-fit md:w-fit md:flex-row md:bg-transparent md:pt-0',
          { 'h-0 bg-transparent': !active }
        )}
      >
        {menus &&
          menus.map((menu, index) => (
            <span key={index} onClick={() => setActive(false)}>
              <NavbarMenu title={menu.title} href={menu.href} />
            </span>
          ))}
        <button className="rounded-full border-2 border-white px-6 py-1 text-white md:hidden">
          PPDB
        </button>
      </div>
      <button className="hidden rounded-full border-2 border-white px-6 py-1 text-white md:block">
        PPDB
      </button>
      <div
        className="relative h-12 w-12 md:hidden"
        onClick={() => setActive(!active)}
      >
        <span
          className={cn(
            'absolute top-[calc(33%-2px)] h-0.5 w-full rounded-full bg-white transition-all duration-300 ease-in-out',
            {
              'top-[calc(50%-2px)] rotate-45': active
            }
          )}
        ></span>
        <span
          className={cn(
            'absolute top-[calc(66%-2px)] h-0.5 w-full rounded-full bg-white transition-all duration-300 ease-in-out',
            {
              'top-[calc(50%-2px)] -rotate-45': active
            }
          )}
        ></span>
      </div>
    </nav>
  );
}
