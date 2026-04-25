import { motion } from "framer-motion";
import { Sparkles, Music, Zap, Shield, Check } from "lucide-react";
import DownloaderForm from "@/components/DownloaderForm";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import { usePageSEO } from "@/lib/seo";

export default function Mp3Converter() {
  usePageSEO({
    title: "Pinterest to MP3 Converter – Extract Audio from Pinterest Videos Free",
    description: "Convert any Pinterest video to MP3 audio for free. Extract background music from Pinterest videos and Reels in high quality. No login required.",
    canonical: "/pinterest-to-mp3",
    keywords: "pinterest to mp3, pinterest mp3 converter, pinterest audio downloader, extract audio pinterest video",
  });

  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary/30">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "Pinterest to MP3" }]} />

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
            High Quality Audio
          </motion.div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold max-w-4xl tracking-tight leading-[1.1]">
            Pinterest to <em className="text-primary not-italic">MP3</em> Converter
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Save the audio from any Pinterest video or Reel as an MP3 file. Free, fast, and high quality.
          </p>

          <div className="w-full max-w-2xl mt-12">
            <DownloaderForm />
          </div>
        </section>

        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6">How to convert Pinterest to MP3</h2>
          <ol className="list-decimal list-inside space-y-4 text-muted-foreground leading-relaxed">
            <li>Find a Pinterest video, Reel, or Idea Pin you want the audio from.</li>
            <li>Tap share and select <strong>Copy Link</strong> (or copy from the address bar on desktop).</li>
            <li>Paste the link in the input above.</li>
            <li>Click <strong>Download</strong> and pick the <strong>MP3</strong> option to save the audio track.</li>
          </ol>
        </section>

        <section className="py-16 px-6 bg-card/20 border-y border-border/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-6">Why convert Pinterest videos to MP3?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Music className="text-primary" />, title: "Save Music & Sounds", desc: "Pinterest is full of trending sounds and music — capture them as MP3 for offline listening." },
                { icon: <Zap className="text-yellow-500" />, title: "Fast Extraction", desc: "Audio is extracted server-side in seconds, ready to download." },
                { icon: <Shield className="text-green-500" />, title: "No Watermark", desc: "Clean audio file with no overlays or extra ads." },
                { icon: <Check className="text-accent" />, title: "Mobile & Desktop", desc: "Works on iPhone, Android, Mac, and PC straight from your browser." },
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
          <h2 className="font-display text-3xl font-bold mb-6">FAQ — Pinterest MP3 Conversion</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Can I extract audio from any Pinterest video?</h3>
              <p className="text-muted-foreground">As long as the pin contains a video stream (Reel, Idea Pin, or video pin), PinSavePro can extract its audio as MP3.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">What's the audio quality?</h3>
              <p className="text-muted-foreground">PinSavePro extracts the original audio track from Pinterest, so quality matches whatever the creator uploaded — typically AAC at 128–192 kbps converted to MP3.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Is it legal to download Pinterest audio?</h3>
              <p className="text-muted-foreground">Downloading for personal listening is generally fine. Music tracks remain copyrighted to their owners — don't redistribute or use commercially without a license.</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
