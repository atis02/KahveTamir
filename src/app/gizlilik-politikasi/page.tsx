import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: `${site.legalName} web sitesi gizlilik politikası.`,
  alternates: { canonical: "/gizlilik-politikasi" },
};

export default function Page() {
  return (
    <LegalPage title="Gizlilik Politikası">
      <div>
        <h2>Genel</h2>
        <p>
          Bu politika, {site.url.replace(/^https?:\/\//, "")} web sitesini ziyaret ettiğinizde bilgilerinizin nasıl
          ele alındığını açıklar.
        </p>
      </div>
      <div>
        <h2>Form ve İletişim</h2>
        <p>
          Servis talep formuna girdiğiniz bilgiler sitemizde saklanmaz. Formu gönderdiğinizde bilgiler, WhatsApp
          uygulamasında hazır bir mesaj olarak açılır; gönderim yalnızca sizin onayınızla gerçekleşir.
        </p>
      </div>
      <div>
        <h2>Çerezler</h2>
        <p>
          Sitemiz, sayfaların düzgün çalışması için gerekli olanlar dışında takip veya reklam amaçlı çerez kullanmaz.
          İleride analiz veya reklam araçları eklenmesi hâlinde bu politika güncellenecek ve gerekli izinler talep
          edilecektir.
        </p>
      </div>
      <div>
        <h2>Üçüncü Taraf Bağlantılar</h2>
        <p>
          Sitemizde WhatsApp gibi üçüncü taraf hizmetlere yönlendiren bağlantılar bulunur. Bu hizmetlerin gizlilik
          uygulamaları kendi politikalarına tabidir.
        </p>
      </div>
      <div>
        <h2>İletişim</h2>
        <p>Gizlilikle ilgili sorularınız için {site.email} adresinden bize ulaşabilirsiniz.</p>
      </div>
    </LegalPage>
  );
}
