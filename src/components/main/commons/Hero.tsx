import React from 'react';
import { classNames } from '@/helpers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import 'swiper/css/bundle';

export type props = {
  className?: string;
  items: { image: string; url: string }[];
};

const Hero: React.FC<props> = ({ className, items }) => {
  return (
    <div className={className}>
      <Swiper
        className="mt-8 h-[300px] sm:h-[500px] "
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay
        loop
        style={
          {
            '--swiper-pagination-color': '#FFFFFF',
            '--swiper-pagination-bullet-inactive-color': '#999999',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-size': '14px',
            '--swiper-pagination-bullet-horizontal-gap': '6px',
          } as any
        }
      >
        {items?.map(({ image, url }, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[300px] sm:h-[500px]  ">
              <Image className="object-cover" src={image} fill alt=""></Image>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
