'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

import 'lenis/dist/lenis.css';

export default function LenisProvider({
  children
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <>{children}</>;
}
