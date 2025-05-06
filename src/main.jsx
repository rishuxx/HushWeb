// index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactGA from "react-ga4"; // Import Google Analytics

// Initialize Google Analytics with your GA4 Measurement ID
ReactGA.initialize("G-YLZ0CZ2QQM");

// Send a pageview event when the app first loads
ReactGA.send("pageview");

// Render the React app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
