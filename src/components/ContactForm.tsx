"use client";

import { useState, type FormEvent } from "react";
import { Info } from "lucide-react";
import { whatsappLink } from "@/config/site";
import { WhatsAppIcon } from "./Icons";

type Errors = Partial<Record<"name" | "phone" | "type" | "issue", string>>;

const field =
  "w-full rounded-2xl border border-espresso/15 bg-cream px-4 py-3.5 text-espresso placeholder:text-warmgray-light transition-colors focus:border-copper focus:bg-white focus:outline-none focus:ring-4 focus:ring-copper/15 aria-[invalid=true]:border-red-700";
const label = "mb-2 block text-sm font-semibold text-espresso";

export default function ContactForm({ defaultType = "" }: { defaultType?: "" | "Ev Tipi" | "Ofis Tipi" }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const type = String(data.get("type") ?? "");
    const brand = String(data.get("brand") ?? "").trim();
    const issue = String(data.get("issue") ?? "").trim();

    const next: Errors = {};
    if (name.length < 3) next.name = "Lütfen adınızı ve soyadınızı yazın.";
    if (phone.replace(/\D/g, "").length < 10) next.phone = "Lütfen geçerli bir telefon numarası girin.";
    if (!type) next.type = "Lütfen makine türünü seçin.";
    if (issue.length < 10) next.issue = "Lütfen arızayı kısaca açıklayın (en az 10 karakter).";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      document.getElementById(`form-${first}`)?.focus();
      return;
    }

    const message = [
      "Merhaba, web siteniz üzerinden servis talebi oluşturmak istiyorum.",
      "",
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `Makine Türü: ${type} Kahve Makinesi`,
      `Marka: ${brand || "Belirtilmedi"}`,
      `Arıza Açıklaması: ${issue}`,
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby="form-bilgi" className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="form-name" className={label}>
          Ad Soyad <span className="text-copper" aria-hidden="true">*</span>
        </label>
        <input
          id="form-name"
          name="name"
          autoComplete="name"
          required
          placeholder="Adınız ve soyadınız"
          className={field}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "err-name" : undefined}
        />
        {errors.name && <p id="err-name" className="mt-1.5 text-sm text-red-700">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="form-phone" className={label}>
          Telefon <span className="text-copper" aria-hidden="true">*</span>
        </label>
        <input
          id="form-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          placeholder="05XX XXX XX XX"
          className={field}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "err-phone" : undefined}
        />
        {errors.phone && <p id="err-phone" className="mt-1.5 text-sm text-red-700">{errors.phone}</p>}
      </div>

      <fieldset className="sm:col-span-2">
        <legend className={label}>
          Makine Türü <span className="text-copper" aria-hidden="true">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-3" aria-describedby={errors.type ? "err-type" : undefined}>
          {(["Ev Tipi", "Ofis Tipi"] as const).map((t, i) => (
            <label key={t} className="relative cursor-pointer">
              <input
                id={i === 0 ? "form-type" : undefined}
                type="radio"
                name="type"
                value={t}
                defaultChecked={defaultType === t}
                className="peer sr-only"
              />
              <span className="flex items-center justify-center gap-2 rounded-2xl border border-espresso/15 bg-cream px-4 py-3.5 font-semibold text-warmgray transition-all peer-checked:border-espresso peer-checked:bg-espresso peer-checked:text-cream peer-focus-visible:ring-4 peer-focus-visible:ring-copper/25">
                {t}
              </span>
            </label>
          ))}
        </div>
        {errors.type && <p id="err-type" className="mt-1.5 text-sm text-red-700">{errors.type}</p>}
      </fieldset>

      <div className="sm:col-span-2">
        <label htmlFor="form-brand" className={label}>
          Marka <span className="font-normal text-warmgray">(isteğe bağlı)</span>
        </label>
        <input id="form-brand" name="brand" placeholder="Örn. makinenizin marka ve modeli" className={field} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="form-issue" className={label}>
          Arıza Açıklaması <span className="text-copper" aria-hidden="true">*</span>
        </label>
        <textarea
          id="form-issue"
          name="issue"
          rows={4}
          required
          placeholder="Makinenizde yaşadığınız sorunu kısaca anlatın"
          className={`${field} resize-y`}
          aria-invalid={!!errors.issue}
          aria-describedby={errors.issue ? "err-issue" : undefined}
        />
        {errors.issue && <p id="err-issue" className="mt-1.5 text-sm text-red-700">{errors.issue}</p>}
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-copper px-6 py-4 font-semibold text-white shadow-[0_12px_30px_-14px_rgba(181,113,63,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-dark"
        >
          <WhatsAppIcon className="size-5" /> Servis Talebi Oluştur
        </button>
        <p id="form-bilgi" className="mt-4 flex gap-2 text-[0.82rem] leading-relaxed text-warmgray">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>
            Form bilgileriniz sitemizde saklanmaz; butona bastığınızda talebiniz hazır bir mesaj olarak WhatsApp&apos;ta
            açılır ve gönderimi siz onaylarsınız. Ayrıntılar için{" "}
            <a href="/kvkk-aydinlatma-metni" className="underline underline-offset-2 hover:text-copper">
              KVKK Aydınlatma Metni
            </a>
            .
          </span>
        </p>
        <p role="status" aria-live="polite" className="mt-3 text-sm font-medium text-whatsapp">
          {sent && "Mesajınız WhatsApp'ta hazırlandı. Talebinizi iletmek için WhatsApp'ta gönder butonuna basmayı unutmayın."}
        </p>
      </div>
    </form>
  );
}
