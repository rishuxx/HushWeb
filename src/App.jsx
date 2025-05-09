// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"; // Vercel Speed Insights

import Navbar from "./components/Navbar";

// Page components
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Custom from "./pages/Custom";

// Analytics
import Analytics from "./pages/Analytics"; // Your custom analytics (e.g., Google Analytics)

const App = () => {
  return (
    <Router>
      {/* Your custom Analytics (e.g., Google Analytics, Umami, etc.) */}
      <Analytics />

      {/* Vercel Speed Insights (performance metrics) */}
      <SpeedInsights />

      <main className="overflow-y-hidden text-neutral-200 antialiased">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;
