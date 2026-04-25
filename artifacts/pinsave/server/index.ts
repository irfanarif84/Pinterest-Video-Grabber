import express, { type Express, type Request, type Response } from "express";
import compression from "compression";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { buildSSRHtml, SSR_ROUTES, ORIGIN, PAGES } from "./ssr-pages.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.resolve(__dirname, "../public");
const INDEX_HTML_PATH = path.join(PUBLIC_DIR, "index.html");

const port = Number(process.env.PORT);
if (!port || Number.isNaN(port) || port <= 0) {
  throw new Error("PORT environment variable is required");
}

const app: Express = express();

// ── COMPRESSION ────────────────────────────────────────────────────────────
app.use(compression({ level: 6 }));

// ── SECURITY HEADERS ───────────────────────────────────────────────────────
app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  );
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
  );
  next();
});

// ── HEALTH CHECK ───────────────────────────────────────────────────────────
app.get("/healthz", (_req, res) => {
  res.json({ status: "ok" });
});

// ── DYNAMIC SITEMAP & ROBOTS ───────────────────────────────────────────────
const SITEMAP_PAGES = [
  { loc: "/", priority: "1.0", freq: "weekly" },
  { loc: "/pinterest-gif-downloader", priority: "0.9", freq: "monthly" },
  { loc: "/pinterest-image-downloader", priority: "0.9", freq: "monthly" },
  { loc: "/pinterest-to-mp3", priority: "0.9", freq: "monthly" },
  {
    loc: "/how-to-download-pinterest-videos",
    priority: "0.8",
    freq: "monthly",
  },
  { loc: "/privacy-policy", priority: "0.3", freq: "yearly" },
  { loc: "/terms-of-service", priority: "0.3", freq: "yearly" },
];

app.get("/sitemap.xml", (_req, res) => {
  const today = new Date().toISOString().split("T")[0];
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=86400");
  const urls = SITEMAP_PAGES.map(
    (p) => `  <url>
    <loc>${ORIGIN}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${ORIGIN}${p.loc}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}/"/>
  </url>`,
  ).join("\n");
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`);
});

app.get("/robots.txt", (_req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=86400");
  res.send(`User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/

Sitemap: ${ORIGIN}/sitemap.xml
Sitemap: ${ORIGIN}/sitemap-images.xml

User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10

User-agent: MJ12bot
Crawl-delay: 10

User-agent: DotBot
Crawl-delay: 10
`);
});

// ── STATIC ASSETS ──────────────────────────────────────────────────────────
if (fs.existsSync(PUBLIC_DIR)) {
  app.use(
    express.static(PUBLIC_DIR, {
      maxAge: "1y",
      immutable: true,
      index: false,
      setHeaders: (res, filePath) => {
        // Don't long-cache HTML or service-worker style files
        if (filePath.endsWith(".html")) {
          res.setHeader(
            "Cache-Control",
            "public, max-age=0, must-revalidate",
          );
        }
        if (
          filePath.endsWith("manifest.json") ||
          filePath.endsWith("robots.txt") ||
          filePath.endsWith("sitemap.xml") ||
          filePath.endsWith("sitemap-images.xml")
        ) {
          res.setHeader("Cache-Control", "public, max-age=3600");
        }
      },
    }),
  );
}

// ── SSR — KNOWN ROUTES ─────────────────────────────────────────────────────
let cachedShell: string | null = null;
function getShell(): string {
  if (cachedShell) return cachedShell;
  if (!fs.existsSync(INDEX_HTML_PATH)) {
    throw new Error(
      `Built index.html not found at ${INDEX_HTML_PATH}. Run "pnpm --filter @workspace/pinsave run build" first.`,
    );
  }
  cachedShell = fs.readFileSync(INDEX_HTML_PATH, "utf-8");
  return cachedShell;
}

function sendSSR(req: Request, res: Response, route: string) {
  try {
    const html = buildSSRHtml(route, {
      shellHtml: getShell(),
      prerenderHtml: "",
    });
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader(
      "Cache-Control",
      "public, max-age=3600, stale-while-revalidate=86400",
    );
    res.send(html);
  } catch (err) {
    console.error("SSR error", err);
    res.status(500).send("Internal Server Error");
  }
}

for (const route of SSR_ROUTES) {
  app.get(route, (req, res) => sendSSR(req, res, route));
}

// ── 404 FALLBACK ───────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404);
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>404 – Page Not Found | PinSavePro</title>
  <meta name="robots" content="noindex, follow" />
  <meta name="description" content="Page not found. Go back to PinSavePro to download Pinterest videos for free." />
  <link rel="canonical" href="${ORIGIN}/" />
  <style>
    body{font-family:system-ui,-apple-system,sans-serif;background:#0a0a0f;color:#f0eef8;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;gap:1rem;text-align:center;padding:2rem;margin:0;}
    h1{font-size:3rem;font-weight:800;color:#E8003D;margin:0;}
    p{color:#8a879e;max-width:400px;}
    a{color:#E8003D;font-weight:600;text-decoration:none;border:1px solid #E8003D;padding:.6rem 1.4rem;border-radius:8px;margin-top:.5rem;display:inline-block;}
    a:hover{background:#E8003D;color:#fff;}
  </style>
</head>
<body>
  <h1>404</h1>
  <p>The page you're looking for doesn't exist.</p>
  <a href="/">&larr; Back to Pinterest Video Downloader</a>
</body>
</html>`);
});

// Touch PAGES so it isn't tree-shaken if unused at runtime
void PAGES;

app.listen(port, "0.0.0.0", () => {
  console.log(`PinSavePro SSR server listening on port ${port}`);
});
