// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://anotheredenbegins.com',
  output: 'static',
  integrations: [sitemap()],
  // 纯静态输出到 dist/，部署到 Cloudflare Pages 无需适配器
});
