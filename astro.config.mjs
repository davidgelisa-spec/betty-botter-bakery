import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://davidgelisa-spec.github.io",
  base: "/betty-botter-bakery",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
