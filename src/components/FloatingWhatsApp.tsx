import { defaultWhatsappMessage, whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "./Icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden bize yazın"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-whatsapp p-4 text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#178a49] sm:bottom-7 sm:right-7"
    >
      <span
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/30 [animation-duration:2.8s]"
        aria-hidden="true"
      />
      <WhatsAppIcon className="size-6" />
    </a>
  );
}
