"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface LogoCarouselProps {
  logos: string[]; // array of image URLs
}

export default function LogoCarousel({ logos }: LogoCarouselProps) {
  return (
    <div className="w-full bg-gray-100 py-6">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
        className="flex items-center"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="h-16 w-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
