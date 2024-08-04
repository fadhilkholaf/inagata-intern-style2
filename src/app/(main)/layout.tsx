import { Suspense } from 'react';

import Footer from '@/components/Footer';
import { H2 } from '@/components/global/Text';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <Suspense fallback={<H2>Loading...</H2>}>{children}</Suspense>
      <div
        className="relative mt-32 h-[394px]"
        style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      >
        <div className="relative -top-[100vh] h-[calc(100vh+400px)]">
          <div className="sticky top-[calc(100vh-400px)] h-fit">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
