import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-28 lg:py-40">
      <Container className="max-w-2xl text-center">
        <p className="font-serif text-7xl text-caramel">404</p>
        <h1 className="mt-6 font-serif text-4xl font-medium tracking-tight">Aradığınız sayfa bulunamadı</h1>
        <p className="mt-4 text-warmgray">Sayfa taşınmış ya da kaldırılmış olabilir. Ana sayfadan devam edebilirsiniz.</p>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/">Ana Sayfaya Dön</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
