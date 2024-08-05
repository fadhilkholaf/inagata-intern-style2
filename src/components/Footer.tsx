import Image from 'next/image';
import React from 'react';
import { P } from './global/Text';

export default function Footer() {
  return (
    <footer className="flex w-screen flex-col overflow-hidden">
      <div className="flex flex-col justify-between gap-6 px-4 py-8 lg:flex-row lg:gap-20 lg:px-20 lg:py-16">
        <div className="flex w-full flex-col gap-y-6 lg:w-1/2">
          <Image
            src="/images/icons/inagata-dark-blue.svg"
            alt="icon"
            width={500}
            height={500}
            className="h-16 w-fit"
            data-aos="fade-left"
            data-aos-duration="500"
          />
          <P className="text-justify text-[#2E334E]">
            Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk
            kehidupan yang lebih bermanfaat
          </P>
        </div>
        <div className="flex flex-col justify-between gap-6 sm:flex-row lg:w-1/2 lg:gap-20">
          <div
            className="flex flex-col gap-y-2 lg:gap-y-5"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <P className="sf-pro-rounded text-2xl font-semibold text-dark-blue">
              Informasi
            </P>
            <P className="text-[#404040]">Artikel</P>
            <P className="text-[#404040]">Galeri</P>
          </div>
          <div
            className="flex flex-col gap-y-2 lg:gap-y-5"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <P className="sf-pro-rounded text-2xl font-semibold text-dark-blue">
              Tentang
            </P>
            <P className="text-[#404040]">Tentang Kami</P>
            <P className="text-[#404040]">Tentang Kami</P>
          </div>
          <div
            className="flex flex-col gap-y-2 lg:gap-y-5"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <P className="sf-pro-rounded text-nowrap text-2xl font-semibold text-dark-blue">
              Ikuti Kami
            </P>
            <div className="flex items-center gap-x-2">
              <Image
                src="/images/icons/facebook.svg"
                alt="facebook"
                width={500}
                height={500}
                className="h-fit w-4"
              />
              <P className="text-[#404040]">namasekolah</P>
            </div>
            <div className="flex items-center gap-x-2">
              <Image
                src="/images/icons/twitter.svg"
                alt="twitter"
                width={500}
                height={500}
                className="h-fit w-4"
              />
              <P className="text-[#404040]">namasekolah</P>
            </div>
            <div className="flex items-center gap-x-2">
              <Image
                src="/images/icons/instagram.svg"
                alt="instagram"
                width={500}
                height={500}
                className="h-fit w-4"
              />
              <P className="text-[#404040]">namasekolah</P>
            </div>
          </div>
        </div>
      </div>
      <span className="h-0.5 w-screen bg-[#D3D7DF]"></span>
      <P className="w-full py-8 text-center text-base text-[#404040]">
        Copyright © 2021. All rights reserved.
      </P>
    </footer>
  );
}
