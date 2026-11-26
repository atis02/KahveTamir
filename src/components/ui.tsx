import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "whatsapp" | "outline" | "outline-light" | "light";

const variants: Record<Variant, string> = {
  primary: "bg-copper text-white hover:bg-copper-dark shadow-[0_12px_30px_-14px_rgba(181,113,63,0.8)]",
  whatsapp: "bg-whatsapp text-white hover:bg-[#178a49] shadow-[0_12px_30px_-14px_rgba(31,157,85,0.7)]",
  outline: "border border-espresso/20 text-espresso hover:border-espresso hover:bg-espresso hover:text-cream",
  "outline-light": "border border-cream/30 text-cream hover:border-cream hover:bg-cream hover:text-espresso",
  light: "bg-cream text-espresso hover:bg-white",
};

export const buttonClass = (v: Variant = "primary", extra = "") =>
  `inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${variants[v]} ${extra}`;

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
  children: ReactNode;
  "aria-label"?: string;
};

export function ButtonLink({ href, variant = "primary", className = "", external, children, ...rest }: ButtonLinkProps) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass(variant, className)} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(variant, className)} {...rest}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p
      className={`inline-flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.24em] ${
        tone === "dark" ? "text-copper" : "text-caramel"
      }`}
    >
      <span className="h-px w-8 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div data-reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center [&>p:first-child]:justify-center" : ""}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={`mt-5 font-serif text-[2.05rem] leading-[1.08] font-medium tracking-[-0.02em] text-balance sm:text-5xl ${
          tone === "dark" ? "text-espresso" : "text-cream"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-[1.05rem] leading-relaxed text-pretty ${
            tone === "dark" ? "text-warmgray" : "text-warmgray-light"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}
