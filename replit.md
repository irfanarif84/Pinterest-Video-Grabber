# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

- **artifacts/api-server** — Express API (Pinterest extractor at `/api/pinterest`).
- **artifacts/pinsave** — PinSavePro Vite SPA (Pinterest video downloader). Wouter routing.
  - Routes: `/`, `/pinterest-gif-downloader`, `/pinterest-image-downloader`, `/pinterest-to-mp3`, `/how-to-download-pinterest-videos`, 404.
  - SEO: full meta + 6 JSON-LD schemas (WebApplication, Organization, WebSite SearchAction, BreadcrumbList, FAQPage, HowTo) in `index.html`, prerendered SEO content in `#seo-prerender` div for crawlers, `usePageSEO` hook in `src/lib/seo.ts` for per-route head swap.
  - Static SEO files in `public/`: `robots.txt`, `sitemap.xml`, `sitemap-images.xml`, `manifest.json`, `og-image.jpg`, `favicon.svg`.
  - Security headers via `securityHeadersPlugin` in `vite.config.ts` (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, X-XSS-Protection).
  - Shared `SiteHeader` and `SiteFooter` components with internal links to all sub-pages.
- **artifacts/mockup-sandbox** — Canvas/component preview server.
