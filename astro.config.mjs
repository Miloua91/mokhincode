import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import tunnel from "astro-tunnel";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

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
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
