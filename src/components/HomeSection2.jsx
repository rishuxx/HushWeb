import React, { useEffect, useRef } from "react";
import { ELEMENTS } from "../constants";
import HomeSection2Comp from "./HomeSection2Comp";
import logo from "../assets/logo.png"; // adjust path to your logo

const HomeSection2 = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone elements for continuous scrolling
    const originalChildren = Array.from(scrollContainer.children);
    originalChildren.forEach((child) => {
      const clone = child.cloneNode(true);
      scrollContainer.appendChild(clone);
    });

    // Calculate original width
    let originalContentWidth = 0;
    originalChildren.forEach((child) => {
      originalContentWidth += child.offsetWidth;
    });

    let animationId;
    const animate = () => {
      if (scrollContainer.scrollLeft >= originalContentWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 0.5; // Adjust speed here
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);


  return (
    <section className="container mx-auto py-10 md:py-12" id="ELEMENTS">
      <h2 className="mb-10 mt-5 text-center text-2xl tracking-tight md:text-3xl flex justify-center items-center gap-5 translate-x-[20px]">
        <span>WHY CHOOSE US ?</span>

        {/* Vertical Line */}
        <span className="w-px h-6 bg-gray-400"></span>

        <img
          src={logo}
          alt="Logo"
          className="h-6 md:h-8 inline-block filter brightness-50 transition-transform duration-1000 ease-in-out hover:scale-125 hover:rotate-12"
        />
      </h2>

      <div className="mb-5 mt-8 border-t border-gray-300 w-full mx-auto"></div>

      <div className="relative overflow-hidden ">
        {/* Fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling container - important: removed md:grid to keep items in single row */}
        <div
          ref={scrollRef}
          className="flex flex-nowrap overflow-x-auto scroll-smooth scrollbar-hide gap-5 md:gap-0 items-center justify-center py-4 px-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {ELEMENTS.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: "calc(100% / 4)" }}
            >
              <HomeSection2Comp project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="m-10 border-t border-gray-300 w-full mx-auto"></div>
    </section>
  );
};

export default HomeSection2;
