import React from "react";
import { PACKAGES } from "../constants";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const AvailableIn = () => {
  return (
    <section className="py-8 px-4 md:px-8" id="pricing">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-thin tracking-tighter text-center mb-10 sm:mb-20 lg:mb-14 text-[#402D0A]">
          Products Available In
        </h1>
      </div>

      <div className="flex flex-col items-center space-y-6">
        {PACKAGES.map((pkg, index) => (
          <div
            key={index}
            className="w-full max-w-6xl rounded-xl border-2 border-[#402D0A] p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Left: Title & Description */}
              <div className="md:w-2/6">
                <h2 className="text-base font-light text-[#402D0A]/80 mb-1">
                  {pkg.name}
                </h2>
                <p className="text-2xl font-light text-[#402D0A] mb-4">
                  {pkg.title}
                </p>
                <p className="text-[#402D0A]/70 tracking-normal font-thin text-base">
                  {pkg.description || "Premium collection of luxury amenities"}
                </p>
              </div>

              {/* Right: Services */}
              <div className="md:w-3/5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Liquids */}
                  <div>
                    <h3 className="font-light text-[#402D0A] mb-2">Liquids</h3>
                    <ul className="space-y-1 font-extralight text-[#402D0A]/80">
                      {pkg.liquid.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Soap */}
                  <div>
                    <h3 className="font-light text-[#402D0A] mb-2">Soap</h3>
                    <ul className="space-y-1 font-extralight text-[#402D0A]/80">
                      {pkg.soap.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dry Amenities */}
                  <div>
                    <h3 className="font-light text-[#402D0A] mb-2">
                      Dry Amenities
                    </h3>
                    <ul className="space-y-1 font-extralight text-[#402D0A]/80">
                      {pkg.dryAmenities?.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Enquiry Button */}
                <div className="mt-6 md:mt-8 flex justify-end">
                  <Link to="/contact">
                    <button className="flex items-center rounded-full bg-[#402D0A] px-5 py-2.5 text-white hover:bg-[#402D0A]/90 transition-colors duration-200">
                      Enquiry Now
                      <IoArrowForward className="ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvailableIn;
