/**
 * Görseller: Unsplash lisanslı fotoğraflar. İşletmenin kendi servis
 * fotoğrafları hazır olduğunda `public/images` klasörüne ekleyip
 * buradaki `src` değerlerini (ör. "/images/atolye-1.jpg") değiştirin.
 */
const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80`;

export const images = {
  hero: { src: u("photo-1581068106019-5aa70c6ab424"), alt: "Buhar çıkaran profesyonel espresso makinesinin grup başlığı ve portafiltreleri" },
  heroInset: { src: u("photo-1620052087171-68c17d1a196f"), alt: "Espresso makinesinin kontrol panelinde ayar yapan teknisyen elleri" },
  home: { src: u("photo-1607273177127-47ec33b5be3f"), alt: "Şık bir ev mutfağında tezgâh üzerinde duran ev tipi espresso makinesi" },
  office: { src: u("photo-1657758481156-fbed1d83e694"), alt: "Modern ofis mutfağında tam otomatik kahve makinesi" },
  officeAlt: { src: u("photo-1461988366670-48e401bafb0a"), alt: "Kafede kullanılan çok gruplu profesyonel espresso makinesi" },
  homeAlt: { src: u("photo-1649882453797-0deb17375235"), alt: "Ev mutfağında raflar önünde konumlanmış espresso makinesi ve öğütücü" },
} as const;

export const gallery = [
  { src: u("photo-1625221960558-bb4a74a88632"), alt: "Espresso makinesinde portafiltre ve grup başlığı kontrolü", caption: "Grup başlığı kontrolü", span: "lg:row-span-2" },
  { src: u("photo-1542067953-528621275a71"), alt: "Paslanmaz çelik espresso makinesinin buhar çubuğu ve gövde detayları", caption: "Gövde ve bileşen detayları", span: "" },
  { src: u("photo-1527578306329-62bf0453581e"), alt: "Espresso makinesinde portafiltreye kahve sıkıştırılması", caption: "Portafiltre ve hazne kontrolü", span: "" },
  { src: u("photo-1649882453797-0deb17375235"), alt: "Ev mutfağında kullanılan espresso makinesi ve öğütücü", caption: "Ev tipi makineler", span: "" },
  { src: u("photo-1421986598195-0d9c26ecfcde"), alt: "Kafede kullanılan paslanmaz çelik profesyonel espresso makinesi", caption: "Profesyonel makineler", span: "lg:row-span-2" },
  { src: u("photo-1620052087171-68c17d1a196f"), alt: "Espresso makinesi üzerinde çalışan teknisyen", caption: "Arıza tespiti", span: "lg:col-span-2" },
] as const;

export type CategoryKey = "ev" | "ofis";

export const categories = {
  ev: {
    key: "ev" as const,
    href: "/ev-tipi-kahve-makinesi-tamiri",
    eyebrow: "Bireysel kullanıcılar",
    title: "Ev Tipi Kahve Makineleri",
    short: "Evinizde kullandığınız kahve makineleri için profesyonel arıza tespiti, bakım ve onarım hizmetleri.",
    cta: "Ev Tipi Servisleri İncele",
    image: images.home,
    machineTypes: ["Otomatik kahve makineleri", "Espresso makineleri", "Kapsüllü makineler", "Filtre kahve makineleri"],
    services: [
      { title: "Ev tipi kahve makinesi tamiri", text: "Günlük kullanımda ortaya çıkan arızaların tespiti ve onarımı." },
      { title: "Otomatik kahve makinesi tamiri", text: "Demleme ünitesi, sensör ve yazılım kaynaklı sorunlar için teknik inceleme." },
      { title: "Espresso makinesi tamiri", text: "Basınç, sıcaklık ve akış problemlerinde detaylı kontrol." },
      { title: "Kapsüllü kahve makinesi tamiri", text: "Kapsül delme, akış ve ısınma kaynaklı arızalar." },
      { title: "Kahve makinesi temizliği", text: "İç devre, demleme ünitesi ve hazneler için kapsamlı temizlik." },
      { title: "Kireç temizliği (kireç çözme)", text: "Su yolundaki kireç birikiminin uygun ürünlerle giderilmesi." },
      { title: "Filtre ve pompa değişimi", text: "Yıpranan filtre ve pompaların uygun parçalarla değişimi." },
      { title: "Su akıtma problemleri", text: "Conta, hortum ve bağlantı noktalarından kaynaklanan sızıntılar." },
      { title: "Kahve ısıtmama problemleri", text: "Rezistans, termostat ve sıcaklık sensörü kontrolleri." },
      { title: "Öğütücü arızaları", text: "Ses, tıkanma ve öğütmeme sorunlarında öğütücü bakımı." },
      { title: "Periyodik bakım", text: "Makinenin ömrünü ve kahve kalitesini koruyan düzenli bakım." },
    ],
    issues: [
      "Makine su akıtıyor veya altında su birikiyor",
      "Kahve yeterince sıcak gelmiyor",
      "Pompa ses çıkarıyor ama kahve akmıyor",
      "Öğütücü çalışmıyor ya da tıkanıyor",
      "Ekranda sürekli kireç veya hata uyarısı görünüyor",
      "Kahvenin tadı ve kreması eskisi gibi değil",
    ],
  },
  ofis: {
    key: "ofis" as const,
    href: "/ofis-tipi-kahve-makinesi-tamiri",
    eyebrow: "Ofisler, kafeler ve işletmeler",
    title: "Ofis Tipi Kahve Makineleri",
    short: "Ofisler, kafeler ve işletmeler için profesyonel kahve makinesi teknik servisi ve periyodik bakım çözümleri.",
    cta: "Ofis Tipi Servisleri İncele",
    image: images.office,
    machineTypes: ["Tam otomatik ofis makineleri", "Profesyonel espresso makineleri", "Endüstriyel makineler", "Kahve değirmenleri"],
    services: [
      { title: "Ofis tipi kahve makinesi tamiri", text: "Yoğun kullanılan ofis makinelerinde hızlı arıza tespiti ve onarım." },
      { title: "Profesyonel espresso makinesi tamiri", text: "Tek ve çok gruplu espresso makineleri için teknik servis." },
      { title: "Endüstriyel kahve makinesi bakımı", text: "Yüksek kapasiteli makinelerde kapsamlı bakım ve kontrol." },
      { title: "Otomatik makineler teknik servisi", text: "Demleme grubu, süt sistemi ve yazılım kaynaklı arızalar." },
      { title: "Kahve değirmeni tamiri", text: "Bıçak, motor ve ayar mekanizması bakımı ile onarımı." },
      { title: "Profesyonel makine temizliği", text: "Grup başlığı, buhar çubuğu ve iç devre temizliği." },
      { title: "Pompa ve kazan bakımı", text: "Pompa performansı ve kazan durumunun düzenli kontrolü." },
      { title: "Elektronik kart arızaları", text: "Kontrol kartı ve elektronik bileşenlerde arıza tespiti." },
      { title: "Su sistemi ve basınç problemleri", text: "Su girişi, basınç ayarı ve akış dengesinin kontrolü." },
      { title: "Periyodik teknik bakım", text: "İş akışınızı aksatmamak için planlı bakım ziyaretleri." },
      { title: "İşletmelere özel servis çözümleri", text: "Makine sayınıza ve kullanım yoğunluğunuza göre bakım planı." },
    ],
    issues: [
      "Yoğun saatlerde basınç düşüyor",
      "Grup başlığından su damlıyor",
      "Buhar çubuğu yeterli buhar üretmiyor",
      "Makine hata kodu verip duruyor",
      "Değirmen öğütme ayarını koruyamıyor",
      "Süt sistemi tıkanıyor veya köpük oluşmuyor",
    ],
  },
};

export const coreServices = [
  { icon: "search", title: "Arıza Tespiti", text: "Makinenizdeki sorunun kaynağını adım adım inceler, onarım öncesinde size net bilgi veririz." },
  { icon: "wrench", title: "Kahve Makinesi Tamiri", text: "Ev ve ofis tipi makinelerde mekanik, elektrik ve su devresi arızalarının onarımı." },
  { icon: "calendar", title: "Periyodik Bakım", text: "Düzenli bakım ile makinenizin performansını ve kahve kalitesini koruyun." },
  { icon: "droplets", title: "Kireç Temizliği", text: "Su yolunda biriken kireci gidererek ısınma ve akış sorunlarının önüne geçeriz." },
  { icon: "cog", title: "Parça Değişimi", text: "Pompa, conta, filtre ve rezistans gibi yıpranan parçaların değişimi." },
  { icon: "sparkles", title: "Profesyonel Temizlik", text: "Demleme ünitesi, grup başlığı ve haznelerin hijyenik ve kapsamlı temizliği." },
] as const;

export const benefits = [
  { title: "Profesyonel Teknik Destek", text: "Kahve makinelerinin çalışma prensibine hâkim bir yaklaşımla teknik destek sunarız." },
  { title: "Titiz Arıza Tespiti", text: "Tahmine değil, adım adım kontrole dayanan bir arıza tespiti süreci izleriz." },
  { title: "Kaliteli İşçilik", text: "Her müdahaleyi özenle yapar, makineyi teslim etmeden önce test ederiz." },
  { title: "Ev ve İşletmelere Özel Çözümler", text: "Evdeki makineniz ile işletmenizdeki makinenin ihtiyaçları farklıdır; çözümlerimiz de öyle." },
  { title: "Müşteri Odaklı Hizmet", text: "Süreç boyunca sizi bilgilendirir, onayınız olmadan işlem yapmayız." },
  { title: "Güvenilir Servis Süreci", text: "Yapılacak işlemi ve ücretlendirmeyi onarımdan önce açıkça paylaşırız." },
] as const;

export const steps = [
  { title: "Bize Ulaşın", text: "Telefon, WhatsApp veya iletişim formu üzerinden servis talebinizi iletin." },
  { title: "Arıza Bilgisi Alalım", text: "Makinenizin marka, model ve yaşadığınız sorunu dinleyerek ön değerlendirme yapalım." },
  { title: "Teknik İnceleme ve Onarım", text: "Detaylı arıza tespitinin ardından onayınızla onarım işlemine başlayalım." },
  { title: "Kontrol ve Teslim", text: "Onarım sonrası makineyi test edip sorunsuz çalıştığından emin olarak teslim edelim." },
] as const;

export const faqs = [
  {
    q: "Kahve makinesi tamiri ne kadar sürer?",
    a: "Onarım süresi; arızanın türüne, makinenin modeline ve gerekli parçanın temin durumuna göre değişir. Basit bakım ve temizlik işlemleri kısa sürede tamamlanabilirken parça değişimi gerektiren arızalar daha uzun sürebilir. Arıza tespitinin ardından size tahmini süreyi bildiririz.",
  },
  {
    q: "Ev tipi kahve makinelerine servis veriyor musunuz?",
    a: "Evet. Otomatik, espresso, kapsüllü ve filtre kahve makineleri gibi ev tipi makineler için arıza tespiti, tamir, temizlik ve bakım hizmeti sunuyoruz. Makinenizin marka ve modelini ileterek bilgi alabilirsiniz.",
  },
  {
    q: "Ofis tipi profesyonel makineleri tamir ediyor musunuz?",
    a: "Evet. Ofisler, kafeler ve işletmelerde kullanılan tam otomatik makineler, profesyonel espresso makineleri ve kahve değirmenleri için teknik servis ve periyodik bakım hizmeti veriyoruz.",
  },
  {
    q: "Kahve makinesi neden su akıtır?",
    a: "Su akıtma genellikle yıpranmış contalar, gevşemiş hortum bağlantıları, çatlamış su haznesi veya kireç nedeniyle tıkanan su yollarından kaynaklanır. Sızıntı elektronik parçalara ulaşabileceği için makineyi kullanmaya devam etmeden kontrol ettirmeniz önerilir.",
  },
  {
    q: "Kahve makinesi neden kahveyi ısıtmaz?",
    a: "Isıtmama sorunu çoğunlukla rezistans, termostat veya sıcaklık sensörü arızasından kaynaklanır. Yoğun kireç birikimi de ısı aktarımını azaltarak kahvenin ılık gelmesine neden olabilir.",
  },
  {
    q: "Kahve makinesi bakımı ne sıklıkla yapılmalıdır?",
    a: "Bakım sıklığı kullanım yoğunluğuna ve suyun sertliğine göre değişir. Evde kullanılan makinelerde üretici önerileri ve kireç uyarıları dikkate alınmalı; işletmelerde ise yoğun kullanım nedeniyle daha sık, planlı bakım yapılması önerilir.",
  },
  {
    q: "Servis ücretleri nasıl belirlenir?",
    a: "Ücret; makinenin türüne, arızanın kapsamına, yapılacak işçiliğe ve gerekiyorsa değişecek parçalara göre belirlenir. Arıza tespitinin ardından yapılacak işlemi ve ücreti size bildirir, onayınızı almadan işleme başlamayız.",
  },
] as const;

export const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Ev Tipi Makineler", href: "/ev-tipi-kahve-makinesi-tamiri" },
  { label: "Ofis Tipi Makineler", href: "/ofis-tipi-kahve-makinesi-tamiri" },
  { label: "Hizmetlerimiz", href: "/#hizmetler" },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "İletişim", href: "/#iletisim" },
] as const;
