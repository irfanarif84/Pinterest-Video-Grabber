import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How do I download a Pinterest video?",
    a: "It's simple: copy the URL of the Pinterest video or image, paste it into the search box at the top of this page, and click 'Download'. You'll get options to save it in various qualities."
  },
  {
    q: "Is PinSave completely free?",
    a: "Yes! PinSave is 100% free to use. There are no hidden fees, no subscriptions, and no limits on how many times you can download."
  },
  {
    q: "Do I need to create an account?",
    a: "No account or registration is required. You can use PinSave instantly as an anonymous user."
  },
  {
    q: "Are there watermarks on the downloaded videos?",
    a: "No, all videos and images downloaded through PinSave are completely watermark-free, preserving the original quality."
  },
  {
    q: "Can I download videos on my iPhone or Android?",
    a: "Absolutely. PinSave works perfectly on any modern web browser across iOS, Android, Windows, and Mac devices."
  },
  {
    q: "Can I convert Pinterest videos to MP3 audio?",
    a: "Yes! When you extract a video, we automatically provide an MP3 audio extraction option in the download format list."
  },
  {
    q: "Is it legal to download Pinterest videos?",
    a: "Downloading videos for personal, offline viewing is generally acceptable. However, you should not re-upload, distribute, or monetize copyrighted content without the creator's explicit permission."
  },
  {
    q: "Where do the files save to my device?",
    a: "On a computer, they usually go to your 'Downloads' folder. On mobile devices, they will save to your files app or camera roll, depending on your browser settings."
  },
  {
    q: "Can I download Idea Pins or Reels?",
    a: "Yes, our downloader fully supports the latest Pinterest formats including Idea Pins and short-form video Reels in full HD quality."
  },
  {
    q: "What if the download isn't working?",
    a: "Make sure you've copied a valid Pinterest URL (like pin.it or pinterest.com/pin). If the board or pin is set to private, we won't be able to extract it."
  }
];

export default function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <AccordionItem value={`item-${index}`} className="border-border/50 mb-4 bg-card rounded-xl px-4 overflow-hidden border">
            <AccordionTrigger className="font-display font-bold text-left hover:text-primary transition-colors py-5 text-base">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
}