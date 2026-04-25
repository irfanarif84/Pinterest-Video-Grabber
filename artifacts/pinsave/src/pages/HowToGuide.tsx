import { motion } from "framer-motion";
import { Sparkles, Apple, Smartphone, Monitor, Laptop } from "lucide-react";
import DownloaderForm from "@/components/DownloaderForm";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import { usePageSEO } from "@/lib/seo";

export default function HowToGuide() {
  usePageSEO({
    title: "How to Download Pinterest Videos – Step by Step Guide for 2026",
    description: "Complete step-by-step guide on how to download Pinterest videos on iPhone, Android, Mac, and Windows. Includes troubleshooting and quality tips.",
    canonical: "/how-to-download-pinterest-videos",
    keywords: "how to download pinterest video, how to save pinterest video, pinterest download tutorial, pinterest video guide",
  });

  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary/30">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "How to Download Pinterest Videos" }]} />

      <main className="flex-1 w-full overflow-hidden" id="main-content">
        <section className="relative w-full pt-12 pb-20 px-4 flex flex-col items-center text-center">
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6"
          >
            <Sparkles size={14} className="text-accent" />
            Updated for 2026
          </motion.div>

          <h1 className="font-display text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.1]">
            How to <em className="text-primary not-italic">Download Pinterest Videos</em>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Everything you need to save Pinterest videos in HD, 2K, or 4K — for every device, every platform, every situation.
          </p>

          <div className="w-full max-w-2xl mt-12">
            <DownloaderForm />
          </div>
        </section>

        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6">The 3-step download process</h2>
          <ol className="list-decimal list-inside space-y-4 text-muted-foreground leading-relaxed text-lg">
            <li><strong>Copy the Pinterest link.</strong> Tap the share icon on any pin and select Copy Link.</li>
            <li><strong>Paste it into PinSavePro.</strong> Open this page and paste into the input box.</li>
            <li><strong>Choose quality and download.</strong> Pick MP4 (720p, 1080p, 2K, 4K), MP3, or original image.</li>
          </ol>
        </section>

        <section className="py-16 px-6 bg-card/20 border-y border-border/30">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2"><Apple className="text-primary" /> Download Pinterest videos on iPhone &amp; iPad</h2>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed ml-4">
                <li>Open the Pinterest app and find your video.</li>
                <li>Tap the <strong>share arrow</strong> at the top right of the pin.</li>
                <li>Select <strong>Copy Link</strong>.</li>
                <li>Open Safari and go to <strong>PinSavePro</strong>.</li>
                <li>Long-press the input box and tap <strong>Paste</strong>.</li>
                <li>Tap <strong>Download</strong>, then long-press the video and select <strong>Save to Photos</strong> (or Add to Files).</li>
              </ol>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2"><Smartphone className="text-primary" /> Download Pinterest videos on Android</h2>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed ml-4">
                <li>Open the Pinterest app on your Android device.</li>
                <li>Tap the <strong>share icon</strong> on the video pin.</li>
                <li>Choose <strong>Copy Link</strong>.</li>
                <li>Open Chrome and visit <strong>PinSavePro</strong>.</li>
                <li>Paste the link and tap Download.</li>
                <li>The MP4 file saves directly to your <strong>Downloads</strong> folder.</li>
              </ol>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2"><Monitor className="text-primary" /> Download Pinterest videos on Windows PC</h2>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed ml-4">
                <li>Go to <strong>Pinterest.com</strong> in your browser.</li>
                <li>Click on the video pin to open it.</li>
                <li>Copy the URL from the browser's address bar.</li>
                <li>Open <strong>PinSavePro</strong> in another tab and paste the URL.</li>
                <li>Click Download and choose your preferred resolution (up to 4K).</li>
                <li>Press <strong>Ctrl+J</strong> to view your download.</li>
              </ol>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-2"><Laptop className="text-primary" /> Download Pinterest videos on Mac</h2>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed ml-4">
                <li>Open Pinterest in Safari, Chrome, or Firefox.</li>
                <li>Click the pin and copy the URL from the address bar.</li>
                <li>Visit <strong>PinSavePro</strong> and paste the URL.</li>
                <li>Click Download — the file saves to your Downloads folder.</li>
                <li>Use <strong>Cmd+J</strong> in Chrome or <strong>Cmd+Option+L</strong> in Safari to view downloads.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6">Troubleshooting</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">My Pinterest video won't download — what do I do?</h3>
              <p className="text-muted-foreground">Make sure the URL is a public Pinterest pin (not a private board). If the pin contains a video, PinSavePro will extract it. Try refreshing the page and pasting again.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Why is the download quality lower than expected?</h3>
              <p className="text-muted-foreground">PinSavePro always offers the highest quality the creator uploaded. If only 720p is available, that's what Pinterest stored — there is no higher version.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Can I download Pinterest videos with sound?</h3>
              <p className="text-muted-foreground">Yes. The MP4 download includes the original audio track. If you want only the audio, choose the MP3 option.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Does Pinterest notify the creator when I download?</h3>
              <p className="text-muted-foreground">No. Downloads through PinSavePro happen on the server side and don't trigger any in-app notifications to the original poster.</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
