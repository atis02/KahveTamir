import Link from "next/link";
import { Clock, Mail, Phone } from "lucide-react";
import { categories, navItems } from "@/config/content";
import { allBrands, brandList, defaultWhatsappMessage, site, whatsappLink } from "@/config/site";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon, YoutubeIcon } from "./Icons";

const socials = [
  { key: "instagram", label: "Instagram", Icon: InstagramIcon },
  { key: "facebook", label: "Facebook", Icon: FacebookIcon },
  { key: "youtube", label: "YouTube", Icon: YoutubeIcon },
  { key: "linkedin", label: "LinkedIn", Icon: LinkedinIcon },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative overflow-hidden bg-roast text-warmgray-light">
      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8">
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm leading-relaxed">
              {site.slogan}. Ev tipi ve endüstriyel kahve makinaları ile kahve öğütücüleri için her marka ve model
              servis: {brandList(allBrands, 8)}.
            </p>
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-cream/15 px-5 py-3 text-sm font-semibold text-cream transition-colors hover:border-whatsapp hover:bg-whatsapp"
            >
              <WhatsAppIcon className="size-4" /> WhatsApp&apos;tan yazın
            </a>
            {/* Hesap adresi girilmeyen sosyal medya ikonları pasif (bağlantısız) gösterilir */}
            <ul className="mt-7 flex gap-3" aria-label="Sosyal medya hesaplarımız">
              {socials.map(({ key, label, Icon }) =>
                site.social[key] ? (
                  <li key={key}>
                    <a
                      href={site.social[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream transition-colors hover:border-caramel hover:text-caramel"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                ) : (
                  <li key={key}>
                    <span
                      title={`${label} hesabımız yakında`}
                      aria-label={`${label} hesabımız yakında`}
                      className="grid size-10 place-items-center rounded-full border border-cream/10 text-cream/35"
                    >
                      <Icon className="size-4" />
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          <nav aria-label="Hızlı bağlantılar" className="lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cream">Hızlı Erişim</h2>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              {navItems.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition-colors hover:text-caramel">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cream">Hizmet Kategorileri</h2>
            {Object.values(categories).map((c) => (
              <div key={c.key} className="mt-5">
                <Link href={c.href} className="font-serif text-lg text-cream transition-colors hover:text-caramel">
                  {c.title}
                </Link>
                <ul className="mt-2 space-y-1.5 text-sm">
                  {c.services.slice(0, 3).map((s) => (
                    <li key={s.title}>
                      <Link href={c.href} className="transition-colors hover:text-caramel">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cream">İletişim</h2>
            <ul className="mt-5 space-y-4 text-[0.95rem]">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-caramel" aria-hidden="true" />
                <a href={`tel:${site.phoneE164}`} className="hover:text-caramel">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-caramel" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-caramel">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-caramel" />
                <a href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="hover:text-caramel">
                  WhatsApp: {site.whatsappDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-caramel" aria-hidden="true" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-cream/10 py-8 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. Tüm hakları saklıdır.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/kvkk-aydinlatma-metni" className="hover:text-caramel">
                KVKK Aydınlatma Metni
              </Link>
            </li>
            <li>
              <Link href="/gizlilik-politikasi" className="hover:text-caramel">
                Gizlilik Politikası
              </Link>
            </li>
          </ul>
        </div>
        <p className="pb-24 text-xs leading-relaxed text-warmgray md:pb-10">
          Sitede geçen marka adları yalnızca makine uyumluluğunu belirtmek amacıyla kullanılmıştır ve ilgili hak
          sahiplerine aittir.
        </p>
      </div>
    </footer>
  );
}
