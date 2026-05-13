import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    minify: "esbuild",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          animations: ["framer-motion"],
          icons: ["lucide-react"],
        },
      },
    },
  },
  server: {
    port: 5173,
    strictPort: false,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  preview: {
    port: 4173,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
