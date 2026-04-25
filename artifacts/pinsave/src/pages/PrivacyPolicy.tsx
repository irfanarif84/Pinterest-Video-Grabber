import { usePageSEO } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PrivacyPolicy() {
  usePageSEO({
    title: "Privacy Policy | PinSavePro",
    description:
      "PinSavePro privacy policy. We do not collect personal data. Read how we handle your information.",
    canonical: "/privacy-policy",
    keywords: "pinsavepro privacy policy, pinterest downloader privacy",
  });
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "Privacy Policy" }]} />
      <main
        className="flex-1 max-w-3xl w-full mx-auto px-6 py-16"
        id="main-content"
      >
        <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: April 25, 2026</p>

          <h2 className="text-foreground font-bold text-xl">
            Information We Collect
          </h2>
          <p>
            PinSavePro does not require registration or login. We do not collect
            personally identifiable information such as your name, email
            address, or payment details.
          </p>

          <h2 className="text-foreground font-bold text-xl">URL Processing</h2>
          <p>
            When you paste a Pinterest URL, it is sent to our server solely to
            fetch media information from Pinterest's public CDN. We do not store
            URLs, downloaded files, or any data about your usage sessions
            beyond anonymous server logs retained for 7 days.
          </p>

          <h2 className="text-foreground font-bold text-xl">Cookies</h2>
          <p>
            PinSavePro does not use tracking cookies or third-party advertising
            cookies. We may use essential session cookies required for the site
            to function.
          </p>

          <h2 className="text-foreground font-bold text-xl">
            Third-Party Services
          </h2>
          <p>
            Our site may use Google Fonts (loaded from Google's CDN) and
            optionally Google Analytics 4 for anonymous traffic analysis. If
            analytics is enabled, IP addresses are anonymized.
          </p>

          <h2 className="text-foreground font-bold text-xl">Contact</h2>
          <p>
            If you have questions about this privacy policy, please contact us
            through our website's contact form.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
