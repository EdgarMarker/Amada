import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import path from "path";

const { VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET } = import.meta.env;

export default defineConfig({
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  integrations: [
    sanity({
      projectId: VITE_SANITY_PROJECT_ID,
      dataset: VITE_SANITY_DATASET,
      useCdn: false,
    }),
    react(),
  ],
  vite: {
    resolve: {
      alias: {
        react: path.resolve(__dirname, "./node_modules/react"),
        "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
      },
    },
    optimizeDeps: {
      include: ["gsap", "@gsap/react", "react", "react-dom"],
    },
    build: {
      commonjsOptions: {
        include: [/gsap/, /@gsap/],
      },
    },
  },
});