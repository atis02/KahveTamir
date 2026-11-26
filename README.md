# Krema — Kahve Makinesi Teknik Servisi (web sitesi)

Next.js 15 (App Router) + TypeScript + Tailwind CSS 4 + Lucide ikonları.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Yayın öncesi doldurulması gerekenler

| Ne | Nerede |
| --- | --- |
| Marka adı, telefon, WhatsApp numarası, e-posta, adres, çalışma saatleri, alan adı, sosyal medya | `src/config/site.ts` |
| Servis verilen markaların onayı (`brandsConfirmed: true`) ve marka listesi | `src/config/site.ts` |
| Görseller (şu an Unsplash stok fotoğrafları; işletmenin gerçek servis fotoğraflarıyla değiştirilmesi önerilir) | `src/config/content.ts` → `images`, `gallery` |
| Hizmet metinleri, SSS, süreç adımları | `src/config/content.ts` |
| KVKK Aydınlatma Metni ve Gizlilik Politikası (taslak; hukuk danışmanıyla kontrol edilmeli) | `src/app/kvkk-aydinlatma-metni`, `src/app/gizlilik-politikasi` |

Telefon, WhatsApp, LocalBusiness yapılandırılmış verisi, sitemap ve robots.txt
otomatik olarak `site.ts` dosyasından beslenir.

## Sayfalar

- `/`: ana sayfa (hero, kategoriler, hizmetler, neden biz, süreç, markalar, galeri, SSS, iletişim)
- `/ev-tipi-kahve-makinesi-tamiri`: ev tipi makineler
- `/ofis-tipi-kahve-makinesi-tamiri`: ofis / profesyonel makineler
- `/kvkk-aydinlatma-metni`, `/gizlilik-politikasi`
- `/sitemap.xml`, `/robots.txt`, `/opengraph-image`

## İletişim formu

Sunucu tarafı yoktur. Form doğrulandıktan sonra bilgiler hazır bir Türkçe mesaj
olarak WhatsApp'ta (`wa.me`) açılır; hiçbir veri sitede saklanmaz.
