import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Logo from "../assets/HnbLogo.png";
import { CustomizationText } from "../constants";

const CustomTopText = () => {
  return (
    <section className="flex flex-col mt-16 items-center justify-center px-4 py-12 text-center">
      {/* Logo with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <img
          src={Logo}
          alt="Hush & Bloom Logo"
          className="h-20 md:h-28 object-contain mx-auto transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </motion.div>

      {/* Divider line with animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-32 mb-10 border-b border-gray-300 mt-10"
      ></motion.div>

      {/* Text Content with animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-6xl"
      >
        <h2 className="text-lg tracking-widest text-[#402D0A] font-light uppercase mb-6">
          {CustomizationText.title}
        </h2>
        <p className="text-[#402D0A] leading-relaxed text-base md:text-base md:font-extralight tracking-wider font-light">
          {CustomizationText.description}
        </p>
      </motion.div>

      {/* Bottom Line with animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-32 border-b border-gray-300 mt-10"
      ></motion.div>
    </section>
  );
};

export default CustomTopText;
