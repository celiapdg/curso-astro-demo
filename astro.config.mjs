import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';

// https://astro.build/config
// adapters: https://astro.build/integrations/?search=&categories%5B%5D=adapters
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',
  adapter: netlify(),
});