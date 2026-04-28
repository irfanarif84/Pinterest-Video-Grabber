import { Link } from "wouter";
import { Download } from "lucide-react";

export default function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-[0_0_15px_rgba(232,0,61,0.5)]">
          <Download size={18} strokeWidth={2.5} />
        </div>
        Pin<span className="text-primary">SavePro</span>
      </Link>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
        <Link href="/pinterest-gif-downloader" className="hover:text-foreground transition-colors">GIF Downloader</Link>
        <Link href="/pinterest-image-downloader" className="hover:text-foreground transition-colors">Image Downloader</Link>
        <Link href="/pinterest-to-mp3" className="hover:text-foreground transition-colors">Pinterest to MP3</Link>
        <Link href="/how-to-download-pinterest-videos" className="hover:text-foreground transition-colors">How To Guide</Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
          100% Free
        </div>
      </div>
    </nav>
  );
}
