export const ORIGIN =
  process.env.SITE_ORIGIN ||
  "https://pinterest-video-grabber--irfanarif1984.replit.app";

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  keywords: string;
  h1: string;
  bodyContent: string;
  extraSchema?: string;
}

export const PAGES: Record<string, PageMeta> = {
  "/": {
    title: "PinSavePro – Free Pinterest Video Downloader | HD, 4K, MP4, MP3",
    description:
      "Download Pinterest videos, images, GIFs, and Reels for free in HD, 2K, and 4K. No login required. Works on Android, iPhone, and desktop. Fast, safe, 100% free.",
    canonical: `${ORIGIN}/`,
    keywords:
      "pinterest video downloader, download pinterest videos, pinterest to mp4, save pinterest video, pinterest gif downloader, pinterest image downloader, pinterest downloader online, pinterest video download without watermark, pinterest to mp3",
    h1: "Pinterest Video Downloader – Free, HD, 4K, No Watermark",
    bodyContent: `
      <p>PinSavePro is the fastest free online <strong>Pinterest video downloader</strong>. Save Pinterest videos, GIFs, images, Idea Pins, and Reels in HD, 2K, and 4K quality without any watermark. No login, no app, no registration. Works on iPhone, Android, Windows, Mac, and Linux.</p>
      <h2>How to Download Pinterest Videos</h2>
      <ol>
        <li><strong>Copy the Pinterest link.</strong> Tap the share icon &rarr; Copy Link in the Pinterest app, or copy the URL from the address bar on desktop.</li>
        <li><strong>Paste it into PinSavePro.</strong> Paste the URL into the input box above and click Download.</li>
        <li><strong>Choose quality and save.</strong> Pick MP4 (720p/1080p/4K), MP3, GIF, or original image. File saves to your Downloads folder.</li>
      </ol>
      <h2>Supported Formats</h2>
      <ul>
        <li>MP4 video in 720p, 1080p, 2K, and 4K</li>
        <li>MP3 audio extracted from any Pinterest video</li>
        <li>Animated GIF downloads</li>
        <li>JPG, PNG, and WebP image downloads</li>
        <li>Pinterest Idea Pins and Reels</li>
      </ul>
      <h2>Why Choose PinSavePro?</h2>
      <ul>
        <li>HD and 4K quality &mdash; the highest Pinterest exposes</li>
        <li>No watermarks &mdash; the original file, untouched</li>
        <li>No login, no signup, completely anonymous</li>
        <li>Free forever &mdash; no paywall</li>
        <li>Works on every browser and device</li>
        <li>Download Pinterest video on iPhone using Safari</li>
        <li>Download Pinterest video on Android using Chrome</li>
      </ul>
      <h2>Related Tools</h2>
      <ul>
        <li><a href="/pinterest-gif-downloader">Pinterest GIF Downloader</a></li>
        <li><a href="/pinterest-image-downloader">Pinterest Image Downloader</a></li>
        <li><a href="/pinterest-to-mp3">Pinterest to MP3 Converter</a></li>
        <li><a href="/how-to-download-pinterest-videos">How to Download Pinterest Videos</a></li>
      </ul>
    `,
  },
  "/pinterest-gif-downloader": {
    title:
      "Pinterest GIF Downloader – Save Animated Pinterest GIFs | PinSavePro",
    description:
      "Download animated GIFs from Pinterest for free in original quality. No watermark, no login. Works on Android, iPhone, and desktop browsers.",
    canonical: `${ORIGIN}/pinterest-gif-downloader`,
    keywords:
      "pinterest gif downloader, download pinterest gif, save pinterest gif, animated pinterest pin downloader",
    h1: "Pinterest GIF Downloader – Save Animated Pins Free",
    bodyContent: `
      <p>Use PinSavePro's free <strong>Pinterest GIF downloader</strong> to save any animated GIF pin in its original quality. No quality loss, no watermark, no account needed. Just paste the Pinterest GIF URL and download instantly.</p>
      <h2>How to Download a Pinterest GIF</h2>
      <ol>
        <li>Open Pinterest and find the animated GIF pin you want to save.</li>
        <li>Tap the share icon and select <strong>Copy Link</strong>, or copy the URL from your desktop browser.</li>
        <li>Paste the link into the input box and click Download.</li>
        <li>Choose the GIF format and save it to your device.</li>
      </ol>
      <h2>Why Use Our Pinterest GIF Downloader?</h2>
      <ul>
        <li>Original GIF quality &mdash; no re-encoding or compression</li>
        <li>No watermarks added to downloaded GIFs</li>
        <li>Works on iPhone (Safari), Android (Chrome), and all desktop browsers</li>
        <li>100% free with no login required</li>
        <li>Supports all Pinterest GIF pins and animated pins</li>
      </ul>
      <h2>Related Tools</h2>
      <ul>
        <li><a href="/">Pinterest Video Downloader</a></li>
        <li><a href="/pinterest-image-downloader">Pinterest Image Downloader</a></li>
        <li><a href="/pinterest-to-mp3">Pinterest to MP3 Converter</a></li>
      </ul>
    `,
    extraSchema: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${ORIGIN}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Pinterest GIF Downloader",
          item: `${ORIGIN}/pinterest-gif-downloader`,
        },
      ],
    }),
  },
  "/pinterest-image-downloader": {
    title: "Pinterest Image Downloader – Save HD Photos Free | PinSavePro",
    description:
      "Download Pinterest images and photos in full resolution for free. JPG, PNG, WebP supported. No login, no watermark. Works on all devices.",
    canonical: `${ORIGIN}/pinterest-image-downloader`,
    keywords:
      "pinterest image downloader, download pinterest images, save pinterest photos, pinterest photo downloader",
    h1: "Pinterest Image Downloader – Full Resolution, Free",
    bodyContent: `
      <p>PinSavePro's free <strong>Pinterest image downloader</strong> saves any Pinterest photo or image pin in its original full resolution. Download JPG, PNG, and WebP images from Pinterest without watermarks or quality loss.</p>
      <h2>How to Download Pinterest Images</h2>
      <ol>
        <li>Find the image on Pinterest you want to save.</li>
        <li>Copy the pin's URL from the Pinterest app or your browser.</li>
        <li>Paste it into PinSavePro and click Download.</li>
        <li>Select the image resolution and save to your device.</li>
      </ol>
      <h2>Supported Image Formats</h2>
      <ul>
        <li>JPG / JPEG &mdash; the most common Pinterest image format</li>
        <li>PNG &mdash; for pins with transparent backgrounds</li>
        <li>WebP &mdash; Pinterest's modern image format</li>
        <li>Original resolution &mdash; we never downscale your image</li>
      </ul>
      <h2>Related Tools</h2>
      <ul>
        <li><a href="/">Pinterest Video Downloader</a></li>
        <li><a href="/pinterest-gif-downloader">Pinterest GIF Downloader</a></li>
        <li><a href="/pinterest-to-mp3">Pinterest to MP3 Converter</a></li>
      </ul>
    `,
    extraSchema: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${ORIGIN}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Pinterest Image Downloader",
          item: `${ORIGIN}/pinterest-image-downloader`,
        },
      ],
    }),
  },
  "/pinterest-to-mp3": {
    title: "Pinterest to MP3 Converter – Extract Audio Free | PinSavePro",
    description:
      "Convert any Pinterest video to MP3 audio for free. High quality audio extraction, no login, no watermark. Works on mobile and desktop.",
    canonical: `${ORIGIN}/pinterest-to-mp3`,
    keywords:
      "pinterest to mp3, pinterest mp3 converter, extract audio from pinterest, pinterest audio downloader",
    h1: "Pinterest to MP3 Converter – Free Audio Extractor",
    bodyContent: `
      <p>Extract and download high-quality MP3 audio from any Pinterest video using PinSavePro's free <strong>Pinterest to MP3 converter</strong>. Perfect for saving music clips, tutorials, and audio content from Pinterest Reels and video pins.</p>
      <h2>How to Convert Pinterest Video to MP3</h2>
      <ol>
        <li>Find the Pinterest video you want to convert to MP3.</li>
        <li>Copy the video's URL from the Pinterest app or browser.</li>
        <li>Paste the URL into PinSavePro and click Download.</li>
        <li>Select the MP3 option to download audio only.</li>
      </ol>
      <h2>Why Extract MP3 from Pinterest?</h2>
      <ul>
        <li>Save music from Pinterest video pins as MP3 files</li>
        <li>Download tutorial audio for offline listening</li>
        <li>Extract audio from Pinterest Reels</li>
        <li>High-quality audio extraction &mdash; no quality loss</li>
        <li>No login or account required</li>
      </ul>
      <h2>Related Tools</h2>
      <ul>
        <li><a href="/">Pinterest Video Downloader</a></li>
        <li><a href="/pinterest-gif-downloader">Pinterest GIF Downloader</a></li>
        <li><a href="/pinterest-image-downloader">Pinterest Image Downloader</a></li>
      </ul>
    `,
    extraSchema: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${ORIGIN}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Pinterest to MP3",
          item: `${ORIGIN}/pinterest-to-mp3`,
        },
      ],
    }),
  },
  "/how-to-download-pinterest-videos": {
    title:
      "How to Download Pinterest Videos in 2026 – Complete Guide | PinSavePro",
    description:
      "Step-by-step guide: how to download Pinterest videos on iPhone, Android, and desktop. Works without an app. Free and fast.",
    canonical: `${ORIGIN}/how-to-download-pinterest-videos`,
    keywords:
      "how to download pinterest videos, how to save pinterest video, download pinterest video iphone, download pinterest video android",
    h1: "How to Download Pinterest Videos (2026 Complete Guide)",
    bodyContent: `
      <p>This guide covers exactly <strong>how to download Pinterest videos</strong> on any device in 2026. Whether you're on iPhone, Android, or a desktop computer, PinSavePro makes it simple, fast, and completely free.</p>
      <h2>Method 1: Download on iPhone or iPad</h2>
      <ol>
        <li>Open the Pinterest app on your iPhone.</li>
        <li>Find the video you want to download.</li>
        <li>Tap the share icon (box with arrow) at the bottom of the pin.</li>
        <li>Tap <strong>Copy Link</strong>.</li>
        <li>Open Safari and go to PinSavePro.</li>
        <li>Paste the link and tap Download.</li>
        <li>Tap and hold the download button &rarr; Save to Files or Photos.</li>
      </ol>
      <h2>Method 2: Download on Android</h2>
      <ol>
        <li>Open Pinterest on your Android phone.</li>
        <li>Find the video and tap the three-dot menu.</li>
        <li>Select <strong>Copy Link</strong>.</li>
        <li>Open Chrome and visit PinSavePro.</li>
        <li>Paste the URL and tap Download.</li>
        <li>The video saves to your Downloads folder automatically.</li>
      </ol>
      <h2>Method 3: Download on Desktop (Windows/Mac)</h2>
      <ol>
        <li>Open pinterest.com in your browser.</li>
        <li>Navigate to the video pin.</li>
        <li>Copy the URL from the address bar.</li>
        <li>Open a new tab and go to PinSavePro.</li>
        <li>Paste the URL and click Download.</li>
        <li>Choose your preferred quality (HD, 2K, 4K, or MP3).</li>
        <li>The file downloads to your Downloads folder. Press Ctrl+J to view.</li>
      </ol>
      <h2>Frequently Asked Questions</h2>
      <h3>Can I download Pinterest videos without an app?</h3>
      <p>Yes. PinSavePro works entirely in your browser &mdash; no app install needed on any device.</p>
      <h3>What is the highest quality I can download?</h3>
      <p>PinSavePro gives you every quality option Pinterest exposes for that video &mdash; up to 4K if the original pin was uploaded at that resolution.</p>
      <h2>Related Tools</h2>
      <ul>
        <li><a href="/">Pinterest Video Downloader</a></li>
        <li><a href="/pinterest-gif-downloader">Pinterest GIF Downloader</a></li>
        <li><a href="/pinterest-image-downloader">Pinterest Image Downloader</a></li>
        <li><a href="/pinterest-to-mp3">Pinterest to MP3 Converter</a></li>
      </ul>
    `,
    extraSchema: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How to Download Pinterest Videos in 2026",
      description:
        "Step-by-step guide to downloading Pinterest videos on iPhone, Android, and desktop.",
      author: { "@type": "Organization", name: "PinSavePro" },
      datePublished: "2026-04-25",
      dateModified: "2026-04-25",
    }),
  },
  "/privacy-policy": {
    title: "Privacy Policy | PinSavePro",
    description:
      "PinSavePro privacy policy. We do not collect personal data. Read how we handle your information.",
    canonical: `${ORIGIN}/privacy-policy`,
    keywords: "pinsavepro privacy policy, pinterest downloader privacy",
    h1: "Privacy Policy",
    bodyContent: `
      <p>PinSavePro does not require registration or login and does not collect personally identifiable information. Read the full privacy policy on this page for details about URL processing, cookies, and third-party services.</p>
    `,
  },
  "/terms-of-service": {
    title: "Terms of Service | PinSavePro",
    description:
      "PinSavePro terms of service. Read the rules for using our free Pinterest video downloader.",
    canonical: `${ORIGIN}/terms-of-service`,
    keywords: "pinsavepro terms of service, pinterest downloader terms",
    h1: "Terms of Service",
    bodyContent: `
      <p>By using PinSavePro you agree to these terms. PinSavePro is provided for personal, non-commercial use and is not affiliated with Pinterest, Inc.</p>
    `,
  },
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export interface BuildSSRHtmlOptions {
  shellHtml: string;
  prerenderHtml: string;
}

