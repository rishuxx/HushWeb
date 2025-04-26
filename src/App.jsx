import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// Page components
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

const App = () => {
  return (
    <Router>
      <main className="overflow-y-hidden text-neutral-200 antialiased">
        <Navbar />
        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;
