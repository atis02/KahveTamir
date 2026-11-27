import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import BrandStrip from "@/components/sections/BrandStrip";
import Devices from "@/components/sections/Devices";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Brands from "@/components/sections/Brands";
import Gallery from "@/components/sections/Gallery";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import { FaqJsonLd, LocalBusinessJsonLd } from "@/components/JsonLd";
import { baseOpenGraph, site } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: `Kahve Makinesi Tamiri ve Teknik Servis | Ev ve Ofis Tipi | ${site.name}` },
  description:
    "Ev ve ofis tipi kahve makineleri için profesyonel tamir, bakım, kireç temizliği ve teknik servis. Espresso, otomatik ve kapsüllü makineler için hemen servis talep edin.",
  alternates: { canonical: "/" },
  openGraph: {
    ...baseOpenGraph,
    url: "/",
    title: `Kahve Makinesi Tamiri ve Teknik Servis | ${site.name}`,
    description: "Ev ve ofis tipi kahve makineleri için güvenilir tamir, bakım ve teknik servis hizmeti.",
  },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <FaqJsonLd />
      <Hero />
      <BrandStrip />
      <Devices />
      <Categories />
      <Services />
      <WhyUs />
      <Process />
      <Brands />
      <Gallery />
      <Faq />
      <Contact />
    </>
  );
}
