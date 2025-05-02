import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Email = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    message: false,
  });
  const formRef = useRef();

  useEffect(() => {
    // Animation on mount
    const timer = setTimeout(() => {
      document.querySelectorAll(".form-element").forEach((el, i) => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field) => {
    setIsFocused({ ...isFocused, [field]: false });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_jnl243d",
          "template_fklgyvd",
          formData,
          "RMfEbB6n5tbk4pMHD"
        )
        .then((response) => {
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          toast.error("Error sending message. Please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.025em",
          },
        }}
      />

      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="text-center text-4xl font-thin text-gray-800 mb-12 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          ref={formRef}
        >
          <div className="space-y-8">
            {/* Name + Email Row */}
            <div
              className="form-element grid grid-cols-1 md:grid-cols-2 gap-6"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.4s ease-out 0.1s",
              }}
            >
              {/* Name Field */}
              <div className="relative">
                <div
                  className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-200 ${
                    isFocused.name || formData.name
                      ? "text-blue-500"
                      : "text-gray-400"
                  }`}
                >
                  <FiUser />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                  className={`w-full pl-10 pr-4 py-3 border-b ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  } focus:border-blue-500 focus:outline-none bg-transparent text-gray-700 font-light placeholder-gray-400 transition-colors duration-200`}
                  placeholder="Your Name"
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      className="text-red-500 text-xs font-light mt-1 pl-10"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Field */}
              <div className="relative">
                <div
                  className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-200 ${
                    isFocused.email || formData.email
                      ? "text-blue-500"
                      : "text-gray-400"
                  }`}
                >
                  <FiMail />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                  className={`w-full pl-10 pr-4 py-3 border-b ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  } focus:border-blue-500 focus:outline-none bg-transparent text-gray-700 font-light placeholder-gray-400 transition-colors duration-200`}
                  placeholder="Your Email"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      className="text-red-500 text-xs font-light mt-1 pl-10"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Message Field */}
            <div
              className="form-element"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.4s ease-out 0.2s",
              }}
            >
              <div className="relative">
                <div
                  className={`absolute left-3 top-4 transition-all duration-200 ${
                    isFocused.message || formData.message
                      ? "text-blue-500"
                      : "text-gray-400"
                  }`}
                >
                  <FiMessageSquare />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message")}
                  className={`w-full pl-10 pr-4 py-3 border-b ${
                    errors.message ? "border-red-400" : "border-gray-200"
                  } focus:border-blue-500 focus:outline-none bg-transparent text-gray-700 font-light placeholder-gray-400 transition-colors duration-200 resize-none`}
                  placeholder="Your Message"
                  rows="5"
                />
              </div>
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    className="text-red-500 text-xs font-light mt-1 pl-10"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {errors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Submit Button */}
            <div
              className="form-element pt-2"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.4s ease-out 0.3s",
              }}
            >
              <motion.button
                type="submit"
                className={`
                  w-full px-6 py-3 rounded-full 
                  bg-gradient-to-r from-blue-500 to-blue-600 
                  text-white font-light tracking-wide 
                  shadow-sm hover:shadow-lg 
                  transition-all duration-300 
                  flex items-center justify-center space-x-2
                  ${isSending ? "opacity-80 cursor-not-allowed" : ""}
                `}
                disabled={isSending}
                whileHover={
                  !isSending
                    ? {
                        scale: 1.02,
                        background:
                          "linear-gradient(to right, #3B82F6, #2563EB)",
                      }
                    : {}
                }
                whileTap={!isSending ? { scale: 0.98 } : {}}
              >
                <span className="tracking-wider">
                  {isSending ? "Sending..." : "Send Message"}
                </span>
                <FiSend
                  className={`transition-transform duration-300 ${
                    isSending ? "animate-pulse" : ""
                  }`}
                />
              </motion.button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Email;
