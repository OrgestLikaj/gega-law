// @ts-check
import { defineConfig } from 'astro/config';

// SITE / BASE are set by the GitHub Pages preview workflow.
// TODO: replace the default with the real domain once it is registered.
export default defineConfig({
  site: process.env.SITE ?? 'https://www.studioligjoregega.al',
  base: process.env.BASE ?? '/',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'sq',
    locales: ['sq', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
