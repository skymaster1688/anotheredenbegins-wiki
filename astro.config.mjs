// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://anotheredenbegins.com',
  output: 'static',
  // sitemap.xml 由 src/pages/sitemap.xml.ts 直接静态生成（单文件，无 index 分片）
  // 纯静态输出到 dist/，部署到 Cloudflare Pages 无需适配器
});
