import { testimonials } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="mt-24 mb-32 px-4 sm:px-12 lg:px-28">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-[#3C2A1E] font-extralight tracking-tighter text-3xl sm:text-5xl lg:text-5xl mb-16"
      >
        Testimonials
      </motion.h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-transparent border border-[#2f1d0a]/40 rounded-2xl p-8 h-full text-[#4B2E2E] font-light text-sm sm:text-base overflow-hidden"
              style={{ minHeight: "320px" }} // Added fixed minimum height
            >
              {/* Quotation marks inside box */}
              <span className="absolute top-4 left-4 text-[6rem] text-[#4B2E2E]/10 leading-none font-serif select-none z-0">
                “
              </span>

              <span className="absolute bottom-4 right-4 text-[6rem] text-[#4B2E2E]/10 leading-none font-serif select-none z-0 rotate-180">
                “
              </span>

              {/* Testimonial text */}
              <div className="relative z-10  h-full flex flex-col">
                <p className="leading-relaxed text-2xl font-thin flex-grow">
                  {testimonial.text}
                </p>

                {/* User Info */}
                <div className="flex items-center mt-6 gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.user}
                    className="w-10 h-10 rounded-full border border-[#D8C9BB] object-cover"
                  />
                  <div>
                    <h6 className="text-md font-medium text-[#3C2A1E]">
                      {testimonial.user}
                    </h6>
                    <p className="text-xs italic text-[#927E6B]">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
