import React from 'react'
import Footer from '../components/Footer';
import heroImage from "../assets/brown.jpg";
import DearPartner from '../components/DearPartner';
import HomeSection2 from '../components/HomeSection2';
import YourHotel from '../components/YourHotel';
import BottleShapes from '../components/BottleShapes';
import CustomTopText from '../components/CustomTopText';

const Custom = () => {
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
         <div className="absolute inset-0 bg-black bg-opacity-0"></div>
       </div>

       {/* Hero Text */}
       <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
         <h1 className="text-4xl font-normal md:text-6xl tracking-tighter text-white mb-4  mt-20 animate-fadeIn">
           Customization
         </h1>
         <p className="text-base md:text-base text-white  font-extralight max-w-2xl mb-8 animate-fadeIn delay-100">
           Get your own customized products with your brand logo 
            
         </p>
       </div>
     </div>

     {/* Rest of your content */}
     
       <CustomTopText/>
       <HomeSection2 />
       <YourHotel />
       <BottleShapes />
     

     <Footer />
   </div>
 );
}

export default Custom