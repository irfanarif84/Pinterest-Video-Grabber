import { motion } from "framer-motion";
import { Sparkles, Image as ImageIcon, Zap, Shield, Check } from "lucide-react";
import DownloaderForm from "@/components/DownloaderForm";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import { usePageSEO, ORIGIN_URL } from "@/lib/seo";

export default function GifDownloader() {
  usePageSEO({
    title: "Pinterest GIF Downloader – Save Animated Pinterest GIFs in Original Quality",
    description: "Download animated Pinterest GIFs in their original size and quality. Free, fast, and no watermark. Works on iPhone, Android, and desktop.",
    canonical: "/pinterest-gif-downloader",
    keywords: "pinterest gif downloader, download pinterest gif, save pinterest gif, animated pinterest pin downloader",
  });

  return (
    <div className="min-h-screen bg-background flex flex-col relative selection:bg-primary/30">
      <SiteHeader />

      <Breadcrumbs items={[{ name: "Pinterest GIF Downloader" }]} />

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
            Animated GIF Support
          </motion.div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold max-w-4xl tracking-tight leading-[1.1]">
            Pinterest <em className="text-primary not-italic">GIF</em> Downloader
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Save animated GIFs from Pinterest in their original quality. Paste a Pinterest GIF link below and download instantly.
          </p>

          <div className="w-full max-w-2xl mt-12">
            <DownloaderForm />
          </div>
        </section>

        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6">How to Download a Pinterest GIF</h2>
          <ol className="list-decimal list-inside space-y-4 text-muted-foreground leading-relaxed">
            <li>Open Pinterest and find the animated GIF pin you want to save.</li>
            <li>Tap the share icon and select <strong>Copy Link</strong> (or copy the URL from your browser's address bar on desktop).</li>
            <li>Return here and paste the link into the input box above.</li>
            <li>Click <strong>Download</strong> and choose the GIF format option to save it to your device.</li>
          </ol>
        </section>

        <section className="py-16 px-6 bg-card/20 border-y border-border/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-6">Why our GIF Downloader is different</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <ImageIcon className="text-primary" />, title: "Original Resolution", desc: "Get the full-size animated GIF straight from Pinterest's CDN — no compression, no quality loss." },
                { icon: <Zap className="text-yellow-500" />, title: "Instant Extraction", desc: "Most Pinterest GIFs download in under 5 seconds." },
                { icon: <Shield className="text-green-500" />, title: "Safe & Private", desc: "We never store your files and never log your downloads." },
                { icon: <Check className="text-accent" />, title: "Works Everywhere", desc: "Download Pinterest GIFs on iPhone, Android, Mac, and PC." },
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
          <h2 className="font-display text-3xl font-bold mb-6">FAQ — Pinterest GIF Downloads</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Does Pinterest support GIF pins?</h3>
              <p className="text-muted-foreground">Yes. Pinterest supports animated GIF pins, and PinSavePro can extract them in their original .gif format with full animation preserved.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Why does my downloaded GIF play as a video?</h3>
              <p className="text-muted-foreground">Some Pinterest "GIFs" are actually short MP4 clips. PinSavePro will save the original format Pinterest serves — which may be MP4 for newer pins.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Can I download GIFs on iPhone?</h3>
              <p className="text-muted-foreground">Yes. Use Safari, paste the link, and the GIF will save to your Files app or Photos library.</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
