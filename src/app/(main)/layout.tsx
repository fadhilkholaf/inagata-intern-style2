import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <div
        className="mt-32 lg:relative lg:h-[394px]"
        style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      >
        <div className="lg:relative lg:-top-[100vh] lg:h-[calc(100vh+400px)]">
          <div className="h-fit lg:sticky lg:top-[calc(100vh-400px)]">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
