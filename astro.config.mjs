import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { loadEnv } from "vite";
import netlify from "@astrojs/netlify";
const {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_USE_CDN
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: PUBLIC_SANITY_DATASET,
    useCdn: PUBLIC_SANITY_USE_CDN === "true", // See note on using the CDN
    apiVersion: "2024-09-20", // insert the current date to access the latest version of the API
    studioBasePath: "/admin", // path where studio runs
    stega: {
      studioUrl: "/admin"
    }
  }), react()],
  output: "server",
  adapter: netlify()
});