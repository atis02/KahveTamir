import { site } from "@/config/site";
import { Container, SectionHeading } from "../ui";

export default function Brands() {
  const intro = site.brandsConfirmed
    ? "Aşağıdaki markaların ev ve ofis tipi kahve makinelerine teknik destek sağlıyoruz. Listede olmayan bir marka için de bize danışabilirsiniz."
    : "Sık karşılaşılan kahve makinesi markalarından bazıları aşağıda yer alıyor. Makinenizin marka ve modelini bize iletin; servis kapsamını size net olarak bildirelim.";

  return (
    <section id="markalar" aria-labelledby="marka-baslik" className="py-24 lg:py-28">
      <Container>
        <SectionHeading id="marka-baslik" align="center" eyebrow="Markalar" title="Farklı Kahve Makinesi Markalarına Teknik Destek" intro={intro} />

        <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[1.75rem] bg-espresso/10 ring-1 ring-espresso/10 sm:grid-cols-3 lg:grid-cols-5">
          {site.brands.map((b, i) => (
            <li
              key={b}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 5) * 60}ms` }}
              className="group grid h-28 place-items-center bg-cream px-4 transition-colors duration-500 hover:bg-white sm:h-32"
            >
              <span className="font-serif text-xl font-medium tracking-tight text-warmgray transition-colors duration-500 group-hover:text-espresso sm:text-2xl">
                {b}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs text-warmgray-light">
          Marka adları ilgili hak sahiplerine aittir ve yalnızca makine uyumluluğunu belirtmek amacıyla kullanılmıştır.
        </p>
      </Container>
    </section>
  );
}
