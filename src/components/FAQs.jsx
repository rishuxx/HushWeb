import React, { useState } from "react";
import { FAQ_DESCRIPTION, FAQS } from "../constants";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

/**
 * FAQs Component - Interactive accordion-style FAQ section for hotel amenity products
 * Provides answers to common questions about hospitality toiletries and amenities
 */
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mt-20" id="faq" aria-labelledby="faq-heading">
      <div className="container mx-auto px-8">
        {/* Flex container for side-by-side layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left-aligned header section */}
          <div className="lg:w-1/3 lg:sticky lg:top-20 lg:self-start">
            <h2
              id="faq-heading"
              className="text-4xl font-semibold text-2xl font-thin tracking-tight mb-4"
            >
              Frequently Asked Questions 
            </h2>
            <p className="text-lg font-thin">{FAQ_DESCRIPTION}</p>
          </div>

          {/* FAQ items - takes remaining space */}
          <div
            className="lg:w-2/3 text-2xl font-thin"
            role="region"
            aria-label="Frequently asked questions about hotel amenity products"
          >
            {FAQS.map((faq, index) => (
              <div key={index} className="mb-4 border-b pb-4">
                <motion.div
                  className="flex cursor-pointer items-center justify-between p-8"
                  onClick={() => handleToggle(index)}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  role="button"
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-xl" id={`faq-question-${index}`}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  >
                    {activeIndex === index ? (
                      <FaMinus className="text-xl" />
                    ) : (
                      <FaPlus className="text-xl" />
                    )}
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <div className="mt-4 overflow-hidden text-lg">
                        <p className="p-8">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Add component metadata for better SEO
FAQs.displayName = "HotelAmenityFAQs";

// Add schema.org structured data for rich results in search
FAQs.getInitialProps = async () => {
  return {
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    meta: {
      title:
        "Hotel Amenity FAQs | Common Questions About Hospitality Toiletries",
      description:
        "Find answers to frequently asked questions about our premium hotel amenity products, custom packaging options, and hospitality toiletries.",
    },
  };
};

export default FAQs;
