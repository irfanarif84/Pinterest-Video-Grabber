import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import GifDownloader from "@/pages/GifDownloader";
import ImageDownloader from "@/pages/ImageDownloader";
import Mp3Converter from "@/pages/Mp3Converter";
import HowToGuide from "@/pages/HowToGuide";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pinterest-gif-downloader" component={GifDownloader} />
      <Route path="/pinterest-image-downloader" component={ImageDownloader} />
      <Route path="/pinterest-to-mp3" component={Mp3Converter} />
      <Route path="/how-to-download-pinterest-videos" component={HowToGuide} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
