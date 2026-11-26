import { Plus } from "lucide-react";
import { faqs } from "@/config/content";
import { defaultWhatsappMessage, whatsappLink } from "@/config/site";
import { Container, SectionHeading, ButtonLink } from "../ui";
import { WhatsAppIcon } from "../Icons";

type Faq = { q: string; a: string };

export function FaqList({ items }: { items: readonly Faq[] }) {
  return (
    <div className="divide-y divide-espresso/10 border-y border-espresso/10">
      {items.map((f, i) => (
        <details key={f.q} className="group" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left">
            <h3 className="font-serif text-[1.2rem] leading-snug font-medium tracking-tight sm:text-[1.35rem]">{f.q}</h3>
            <span className="grid size-10 shrink-0 place-items-center rounded-full border border-espresso/15 text-espresso transition-all duration-300 group-open:rotate-45 group-open:border-copper group-open:bg-copper group-open:text-white">
              <Plus className="size-4" aria-hidden="true" />
            </span>
          </summary>
          <p className="max-w-3xl pb-7 pr-14 leading-relaxed text-warmgray">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export default function Faq({ items = faqs }: { items?: readonly Faq[] }) {
  return (
    <section id="sss" aria-labelledby="sss-baslik" className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="sss-baslik" eyebrow="Sıkça sorulan sorular" title="Merak Edilenler" />
            <p data-reveal className="mt-5 leading-relaxed text-warmgray">
              Aradığınız cevabı bulamadıysanız makinenizin marka, model ve arıza bilgisini bize iletin.
            </p>
            <div data-reveal className="mt-8">
              <ButtonLink href={whatsappLink(defaultWhatsappMessage)} external variant="outline">
                <WhatsAppIcon className="size-4 text-whatsapp" /> Sorunuzu WhatsApp&apos;tan sorun
              </ButtonLink>
            </div>
          </div>
          <div data-reveal className="lg:col-span-8">
            <FaqList items={items} />
          </div>
        </div>
      </Container>
    </section>
  );
}
