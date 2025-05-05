import React from "react";
import { YOUR_HOTEL } from "../constants";
import bgImage from "../assets/Hotel2.jpg";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { BiDownArrow } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";

const YourHotel = () => {
  const { title, description } = YOUR_HOTEL[0];

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/15 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 max-w-4xl mx-4 border border-white/15 shadow-2xl text-center"
      >
        <motion.h2
          className="text-2xl md:text-4xl font-light mb-6 tracking-tight text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-sm md:text-base  leading-relaxed font-thin tracking-wide  text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="mt-8 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <span className="text-white text-sm tracking-widest font-extralight flex items-center justify-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="h-6 md:h-6  transition-transform duration-1000 ease-in-out hover:scale-125 hover:rotate-12"
            />
            <span></span>
            <span className="w-px h-5 bg-white"></span>
            <span></span>
            CUSTOMIZATION
          </span>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-white text-black rounded-full text-sm font-light tracking-wide hover:bg-opacity-90 transition-all mx-auto"
        >
          Explore More
        </motion.button>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white text-2xl"
        >
          <BsArrowDown className="animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
};

export default YourHotel;
