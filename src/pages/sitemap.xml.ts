// ===== sitemap.xml 静态生成端点 =====
// Astro 静态构建时在 dist/ 生成单文件 sitemap.xml（不依赖任何构建钩子或 npm scripts）
import type { APIRoute } from 'astro';
import { pages } from '../data/pages';

const SITE = import.meta.env.SITE;

const MONTHS: Record<string, string> = {
  Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
  Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12',
};

function toLastmod(raw: string): string {
  // 输入如 'Sep 17, 2026'，输出 ISO 日期 '2026-09-17'
  const m = raw.match(/(\w{3}) (\d{1,2}), (\d{4})/);
  if (!m || !MONTHS[m[1]]) return '2026-09-25';
  return `${m[3]}-${MONTHS[m[1]]}-${m[2].padStart(2, '0')}`;
}

export const GET: APIRoute = () => {
  const home = `<url><loc>${SITE}/</loc><lastmod>2026-09-25</lastmod></url>`;
  const pageUrls = pages
    .map((p) => `<url><loc>${SITE}/${p.slug}/</loc><lastmod>${toLastmod(p.updated)}</lastmod></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${home}
${pageUrls}
</urlset>`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
