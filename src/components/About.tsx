"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const [a, b, c, d] = t.about.tiles;

  return (
    <section
      id="about"
      className="bg-section-about py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="section-pad mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-cream-dark">
            <div className="grid grid-cols-2 gap-px bg-line">
              <div className="aspect-square bg-gradient-to-br from-rose to-blush-deep p-6 text-cream">
                <p className="font-serif text-4xl">{a.title}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-cream/80">
                  {a.subtitle}
                </p>
              </div>
              <div className="aspect-square bg-ivory p-6">
                <p className="font-serif text-4xl text-rose-deep">{b.title}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone">
                  {b.subtitle}
                </p>
              </div>
              <div className="aspect-square bg-ivory p-6">
                <p className="font-serif text-4xl text-rose-deep">{c.title}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone">
                  {c.subtitle}
                </p>
              </div>
              <div className="aspect-square bg-gradient-to-tl from-lilac to-blush/60 p-6">
                <p className="font-serif text-4xl text-rose-deep">{d.title}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone">
                  {d.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            {t.about.eyebrow}
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-serif text-3xl tracking-tight text-rose-deep sm:text-4xl md:text-5xl"
          >
            {t.about.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-stone sm:text-lg">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
