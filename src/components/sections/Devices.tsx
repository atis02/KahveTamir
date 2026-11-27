import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { deviceGroups } from "@/config/content";
import { Container, SectionHeading } from "../ui";

export default function Devices() {
  return (
    <section id="cihazlar" aria-labelledby="cihaz-baslik" className="py-24 lg:py-28">
      <Container>
        <SectionHeading
          id="cihaz-baslik"
          eyebrow="Servis verdiğimiz cihazlar"
          title="Ev Tipi, Endüstriyel Makinalar ve Kahve Öğütücüleri"
          intro="Evinizdeki kahve makinasından kafenizdeki çok gruplu espresso makinasına ve öğütücüye kadar her marka ve model için tamir, bakım ve onarım."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {deviceGroups.map((d, i) => (
            <li key={d.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}>
              <Link
                href={d.href}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-soft ring-1 ring-espresso/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={d.image.src}
                    alt={d.image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-cream/90 text-espresso backdrop-blur transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-serif text-2xl font-medium tracking-tight">{d.title}</h3>
                  <p className="mt-3 leading-relaxed text-warmgray">{d.text}</p>
                  <ul className="mt-5 space-y-2 text-[0.95rem]">
                    {d.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5">
                        <Check className="size-4 shrink-0 text-copper" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
