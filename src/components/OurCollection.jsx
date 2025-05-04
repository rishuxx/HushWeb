import React, { useState } from "react";
import { motion } from "framer-motion"; // Added Framer Motion import
import { SERVICES } from "../constants";
import logo from "../assets/logo.png";

const OurCollection = () => {
  const [activeTab, setActiveTab] = useState(SERVICES[0]);
  const [showFullImage, setShowFullImage] = useState(false);

  // colors based on activeTab
  const getColors = () => {
    if (activeTab.title === "Siesta") {
      return {
        background: "#FFFFF0",
        text: "text-[#BFA22F]",
        border: "border-[#BFA22F]",
      };
    } else if (activeTab.title === "Trance") {
      return {
        background: "bg-[#f9fafb]",
        text: "text-[#BFA22F]",
        border: "border-[#BFA22F]",
      };
    } else if (activeTab.title === "Dawn") {
      return {
        background: "#FFFFF0",
        text: "text-[#7F7F7F]",
        border: "border-[#7F7F7F]",
      };
    } else {
      return {
        background: "bg-white",
        text: "text-black/70",
        border: "border-[#7F7F7F]",
      };
    }
  };

  const { background, text, border } = getColors();

  return (
    <section className={`w-full ${background} font-poppins`} id="services">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-2/4 mt-16 lg:mt-0 w-[40vh] h-[50vh] lg:h-screen relative overflow-hidden rounded-3xl lg:rounded-none mx-auto"
        >
          <div className="flex justify-center items-center mt-10">
            <img
              src={activeTab.imgSrc}
              alt={activeTab.title}
              className="max-w-[700px] ml-28 w-full h-auto rounded-2xl cursor-pointer shadow-lg"
              onClick={() => setShowFullImage(true)}
            />
          </div>

          <p className="text-center mt-2 text-white text-xs bg-black/60 inline-block px-2 py-1 rounded md:hidden">
            Tap to view full size
          </p>

          {showFullImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xl flex justify-center items-center z-50"
              onClick={() => setShowFullImage(false)}
            >
              <img
                src={activeTab.imgSrc}
                alt={activeTab.title}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-xl"
              />
            </div>
          )}
        </motion.div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-center p-8 md:p-10 space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 md:text-3xl flex justify-center items-center gap-5 translate-x-[20px] text-3xl sm:text-4xl lg:text-4xl font-thin tracking-tighter text-center mb-10 sm:mb-20 lg:mb-14 text-[#402D0A]"
          >
            <span>Our Collection</span>
            <span className="w-px h-6 bg-gray-400"></span>
            <img
              src={logo}
              alt="Logo"
              className="h-6 md:h-8 inline-block filter brightness-50 transition-transform duration-1000 ease-in-out hover:scale-125 hover:rotate-12"
            />
          </motion.h2>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex overflow-x-auto no-scrollbar gap-3 mb-14 md:gap-4 md:mb-20"
          >
            {SERVICES.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-6 py-1 font-normal text-sm md:text-xl transition-all tracking-widest ${
                  activeTab.id === tab.id
                    ? "border-b-2 border-yellow-600 text-yellow-600"
                    : "text-gray-500"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </motion.div>

          {/* Top Brand Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:m-16 flex justify-center items-center"
          >
            <img
              src={activeTab.logoSrc}
              alt={`${activeTab.title} logo`}
              className="h-20 mt-10 md:h-32 mb-10 md:mb-16 object-contain"
            />
          </motion.div>

          {/* breakerline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`mb-10 mt-7 border-t ${border} w-2/5 mx-auto`}
          />

          {/* Small Text and Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-5 space-y-1"
          >
            <h4
              className={`text-[12px] md:text-[14px] mb-1 tracking-widest font-thin ${text}`}
            >
              {activeTab.content0}
            </h4>
            <h2 className={`text-2xl md:text-4xl font-light ${text}`}>
              {activeTab.content}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className={`text-center max-w-xl ${text} text-base lg:text-sm lg:tracking-widest leading-7 lg:leading-8 font-extralight lg:font-thin`}
          >
            {activeTab.description}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`mb-10 mt-7 border-t ${border} w-2/5 mx-auto`}
          />

          {/* Fragrance Icon and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col items-center mt-10 md:mt-14 space-y-2"
          >
            <img
              src={activeTab.fragranceIcon}
              alt={`${activeTab.fragranceName} icon`}
              className="h-8 md:h-10 object-contain mt-10 md:mt-16"
            />
            <p className={`text-[10px] tracking-widest ${text} uppercase`}>
              {activeTab.fragranceName}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurCollection;
