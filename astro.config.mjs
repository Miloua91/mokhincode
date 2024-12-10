import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import tunnel from "astro-tunnel";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    tunnel(),
    react(),
    mdx(),
  ],
  site: "https://Miloua91.github.io",
  outDir: "./dist",
  output: "static",
});
