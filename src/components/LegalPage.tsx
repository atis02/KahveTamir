import Link from "next/link";
import { ChevronRight, Info } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "./ui";

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section aria-labelledby="yasal-baslik" className="py-14 lg:py-20">
      <Container className="max-w-3xl">
        <nav aria-label="Sayfa konumu">
          <ol className="flex items-center gap-1.5 text-sm text-warmgray">
            <li>
              <Link href="/" className="hover:text-copper">
                Ana Sayfa
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3.5" />
            </li>
            <li aria-current="page" className="text-espresso">
              {title}
            </li>
          </ol>
        </nav>
        <h1 id="yasal-baslik" className="mt-8 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-8 flex gap-3 rounded-2xl bg-beige/60 p-5 text-sm leading-relaxed text-espresso">
          <Info className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden="true" />
          <span>
            Bu metin, web sitesinin mevcut işleyişine göre hazırlanmış bir taslaktır. Veri sorumlusu bilgileri ve hukuki
            ifadeler, yayına alınmadan önce işletme tarafından bir hukuk danışmanıyla birlikte gözden geçirilmelidir.
          </span>
        </p>
        <div className="mt-10 space-y-8 leading-relaxed text-warmgray [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_h2]:text-espresso [&_li]:mt-1.5 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </Container>
    </section>
  );
}
