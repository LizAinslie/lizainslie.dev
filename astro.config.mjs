// @ts-check
import { defineConfig } from 'astro/config';

// @ts-check
import { rehypeFigure } from "./rehype-figure.mjs";

// @ts-check
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://lizainslie.dev',

  markdown: {
      shikiConfig: {
          theme: 'catppuccin-mocha',
      },
      rehypePlugins: [[rehypeFigure, { className: 'image-figure' }]]
  },

  integrations: [react()],
});