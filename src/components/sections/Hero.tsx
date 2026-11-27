import Image from "next/image";
import { ArrowRight, Building2, Check, House, ShieldCheck } from "lucide-react";
import { images } from "@/config/content";
import { allBrands, brandList, defaultWhatsappMessage, site, whatsappLink } from "@/config/site";
import { ButtonLink } from "../ui";
import { WhatsAppIcon } from "../Icons";

const heroLines = [
  "Kahve makinaları tamir bakım servisi",
  "Endüstriyel kahve makinaları ve öğütücüleri tamir bakımı",
  "Ev tipi kahve makinaları arıza tamir bakım onarım",
  "Her marka model kahve makinaları servisi",
];

const heroBrands = ["De'Longhi", "Philips", "Saeco", "Jura", "Siemens", "La Marzocco", "Rancilio", "Mazzer"];

const trust = [
  { Icon: House, label: "Ev tipi makinalar" },
  { Icon: Building2, label: "Endüstriyel makinalar ve öğütücüler" },
  { Icon: ShieldCheck, label: "Garantili servis" },
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-baslik" className="grain relative overflow-hidden bg-espresso text-cream">
      {/* Arka plan ışığı */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 size-[36rem] rounded-full bg-copper/20 blur-[140px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-6">
          <p className="animate-fade-up inline-flex items-center gap-2.5 rounded-2xl border border-copper/40 bg-copper/15 px-4 py-2.5 text-[0.78rem] font-bold uppercase leading-snug tracking-[0.12em] text-caramel">
            <ShieldCheck className="size-4 shrink-0" aria-hidden="true" />
            {site.slogan}
          </p>
          <h1
            id="hero-baslik"
            className="animate-fade-up mt-7 font-serif text-[2.8rem] leading-[1.02] font-medium tracking-[-0.025em] text-balance [animation-delay:80ms] sm:text-6xl lg:text-[4.6rem]"
          >
            Kahve Makinası <em className="font-normal text-caramel italic">Servis</em>
          </h1>
          <ul className="animate-fade-up mt-8 grid max-w-xl gap-3 text-lg leading-snug text-cream/80 [animation-delay:160ms]">
            {heroLines.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <Check className="mt-1 size-5 shrink-0 text-caramel" aria-hidden="true" />
                {line}
              </li>
            ))}
          </ul>
          <p className="animate-fade-up mt-7 max-w-xl border-l-2 border-copper pl-4 text-[0.95rem] leading-relaxed text-cream/70 [animation-delay:200ms]">
            <strong className="font-semibold text-cream">{brandList(heroBrands)}</strong> ve{" "}
            {allBrands.length - heroBrands.length}+ marka daha için servis.
          </p>
          <div className="animate-fade-up mt-10 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row">
            <ButtonLink href="/#iletisim" variant="primary">
              Hemen Servis Talep Et <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href={whatsappLink(defaultWhatsappMessage)} external variant="outline-light">
              <WhatsAppIcon className="size-[1.1rem] text-[#4ade80]" /> WhatsApp&apos;tan Bize Ulaşın
            </ButtonLink>
          </div>
          <ul className="animate-fade-up mt-12 grid gap-4 border-t border-cream/10 pt-8 [animation-delay:320ms] sm:grid-cols-3">
            {trust.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-cream/80">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-cream/5 ring-1 ring-cream/10">
                  <Icon className="size-4 text-caramel" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-6">
          <div className="animate-fade-up relative aspect-[4/3] overflow-hidden rounded-[2rem] [animation-delay:120ms] sm:aspect-square lg:aspect-[4/5]">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-roast/70 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-end gap-4">
              <p className="max-w-[16rem] text-right font-serif text-xl leading-snug text-cream sm:text-2xl">
                Espresso, otomatik ve kapsüllü makineler
              </p>
            </div>
          </div>

          <div className="animate-fade-up absolute -bottom-8 -left-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-espresso shadow-lift [animation-delay:400ms] sm:block lg:-left-12">
            <div className="relative aspect-[4/3]">
              <Image src={images.heroInset.src} alt={images.heroInset.alt} fill sizes="224px" className="object-cover" />
            </div>
            <p className="bg-cream px-4 py-3 text-[0.8rem] font-semibold text-espresso">Detaylı arıza tespiti</p>
          </div>
        </div>
      </div>
    </section>
  );
}
