"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="bg-hero relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -right-20 top-8 h-80 w-80 rounded-full bg-blush/55 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-lilac/50 blur-3xl" />
        <div className="absolute left-1/2 top-24 h-44 w-44 -translate-x-1/2 rounded-full bg-gold-light/35 blur-2xl" />
        <div className="absolute right-[28%] bottom-16 h-36 w-36 rounded-full bg-blush-deep/25 blur-3xl" />
        <div className="absolute left-[22%] top-[55%] h-28 w-28 rounded-full bg-lilac-deep/20 blur-2xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blush-deep/40 to-transparent" />
        {/* Soft floating shapes */}
        <div className="absolute right-[8%] top-[42%] h-16 w-16 rotate-12 rounded-[1.25rem] border border-blush-deep/20 bg-blush/25 backdrop-blur-[2px]" />
        <div className="absolute left-[6%] top-[32%] h-10 w-10 rounded-full border border-lilac-deep/25 bg-lilac/30" />
        <svg
          className="sparkle absolute right-[18%] top-28 h-5 w-5 text-gold"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l1.2 6.3L19 12l-5.8 3.7L12 22l-1.2-6.3L5 12l5.8-3.7L12 2z" />
        </svg>
        <svg
          className="sparkle-delay absolute left-[12%] top-44 h-3.5 w-3.5 text-blush-deep"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l1.2 6.3L19 12l-5.8 3.7L12 22l-1.2-6.3L5 12l5.8-3.7L12 2z" />
        </svg>
        <svg
          className="sparkle-delay-2 absolute right-[32%] top-[58%] h-3 w-3 text-lilac-deep"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l1.2 6.3L19 12l-5.8 3.7L12 22l-1.2-6.3L5 12l5.8-3.7L12 2z" />
        </svg>
        <svg
          className="sparkle absolute left-[40%] bottom-24 h-2.5 w-2.5 text-gold-light"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l1.2 6.3L19 12l-5.8 3.7L12 22l-1.2-6.3L5 12l5.8-3.7L12 2z" />
        </svg>
      </div>

      <div className="section-pad mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-ivory/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-rose shadow-[0_8px_24px_-16px_rgba(158,74,106,0.35)] backdrop-blur-sm">
            <span aria-hidden="true">♡</span>
            {t.hero.badge}
          </p>
          <h1
            id="hero-heading"
            className="brand-wordmark text-[4.25rem] leading-[0.95] text-rose-deep sm:text-7xl md:text-8xl lg:text-[7.5rem]"
          >
            RIAS
          </h1>
          <p className="mt-4 font-serif text-2xl italic leading-snug text-rose-soft sm:text-3xl md:text-4xl">
            {t.hero.tagline}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
            {t.hero.body}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-rose px-7 py-3.5 text-sm font-semibold tracking-wide text-cream shadow-sm transition-colors hover:bg-rose-deep"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#lookbook"
              className="inline-flex items-center justify-center rounded-full border border-rose/25 bg-ivory/90 px-7 py-3.5 text-sm font-semibold tracking-wide text-rose-deep backdrop-blur-sm transition-colors hover:border-rose/45 hover:bg-blush/30"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-blush shadow-[0_30px_60px_-28px_rgba(158,74,106,0.35)]">
            <div className="relative flex h-full flex-col justify-between p-8 text-rose-deep">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 70% 15%, #fffcfa 0%, transparent 45%), radial-gradient(ellipse at 20% 85%, rgba(232,213,245,0.7) 0%, transparent 50%), linear-gradient(165deg, #f9d5e5 0%, #e8d5f5 50%, #e8a0b8 100%)",
                }}
                aria-hidden="true"
              />
              <svg
                className="absolute right-6 top-8 h-16 w-16 text-rose/35"
                viewBox="0 0 64 64"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M32 28c-4-8-14-12-18-8 6 2 10 8 10 8s-8 2-12 8c4 2 12 0 16-4 0 0 2 10 4 14 2-4 4-14 4-14 4 4 12 6 16 4-4-6-12-8-12-8s4-6 10-8c-4-4-14 0-18 8z" />
              </svg>
              <div className="relative pt-2">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose">
                  {t.hero.cardEyebrow}
                </p>
                <p className="mt-4 font-serif text-3xl leading-snug md:text-4xl">
                  {t.hero.cardLines[0]}
                  <br />
                  {t.hero.cardLines[1]}
                  <br />
                  {t.hero.cardLines[2]}
                </p>
              </div>
              <div className="relative border-t border-rose-deep/15 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose">
                  {t.hero.cardFooterLabel}
                </p>
                <p className="mt-2 text-sm text-rose-deep/75">
                  {t.hero.cardFooterMeta}
                </p>
              </div>
            </div>
          </div>
          <div
            className="absolute -bottom-3 -left-3 hidden h-20 w-20 rounded-3xl border border-gold/40 bg-gold-light/40 backdrop-blur-sm sm:block"
            aria-hidden="true"
          />
          <div
            className="absolute -right-2 top-10 hidden h-12 w-12 rounded-full border border-lilac-deep/30 bg-lilac/50 sm:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
