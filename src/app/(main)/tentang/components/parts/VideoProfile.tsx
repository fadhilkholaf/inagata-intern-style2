import { H2, P } from '@/components/global/Text';
import Image from 'next/image';
import React from 'react';

export default function VideoProfile() {
  return (
    <div className="mt-32 flex w-screen flex-col gap-y-4 px-20 py-5 text-center">
      <P className="text-2xl font-medium text-[#4FACF6]">Cuplikan Sekolah</P>
      <H2 className="text-dark-blue">Video Profil</H2>
      <div
        className="group relative flex h-[600px] w-full items-center justify-center overflow-hidden rounded-3xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Image
          src="/images/profile/1.png"
          alt="video"
          width={5000}
          height={5000}
          className="h-full w-full object-cover transition-transform ease-in-out group-hover:scale-110"
        />
        <div className="absolute h-full w-full bg-[#4AA0E1]/25"></div>
        <div className="absolute h-32 w-32 rounded-full bg-[#4FACF6]">
          <Image
            src="/images/vector/play.svg"
            alt="play"
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
