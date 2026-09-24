# Another Eden Begins Wiki · Astro 站点

基于调研文件（`首页信息.md` 及根目录各攻略 md）与官方素材搭建的攻略维基站点，使用 **Astro 7** 构建为纯静态站，可直接部署到 Cloudflare Pages（免费）。

## 快速开始

```bash
npm install        # 安装依赖
npm run dev        # 本地开发（http://localhost:4321）
npm run build      # 构建静态站到 dist/
npm run preview    # 本地预览构建产物
```

## 目录结构

```
astro-site/
├── astro.config.mjs      # 站点配置（site、static 输出）
├── package.json
├── public/
│   ├── favicon.svg       # favicon 全套（ico/png/manifest 同目录）
│   └── assets/           # 官方素材（key art / 场景 / 角色组图）
└── src/
    ├── layouts/
    │   └── Layout.astro  # ★ 全站公共模板：head、导航、footer
    ├── pages/
    │   ├── index.astro   # 首页（游戏介绍 + 核心入口，不做关键词目录）
    │   └── [slug].astro  # 核心内页动态路由：/guide/ /characters/ /story/ /platforms/ /dlc/
    ├── data/
    │   └── pages.ts      # ★ 全站页面数据（新增页面在此加一条）
    └── styles/
        └── global.css    # 全站样式
```

## SEO 架构（15 个平级内页规划）

站内页按搜索意图拆分，URL 全部平级：

- **第一批（核心，已完成）**：`/`、`/guide/`、`/characters/`、`/story/`、`/platforms/`、`/dlc/`
- **第二批（高搜索意图）**：`/codes/`、`/tier-list/`、`/release-date/`、`/demo/`、`/editions/`
- **第三批（补充信息）**：`/review/`、`/vs-another-eden/`、`/gacha/`、`/language/`、`/voice-actors/`

原则：不做薄页堆量；内容不足的页面等资料到位再上线（如 Codes 页没有已确认兑换码时不编造）。

首页只承担游戏介绍 + 核心入口（Guide / Characters / Story / DLC / Platforms）+ 最新攻略 + FAQ，不把 15 个关键词全部堆在首页。

## 新增页面

在 `src/data/pages.ts` 的 `pages` 数组里加一条记录（slug / title / seoTitle / seoDescription / description / category / updated / sections[]），重新 `npm run build` 即自动生成 `/{slug}/` 页面；首页 Start Here 卡片与导航如需展示该页，再在 `index.astro` 与 `Layout.astro` 中补充链接。

## 统一管理头尾 / 统计 / 广告代码

所有页面的 `<head>`、导航、`<footer>` 都出自 `src/layouts/Layout.astro`。
文件顶部的 `siteConfig` 常量是统计/广告代码的统一入口，**改一处、全站生效**：

- `analyticsHead` → 统计代码（如 GA4），注入每个页面的 `</head>` 前
- `adHead` → 广告头部代码（如 AdSense script），注入 `</head>` 前
- `adBody` → 广告/自定义代码块，注入每个页面 `</body>` 前

> 建议：标准第三方标签（GA、AdSense）也可改用 Cloudflare Zaraz 在后台管理，完全不动代码；自定义片段用上面的 `siteConfig`。

## 新增攻略页

在 `src/data/pages.ts` 的 `pages` 数组里加一条记录（slug / title / seoTitle / seoDescription / description / category / updated / sections[]），重新 `npm run build` 即自动生成 `/{slug}/` 页面；首页 Start Here 卡片与导航如需展示该页，再在 `index.astro` 与 `Layout.astro` 中补充链接。

## 部署到 Cloudflare Pages

无需适配器（纯静态站）：

1. 把 `astro-site/` 推送到 GitHub/GitLab 仓库
2. Cloudflare Pages 新建项目连接该仓库
3. 构建配置：Build command = `npm run build`；Build output directory = `dist`
4. 绑定域名后自动 HTTPS

## 多语言规划

调研建议默认英文、后续增加 `/ja/` `/ko/`（官方支持语言）。当前为英文单语；接入 Astro i18n 时，把 `pages.ts` 数据按语言拆分即可，无需改页面模板。

## 内容与素材来源

- 首页结构与文案：`../首页信息.md`（home JSON）
- 攻略页内容：根目录 `another eden begins guide.md` / `characters.md` / `story.md` 等调研文件的已核验要点，未虚构
- 图片：官方 key art / 官网场景与角色图，存放于 `public/assets/`（部署后路径为 `/assets/...`）
