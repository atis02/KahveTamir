import { categories, faqs } from "@/config/content";
import { site } from "@/config/site";

/** LocalBusiness yapılandırılmış verisi — tüm alanlar src/config/site.ts dosyasından gelir. */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#isletme`,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    image: `${site.url}/opengraph-image`,
    description: "Ev ve ofis tipi kahve makineleri için tamir, bakım, temizlik ve teknik servis hizmetleri.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: site.serviceArea,
    openingHoursSpecification: site.openingHoursSpec.map((o) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: o.days,
      opens: o.opens,
      closes: o.closes,
    })),
    sameAs: Object.values(site.social).filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kahve makinesi teknik servis hizmetleri",
      itemListElement: Object.values(categories).map((c) => ({
        "@type": "OfferCatalog",
        name: c.title,
        itemListElement: c.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
      })),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function FaqJsonLd({ items = faqs }: { items?: readonly { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${site.url}${it.path}` })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
