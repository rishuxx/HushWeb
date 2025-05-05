import React from "react";
import { motion } from "framer-motion";
import { ELEMENTS } from "../constants";
import HomeSection2Comp from "./HomeSection2Comp";
import logo from "../assets/logo.png";

const HomeSection2 = () => {
  // Double the elements for seamless looping
  const doubledElements = [...ELEMENTS, ...ELEMENTS];

  return (
    <section
      className="container mx-auto py-10 md:py-12"
      id="why-choose-us"
      itemScope
      itemType="https://schema.org/Service"
    >
      <meta itemProp="serviceType" content="Hotel Amenities Supplier" />
      <meta itemProp="provider" content="Your Company Name" />
      <meta itemProp="areaServed" content="India" />

      <h2 className="mt-5 md:text-3xl flex justify-center items-center gap-5 translate-x-[20px] text-3xl sm:text-4xl lg:text-4xl font-thin tracking-tighter text-center mb-10 sm:mb-20 lg:mb-14 text-[#402D0A]">
        <span itemProp="name">Why Choose Us ?</span>
        <span className="w-px h-6 bg-gray-400"></span>
        <img
          src={logo}
          alt="Premium Hotel Amenities Logo - Trusted Supplier in India"
          className="h-6 md:h-8 inline-block filter brightness-50 transition-transform duration-1000 ease-in-out hover:scale-125 hover:rotate-12"
          itemProp="logo"
          loading="lazy"
        />
      </h2>

      <div className="mb-5 mt-8 border-t border-gray-300 w-full mx-auto"></div>

      <div className="relative overflow-hidden" itemProp="description">
        {/* Fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling container with Framer Motion animation */}
        <motion.div
          className="flex py-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          aria-label="Our Unique Selling Points"
        >
          {doubledElements.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / ELEMENTS.length}%` }}
              itemProp="hasOfferCatalog"
              itemType="https://schema.org/OfferCatalog"
            >
              <HomeSection2Comp project={project} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="m-10 border-t border-gray-300 w-full mx-auto"></div>

      {/* Hidden SEO content */}
      <div style={{ display: "none" }} aria-hidden="true">
        <h3>Top Hotel Amenities Supplier in India</h3>
        <p>
          We are the preferred choice for 5-star hotels and resorts across India
          for premium quality shampoo, conditioner, and dry items.
        </p>
        <ul>
          <li>Bulk hotel amenities supplier Mumbai</li>
          <li>Luxury toiletries for hotels Delhi</li>
          <li>Eco-friendly hotel products Bangalore</li>
          <li>Custom branded amenities Hyderabad</li>
          <li>Hotel bathroom essentials supplier India</li>
        </ul>
      </div>
    </section>
  );
};

export default HomeSection2;
