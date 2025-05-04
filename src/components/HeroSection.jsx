import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { HERO_SLIDES } from "../constants"; // make sure this path is correct
import {motion} from "framer-motion";

const HeroSection = () => {
  return (
    <div className="w-full overflow-hidden h-screen relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-screen relative">
              {slide.type === "video" ? (
                <video
                  src={slide.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover absolute top-0 left-0 z-0"
                />
              ) : (
                <motion.img
                initial={{ opacity: 0 ,y: 50 }}
                animate={{ opacity: 1 ,y: 0 }}
                transition={{ duration: 1 }}

                  src={slide.image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover absolute top-0 left-0 z-0"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16 z-10 bg-black/5">
                <div className="text-white max-w-xl">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                    {slide.heading}
                  </h1>
                  <p
                    className="text-base mt-1 md:text-lg italic drop-shadow-md"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {slide.subheading}
                  </p>
                  <button className="mt-6 px-6 py-2 bg-white text-gray-800 rounded-full font-medium shadow hover:bg-gray-200 transition">
                    {slide.buttonText} <span className="ml-2">↘</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
