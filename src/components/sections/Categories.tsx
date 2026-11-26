import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Check, House } from "lucide-react";
import { categories } from "@/config/content";
import { Container, SectionHeading } from "../ui";

export default function Categories() {
  const cards = [
    { ...categories.ev, Icon: House, dark: false, label: "01 · Ev tipi" },
    { ...categories.ofis, Icon: Building2, dark: true, label: "02 · Ofis tipi" },
  ];

  return (
    <section id="kategoriler" aria-labelledby="kategori-baslik" className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="kategori-baslik"
            eyebrow="Servis kategorileri"
            title="Hangi Kahve Makinesi İçin Servis Arıyorsunuz?"
          />
          <p data-reveal className="max-w-sm text-warmgray lg:pb-2">
            Evde kullanılan makineler ile işletmelerde yoğun kullanılan makinelerin ihtiyaçları farklıdır. Size uygun
            servis kategorisini seçin.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {cards.map((c, i) => (
            <article
              key={c.key}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
              className={`group relative flex flex-col overflow-hidden rounded-[2rem] transition-shadow duration-500 hover:shadow-lift ${
                c.dark ? "bg-espresso text-cream" : "bg-white text-espresso shadow-soft ring-1 ring-espresso/5"
              }`}
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={c.image.src}
                  alt={c.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 ${
                    c.dark ? "bg-gradient-to-t from-espresso via-espresso/10 to-transparent" : "bg-gradient-to-t from-white/90 via-transparent to-transparent"
                  }`}
                />
                <span
                  className={`absolute left-6 top-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] backdrop-blur-md ${
                    c.dark ? "bg-espresso/70 text-caramel" : "bg-white/80 text-copper"
                  }`}
                >
                  <c.Icon className="size-3.5" aria-hidden="true" /> {c.label}
                </span>
              </div>

              <div className="relative flex flex-1 flex-col px-7 pb-8 sm:px-10 sm:pb-10">
                <p className={`text-xs font-bold uppercase tracking-[0.2em] ${c.dark ? "text-warmgray-light" : "text-warmgray"}`}>
                  {c.eyebrow}
                </p>
                <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-[2.4rem]">{c.title}</h3>
                <p className={`mt-4 max-w-lg leading-relaxed ${c.dark ? "text-cream/70" : "text-warmgray"}`}>{c.short}</p>

                <ul className="mt-7 grid gap-x-6 gap-y-3 text-[0.95rem] sm:grid-cols-2">
                  {c.machineTypes.map((m) => (
                    <li key={m} className="flex items-center gap-2.5">
                      <Check className={`size-4 shrink-0 ${c.dark ? "text-caramel" : "text-copper"}`} aria-hidden="true" />
                      {m}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-9">
                  <Link
                    href={c.href}
                    className={`inline-flex items-center gap-3 rounded-full py-3.5 pl-6 pr-3.5 font-semibold transition-all duration-300 ${
                      c.dark ? "bg-cream text-espresso hover:bg-caramel" : "bg-espresso text-cream hover:bg-copper"
                    }`}
                  >
                    {c.cta}
                    <span
                      className={`grid size-8 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${
                        c.dark ? "bg-espresso text-cream" : "bg-cream text-espresso"
                      }`}
                    >
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
