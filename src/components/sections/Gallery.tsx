import Image from "next/image";
import { gallery } from "@/config/content";
import { Container, SectionHeading } from "../ui";

export default function Gallery() {
  return (
    <section id="galeri" aria-labelledby="galeri-baslik" className="bg-cream-2 py-24 lg:py-32">
      <Container>
        <SectionHeading
          id="galeri-baslik"
          eyebrow="Galeri"
          title="Teknik Servisimizden Görüntüler"
          intro="Ev ve profesyonel kahve makinelerinde arıza tespiti, temizlik ve bakım çalışmalarından kareler."
        />

        <ul className="mt-14 grid auto-rows-[15rem] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[14rem] lg:grid-cols-3 lg:auto-rows-[16rem] lg:gap-5">
          {gallery.map((g, i) => (
            <li
              key={g.src}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 90}ms` }}
              className={`group relative overflow-hidden rounded-[1.5rem] bg-beige ${g.span}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-roast/75 via-roast/0 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <p className="absolute bottom-5 left-5 right-5 font-serif text-lg text-cream">{g.caption}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
