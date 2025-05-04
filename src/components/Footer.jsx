import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const CompanyLogo = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-white text-3xl font-light tracking-tighter text-center"
  >
    <div className="inline-block relative group">
      <span className="relative z-10">Hush and Bloom</span>
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 w-0 group-hover:w-full transition-all duration-500"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
      />
    </div>
  </motion.div>
);

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-b from-gray-900 to-black text-gray-300 font-light pt-16 pb-8 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-purple-500 mix-blend-screen filter blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-blue-500 mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centered Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <CompanyLogo />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.7 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-4 text-sm max-w-md mx-auto"
          >
            "Where purity meets Luxury". Hush and Bloom is your trusted partner
            in crafting exquisite, eco-friendly packaging solutions.
          </motion.p>
        </motion.div>

        {/* Centered Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="md:border-r md:border-gray-800 md:pr-8"
          >
            <h4 className="text-white text-lg font-normal mb-6 tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Services", "Contact"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="hover:text-white transition-colors text-sm flex items-center justify-center md:justify-start"
                    >
                      <FaArrowRight className="mr-2 text-xs text-blue-400" />
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="md:border-r md:border-gray-800 md:pr-8"
          >
            <h4 className="text-white text-lg font-normal mb-6 tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <motion.li
                className="flex items-start justify-center md:justify-start"
                whileHover={{ x: 3 }}
              >
                <HiOutlineLocationMarker
                  className="mr-3 mt-0.5 text-blue-400 flex-shrink-0"
                  size={16}
                />
                <span>
                  UG-04, Vinayak Central, Cooper Road,
                  <br />
                  Civil Lines, Prayagraj,
                  <br />
                  Uttar Pradesh, India, 211001
                </span>
              </motion.li>
              <motion.li
                className="flex items-center justify-center md:justify-start"
                whileHover={{ x: 3 }}
              >
                <HiOutlinePhone
                  className="mr-3 text-blue-400 flex-shrink-0"
                  size={16}
                />
                <span>+91 7985771381</span>
              </motion.li>
              <motion.li
                className="flex items-center justify-center md:justify-start"
                whileHover={{ x: 3 }}
              >
                <HiOutlineMail
                  className="mr-3 text-blue-400 flex-shrink-0"
                  size={16}
                />
                <span>support@hushandbloom.com</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white text-lg font-normal mb-6 tracking-wider">
              Connect With Us
            </h4>
            <div className="flex justify-center md:justify-start space-x-5">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="pt-8 border-t border-gray-800 flex flex-col items-center text-xs text-gray-500 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="mb-3">
            © {new Date().getFullYear()} Hush and Bloom. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
