import React from "react";
import HeroSection from "../components/HeroSection";
import HomeSection2 from "../components/HomeSection2";
import DearPartner from "../components/DearPartner";
import OurCollection from "../components/OurCollection";


const Home = () => {
  return (
    <main className="overflow-y-hidden text-neutral-500 antialiased">
      <HeroSection />
      <DearPartner/>
      <HomeSection2/>
      <OurCollection/>
    </main>
  );
};

export default Home;
