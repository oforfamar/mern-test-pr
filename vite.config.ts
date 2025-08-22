import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [reactRouter()],
  server: {
    port: 3000,
  },
  css: {
    postcss: "./postcss.config.mjs",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./app", import.meta.url)),
    },
  },
});
