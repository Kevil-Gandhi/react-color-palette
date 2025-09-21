import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-color-palette",
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
