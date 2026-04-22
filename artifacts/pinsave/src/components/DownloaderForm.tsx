import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Loader2, Copy, FileVideo, Music, Image as ImageIcon, Check, Clipboard } from "lucide-react";
import { useExtractPinterest, useGetStats, getGetStatsQueryKey } from "@workspace/api-client-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { z } from "zod";

const urlSchema = z.string().url().refine(
  (url) => url.includes("pinterest.com") || url.includes("pin.it"),
  { message: "Please enter a valid Pinterest or pin.it link" }
);

export default function DownloaderForm() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const extractMutation = useExtractPinterest();
  const { data: stats } = useGetStats({ query: { queryKey: getGetStatsQueryKey() } });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!url) {
      setError("Please paste a link first");
      return;
    }

    try {
      urlSchema.parse(url);
      extractMutation.mutate({ data: { url } }, {
        onError: (err: any) => {
          setError(err?.error || "Failed to extract video. Please try again.");
        }
      });
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Invalid URL");
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text);
        toast.success("Link pasted from clipboard");
      }
    } catch (err) {
      toast.error("Failed to read clipboard");
    }
  };

  const getFormatIcon = (kind: string) => {
    switch(kind) {
      case "video": return <FileVideo size={16} />;
      case "audio": return <Music size={16} />;
      case "image": return <ImageIcon size={16} />;
      case "gif": return <ImageIcon size={16} />;
      default: return <Download size={16} />;
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative z-10 bg-card border border-border rounded-2xl p-4 shadow-2xl shadow-black/50">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste Pinterest link here... https://pin.it/..."
              className="h-14 bg-background border-border/50 focus-visible:ring-primary/50 text-base pr-12 rounded-xl"
              disabled={extractMutation.isPending}
            />
            <button
              type="button"
              onClick={handlePaste}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 transition-colors"
              title="Paste from clipboard"
            >
              <Clipboard size={18} />
            </button>
          </div>
          <Button 
            type="submit" 
            className="h-14 px-8 text-base font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-[0.98]"
            disabled={extractMutation.isPending}
          >
            {extractMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                Download
              </>
            )}
          </Button>
        </div>

        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm font-medium">
                {error}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground/80 font-medium">
        {stats && (
          <>
            <div className="flex flex-col items-center">
              <span className="text-foreground font-display font-bold text-xl">{stats.downloads.toLocaleString()}+</span>
              <span>Downloads</span>
            </div>
            <div className="w-px h-8 bg-border/50" />
            <div className="flex flex-col items-center">
              <span className="text-foreground font-display font-bold text-xl">{stats.users.toLocaleString()}+</span>
              <span>Happy Users</span>
            </div>
            <div className="w-px h-8 bg-border/50" />
            <div className="flex flex-col items-center">
              <span className="text-primary font-display font-bold text-xl">{stats.averageSeconds.toFixed(1)}s</span>
              <span>Fast Extraction</span>
            </div>
          </>
        )}
      </div>

      <AnimatePresence>
        {extractMutation.data && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 bg-card border border-border rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-muted/20 relative aspect-square md:aspect-auto">
                {extractMutation.data.thumbnail ? (
                  <img 
                    src={extractMutation.data.thumbnail} 
                    alt={extractMutation.data.title || "Pinterest Media"} 
                    className="w-full h-full object-cover absolute inset-0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground absolute inset-0">
                    No Preview
                  </div>
                )}
              </div>
              <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col">
                <h3 className="font-display font-bold text-xl mb-2 line-clamp-2">
                  {extractMutation.data.title || "Pinterest Media"}
                </h3>
                {extractMutation.data.author && (
                  <p className="text-muted-foreground text-sm mb-6">By {extractMutation.data.author}</p>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                  {extractMutation.data.formats.map((format, idx) => {
                    const dlUrl = `${import.meta.env.BASE_URL}api/pinterest/proxy?url=${encodeURIComponent(format.url)}&filename=${encodeURIComponent(`pinsave-${format.kind}-${Date.now()}`)}`;
                    return (
                      <a
                        key={idx}
                        href={dlUrl}
                        download
                        className="flex items-center justify-between p-3 rounded-xl border border-border bg-background hover:border-primary hover:bg-primary/5 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${format.kind === 'video' ? 'bg-primary/10 text-primary' : 'bg-muted/50 text-muted-foreground'}`}>
                            {getFormatIcon(format.kind)}
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="font-semibold text-sm group-hover:text-primary transition-colors">{format.label}</span>
                            {format.quality && <span className="text-xs text-muted-foreground">{format.quality}</span>}
                          </div>
                        </div>
                        <Download size={16} className="text-muted-foreground group-hover:text-primary transition-colors opacity-50 group-hover:opacity-100" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}