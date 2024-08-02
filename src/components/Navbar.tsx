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
        'fixed z-50 flex h-20 w-screen items-center justify-between px-20',
        {
          'bg-gradient-to-r from-[#734192] to-[#9B309D]': scrolled
        }
      )}
    >
      <Image
        src="/images/icons/inagata.svg"
        alt="Logo"
        width={500}
        height={500}
        className="h-10 w-fit"
      />
      <div className="flex h-fit w-fit gap-x-10">
        {menus &&
          menus.map((menu, index) => (
            <NavbarMenu key={index} title={menu.title} href={menu.href} />
          ))}
      </div>
      <button className="rounded-full border-2 border-white px-6 py-1 text-white">
        PPDB
      </button>
    </nav>
  );
}
