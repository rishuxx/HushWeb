import React from "react";
import { motion } from "framer-motion";
import { PACKAGES } from "../constants";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const AvailableIn = () => {
  // Animation variants for staggered children
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
    <section
      className="py-8 px-4 md:px-8"
      id="packages"
      itemScope
      itemType="https://schema.org/OfferCatalog"
    >
      <meta itemProp="name" content="Hotel Amenities Packages" />
      <meta
        itemProp="description"
        content="Premium hotel amenity packages including liquids, soaps and dry items for luxury hospitality providers in India"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-thin tracking-tighter text-center mb-10 sm:mb-20 lg:mb-14 text-[#402D0A]">
          Products Available In
        </h1>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center space-y-6"
      >
        {PACKAGES.map((pkg, index) => (
          <motion.div
            key={index}
            variants={item}
            transition={{ duration: 0.6 }}
            className="w-full max-w-6xl rounded-xl border-2 border-[#402D0A] p-6 md:p-8"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Left: Title & Description */}
              <div className="md:w-2/6">
                <h2
                  className="text-base font-light text-[#402D0A]/80 mb-1"
                  itemProp="category"
                >
                  {pkg.name}
                </h2>
                <p
                  className="text-2xl font-light text-[#402D0A] mb-4"
                  itemProp="name"
                >
                  {pkg.title}
                </p>
                <p
                  className="text-[#402D0A]/70 tracking-normal font-thin text-base"
                  itemProp="description"
                >
                  {pkg.description || "Premium collection of luxury amenities"}
                </p>
              </div>

              {/* Right: Services */}
              <div className="md:w-3/5">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                >
                  {/* Liquids */}
                  <motion.div
                    variants={item}
                    itemProp="includes"
                    itemType="https://schema.org/Product"
                  >
                    <h3 className="font-light text-[#402D0A] mb-2">Liquids</h3>
                    <ul className="space-y-1 font-extralight text-[#402D0A]/80">
                      {pkg.liquid.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start"
                          itemProp="name"
                        >
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Soap */}
                  <motion.div
                    variants={item}
                    itemProp="includes"
                    itemType="https://schema.org/Product"
                  >
                    <h3 className="font-light text-[#402D0A] mb-2">Soap</h3>
                    <ul className="space-y-1 font-extralight text-[#402D0A]/80">
                      {pkg.soap.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start"
                          itemProp="name"
                        >
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Dry Amenities */}
                  <motion.div
                    variants={item}
                    itemProp="includes"
                    itemType="https://schema.org/Product"
                  >
                    <h3 className="font-light text-[#402D0A] mb-2">
                      Dry Amenities
                    </h3>
                    <ul className="space-y-1 font-extralight text-[#402D0A]/80">
                      {pkg.dryAmenities?.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start"
                          itemProp="name"
                        >
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>

                {/* Enquiry Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 md:mt-8 flex justify-end"
                >
                  <Link to="/contact" itemProp="url">
                    <button
                      className="flex items-center rounded-full bg-[#402D0A] px-5 py-2.5 text-white hover:bg-[#402D0A]/90 transition-colors duration-200"
                      aria-label={`Enquire about ${pkg.title} package`}
                    >
                      Enquiry Now
                      <IoArrowForward className="ml-2" />
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Hidden SEO content */}
      <div style={{ display: "none" }} aria-hidden="true">
        <h2>Premium Hotel Amenity Packages in India</h2>
        <p>We offer complete solutions for luxury hotels including:</p>
        <ul>
          <li>Bulk hotel shampoo and conditioner sets</li>
          <li>Luxury soap collections for 5-star hotels</li>
          <li>Complete dry amenity packages</li>
          <li>Custom branded toiletries for resorts</li>
          <li>Eco-friendly hospitality products</li>
        </ul>
        <p>
          Serving major hotel chains across Mumbai, Delhi, Bangalore, Hyderabad
          and all India
        </p>
      </div>
    </section>
  );
};

export default AvailableIn;
