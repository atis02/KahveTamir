/**
 * İŞLETME BİLGİLERİ — Yayına almadan önce bu dosyadaki tüm alanları
 * gerçek işletme bilgileriyle güncelleyin. Sitedeki telefon, WhatsApp,
 * adres, çalışma saatleri, yapılandırılmış veri (LocalBusiness) ve
 * sitemap bu dosyadan beslenir.
 */
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

/** Yalnızca Vercel "production" ortamında (veya Vercel dışında) arama motorlarına açılır; preview dağıtımları noindex olur. */
export const isIndexable = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production";

export const site = {
  /** Marka adı (logo metni) */
  name: "Krema",
  /** Logo altındaki tanımlayıcı */
  tagline: "Kahve Makinesi Teknik Servisi",
  /** Resmi / ticari ünvan (yapılandırılmış veride kullanılır) */
  legalName: "Krema Kahve Makinesi Teknik Servisi",
  /**
   * Canlı alan adı (sonda eğik çizgi olmadan). Öncelik sırası:
   * 1) NEXT_PUBLIC_SITE_URL ortam değişkeni (özel alan adınız, ör. https://www.alanadiniz.com)
   * 2) Vercel'in otomatik üretim alan adı (VERCEL_PROJECT_PRODUCTION_URL)
   * 3) Yerel geliştirme adresi
   */
  url: resolveSiteUrl(),

  /** Slogan — hero, iletişim ve footer'da gösterilir */
  slogan: "Garantili etkili servis bakım onarım tamir bölge merkezi",

  /** İletişim (arama) numarası — ekranda görünen */
  phoneDisplay: "0850 346 54 57",
  /** tel: bağlantısı için uluslararası format */
  phoneE164: "+908503465457",
  /** WhatsApp numarası — ekranda görünen */
  whatsappDisplay: "0552 713 67 67",
  /** WhatsApp numarası — yalnızca rakam, ülke koduyla (wa.me formatı) */
  whatsapp: "905527136767",
  email: "info@ornek-kahveservis.com.tr",

  /** Ekranda görünen çalışma saatleri */
  hours: [
    { days: "Pazartesi – Cuma", time: "09:00 – 19:00" },
    { days: "Cumartesi", time: "10:00 – 17:00" },
    { days: "Pazar", time: "Kapalı" },
  ],
  /** Yapılandırılmış veri için (schema.org) */
  openingHoursSpec: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
    { days: ["Saturday"], opens: "10:00", closes: "17:00" },
  ],

  /** Sosyal medya — boş bırakılan hesaplar sitede gösterilmez */
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
    linkedin: "",
  },

  /**
   * Markalar: İşletme bu markalara servis verdiğini onayladıktan sonra
   * `brandsConfirmed` değerini `true` yapın. `false` iken bölüm,
   * markaları "servis verilen" olarak sunmaz; yalnızca yaygın markalar
   * olarak listeler.
   */
  brandsConfirmed: true,
  /** Marka grupları — sitede kategori sayfalarında, cihaz kartlarında ve SSS'de kullanılır */
  brandGroups: {
    ev: ["De'Longhi", "Philips", "Saeco", "Siemens", "Bosch", "Jura", "Krups", "Nespresso", "Melitta", "Gaggia", "Breville", "Arçelik"],
    endustriyel: ["La Marzocco", "Rancilio", "Nuova Simonelli", "La Cimbali", "Franke", "WMF", "Jura", "Saeco"],
    ogutucu: ["Mazzer", "Fiorenzato", "Eureka", "Anfim", "Compak", "Rancilio"],
  },
} as const;

/** Tekrarsız tüm markalar */
export const allBrands = Array.from(
  new Set([...site.brandGroups.ev, ...site.brandGroups.endustriyel, ...site.brandGroups.ogutucu])
);

/** "A, B, C ve D" biçiminde liste */
export const brandList = (list: readonly string[], max = list.length) =>
  list.length <= 1 ? list.join("") : `${list.slice(0, max - 1).join(", ")} ve ${list[max - 1]}`;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const defaultWhatsappMessage =
  "Merhaba, kahve makinem için teknik servis talebinde bulunmak istiyorum.";


/** Sayfa bazlı openGraph tanımları layout'takini ezdiği için ortak alanlar */
export const baseOpenGraph = {
  type: "website" as const,
  locale: "tr_TR",
  siteName: site.legalName,
  images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.legalName} — kahve makinesi tamiri ve teknik servis` }],
};
