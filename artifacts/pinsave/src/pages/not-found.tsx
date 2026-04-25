import { useEffect } from "react";
import { Link } from "wouter";
import { AlertCircle, ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 – Page Not Found | PinSavePro";
    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const previous = robots?.getAttribute("content") ?? "index, follow";
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");
    return () => {
      robots?.setAttribute("content", previous);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary/30">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center px-6 py-24" id="main-content">
        <div className="max-w-xl w-full text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
            <AlertCircle className="text-primary" size={32} />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-4">404</h1>
          <h2 className="font-display text-2xl font-bold mb-3">Page not found</h2>
          <p className="text-muted-foreground mb-8">
            We couldn't find the page you were looking for. It may have moved or never existed.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Link href="/" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">
              <ArrowLeft size={16} /> Back to PinSavePro
            </Link>
          </div>

          <div className="border-t border-border/50 pt-8 text-left">
            <h3 className="font-bold text-sm uppercase tracking-wide text-muted-foreground mb-4">Popular tools</h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm">
              <li><Link href="/" className="text-foreground hover:text-primary">Pinterest Video Downloader</Link></li>
              <li><Link href="/pinterest-image-downloader" className="text-foreground hover:text-primary">Pinterest Image Downloader</Link></li>
              <li><Link href="/pinterest-gif-downloader" className="text-foreground hover:text-primary">Pinterest GIF Downloader</Link></li>
              <li><Link href="/pinterest-to-mp3" className="text-foreground hover:text-primary">Pinterest to MP3</Link></li>
              <li><Link href="/how-to-download-pinterest-videos" className="text-foreground hover:text-primary">How-To Guide</Link></li>
            </ul>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
