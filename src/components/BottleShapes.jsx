import React from "react";
import { motion } from "framer-motion"; // Added Framer Motion import
import { DRY_ITEMS, FRAGRANCE, SHAPES_BOTTLES } from "../constants";
import SeamlessProgressBar from "./stepCustom";

const BottleShapes = () => {
  // Animation variants for grid items
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 md:px-8">
      {/* Packaging Forms Section */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl lg:text-4xl font-thin tracking-tighter text-center mb-16 sm:mb-20 lg:mb-24 text-[#402D0A]"
      >
        Packaging Forms
      </motion.h1>

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8"
        >
          {SHAPES_BOTTLES.map((shape, index) => (
            <motion.div key={index} variants={item} className="group">
              <div className="flex flex-col items-center">
                <div
                  className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    const modal = document.createElement("div");
                    modal.style.position = "fixed";
                    modal.style.top = "0";
                    modal.style.left = "0";
                    modal.style.width = "100%";
                    modal.style.height = "100%";
                    modal.style.backgroundColor = "rgba(0,0,0,0.8)";
                    modal.style.display = "flex";
                    modal.style.justifyContent = "center";
                    modal.style.alignItems = "center";
                    modal.style.zIndex = "1000";

                    const img = document.createElement("img");
                    img.src = shape.imgSrc1;
                    img.style.maxWidth = "90%";
                    img.style.maxHeight = "90%";
                    img.style.objectFit = "contain";

                    modal.appendChild(img);
                    modal.onclick = () => document.body.removeChild(modal);
                    document.body.appendChild(modal);
                  }}
                >
                  <img
                    src={shape.imgSrc}
                    alt={shape.title}
                    className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
                  />
                </div>

                <div className="text-center px-1">
                  <h3 className="text-sm sm:text-base font-light tracking-wider text-[#402D0A] mb-1 sm:mb-2">
                    {shape.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-extralight text-[#402d0abb] leading-relaxed max-w-[160px] sm:max-w-[180px] mx-auto">
                    {shape.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 sm:mt-20 lg:mt-24 mb-8 sm:mb-10 lg:mb-12 border-t border-gray-200"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center text-center space-y-5"
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 text-[11px] sm:text-sm font-thin tracking-widest text-[#2b1e06de]">
            {["CONDITIONER", "SHAMPOO", "SHOWER GEL", "MOISTURIZER"].map(
              (item) => (
                <span key={item}>{item}</span>
              )
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 text-[10px] sm:text-xs font-thin text-[#402d0ac6]">
            {[20, 35, 50, 100, 3000, 5000].map((size) => (
              <span key={size}>
                {size}
                ml
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Fragrances Section */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl lg:text-4xl font-thin tracking-tighter text-center mt-32 mb-16 sm:mb-20 lg:mb-24 text-[#11041ecc]"
      >
        Available Fragrances
      </motion.h1>

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-10 lg:gap-16"
        >
          {FRAGRANCE.map((shape, index) => (
            <motion.div key={index} variants={item} className="group">
              <div className="flex flex-col items-center">
                <div
                  className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    const modal = document.createElement("div");
                    modal.style.position = "fixed";
                    modal.style.top = "0";
                    modal.style.left = "0";
                    modal.style.width = "100%";
                    modal.style.height = "100%";
                    modal.style.backgroundColor = "rgba(0,0,0,0.8)";
                    modal.style.display = "flex";
                    modal.style.justifyContent = "center";
                    modal.style.alignItems = "center";
                    modal.style.zIndex = "1000";

                    const img = document.createElement("img");
                    img.src = shape.imgSrc1;
                    img.style.maxWidth = "90%";
                    img.style.maxHeight = "90%";
                    img.style.objectFit = "contain";

                    modal.appendChild(img);
                    modal.onclick = () => document.body.removeChild(modal);
                    document.body.appendChild(modal);
                  }}
                >
                  <img
                    src={shape.imgSrc}
                    alt={shape.title}
                    className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
                  />
                </div>

                <div className="text-center px-1">
                  <h3 className="text-sm sm:text-base font-light tracking-wider text-[#1b092cab] mb-1 sm:mb-2">
                    {shape.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-extralight text-[#1c0b2d96] leading-relaxed max-w-[160px] sm:max-w-[180px] mx-auto">
                    {shape.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 sm:mt-20 lg:mt-24 mb-8 sm:mb-10 lg:mb-12 border-t border-gray-200"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center text-center space-y-5"
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 text-[11px] sm:text-sm font-thin tracking-widest text-[#1c0b2db9]">
            {[
              "LAVENDER",
              "ORCHID",
              "LOTUS",
              "EUCALYPTUS",
              "LEMON",
              "CUCUMBER",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 text-[10px] sm:text-xs font-thin text-[#220e366f]">
            {[20, 35, 50, 100, 3000, 5000].map((size) => (
              <span key={size}>
                {size}
                ml
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Dry Items Section */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl lg:text-4xl font-thin tracking-tighter text-center mt-32 mb-16 sm:mb-20 lg:mb-24 text-[#041d04cc]"
      >
        Dry Items & Accessories
      </motion.h1>

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-16"
        >
          {DRY_ITEMS.map((shape, index) => (
            <motion.div key={index} variants={item} className="group">
              <div className="flex flex-col items-center">
                <div
                  className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    const modal = document.createElement("div");
                    modal.style.position = "fixed";
                    modal.style.top = "0";
                    modal.style.left = "0";
                    modal.style.width = "100%";
                    modal.style.height = "100%";
                    modal.style.backgroundColor = "rgba(0,0,0,0.8)";
                    modal.style.display = "flex";
                    modal.style.justifyContent = "center";
                    modal.style.alignItems = "center";
                    modal.style.zIndex = "1000";

                    const img = document.createElement("img");
                    img.src = shape.imgSrc1;
                    img.style.maxWidth = "90%";
                    img.style.maxHeight = "90%";
                    img.style.objectFit = "contain";

                    modal.appendChild(img);
                    modal.onclick = () => document.body.removeChild(modal);
                    document.body.appendChild(modal);
                  }}
                >
                  <img
                    src={shape.imgSrc}
                    alt={shape.title}
                    className="h-12 w-12 sm:h-16 sm:w-16 object-contain opacity-80"
                  />
                </div>

                <div className="text-center px-1">
                  <h3 className="text-sm sm:text-base font-light tracking-wider text-[#06220aba] mb-1 sm:mb-2">
                    {shape.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-extralight text-[#0618098e] leading-relaxed max-w-[160px] sm:max-w-[180px] mx-auto">
                    {shape.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 sm:mt-20 lg:mt-24 mb-8 sm:mb-10 lg:mb-12 border-t border-gray-200"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center text-center space-y-5"
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 text-[11px] sm:text-sm font-thin tracking-widest text-[#0618098e]">
            {[
              "SHAVING KIT",
              "DENTAL KIT",
              "SLIPPERS",
              "BATH CAP",
              "BATHROBE",
              "LOOFAH",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 text-[10px] sm:text-xs font-thin text-[#0618098e]">
            {[20, 35, 50, 100, 3000, 5000].map((size) => (
              <span key={size}>
                {size}
                ml
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Custom Designs Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mt-32 mb-16 text-center"
      >
        <div className="opacity-75">
          <SeamlessProgressBar />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-4xl lg:text-xl font-thin tracking-wide text-center mt-32 mb-5 sm:mb-20 lg:mb-10 text-[#211807b0]"
        >
          For customization of product please share Design/Logo and other
          requirements by filling our Form.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          href="https://forms.gle/rs7jxrx5ZmsKkvRg9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 text-sm font-light tracking-wider text-[#402D0A] border border-[#402D0A] rounded-2xl hover:bg-[#402D0A] hover:text-white transition-all duration-300 animate-pulse"
        >
          Share Your Design
        </motion.a>
      </motion.div>
    </div>
  );
};

export default BottleShapes;
