import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import sentry from '@sentry/astro';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  site: 'https://octopos.uz',
  adapter: vercel(),
  output: 'server',
  prerender: { default: true },

  // Integrations: Tailwind, Image, Sitemap, Sentry
  integrations: [tailwind(), image(), sitemap(), sentry()]
});