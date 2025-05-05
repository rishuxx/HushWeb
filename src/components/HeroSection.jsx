import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { HERO_SLIDES } from "../constants"; // make sure this path is correct
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="w-full overflow-hidden h-screen relative"
      aria-label="Hotel Amenities Gallery"
    >
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
        itemScope
        itemType="https://schema.org/Hotel"
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide
            key={index}
            itemProp="image"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <div className="w-full h-screen relative">
              {slide.type === "video" ? (
                <video
                  src={slide.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover absolute top-0 left-0 z-0"
                  aria-label={slide.heading}
                  title={`Video showcasing ${slide.heading}`}
                />
              ) : (
                <motion.img
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  src={slide.image}
                  alt={`Premium hotel amenities ${slide.heading} - ${slide.subheading}`}
                  className="w-full h-full object-cover absolute top-0 left-0 z-0"
                  loading={index === 0 ? "eager" : "lazy"}
                  itemProp="contentUrl"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16 z-10 bg-black/5">
                <div className="text-white max-w-xl">
                  <h1
                    className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg"
                    itemProp="name"
                  >
                    {slide.heading}
                  </h1>
                  <p
                    className="text-base mt-1 md:text-lg italic drop-shadow-md"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                    itemProp="description"
                  >
                    {slide.subheading}
                  </p>
                  <button
                    onClick={() => (window.location.href = "/products")}
                    className="mt-6 px-6 py-2 bg-white text-gray-800 rounded-full font-medium shadow hover:bg-gray-200 transition"
                    aria-label={`Explore our ${slide.heading} products`}
                  >
                    {slide.buttonText} <span className="ml-2">↘</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hidden SEO content for hotel amenities */}
      <div style={{ display: "none" }} aria-hidden="true">
        <h2>Premium Hotel Amenities Supplier in India</h2>
        <p>
          We provide top-quality shampoo, conditioner, and dry items for hotels
          across India. Our products are designed for luxury hospitality
          experiences.
        </p>
        <ul>
          <li>Hotel toiletries supplier India</li>
          <li>Bulk amenities for hospitality industry</li>
          <li>Eco-friendly hotel products</li>
          <li>Luxury hotel amenities manufacturer</li>
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
