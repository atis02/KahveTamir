"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Clock, Menu, Phone, X } from "lucide-react";
import { navItems } from "@/config/content";
import { defaultWhatsappMessage, site, whatsappLink } from "@/config/site";
import Logo from "./Logo";
import { WhatsAppIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Aynı sayfadaki bir bölüme gidilirken menü kapanıp kaydırma kilidi kalktıktan sonra kaydır
  const onMobileNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const [path, hash] = href.split("#");
    if (hash && (path || "/") === pathname) {
      e.preventDefault();
      document.body.style.overflow = "";
      setOpen(false);
      history.pushState(null, "", href);
      requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }));
      return;
    }
    setOpen(false);
  };

  const isActive = (href: string) => (href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      {/* Üst bilgi şeridi */}
      <div className="hidden bg-roast text-[0.78rem] text-warmgray-light md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2">
          <p className="font-semibold text-caramel">{site.slogan}</p>
          <div className="flex items-center gap-6">
            <span className="hidden items-center gap-2 xl:inline-flex">
              <Clock className="size-3.5 text-caramel" aria-hidden="true" />
              {site.hours[0].days}: {site.hours[0].time}
            </span>
            <a href={`tel:${site.phoneE164}`} className="inline-flex items-center gap-2 text-cream hover:text-caramel">
              <Phone className="size-3.5 text-caramel" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream hover:text-caramel"
            >
              <WhatsAppIcon className="size-3.5 text-[#4ade80]" />
              {site.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          scrolled ? "border-espresso/10 bg-cream/90 shadow-[0_8px_30px_-18px_rgba(42,28,20,0.35)] backdrop-blur-xl" : "border-transparent bg-cream"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-20">
          <Logo />

          <nav aria-label="Ana menü" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative whitespace-nowrap rounded-full px-3 py-2 text-[0.88rem] font-medium transition-colors hover:text-copper ${
                      isActive(item.href) ? "text-copper" : "text-espresso/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#178a49] sm:inline-flex"
            >
              <WhatsAppIcon className="size-[1.1rem]" />
              WhatsApp&apos;tan Ulaşın
            </a>
            <a
              href={`tel:${site.phoneE164}`}
              aria-label={`Telefonla arayın: ${site.phoneDisplay}`}
              className="grid size-11 place-items-center rounded-full border border-espresso/15 text-espresso sm:hidden"
            >
              <Phone className="size-[1.15rem]" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobil-menu"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              className="grid size-11 place-items-center rounded-full bg-espresso text-cream xl:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil menü */}
      <div
        id="mobil-menu"
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] z-40 overflow-y-auto bg-cream transition-all duration-300 md:top-[6.5rem] xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobil menü" className="mx-auto flex min-h-full max-w-7xl flex-col px-5 pb-10 pt-6 sm:px-8">
          <ul className="divide-y divide-espresso/10 border-y border-espresso/10">
            {navItems.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => onMobileNav(e, item.href)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex items-center justify-between py-4 font-serif text-2xl text-espresso transition-colors hover:text-copper"
                >
                  {item.label}
                  <span className="font-sans text-xs text-warmgray-light">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-whatsapp px-6 py-4 font-semibold text-white"
            >
              <WhatsAppIcon /> WhatsApp&apos;tan Ulaşın
            </a>
            <a
              href={`tel:${site.phoneE164}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-espresso/20 px-6 py-4 font-semibold text-espresso"
            >
              <Phone className="size-5" /> {site.phoneDisplay}
            </a>
          </div>
          <p className="mt-auto pt-10 text-sm text-warmgray">
            {site.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")}
          </p>
        </nav>
      </div>
    </header>
  );
}
