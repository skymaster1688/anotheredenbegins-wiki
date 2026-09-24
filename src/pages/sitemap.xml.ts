// ===== sitemap.xml 静态生成端点 =====
// Astro 静态构建时在 dist/ 生成单文件 sitemap.xml（不依赖任何构建钩子或 npm scripts）
// lastmod 统一取构建当天（北京时间），用户要求所有页面日期一致为今天
import type { APIRoute } from 'astro';
import { pages } from '../data/pages';

const SITE = import.meta.env.SITE;

// 北京时间当天日期（UTC+8），避免 CI 容器时区（UTC）导致日期偏前一天
function beijingToday(): string {
  const d = new Date(Date.now() + 8 * 3600 * 1000);
  return d.toISOString().slice(0, 10);
}

export const GET: APIRoute = () => {
  const today = beijingToday();
  const home = `<url><loc>${SITE}/</loc><lastmod>${today}</lastmod></url>`;
  const pageUrls = pages
    .map((p) => `<url><loc>${SITE}/${p.slug}/</loc><lastmod>${today}</lastmod></url>`)
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
