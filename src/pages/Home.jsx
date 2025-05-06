import React from "react";
import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <title>Hush and Bloom | Luxury Hotel Toiletries</title>
        <meta
          name="description"
          content="Elevate your guests' experience with Hush and Bloom's premium hotel toiletries. Custom scents, elegant packaging, and high-quality ingredients."
        />
        <meta
          name="keywords"
          content="hotel toiletries, luxury toiletries, custom hotel products, Hush and Bloom, hospitality supplies,hushnbloom, hush & bloom"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hushandbloom.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Hush and Bloom | Luxury Hotel Toiletries"
        />
        <meta
          property="og:description"
          content="Custom hotel toiletries that leave a lasting impression. Discover elegance with Hush and Bloom."
        />
        <meta property="og:url" content="https://www.hushandbloom.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.hushandbloom.com/hero1.jpg"
        />

        {/* Twitter Cards */}
        <meta
          name="twitter:title"
          content="Hush and Bloom | Luxury Hotel Toiletries"
        />
        <meta
          name="twitter:description"
          content="Custom hotel toiletries that leave a lasting impression. Discover elegance with Hush and Bloom."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://www.hushandbloom.com/hero1.jpg"
        />
      </Helmet>

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
    </>
  );
};

export default Home;
