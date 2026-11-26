import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { fullAddress, site } from "@/config/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: `${site.legalName} kişisel verilerin korunması ve işlenmesine ilişkin aydınlatma metni.`,
  alternates: { canonical: "/kvkk-aydinlatma-metni" },
};

export default function Page() {
  return (
    <LegalPage title="KVKK Aydınlatma Metni">
      <div>
        <h2>Veri Sorumlusu</h2>
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında veri sorumlusu{" "}
          {`${site.legalName}'dir`}. İletişim adresi: {fullAddress}. E-posta: {site.email}.
        </p>
      </div>
      <div>
        <h2>İşlenen Kişisel Veriler</h2>
        <p>Servis talebi oluşturmanız veya bizimle iletişime geçmeniz hâlinde aşağıdaki veriler işlenebilir:</p>
        <ul>
          <li>Kimlik bilgisi: ad ve soyad</li>
          <li>İletişim bilgisi: telefon numarası ve paylaşmanız hâlinde adres</li>
          <li>Talep bilgisi: makine türü, marka ve arıza açıklaması</li>
        </ul>
      </div>
      <div>
        <h2>Verilerin Toplanma Yöntemi</h2>
        <p>
          Web sitemizdeki servis talep formu, girdiğiniz bilgileri sitemizde veya bir veri tabanında saklamaz. Formu
          gönderdiğinizde bilgileriniz, cihazınızda WhatsApp uygulamasında hazır bir mesaj olarak açılır ve mesajı
          gönderip göndermemek sizin kararınızdır. Kişisel verileriniz; WhatsApp, telefon veya e-posta yoluyla bize
          ilettiğiniz ölçüde işlenir.
        </p>
      </div>
      <div>
        <h2>İşleme Amaçları ve Hukuki Sebepler</h2>
        <p>
          Verileriniz; servis talebinizin değerlendirilmesi, sizinle iletişime geçilmesi, arıza tespiti ve onarım
          sürecinin yürütülmesi amaçlarıyla, KVKK&apos;nın 5. maddesinde yer alan &quot;bir sözleşmenin kurulması veya
          ifasıyla doğrudan ilgili olması&quot; ve &quot;veri sorumlusunun meşru menfaati&quot; hukuki sebeplerine
          dayanılarak işlenir.
        </p>
      </div>
      <div>
        <h2>Verilerin Aktarılması</h2>
        <p>
          Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz. WhatsApp üzerinden iletişim
          kurmanız hâlinde mesajlarınız, ilgili hizmet sağlayıcının altyapısı üzerinden iletilir.
        </p>
      </div>
      <div>
        <h2>Haklarınız</h2>
        <p>KVKK&apos;nın 11. maddesi uyarınca veri sorumlusuna başvurarak;</p>
        <ul>
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
          <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
          <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
          <li>Kanunda öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
        </ul>
        <p>haklarına sahipsiniz. Başvurularınızı {site.email} adresine iletebilirsiniz.</p>
      </div>
    </LegalPage>
  );
}
