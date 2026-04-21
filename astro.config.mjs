// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://clubdenoyer.com',
  trailingSlash: 'ignore',
  build: {
    assets: '_assets',
  },
});
