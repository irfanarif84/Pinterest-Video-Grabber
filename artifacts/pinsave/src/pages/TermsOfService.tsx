import { usePageSEO } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function TermsOfService() {
  usePageSEO({
    title: "Terms of Service | PinSavePro",
    description:
      "PinSavePro terms of service. Read the rules for using our free Pinterest video downloader.",
    canonical: "/terms-of-service",
    keywords: "pinsavepro terms of service, pinterest downloader terms",
  });
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "Terms of Service" }]} />
      <main
        className="flex-1 max-w-3xl w-full mx-auto px-6 py-16"
        id="main-content"
      >
        <h1 className="font-display text-4xl font-bold mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: April 25, 2026</p>

          <h2 className="text-foreground font-bold text-xl">
            Acceptance of Terms
          </h2>
          <p>
            By using PinSavePro, you agree to these terms. If you disagree with
            any part of the terms, you may not use our service.
          </p>

          <h2 className="text-foreground font-bold text-xl">Permitted Use</h2>
          <p>
            PinSavePro is provided for personal, non-commercial use only. You
            may use it to download content you have the right to access. You
            must not use PinSavePro to download, reproduce, or distribute
            copyrighted content without permission from the rights holder.
          </p>

          <h2 className="text-foreground font-bold text-xl">
            No Affiliation with Pinterest
          </h2>
          <p>
            PinSavePro is an independent service and is not affiliated with,
            endorsed by, or sponsored by Pinterest, Inc. Pinterest is a
            trademark of Pinterest, Inc.
          </p>

          <h2 className="text-foreground font-bold text-xl">Disclaimer</h2>
          <p>
            PinSavePro does not host, store, or cache any Pinterest content on
            its servers. All media is fetched directly from Pinterest's public
            CDN. We are not responsible for the content of downloaded pins.
          </p>

          <h2 className="text-foreground font-bold text-xl">Availability</h2>
          <p>
            We reserve the right to modify or discontinue the service at any
            time without notice. We are not liable for any interruption of
            service.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
