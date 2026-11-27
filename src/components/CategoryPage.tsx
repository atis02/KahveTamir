import Image from "next/image";
import Link from "next/link";
import { AlertCircle, ArrowRight, ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { brandFaq, categories, faqs, images, type CategoryKey } from "@/config/content";
import { brandList, site, whatsappLink } from "@/config/site";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "./ui";
import { WhatsAppIcon } from "./Icons";
import Process from "./sections/Process";
import Brands from "./sections/Brands";
import Faq from "./sections/Faq";
import Contact from "./sections/Contact";
import { BreadcrumbJsonLd, FaqJsonLd } from "./JsonLd";

const copy = {
  ev: {
    h1: "Ev Tipi Kahve Makinesi Tamiri ve Bakımı",
    lead:
      "Evinizdeki espresso, otomatik, kapsüllü veya filtre kahve makinesi beklediğiniz gibi çalışmıyorsa; arıza tespiti, tamir, kireç temizliği ve periyodik bakım için yanınızdayız.",
    servicesTitle: "Ev Tipi Kahve Makinesi Servis Hizmetleri",
    issuesTitle: "Ev tipi makinelerde sık karşılaşılan sorunlar",
    issuesIntro:
      "Aşağıdaki belirtilerden birini fark ettiyseniz makinenizi zorlamadan bize danışın. Erken müdahale, daha büyük arızaların önüne geçebilir.",
    sideImage: images.homeAlt,
    whatsapp: "Merhaba, ev tipi kahve makinem için servis talebinde bulunmak istiyorum.",
    formType: "Ev Tipi" as const,
    faqIdx: [1, 3, 4, 5, 6, 0],
  },
  ofis: {
    h1: "Ofis Tipi ve Profesyonel Kahve Makinesi Teknik Servisi",
    lead:
      "Ofislerde, kafelerde ve işletmelerde yoğun kullanılan kahve makineleri için teknik servis, periyodik bakım ve işletmenize özel servis çözümleri sunuyoruz.",
    servicesTitle: "Ofis Tipi Kahve Makinesi Servis Hizmetleri",
    issuesTitle: "İşletmelerde sık karşılaşılan sorunlar",
    issuesIntro:
      "Yoğun kullanım; basınç, sıcaklık ve su sistemi üzerinde ek yük oluşturur. Bu belirtileri fark ettiğinizde planlı bir kontrol iş akışınızın aksamasını önler.",
    sideImage: images.officeAlt,
    whatsapp: "Merhaba, işletmemizdeki / ofisimizdeki kahve makinesi için teknik servis talebinde bulunmak istiyoruz.",
    formType: "Ofis Tipi" as const,
    faqIdx: [2, 5, 6, 0, 3, 4],
  },
};

export default function CategoryPage({ kind }: { kind: CategoryKey }) {
  const c = categories[kind];
  const t = copy[kind];
  const other = categories[kind === "ev" ? "ofis" : "ev"];
  const dark = kind === "ofis";
  const pageFaqs = [...t.faqIdx.map((i) => faqs[i]), brandFaq];
  const pageBrands =
    kind === "ev"
      ? site.brandGroups.ev
      : Array.from(new Set([...site.brandGroups.endustriyel, ...site.brandGroups.ogutucu]));

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Ana Sayfa", path: "/" }, { name: c.title, path: c.href }]} />
      <FaqJsonLd items={pageFaqs} />

      {/* Hero */}
      <section
        aria-labelledby="kategori-h1"
        className={`grain relative overflow-hidden ${dark ? "bg-espresso text-cream" : "bg-cream-2 text-espresso"}`}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-12 lg:pb-24 lg:pt-14">
          <div className="lg:col-span-6">
            <nav aria-label="Sayfa konumu" className="animate-fade-up">
              <ol className={`flex items-center gap-1.5 text-sm ${dark ? "text-warmgray-light" : "text-warmgray"}`}>
                <li>
                  <Link href="/" className="hover:text-copper">
                    Ana Sayfa
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="size-3.5" />
                </li>
                <li aria-current="page" className={dark ? "text-cream" : "text-espresso"}>
                  {c.title}
                </li>
              </ol>
            </nav>
            <div className="animate-fade-up mt-8 [animation-delay:60ms]">
              <Eyebrow tone={dark ? "light" : "dark"}>{c.eyebrow}</Eyebrow>
            </div>
            <h1
              id="kategori-h1"
              className="animate-fade-up mt-5 font-serif text-[2.4rem] leading-[1.05] font-medium tracking-[-0.025em] text-balance [animation-delay:120ms] sm:text-6xl"
            >
              {t.h1}
            </h1>
            <p className={`animate-fade-up mt-6 max-w-xl text-lg leading-relaxed [animation-delay:180ms] ${dark ? "text-cream/75" : "text-warmgray"}`}>
              {t.lead}
            </p>
            <div className="animate-fade-up mt-9 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row">
              <ButtonLink href="#iletisim">
                Hemen Servis Talep Et <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href={whatsappLink(t.whatsapp)} external variant={dark ? "outline-light" : "outline"}>
                <WhatsAppIcon className="size-[1.1rem] text-whatsapp" /> WhatsApp&apos;tan Bize Ulaşın
              </ButtonLink>
            </div>
            <ul className="animate-fade-up mt-10 flex flex-wrap gap-2 [animation-delay:300ms]">
              {c.machineTypes.map((m) => (
                <li
                  key={m}
                  className={`rounded-full px-4 py-2 text-sm ${dark ? "bg-cream/5 text-cream/85 ring-1 ring-cream/10" : "bg-white text-espresso ring-1 ring-espresso/10"}`}
                >
                  {m}
                </li>
              ))}
            </ul>
            <p className={`animate-fade-up mt-6 border-l-2 border-copper pl-4 text-[0.95rem] leading-relaxed [animation-delay:340ms] ${dark ? "text-cream/70" : "text-warmgray"}`}>
              Servis verdiğimiz markalar:{" "}
              <strong className={`font-semibold ${dark ? "text-cream" : "text-espresso"}`}>{brandList(pageBrands)}</strong>
            </p>
          </div>
          <div className="animate-fade-up relative [animation-delay:120ms] lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-[5/6]">
              <Image src={c.image.src} alt={c.image.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section id="hizmetler" aria-labelledby="kat-hizmet" className="py-24 lg:py-28">
        <Container>
          <SectionHeading
            id="kat-hizmet"
            eyebrow="Hizmet kapsamı"
            title={t.servicesTitle}
            intro="Makinenizin türüne ve yaşadığınız soruna göre ihtiyaç duyduğunuz hizmeti birlikte belirleyelim."
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.services.map((s, i) => (
              <li
                key={s.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}
                className={`group flex gap-4 rounded-[1.5rem] p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-7 ${
                  dark ? "bg-espresso text-cream" : "bg-white shadow-soft ring-1 ring-espresso/5"
                }`}
              >
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-full transition-colors duration-500 ${
                    dark ? "bg-cream/10 text-caramel group-hover:bg-caramel group-hover:text-espresso" : "bg-cream-2 text-copper group-hover:bg-copper group-hover:text-white"
                  }`}
                >
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-xl leading-snug font-medium tracking-tight">{s.title}</h3>
                  <p className={`mt-2 text-[0.95rem] leading-relaxed ${dark ? "text-cream/65" : "text-warmgray"}`}>{s.text}</p>
                </div>
              </li>
            ))}
            <li data-reveal className="sm:col-span-2 lg:col-span-1">
              <a
                href={whatsappLink(t.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between gap-6 rounded-[1.5rem] bg-copper p-6 text-white transition-all duration-500 hover:-translate-y-1 hover:bg-copper-dark hover:shadow-lift sm:p-7"
              >
                <span className="font-serif text-xl leading-snug font-medium">Sorununuzu listede bulamadınız mı?</span>
                <span className="inline-flex items-center gap-2 text-[0.95rem] font-semibold">
                  <WhatsAppIcon className="size-4" /> Arızayı WhatsApp&apos;tan anlatın
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </a>
            </li>
          </ul>
        </Container>
      </section>

      {/* Sık arızalar */}
      <section aria-labelledby="kat-sorun" className="bg-cream-2 py-24 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image src={t.sideImage.src} alt={t.sideImage.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <SectionHeading id="kat-sorun" eyebrow="Arıza belirtileri" title={t.issuesTitle} intro={t.issuesIntro} />
              <ul className="mt-8 grid gap-3">
                {c.issues.map((issue) => (
                  <li key={issue} data-reveal className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 shadow-soft ring-1 ring-espresso/5">
                    <AlertCircle className="mt-0.5 size-5 shrink-0 text-copper" aria-hidden="true" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <Process />
      <Brands only={kind === "ev" ? ["ev"] : ["endustriyel", "ogutucu"]} />

      {/* Diğer kategori */}
      <section aria-label="Diğer servis kategorisi" className="pb-8">
        <Container>
          <Link
            href={other.href}
            data-reveal
            className={`group flex flex-col justify-between gap-6 rounded-[2rem] p-8 transition-all duration-500 hover:shadow-lift sm:flex-row sm:items-center sm:p-12 ${
              dark ? "bg-white ring-1 ring-espresso/5" : "bg-espresso text-cream"
            }`}
          >
            <div>
              <p className={`text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-copper" : "text-caramel"}`}>Diğer servis kategorimiz</p>
              <p className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-4xl">{other.title}</p>
              <p className={`mt-3 max-w-xl ${dark ? "text-warmgray" : "text-cream/70"}`}>{other.short}</p>
            </div>
            <span
              className={`grid size-14 shrink-0 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-45 ${
                dark ? "bg-espresso text-cream" : "bg-cream text-espresso"
              }`}
            >
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </span>
          </Link>
        </Container>
      </section>

      <Faq items={pageFaqs} />
      <Contact defaultType={t.formType} />
    </>
  );
}
