import { useEffect } from "react";

export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
}

const ORIGIN = "https://pinterest-video-grabber--irfanarif1984.replit.app";

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [, key, val] = selector.match(/\[([^=]+)="([^"]+)"\]/) ?? [];
    if (key && val) el.setAttribute(key, val);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function usePageSEO(seo: PageSEO) {
  useEffect(() => {
    document.title = seo.title;
    setMeta('meta[name="description"]', "content", seo.description);
    if (seo.keywords) {
      setMeta('meta[name="keywords"]', "content", seo.keywords);
    }
    const fullUrl = seo.canonical.startsWith("http") ? seo.canonical : `${ORIGIN}${seo.canonical}`;
    setLink("canonical", fullUrl);

    setMeta('meta[property="og:title"]', "content", seo.title);
    setMeta('meta[property="og:description"]', "content", seo.description);
    setMeta('meta[property="og:url"]', "content", fullUrl);
    setMeta('meta[name="twitter:title"]', "content", seo.title);
    setMeta('meta[name="twitter:description"]', "content", seo.description);
  }, [seo.title, seo.description, seo.canonical, seo.keywords]);
}

export const ORIGIN_URL = ORIGIN;
