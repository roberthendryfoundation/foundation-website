import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Point your proxy at your API. Use HTTP for dev.
const target =
  process.env.ASPNETCORE_URLS?.split(";")[0] ??
  (process.env.ASPNETCORE_HTTP_PORT
    ? `http://localhost:${process.env.ASPNETCORE_HTTP_PORT}`
    : "http://localhost:5081");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  server: {
    port: parseInt(process.env.DEV_SERVER_PORT || "5173", 10),
    proxy: {
      "^/weatherforecast": { target, secure: false, changeOrigin: true },
      "^/api": { target, secure: false, changeOrigin: true },
    },
  },
  build: {
    // Production optimizations
    minify: "esbuild",
    sourcemap: false, // Set to true for debugging production issues
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          sanity: ["@sanity/client"],
          ui: ["lucide-react", "@radix-ui/react-slot", "@radix-ui/react-label"],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
});
