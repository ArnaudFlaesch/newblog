// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import astroIcon from 'astro-icon';
import playformCompress from '@playform/compress';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://arnaudflaesch.github.io',
  //base: 'newblog',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    astroIcon({
      include: {
        mdi: ['*'],
        ri: ['*'],
        'simple-icons': ['*']
      }
    }),
    playformCompress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true // https://github.com/PlayForm/Compress/issues/376
      }
    }),
    react()
  ]
});
