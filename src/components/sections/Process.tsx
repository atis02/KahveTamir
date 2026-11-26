import { ClipboardList, PackageCheck, Phone, Wrench } from "lucide-react";
import { steps } from "@/config/content";
import { Container, SectionHeading } from "../ui";

const icons = [Phone, ClipboardList, Wrench, PackageCheck];

export default function Process() {
  return (
    <section id="surec" aria-labelledby="surec-baslik" className="grain relative overflow-hidden bg-espresso py-24 text-cream lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 size-[30rem] rounded-full bg-copper/15 blur-[120px]" />
      <Container className="relative">
        <SectionHeading
          id="surec-baslik"
          tone="light"
          align="center"
          eyebrow="Nasıl çalışıyoruz"
          title="Servis Sürecimiz Nasıl İşliyor?"
          intro="İlk mesajınızdan makinenizin teslimine kadar her adımı açık ve anlaşılır şekilde yürütüyoruz."
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-caramel/40 to-transparent lg:block"
          />
          {steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <li
                key={s.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
                className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center"
              >
                <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full bg-espresso-2 ring-1 ring-caramel/40">
                  <Icon className="size-5 text-caramel" strokeWidth={1.6} aria-hidden="true" />
                  <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-copper text-[0.7rem] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <div>
                  <h3 className="font-serif text-[1.45rem] font-medium tracking-tight lg:mt-7">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-cream/65 lg:mx-auto lg:max-w-[16rem]">{s.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
