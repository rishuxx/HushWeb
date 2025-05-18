// src/App.jsx
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Analytics from "./pages/Analytics"; // Page view tracking

// Lazy-loaded Page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Products = lazy(() => import("./pages/Products"));
const Custom = lazy(() => import("./pages/Custom"));

const App = () => {
  return (
    <Router>
      <Analytics /> {/* Tracks page views */}
      <main className="overflow-y-hidden text-neutral-200 antialiased">
        <Navbar />
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
