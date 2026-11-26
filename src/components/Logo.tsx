import Link from "next/link";
import { site } from "@/config/site";

export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const main = tone === "dark" ? "text-espresso" : "text-cream";
  const sub = tone === "dark" ? "text-warmgray" : "text-warmgray-light";
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — Ana sayfa`}>
      <span
        aria-hidden="true"
        className="relative grid size-10 shrink-0 place-items-center rounded-full bg-espresso ring-1 ring-copper/50 transition-transform duration-500 group-hover:rotate-[20deg]"
      >
        <svg viewBox="0 0 32 32" className="size-6" fill="none">
          <ellipse cx="16" cy="16" rx="7" ry="10" transform="rotate(30 16 16)" fill="#d3a374" />
          <path d="M11.5 22.5c3.2-3.2 3.6-9 9-13" stroke="#2a1c14" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[1.45rem] font-semibold tracking-tight ${main}`}>{site.name}</span>
        <span className={`mt-1 whitespace-nowrap text-[0.55rem] font-bold uppercase tracking-[0.12em] sm:text-[0.6rem] sm:tracking-[0.2em] ${sub}`}>{site.tagline}</span>
      </span>
    </Link>
  );
}
