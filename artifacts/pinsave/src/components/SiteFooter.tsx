import { Link } from "wouter";
import { Download } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/50 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl mb-4">
              <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
                <Download size={14} strokeWidth={2.5} />
              </div>
              Pin<span className="text-primary">SavePro</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              The fastest, most reliable tool to download videos, images, and GIFs from Pinterest for free.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Pinterest Video Downloader</Link></li>
              <li><Link href="/pinterest-image-downloader" className="hover:text-foreground">Pinterest Image Downloader</Link></li>
              <li><Link href="/pinterest-gif-downloader" className="hover:text-foreground">Pinterest GIF Downloader</Link></li>
              <li><Link href="/pinterest-to-mp3" className="hover:text-foreground">Pinterest to MP3</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/how-to-download-pinterest-videos" className="hover:text-foreground">How To Guide</Link></li>
              <li><Link href="/" className="hover:text-foreground">FAQ</Link></li>
              <li><a href="/sitemap.xml" className="hover:text-foreground">Sitemap</a></li>
              <li><a href="/robots.txt" className="hover:text-foreground">robots.txt</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/50 text-center md:text-left text-xs text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} PinSavePro. All rights reserved.</p>
          <p className="max-w-xl text-center md:text-right opacity-60">
            Disclaimer: PinSavePro is an independent service and is not affiliated with, endorsed by, or sponsored by Pinterest. We respect intellectual property rights and ask users to download only content they have permission to use.
          </p>
        </div>
      </div>
    </footer>
  );
}
