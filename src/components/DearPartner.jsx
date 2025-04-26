import React from "react";
import Logo from "../assets/HnbLogo.png";
import { dearPartnerText } from "../constants"; // <-- Import text from your texts file

const DearPartner = () => {
  return (
    <section className="flex flex-col mt-16 items-center justify-center px-4 py-12 text-center">
      {/* Logo */}
      <div className="mb-16">
        <img
          src={Logo}
          alt="Hush & Bloom Logo"
          className="h-20 md:h-28 object-contain mx-auto transition-transform duration-300 ease-in-out hover:scale-105" // Smooth zoom-in and out
        />
      </div>

      {/* Text Content */}
      <div className="w-32 mb-10 border-b border-gray-300 mt-10"></div>
      <div className="w-full max-w-6xl">
        {" "}
        {/* Increased width to take more space */}
        <h2 className="text-lg tracking-widest text-gray-500 uppercase mb-6">
          {dearPartnerText.title}
        </h2>
        <p className="text-gray-500 leading-relaxed text-base md:text-xl tracking-wider font-light">
          {" "}
          {/* Added letter spacing */}
          {dearPartnerText.description}
        </p>
      </div>

      {/* Bottom Line */}
      <div className="w-32 border-b border-gray-300 mt-10"></div>
    </section>
  );
};

export default DearPartner;
