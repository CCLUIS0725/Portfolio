import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'
import path from 'path'
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      emitFile: true,
      filename: "stats.html",
      open: false, // Disable auto-open to prevent dev server issues
      gzipSize: true,
      brotliSize: true,
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // This is a safety check: ensure source maps are OFF for production
    sourcemap: false,
  }
})
