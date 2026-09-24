// 构建后钩子：把 Astro sitemap 产物合并为单个 sitemap.xml
// 页面少（单分片）时 sitemap.xml = sitemap-0.xml 内容（urlset）
// 页面多（多分片）时 sitemap.xml = sitemap-index.xml 内容（sitemapindex）
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const index = readFileSync(dist + 'sitemap-index.xml', 'utf-8');
const hasSecond = existsSync(dist + 'sitemap-1.xml');
const out = hasSecond
  ? index
  : readFileSync(dist + 'sitemap-0.xml', 'utf-8');
writeFileSync(dist + 'sitemap.xml', out);
console.log('postbuild: wrote dist/sitemap.xml' + (hasSecond ? ' (index form)' : ''));
