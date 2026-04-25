import { useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Image as ImageIcon, Zap, Shield, Check } from "lucide-react";
import DownloaderForm from "@/components/DownloaderForm";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import { usePageSEO, ORIGIN_URL } from "@/lib/seo";

export default function ImageDownloader() {
  usePageSEO({
    title: "Pinterest Image Downloader – Save Pinterest Pictures in Original Quality",
    description: "Download Pinterest images in original full resolution. Free tool, no login, no watermark. Supports JPG, PNG, and WebP from any Pinterest pin.",
    canonical: "/pinterest-image-downloader",
    keywords: "pinterest image downloader, download pinterest images, pinterest picture downloader, save pinterest photo",
  });

  useEffect(() => {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Pinterest Image Downloader",
        description:
          "Free tool to download Pinterest images and photos in full resolution without watermark.",
        url: `${ORIGIN_URL}/pinterest-image-downloader`,
        isPartOf: {
          "@type": "WebSite",
          name: "PinSavePro",
          url: ORIGIN_URL,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Pinterest Image Downloader",
            item: `${ORIGIN_URL}/pinterest-image-downloader`,
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Will I get the original Pinterest image quality?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. PinSavePro requests the original full-size file directly from Pinterest's CDN, not a thumbnail.",
            },
          },
          {
            "@type": "Question",
            name: "Can I download Pinterest images on iPhone?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Tap and hold the download link in Safari, then choose Save to Photos or Add to Files.",
            },
          },
          {
            "@type": "Question",
            name: "Is it legal to download Pinterest images?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Downloading for personal use is generally fine, but the underlying image is owned by its creator. Always check the source and respect copyright before reusing or redistributing content.",
            },
          },
        ],
      },
    ];
    const ids = schemas.map((s, i) => {
      const id = `ld-image-${i}`;
      if (document.getElementById(id)) return id;
      const el = document.createElement("script");
      el.id = id;
      el.type = "application/ld+json";
      el.text = JSON.stringify(s);
      document.head.appendChild(el);
      return id;
    });
    return () => ids.forEach((id) => document.getElementById(id)?.remove());
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary/30">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "Pinterest Image Downloader" }]} />

      <main className="flex-1 w-full overflow-hidden" id="main-content">
        <section className="relative w-full pt-12 pb-24 px-4 flex flex-col items-center text-center">
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6"
          >
            <Sparkles size={14} className="text-accent" />
            Original Resolution
          </motion.div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold max-w-4xl tracking-tight leading-[1.1]">
            Pinterest <em className="text-primary not-italic">Image</em> Downloader
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Save any Pinterest image in its original full size. JPG, PNG, WebP — no watermark, no login.
          </p>

          <div className="w-full max-w-2xl mt-12">
            <DownloaderForm />
          </div>
        </section>

        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6">How to download Pinterest images</h2>
          <ol className="list-decimal list-inside space-y-4 text-muted-foreground leading-relaxed">
            <li>Open the Pinterest pin you want to save.</li>
            <li>Tap the share icon and select <strong>Copy Link</strong>, or copy the URL from the address bar.</li>
            <li>Paste the link into the input above.</li>
            <li>Click <strong>Download</strong> and pick the largest size — we always offer the original resolution.</li>
          </ol>
        </section>

        <section className="py-16 px-6 bg-card/20 border-y border-border/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-6">Why use a Pinterest image downloader?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <ImageIcon className="text-primary" />, title: "Original Size", desc: "We synthesize Pinterest's originals/ CDN URL, so you always get the full-resolution file." },
                { icon: <Zap className="text-yellow-500" />, title: "Multiple Formats", desc: "JPG, PNG, and WebP — whichever Pinterest serves." },
                { icon: <Shield className="text-green-500" />, title: "100% Private", desc: "No tracking, no logging, no watermarks." },
                { icon: <Check className="text-accent" />, title: "Bulk Friendly", desc: "Open multiple tabs to save several pins at once." },
              ].map((f, i) => (
                <div key={i} className="bg-background border border-border rounded-2xl p-6">
                  <div className="w-12 h-12 bg-card rounded-xl border border-border flex items-center justify-center mb-4">{f.icon}</div>
                  <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6">FAQ — Pinterest Image Downloads</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Will I get the original Pinterest image quality?</h3>
              <p className="text-muted-foreground">Yes. PinSavePro requests the original full-size file directly from Pinterest's CDN, not a thumbnail.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Can I download Pinterest images on iPhone?</h3>
              <p className="text-muted-foreground">Yes. Tap and hold the download link in Safari, then choose Save to Photos or Add to Files.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Is it legal to download Pinterest images?</h3>
              <p className="text-muted-foreground">Downloading for personal use is generally fine, but the underlying image is owned by its creator. Always check the source and respect copyright before reusing or redistributing content.</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
