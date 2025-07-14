import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // vite.config.js
    server: {
      proxy: {
        "/api": "https://social-media-downloader-lafi.onrender.com",
      },
    },
  build: {
    outDir: "dist", // ⚠️ must match the directory you tell Render
  },
});

// https://social-media-downloader-lafi.onrender.com
