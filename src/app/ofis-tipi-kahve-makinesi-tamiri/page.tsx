import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { baseOpenGraph } from "@/config/site";

export const metadata: Metadata = {
  title: "Ofis Tipi ve Profesyonel Kahve Makinesi Teknik Servisi",
  description:
    "Ofis, kafe ve işletmeler için profesyonel espresso ve otomatik kahve makinesi tamiri, kahve değirmeni tamiri, pompa ve kazan bakımı ile periyodik teknik bakım.",
  alternates: { canonical: "/ofis-tipi-kahve-makinesi-tamiri" },
  openGraph: {
    ...baseOpenGraph,
    url: "/ofis-tipi-kahve-makinesi-tamiri",
    title: "Ofis Tipi Kahve Makinesi Teknik Servisi",
    description: "Ofisler, kafeler ve işletmeler için kahve makinesi teknik servisi ve periyodik bakım çözümleri.",
  },
};

export default function Page() {
  return <CategoryPage kind="ofis" />;
}
