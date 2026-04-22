import { motion } from "framer-motion";
import { 
  Download, Sparkles, Zap, Shield, Image as ImageIcon, CheckCircle, Video, Music, 
  Smartphone, Apple, Monitor, Laptop, Check, X, Users, Briefcase, GraduationCap 
} from "lucide-react";
import DownloaderForm from "@/components/DownloaderForm";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col relative selection:bg-primary/30">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-background/80 backdrop-blur-xl border-b border-border/40">
        <a href="/" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-[0_0_15px_rgba(232,0,61,0.5)]">
            <Download size={18} strokeWidth={2.5} />
          </div>
          Pin<span className="text-primary">Save</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#how-to" className="hover:text-foreground transition-colors">How To</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
            100% Free
          </div>
        </div>
      </nav>

      <main className="flex-1 w-full overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative w-full pt-20 pb-32 px-4 flex flex-col items-center text-center">
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6"
          >
            <Sparkles size={14} className="text-accent" />
            No Watermark <span className="mx-2 opacity-30">•</span> No Login Required
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold max-w-4xl tracking-tight leading-[1.1] text-balance"
          >
            The Fastest <em className="text-primary not-italic">Pinterest Video</em> Downloader
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Download Pinterest videos, GIFs, images, and Reels in HD, 2K, and 4K. Works on every device — no app, no account, no hassle.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-2xl mt-12"
          >
            <DownloaderForm />
          </motion.div>
        </section>

        {/* TRUST STRIP */}
        <section className="border-y border-border/50 bg-card/30 py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { text: "100% Free Forever", icon: <CheckCircle size={18} className="text-green-500" /> },
              { text: "No Watermarks", icon: <CheckCircle size={18} className="text-green-500" /> },
              { text: "Ultra-Fast Downloads", icon: <CheckCircle size={18} className="text-green-500" /> },
              { text: "SSL Secured", icon: <CheckCircle size={18} className="text-green-500" /> },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
        </section>

        {/* HOW TO SECTION */}
        <section id="how-to" className="py-24 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">How to Download</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Get your favorite Pinterest content saved to your device in 3 simple steps.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Copy the Link",
                desc: "Open Pinterest, find the video or image you want, tap the share icon, and select 'Copy Link'."
              },
              {
                step: "02",
                title: "Paste it Here",
                desc: "Return to PinSave and paste the copied link into the search box at the top of this page."
              },
              {
                step: "03",
                title: "Download",
                desc: "Click 'Download' and choose your preferred quality (HD, 4K, MP3, etc.) to save it instantly."
              }
            ].map((s, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-colors relative overflow-hidden group">
                <div className="absolute -top-6 -right-6 text-9xl font-display font-black text-primary/5 group-hover:text-primary/10 transition-colors select-none">
                  {s.step}
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FORMATS & DEVICES */}
        <section className="py-24 px-6 bg-card/20 border-y border-border/30">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
            
            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Supported Formats</h2>
              <p className="text-muted-foreground mb-8">We extract all available media streams directly from Pinterest's servers, giving you the best possible quality.</p>
              
              <div className="flex flex-wrap gap-3">
                {["MP4 (4K, 2K, 1080p, 720p)", "MP3 (High Quality Audio)", "GIF (Animated)", "JPG & PNG (Original Size)", "WebP"].map((format, i) => (
                  <div key={i} className="bg-background border border-border rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2">
                    <Check size={14} className="text-primary" />
                    {format}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Works Everywhere</h2>
              <p className="text-muted-foreground mb-8">PinSave is a web-based app that works seamlessly across all your devices. No installation required.</p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Apple size={24} />, name: "iPhone / iPad", desc: "Safari & Chrome" },
                  { icon: <Smartphone size={24} />, name: "Android", desc: "Chrome & Firefox" },
                  { icon: <Monitor size={24} />, name: "Desktop PC", desc: "Windows & Linux" },
                  { icon: <Laptop size={24} />, name: "Mac", desc: "macOS Safari" }
                ].map((device, i) => (
                  <div key={i} className="bg-background border border-border rounded-xl p-4 flex items-center gap-4">
                    <div className="text-muted-foreground bg-muted/20 p-2 rounded-lg">
                      {device.icon}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{device.name}</div>
                      <div className="text-xs text-muted-foreground">{device.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* FEATURES GRID */}
        <section id="features" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Why Choose PinSave?</h2>
              <p className="text-muted-foreground max-w-2xl">The most robust tool for extracting high-quality media from Pinterest.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Video className="text-primary" />, title: "HD & 4K Videos", desc: "Download in the highest quality available, up to 4K resolution." },
                { icon: <Music className="text-accent" />, title: "MP3 Audio", desc: "Extract background music from Pinterest videos instantly." },
                { icon: <ImageIcon className="text-blue-400" />, title: "Images & GIFs", desc: "Save static pins and animated GIFs with one click." },
                { icon: <Zap className="text-yellow-500" />, title: "Lightning Fast", desc: "Optimized backend infrastructure for instant extraction." },
                { icon: <Shield className="text-green-500" />, title: "Safe & Secure", desc: "We don't track your downloads or require any personal info." },
                { icon: <Sparkles className="text-pink-500" />, title: "Idea Pins & Reels", desc: "Full support for modern Pinterest video formats." }
              ].map((f, i) => (
                <div key={i} className="bg-card border border-border/50 rounded-2xl p-6 hover:border-border transition-colors">
                  <div className="w-12 h-12 bg-background rounded-xl border border-border flex items-center justify-center mb-4">
                    {f.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-24 px-6 bg-card/20 border-y border-border/30">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">PinSave vs. Competitors</h2>
            <p className="text-muted-foreground">See why thousands of users switch to PinSave every day.</p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b border-border text-muted-foreground font-medium">Feature</th>
                  <th className="p-4 border-b border-border font-bold text-primary text-center">PinSave</th>
                  <th className="p-4 border-b border-border text-muted-foreground text-center">Other Apps</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["HD & 4K Resolution", true, false],
                  ["No Annoying Ads", true, false],
                  ["No Watermarks", true, false],
                  ["MP3 Extraction", true, false],
                  ["No Registration", true, true],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50 bg-background/50 hover:bg-background transition-colors">
                    <td className="p-4 font-medium">{row[0]}</td>
                    <td className="p-4 text-center">
                      <div className="mx-auto w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                        <Check size={14} />
                      </div>
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      <div className="mx-auto w-6 h-6 bg-muted/20 rounded-full flex items-center justify-center">
                        {row[2] ? <Check size={14} /> : <X size={14} />}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Who uses PinSave?</h2>
            <p className="text-muted-foreground">Built for creatives, marketers, and everyone in between.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <Users className="text-accent mb-4" size={32} />
              <h3 className="font-display font-bold text-xl mb-3">Content Creators</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Save inspiration for your moodboards, download aesthetic background videos for your TikToks, and extract audio for your own content.</p>
            </div>
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <Briefcase className="text-blue-400 mb-4" size={32} />
              <h3 className="font-display font-bold text-xl mb-3">Marketers</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Archive competitor ad creatives, save product photography, and collect high-quality assets for your next marketing campaign without watermarks.</p>
            </div>
            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <GraduationCap className="text-green-500 mb-4" size={32} />
              <h3 className="font-display font-bold text-xl mb-3">Educators & Students</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Download educational infographics, how-to videos, and reference materials for offline viewing, presentations, and study guides.</p>
            </div>
          </div>
        </section>

        {/* DETAILED GUIDES */}
        <section className="py-24 px-6 bg-card/20 border-y border-border/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">Detailed Platform Guides</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-2"><Smartphone className="text-primary"/> How to download on iPhone & Android</h3>
                <ol className="list-decimal list-inside space-y-4 text-muted-foreground leading-relaxed ml-4">
                  <li>Open the Pinterest app on your mobile device.</li>
                  <li>Find the video, reel, or image you want to download.</li>
                  <li>Tap the <strong>Share</strong> icon (an arrow or three dots).</li>
                  <li>Select <strong>Copy Link</strong> from the menu.</li>
                  <li>Open your mobile browser (Safari, Chrome) and navigate to <strong>PinSave.io</strong>.</li>
                  <li>Paste the link into the search bar and tap Download.</li>
                  <li>Choose your quality format to save to your camera roll or files app.</li>
                </ol>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-2"><Monitor className="text-primary"/> How to download on PC & Mac</h3>
                <ol className="list-decimal list-inside space-y-4 text-muted-foreground leading-relaxed ml-4">
                  <li>Go to <strong>Pinterest.com</strong> on your desktop web browser.</li>
                  <li>Click on the pin you want to save.</li>
                  <li>Copy the URL from the browser's address bar at the top of the screen.</li>
                  <li>Go to <strong>PinSave.io</strong> and paste the URL into our downloader box.</li>
                  <li>Click the Download button and select your preferred resolution (up to 4K).</li>
                  <li>The file will be saved directly to your computer's Downloads folder.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & MISSION */}
        <section className="py-24 px-6 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            PinSave was built to solve a simple problem: downloading media from Pinterest shouldn't be hard, and it shouldn't require sketchy, ad-filled websites. 
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe in creating fast, clean, and completely free utility tools. We don't log your data, we don't track your downloads, and we don't watermark your content. You get exactly what you came for—instantly.
          </p>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 px-6 max-w-4xl mx-auto border-t border-border/50">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about downloading Pinterest content.</p>
          </div>
          <FAQ />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/50 pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <a href="/" className="flex items-center gap-2 font-display font-bold text-xl mb-4">
                <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
                  <Download size={14} strokeWidth={2.5} />
                </div>
                Pin<span className="text-primary">Save</span>
              </a>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                The fastest, most reliable tool to download videos, images, and GIFs from Pinterest for free.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tools</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Pinterest Video Downloader</a></li>
                <li><a href="#" className="hover:text-foreground">Pinterest Image Downloader</a></li>
                <li><a href="#" className="hover:text-foreground">Pinterest GIF Downloader</a></li>
                <li><a href="#" className="hover:text-foreground">Pinterest to MP3</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal & About</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About Us</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground">Contact Support</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 text-center md:text-left text-xs text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} PinSave. All rights reserved.</p>
            <p className="max-w-xl text-center md:text-right opacity-60">
              Disclaimer: PinSave is an independent service and is not affiliated with, endorsed by, or sponsored by Pinterest. We respect intellectual property rights and ask users to download only content they have permission to use.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}