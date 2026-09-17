"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import type { ReactNode } from "react";

const icons: ReactNode[] = [
  (
    <svg key="fit" viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
      <path
        d="M14 34V18l6-5 6 5v16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M20 13v6M16 34h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  (
    <svg key="port" viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
      <rect x="8" y="10" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="17" r="2" fill="currentColor" />
      <path d="M10 26l7-5 5 3 6-6 3 2v6H10z" fill="currentColor" opacity="0.35" />
    </svg>
  ),
  (
    <svg key="run" viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
      <path
        d="M20 8l2.5 6h6.5l-5 4 2 6.5L20 21l-6 3.5 2-6.5-5-4h6.5L20 8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 32h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="party" viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
      <path
        d="M14 12c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2-1 3.8-2.5 4.9L28 34H12l4.5-17.1C15 15.8 14 14 14 12z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M16 22h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="shoot" viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
      <circle cx="20" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 32c2-5 6-8 10-8s8 3 10 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M28 10l2 1M30 14l1 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="ward" viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
      <path
        d="M12 14h16v18H12V14z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M16 14v-2a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 20h16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="bg-section-ivory border-y border-line py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="section-pad mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            {t.services.eyebrow}
          </p>
          <h2
            id="services-heading"
            className="mt-3 font-serif text-3xl tracking-tight text-rose-deep sm:text-4xl md:text-5xl"
          >
            {t.services.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone sm:text-lg">
            {t.services.intro}
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => (
            <li
              key={service.title}
              className="group rounded-3xl border border-line bg-cream/90 p-7 shadow-[0_12px_32px_-28px_rgba(158,74,106,0.2)] backdrop-blur-[2px] transition-shadow hover:shadow-[0_20px_40px_-28px_rgba(158,74,106,0.3)]"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-line bg-blush/30 p-2.5 text-rose transition-colors group-hover:border-blush-deep/40 group-hover:bg-blush/50">
                {icons[i]}
              </div>
              <h3 className="font-serif text-2xl text-rose-deep">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone sm:text-[0.95rem]">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
