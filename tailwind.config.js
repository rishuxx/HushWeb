/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        // Fade-in with scale
        fadeInScale: "fadeInScale 1.5s ease-out",
        // Typewriter effect
        typing:
          "typing 3.5s steps(40, end), blink-caret .75s step-end infinite",
        // Gradient animation
        gradient: "gradient 8s linear infinite",
        // Slide in from left
        slideInLeft: "slideInLeft 1s ease-out",
        // Custom fadeIn (if you want more control than the default)
        fadeIn: "fadeIn 1s ease-in",
      },
      keyframes: {
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          from: { "border-color": "transparent" },
          to: { "border-color": "transparent" },
          "50%": { "border-color": "white" },
        },
        gradient: {
          "0%": { "background-position": "0% 50%" },
          "100%": { "background-position": "100% 50%" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        // For text shadow effects
        "text-white": "0 0 8px rgba(255, 255, 255, 0.8)",
      },
    },
  },
  plugins: [],
};
