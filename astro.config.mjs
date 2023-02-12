import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://lizainslie.dev',
  integrations: [react(), tailwind(), mdx(), robotsTxt()],
  output: "server",
  adapter: vercel()
});