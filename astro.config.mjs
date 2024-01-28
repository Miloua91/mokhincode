import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import tunnel from "astro-tunnel";
//import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), tunnel(), react(), mdx()]
  //	output: 'server',
  //	adapter: vercel({
  //	webAnalytics: {
  //	enabled: true,
  //	},
  //	}),
});