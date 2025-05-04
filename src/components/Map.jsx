import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const ElegantMapComponent = () => {
  // Clean animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    y: [0, -5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="w-full max-w-7xl mx-auto px-4 py-16"
    >
      {/* Elegant Section Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-thin tracking-tighter text-center mb-10 sm:mb-20 lg:mb-5 text-[#402D0A]">
          Visit Us
        </h1>
        <p className="text-lg font-light text-gray-600 max-w-3xl mx-auto">
          UG-04, Vinayak Central, Cooper Road, Civil Lines, Prayagraj, Uttar Pradesh, India, 211001
        </p>
      </div>

      {/* Map Container */}
      <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200">
        {/* Premium Map Embed */}
        <div className="relative h-[500px] md:h-[650px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1801.046967033283!2d81.83685400000002!3d25.451312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acbd3fd5bdd41%3A0x1a8d85470d847430!2sMais%20Overseas%20Private%20Limited!5e0!3m2!1sen!2sin!4v1746270159355!5m2!1sen!2sin"
            className="w-full h-full"
            allowFullScreen
            loading="eager"
            title="Mais Overseas Location"
            style={{ filter: "contrast(1.1) saturate(1.2)" }}
          />

          {/* Minimalist Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute bottom-32 right-5 bg-white rounded-lg shadow-md p-5 max-w-xs md:max-w-sm border border-gray-100"
          >
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Mais Overseas
            </h3>
            <div className="space-y-1 text-gray-600 text-sm">
              <p>Near Prayagraj Station</p>
              <p>Prayagraj, Uttar Pradesh</p>
              <p>211003, India</p>
            </div>

            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-600" />
                <span className="text-sm">+91 XXXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-600" />
                <span className="text-sm">info@maisoverseas.com</span>
              </div>
            </div>

            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#5D4037] text-white font-medium py-2 px-4 rounded-md text-sm hover:bg-[#3E2723] transition-colors">
              Get Directions <ArrowRight className="h-3 w-3" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ElegantMapComponent;
