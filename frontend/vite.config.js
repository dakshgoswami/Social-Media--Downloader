import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // vite.config.js
  ...(process.env.NODE_ENV === "development" && {
    server: {
      proxy: {
        "/api": "http://localhost:3000",
      },
    },
  }),
  build: {
    outDir: "dist", // ⚠️ must match the directory you tell Render
  },
});
