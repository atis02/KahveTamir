import { BadgeCheck } from "lucide-react";
import { allBrands, site } from "@/config/site";
import { Container, SectionHeading } from "../ui";

const groups = [
  { key: "ev", title: "Ev Tipi Kahve Makinası Markaları", label: "kahve makinası servisi" },
  { key: "endustriyel", title: "Endüstriyel Kahve Makinası Markaları", label: "espresso makinası servisi" },
  { key: "ogutucu", title: "Kahve Öğütücü Markaları", label: "öğütücü servisi" },
] as const;

type GroupKey = (typeof groups)[number]["key"];

export default function Brands({ only }: { only?: GroupKey[] }) {
  const shown = only ? groups.filter((g) => only.includes(g.key)) : groups;

  return (
    <section id="markalar" aria-labelledby="marka-baslik" className="py-24 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="marka-baslik"
            eyebrow={`${allBrands.length}+ marka · her model`}
            title="Servis Verdiğimiz Kahve Makinası Markaları"
            intro="Aşağıdaki markaların ev tipi ve endüstriyel kahve makinaları ile kahve öğütücülerine tamir, bakım ve onarım hizmeti veriyoruz. Listede olmayan marka ve modeller için de bize ulaşabilirsiniz."
          />
          <p data-reveal className="inline-flex shrink-0 items-center gap-2.5 self-start rounded-full bg-espresso px-5 py-3 text-sm font-semibold text-cream lg:self-auto">
            <BadgeCheck className="size-4 text-caramel" aria-hidden="true" />
            Garantili servis
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {shown.map((g) => (
            <div key={g.key}>
              <h3 data-reveal className="flex items-center gap-4 font-serif text-2xl font-medium tracking-tight">
                {g.title}
                <span className="h-px flex-1 bg-espresso/10" aria-hidden="true" />
              </h3>
              <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {site.brandGroups[g.key].map((b, i) => (
                  <li
                    key={b}
                    data-reveal
                    style={{ ["--reveal-delay" as string]: `${(i % 6) * 50}ms` }}
                    className="group flex flex-col justify-center rounded-2xl bg-white px-5 py-6 shadow-soft ring-1 ring-espresso/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift hover:ring-copper/30"
                  >
                    <span className="font-serif text-[1.45rem] leading-tight font-semibold tracking-tight text-espresso transition-colors group-hover:text-copper">
                      {b}
                    </span>
                    <span className="mt-1.5 text-xs font-medium text-warmgray">
                      {b} {g.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-warmgray-light">
          Marka adları ilgili hak sahiplerine aittir ve yalnızca servis verilen cihazları belirtmek amacıyla kullanılmıştır.
        </p>
      </Container>
    </section>
  );
}
