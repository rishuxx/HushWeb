import React from "react";
import PageTransition from "../components/PageTransition";
import HeroSection from "../components/HeroSection";
import HomeSection2 from "../components/HomeSection2";
import DearPartner from "../components/DearPartner";
import OurCollection from "../components/OurCollection";
import YourHotel from "../components/YourHotel";
import AvailableIn from "../components/AvailableIn";
import BottleShapes from "../components/BottleShapes";
import StepCustom from "../components/stepCustom";
import FAQs from "../components/FAQs";
import Email from "../components/Email";
import Map from "../components/Map";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

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
        <FAQs />
        <Email />
        <Map />
        <Testimonials />
        <Footer />
      </main>
    
  );
};

export default Home;