export function buildSSRHtml(
  pathname: string,
  opts: BuildSSRHtmlOptions,
): string {
  const page = PAGES[pathname] || PAGES["/"];
  const { shellHtml, prerenderHtml } = opts;

  const titleTag = `<title>${escapeHtml(page.title)}</title>`;
  const descTag = `<meta name="description" content="${escapeHtml(page.description)}" />`;
  const keywordsTag = `<meta name="keywords" content="${escapeHtml(page.keywords)}" />`;
  const canonicalTag = `<link rel="canonical" href="${escapeHtml(page.canonical)}" />`;
  const ogTitle = `<meta property="og:title" content="${escapeHtml(page.title)}" />`;
  const ogDesc = `<meta property="og:description" content="${escapeHtml(page.description)}" />`;
  const ogUrl = `<meta property="og:url" content="${escapeHtml(page.canonical)}" />`;
  const twTitle = `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`;
  const twDesc = `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`;
  const altEn = `<link rel="alternate" hreflang="en" href="${escapeHtml(page.canonical)}" />`;
  const altDefault = `<link rel="alternate" hreflang="x-default" href="${ORIGIN}/" />`;
  const extraSchema = page.extraSchema
    ? `<script type="application/ld+json">${page.extraSchema}</script>`
    : "";

  const seoBlock = `<h1>${escapeHtml(page.h1)}</h1>${page.bodyContent}`;

  let html = shellHtml;

  // Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, titleTag);

  // Replace primary meta description
  html = html.replace(
    /<meta\s+name="description"[^>]*\/?>/i,
    descTag,
  );
  html = html.replace(
    /<meta\s+name="keywords"[^>]*\/?>/i,
    keywordsTag,
  );

  // Replace canonical
  html = html.replace(
    /<link\s+rel="canonical"[^>]*\/?>/i,
    canonicalTag,
  );

  // Replace OG tags
  html = html.replace(
    /<meta\s+property="og:title"[^>]*\/?>/i,
    ogTitle,
  );
  html = html.replace(
    /<meta\s+property="og:description"[^>]*\/?>/i,
    ogDesc,
  );
  html = html.replace(
    /<meta\s+property="og:url"[^>]*\/?>/i,
    ogUrl,
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta\s+name="twitter:title"[^>]*\/?>/i,
    twTitle,
  );
  html = html.replace(
    /<meta\s+name="twitter:description"[^>]*\/?>/i,
    twDesc,
  );

  // Replace hreflang tags (replace all alternate links)
  html = html.replace(
    /<link\s+rel="alternate"\s+hreflang="en"[^>]*\/?>/i,
    altEn,
  );
  html = html.replace(
    /<link\s+rel="alternate"\s+hreflang="x-default"[^>]*\/?>/i,
    altDefault,
  );

  // Inject per-page JSON-LD just before </head>
  if (extraSchema) {
    html = html.replace("</head>", `  ${extraSchema}\n  </head>`);
  }

  // Replace the prerender div content with per-route content
  const prerenderRegex =
    /<div id="seo-prerender"[\s\S]*?<\/div>\s*(?=<\/div>\s*<script)/i;
  const newPrerender = `<div id="seo-prerender" aria-hidden="true">
        <header role="banner">
          <nav aria-label="Main navigation">
            <a href="/">PinSavePro &mdash; Pinterest Video Downloader</a>
            <a href="/pinterest-gif-downloader">Pinterest GIF Downloader</a>
            <a href="/pinterest-image-downloader">Pinterest Image Downloader</a>
            <a href="/pinterest-to-mp3">Pinterest to MP3</a>
            <a href="/how-to-download-pinterest-videos">How To Guide</a>
          </nav>
        </header>
        <main role="main" id="main-content">
          ${seoBlock}
        </main>
        <footer role="contentinfo">
          <p>&copy; PinSavePro. Independent service not affiliated with Pinterest, Inc.</p>
        </footer>
      </div>`;

  if (prerenderRegex.test(html)) {
    html = html.replace(prerenderRegex, newPrerender);
  } else {
    // Fallback: inject right after <div id="root">
    html = html.replace(
      /<div id="root">/,
      `<div id="root">\n      ${newPrerender}\n`,
    );
  }

  // Suppress unused param warning at runtime
  void prerenderHtml;

  return html;
}

export const SSR_ROUTES = Object.keys(PAGES);
