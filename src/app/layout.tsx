import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { cn } from '@/utils/cn';
import ProgressBarProvider from '@/components/providers/ProgressBarProvider';

import './globals.css';
import AOSProvider from '@/components/providers/AOSProvider';
import LenisProvider from '@/components/providers/LenisProvider';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'INAGATA SCHOOLS',
  description: 'Inagata schools style 2'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, 'overflow-x-hidden')}>
        <ProgressBarProvider>
          <AOSProvider>
            <LenisProvider>{children}</LenisProvider>
          </AOSProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
