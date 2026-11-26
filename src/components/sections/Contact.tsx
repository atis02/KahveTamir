import { Clock, MapPin, Phone } from "lucide-react";
import { defaultWhatsappMessage, fullAddress, site, whatsappLink } from "@/config/site";
import ContactForm from "../ContactForm";
import { Container, Eyebrow } from "../ui";
import { WhatsAppIcon } from "../Icons";

export default function Contact({ defaultType = "" }: { defaultType?: "" | "Ev Tipi" | "Ofis Tipi" }) {
  const items = [
    { Icon: Phone, title: "Telefon", value: site.phoneDisplay, href: `tel:${site.phoneE164}` },
    { Icon: WhatsAppIcon, title: "WhatsApp", value: "Hemen mesaj gönderin", href: whatsappLink(defaultWhatsappMessage), external: true },
    { Icon: MapPin, title: "Adres", value: fullAddress },
  ];

  return (
    <section id="iletisim" aria-labelledby="iletisim-baslik" className="grain relative overflow-hidden bg-espresso py-24 text-cream lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-40 size-[32rem] rounded-full bg-copper/15 blur-[130px]" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div data-reveal>
              <Eyebrow tone="light">İletişim</Eyebrow>
              <h2 id="iletisim-baslik" className="mt-5 font-serif text-[2.05rem] leading-[1.08] font-medium tracking-[-0.02em] text-balance sm:text-5xl">
                Kahve Makineniz İçin Hemen Servis Talep Edin
              </h2>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-cream/70">
                Formu doldurun, talebiniz WhatsApp üzerinden bize hazır bir mesaj olarak ulaşsın. Dilerseniz doğrudan
                arayabilir veya yazabilirsiniz.
              </p>
            </div>

            <ul data-reveal className="mt-10 space-y-3">
              {items.map(({ Icon, title, value, href, external }) => {
                const inner = (
                  <>
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-cream/5 ring-1 ring-cream/10">
                      <Icon className="size-5 text-caramel" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.18em] text-warmgray-light">{title}</span>
                      <span className="mt-1 block text-[1.05rem] text-cream">{value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={title}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-cream/5"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-3">{inner}</div>
                    )}
                  </li>
                );
              })}
              <li className="flex items-start gap-4 p-3">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-cream/5 ring-1 ring-cream/10">
                  <Clock className="size-5 text-caramel" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-warmgray-light">Çalışma Saatleri</span>
                  <span className="mt-1 grid gap-0.5 text-cream">
                    {site.hours.map((h) => (
                      <span key={h.days} className="flex gap-3">
                        <span className="min-w-[8.5rem] text-cream/70">{h.days}</span>
                        <span>{h.time}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div data-reveal className="lg:col-span-7">
            <div className="rounded-[2rem] bg-white p-6 text-espresso shadow-lift sm:p-10">
              <h3 className="font-serif text-2xl font-medium tracking-tight">Servis Talep Formu</h3>
              <p className="mt-2 text-warmgray">Yıldızlı alanların doldurulması zorunludur.</p>
              <div className="mt-8">
                <ContactForm defaultType={defaultType} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
