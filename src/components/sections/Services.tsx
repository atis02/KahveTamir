import { CalendarCheck, Cog, Droplets, Search, Sparkles, Wrench } from "lucide-react";
import { coreServices } from "@/config/content";
import { Container, SectionHeading } from "../ui";

const icons = { search: Search, wrench: Wrench, calendar: CalendarCheck, droplets: Droplets, cog: Cog, sparkles: Sparkles };

export default function Services() {
  return (
    <section id="hizmetler" aria-labelledby="hizmet-baslik" className="bg-cream-2 py-24 lg:py-32">
      <Container>
        <SectionHeading
          id="hizmet-baslik"
          eyebrow="Hizmetlerimiz"
          title="Kahve Makinesi Teknik Servis Hizmetlerimiz"
          intro="Arıza tespitinden periyodik bakıma kadar, ev ve ofis tipi kahve makineleriniz için ihtiyaç duyduğunuz teknik servis hizmetleri."
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-espresso/10 ring-1 ring-espresso/10 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <li
                key={s.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 90}ms` }}
                className="group relative bg-cream-2 p-8 transition-colors duration-500 hover:bg-white sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-white text-copper ring-1 ring-espresso/5 transition-all duration-500 group-hover:bg-espresso group-hover:text-caramel">
                    <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="font-serif text-sm text-warmgray-light" aria-hidden="true">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-2xl font-medium tracking-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-warmgray">{s.text}</p>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-copper transition-transform duration-500 group-hover:scale-x-100 sm:left-10 sm:right-10"
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
