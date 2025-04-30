import React from "react";
import HeroSection from "../components/HeroSection";
import HomeSection2 from "../components/HomeSection2";
import DearPartner from "../components/DearPartner";
import OurCollection from "../components/OurCollection";
import YourHotel from "../components/YourHotel";
import AvailableIn from "../components/AvailableIn";

import BottleShapes from "../components/BottleShapes";

const Home = () => {
  return (
    <main className="overflow-y-hidden text-neutral-500 antialiased">
      <HeroSection />
      <DearPartner />
      <HomeSection2 />
      <OurCollection />
      <AvailableIn />
      <YourHotel />
      <BottleShapes />
     
    </main>
  );
};

export default Home;
