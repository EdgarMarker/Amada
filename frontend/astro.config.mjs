import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import path from "path";
import { fileURLToPath } from "url"; // Importa fileURLToPath

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
});