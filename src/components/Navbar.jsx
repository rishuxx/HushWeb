import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // <-- added useLocation
import Logo from "../assets/Logo.png";
import { LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navBgClass, setNavBgClass] = useState("bg-white/20"); // Default color for navbar on load
  const location = useLocation(); // <-- track the current route

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const updateNavBg = () => {
    const scrollY = window.scrollY;
    if (scrollY < 100) {
      setNavBgClass("bg-black/20"); // Lighter background for top of the page
    } else {
      setNavBgClass("bg-black/20"); // Darker background when scrolling down
    }
  };

  useEffect(() => {
    // Add scroll listener when component mounts or route changes
    window.addEventListener("scroll", updateNavBg);
    updateNavBg(); // Check scroll position immediately when the page loads

    return () => window.removeEventListener("scroll", updateNavBg);
  }, [location]); // <-- rerun on route change

  return (
    <nav className="fixed top-0 z-50 w-full flex justify-center">
      <div
        className={`mt-10 flex gap-20 w-lg max-w-5xl items-center justify-between rounded-full p-2 px-6 backdrop-blur-md shadow-md transition-colors duration-300 ${navBgClass}`}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="h-7 w-auto transition-transform duration-1000 ease-in-out hover:scale-110 hover:rotate-6"
          />
        </Link>

        <div className="hidden space-x-6 lg:flex ">
          {LINKS.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`text-sm text-white ${
                index !== 0 ? "border-l border-white/20 pl-3" : ""
              } transition-transform duration-1000 ease-in-out hover:scale-125 hover:rotate-3`}
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full w-full bg-black/20 p-4 backdrop-blur-lg lg:hidden">
          {LINKS.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block py-2 text-white text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
