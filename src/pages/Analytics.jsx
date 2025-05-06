// src/Analytics.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Send pageview on route change
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]); // Ensure it sends a pageview when location changes

  return null;
};

export default Analytics;
