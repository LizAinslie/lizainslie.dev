// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://lizainslie.dev',

  markdown: {
      shikiConfig: {
          theme: 'catppuccin-mocha',
      },
  },

  integrations: [react()],
});