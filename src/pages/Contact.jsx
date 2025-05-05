import React from 'react'
import heroImage from "../assets/brown.jpg";
import Email from '../components/Email';
import Footer from '../components/Footer';

const Contact = () => {
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
         <h1 className="text-4xl font-normal md:text-6xl tracking-tighter text-white mb-4  mt-20 ">
           Have a question?
         </h1>
         <p className="text-base md:text-base text-white  font-extralight max-w-2xl mb-8 animate-fadeIn delay-100">
           We'll help with any questions. Use the form below and we'll respond
           quickly.
         </p>
       </div>
     </div>

     {/* Rest of your content */}

     <Email />
     <Footer />
   </div>
 );
}

export default Contact