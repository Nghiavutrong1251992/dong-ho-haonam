import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://haonamwatchcare.com',
  trailingSlash: 'always',
  output: 'static',
  server: {
    port: 4322,
  },
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
