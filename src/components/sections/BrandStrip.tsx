import { allBrands } from "@/config/site";

/** Hero altında kayan marka şeridi */
export default function BrandStrip() {
  const brands = allBrands;
  return (
    <section aria-label="Servis verdiğimiz kahve makinası markaları" className="border-b border-espresso/10 bg-cream-2">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-7 sm:px-8 lg:flex-row lg:gap-10">
        <p className="shrink-0 text-center text-[0.72rem] font-bold uppercase tracking-[0.2em] text-copper lg:text-left">
          {brands.length}+ marka
          <span className="block text-warmgray">her model için servis</span>
        </p>
        <div className="marquee relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <ul className="marquee-track flex w-max items-center gap-12">
            {[...brands, ...brands].map((b, i) => (
              <li
                key={`${b}-${i}`}
                aria-hidden={i >= brands.length ? true : undefined}
                className="whitespace-nowrap font-serif text-[1.7rem] font-semibold tracking-tight text-espresso/80 transition-colors hover:text-copper"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
