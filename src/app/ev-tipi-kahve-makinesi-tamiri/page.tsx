import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { baseOpenGraph } from "@/config/site";

export const metadata: Metadata = {
  title: "Ev Tipi Kahve Makinesi Tamiri ve Bakımı",
  description:
    "Ev tipi espresso, otomatik ve kapsüllü kahve makineleri için arıza tespiti, tamir, kireç temizliği, pompa değişimi ve periyodik bakım hizmeti.",
  alternates: { canonical: "/ev-tipi-kahve-makinesi-tamiri" },
  openGraph: {
    ...baseOpenGraph,
    url: "/ev-tipi-kahve-makinesi-tamiri",
    title: "Ev Tipi Kahve Makinesi Tamiri ve Bakımı",
    description: "Evinizdeki kahve makinesi için profesyonel arıza tespiti, bakım ve onarım hizmetleri.",
  },
};

export default function Page() {
  return <CategoryPage kind="ev" />;
}
