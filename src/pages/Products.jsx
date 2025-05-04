import React from "react";
import OurCollection from "../components/OurCollection";
import DryItems from "../components/DryItems";
import Footer from "../components/Footer";
import heroImage from "../assets/HeroProducts.jpg"; // Make sure to add this image to your assets

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-72 md:h-96 max-h-screen overflow-hidden">
        {/* Hero Image with overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Our Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Hero Text */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-normal md:text-6xl tracking-tighter text-white mb-4  mt-20 animate-fadeIn">
            Products
          </h1>
          <p className="text-xl md:text-2xl text-white  font-extralight max-w-2xl mb-8 animate-fadeIn delay-100">
            Shaving Kit • Dental Kit • Shower Kit • Bath Kit
          </p>
        </div>
      </div>

      {/* Rest of your content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <OurCollection />
        <DryItems />
      </div>

      <Footer />
    </div>
  );
};

export default Products;
