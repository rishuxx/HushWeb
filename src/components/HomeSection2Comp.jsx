import React from "react";

const HomeSection2Comp = ({ project }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-38 md:w-50 opacity-60 mx-auto">
      <img
        src={project.image}
        alt={project.title}
        className="mb-2 h-8 w-8 md:h-10 md:w-10 md:mt-2 filter brightness-0 saturate-0 opacity-80 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3 mx-auto"
      />

      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xs md:text-sm font-semibold mb-1 text-black">
          {project.title}
        </h3>
        <p className="hidden md:block text-[20px] md:text-sm text-black/70">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default HomeSection2Comp;
