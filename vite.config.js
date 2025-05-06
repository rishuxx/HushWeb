import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Optional but recommended for Vercel:
  build: {
    outDir: "dist",
  },
});
