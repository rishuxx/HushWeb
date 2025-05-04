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
          toast.success("Message sent successfully!", {
            style: {
              background: "rgba(255, 255, 255, 0.95)",
              border: "1px solid rgba(209, 213, 219, 0.3)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
            },
            iconTheme: {
              primary: "#92400e",
              secondary: "#fff",
            },
          });
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          toast.error("Error sending message. Please try again later.", {
            style: {
              background: "rgba(255, 255, 255, 0.95)",
              border: "1px solid rgba(209, 213, 219, 0.3)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
            },
          });
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <section
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8"
      id="contact"
    >
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.025em",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
          },
        }}
      />

      <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-4xl font-thin tracking-tighter text-center mt-32 mb-15 sm:mb-10 lg:mb-10 text-[#1d1204b4]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-gray-500  text-lg max-w-2xl text-2xl font-thin mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We would love to hear from you! Whether you have a question, a
            project in mind, or just want to say hello, feel free to reach out.
            We're here to help and will get back to you as soon as possible.
          </motion.p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 backdrop-blur-sm bg-opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          ref={formRef}
        >
          <div className="space-y-8">
            {/* Name + Email Row */}
            <motion.div
              className="form-element grid grid-cols-1 md:grid-cols-2 gap-6"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.4s ease-out 0.1s",
              }}
            >
              {/* Name Field */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -z-10" />
                <div className="relative bg-white rounded-lg p-1 shadow-sm border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full group-hover:shadow-md">
                  <div
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      isFocused.name || formData.name
                        ? "text-amber-700 scale-110"
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
                    className={`w-full pl-12 pr-4 py-3 bg-transparent focus:outline-none text-gray-700 font-light placeholder-gray-400 transition-all duration-300 rounded-lg group-hover:placeholder-gray-500`}
                    placeholder="Your Name"
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        className="text-red-500 text-xs font-light mt-1 pl-12"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Email Field */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -z-10" />
                <div className="relative bg-white rounded-lg p-1 shadow-sm border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full group-hover:shadow-md">
                  <div
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      isFocused.email || formData.email
                        ? "text-amber-700 scale-110"
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
                    className={`w-full pl-12 pr-4 py-3 bg-transparent focus:outline-none text-gray-700 font-light placeholder-gray-400 transition-all duration-300 rounded-lg group-hover:placeholder-gray-500`}
                    placeholder="Your Email"
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        className="text-red-500 text-xs font-light mt-1 pl-12"
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
            </motion.div>

            {/* Message Field */}
            <motion.div
              className="form-element"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.4s ease-out 0.2s",
              }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -z-10" />
                <div className="relative bg-white rounded-lg p-1 shadow-sm border border-gray-100 hover:border-gray-200 transition-all duration-300 group-hover:shadow-md">
                  <div
                    className={`absolute left-4 top-5 transition-all duration-300 ${
                      isFocused.message || formData.message
                        ? "text-amber-700 scale-110"
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
                    className={`w-full pl-12 pr-4 py-3 bg-transparent focus:outline-none text-gray-700 font-light placeholder-gray-400 transition-all duration-300 resize-none rounded-lg group-hover:placeholder-gray-500`}
                    placeholder="Your Message"
                    rows="5"
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        className="text-red-500 text-xs font-light mt-1 pl-12"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="form-element pt-2 flex justify-center"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.4s ease-out 0.3s",
              }}
            >
              <motion.button
                type="submit"
                className={`
                  px-8 py-3 rounded-lg
                  bg-gradient-to-r from-amber-950 to-amber-800
                  text-white font-thin tracking-wider
                  shadow-sm hover:shadow-md
                  transition-all duration-300
                  flex items-center justify-center space-x-2
                  ${isSending ? "opacity-90 cursor-not-allowed" : ""}
                  text-base
                  relative overflow-hidden
                  w-auto min-w-[200px]
                `}
                disabled={isSending}
                whileHover={
                  !isSending
                    ? {
                        scale: 1.02,
                        boxShadow: "0 5px 15px -3px rgba(120, 53, 15, 0.3)",
                        background:
                          "linear-gradient(to right, #7c2d12, #6b2c0f)",
                      }
                    : {}
                }
                whileTap={!isSending ? { scale: 0.98 } : {}}
              >
                <span className="relative z-10">
                  {isSending ? "Sending..." : "Send Message"}
                </span>
                <motion.div
                  className="relative z-10"
                  animate={
                    isSending
                      ? {
                          rotate: 360,
                          transition: {
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          },
                        }
                      : {
                          rotate: 0,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                          },
                        }
                  }
                >
                  <FiSend className="text-lg" />
                </motion.div>
                {!isSending && (
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-amber-800/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: "-100%" }}
                    whileHover={{
                      x: "100%",
                      opacity: 1,
                      transition: { duration: 0.7 },
                    }}
                  />
                )}
              </motion.button>
            </motion.div>
          </div>
        </motion.form>

        <motion.div
          className="mt-12 text-center text-gray-400 font-light text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          We'll get back to you within 24 hours
        </motion.div>
      </div>
    </section>
  );
};

export default Email;
