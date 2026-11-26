import Image from "next/image";
import { benefits, images } from "@/config/content";
import { Container, Eyebrow } from "../ui";

export default function WhyUs() {
  return (
    <section id="hakkimizda" aria-labelledby="neden-baslik" className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div data-reveal>
                <Eyebrow>Hakkımızda</Eyebrow>
                <h2 id="neden-baslik" className="mt-5 font-serif text-[2.05rem] leading-[1.08] font-medium tracking-[-0.02em] text-balance sm:text-5xl">
                  Neden Bizi Tercih Etmelisiniz?
                </h2>
                <p className="mt-6 text-[1.05rem] leading-relaxed text-warmgray">
                  Kahve makinesi; su, ısı, basınç ve elektroniğin birlikte çalıştığı hassas bir cihazdır. Biz her
                  makineye bu bütünlük içinde yaklaşır, sorunu yalnızca gidermeye değil kaynağını anlamaya odaklanırız.
                </p>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-warmgray">
                  Evinizdeki espresso makinesinden işletmenizdeki profesyonel makineye kadar, sürecin her adımında
                  sizi bilgilendiren şeffaf bir servis anlayışıyla çalışırız.
                </p>
              </div>
              <div data-reveal className="relative mt-10 aspect-[5/4] overflow-hidden rounded-[1.75rem]">
                <Image src={images.officeAlt.src} alt={images.officeAlt.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-5">
            {benefits.map((b, i) => (
              <li
                key={b.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 2) * 100}ms` }}
                className={`group rounded-[1.5rem] bg-white p-8 shadow-soft ring-1 ring-espresso/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift ${
                  i % 2 === 1 ? "sm:translate-y-10 sm:hover:translate-y-9" : ""
                }`}
              >
                <span className="font-serif text-5xl font-light text-sand transition-colors duration-500 group-hover:text-caramel" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-serif text-[1.4rem] leading-tight font-medium tracking-tight">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-warmgray">{b.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
