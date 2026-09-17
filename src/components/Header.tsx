"use client";

import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#lookbook", label: t.nav.lookbook },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-cream/95 backdrop-blur-md border-b border-line shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-pad mx-auto flex h-18 max-w-6xl items-center justify-between py-3 md:h-24 md:py-0">
        <a
          href="#top"
          className="brand-wordmark text-3xl text-rose-deep transition-colors hover:text-rose md:text-4xl lg:text-[2.75rem]"
          onClick={() => setOpen(false)}
          aria-label={t.nav.homeAria}
        >
          RIAS
        </a>

        <nav className="hidden items-center gap-6 lg:gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-stone transition-colors hover:text-rose-deep"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher compact />
          <a
            href="#contact"
            className="rounded-full bg-rose px-5 py-2.5 text-sm font-semibold tracking-wide text-cream shadow-sm transition-colors hover:bg-rose-deep"
          >
            {t.nav.bookVisit}
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher compact />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ivory text-rose-deep"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? t.nav.closeMenu : t.nav.openMenu}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 8h16M4 16h16"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-t border-line bg-cream transition-[max-height,opacity] duration-300 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <nav className="section-pad flex flex-col gap-1 py-4" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-2xl px-3 py-3 text-base font-medium text-rose-deep hover:bg-blush/40"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 rounded-full bg-rose px-5 py-3 text-center text-sm font-semibold text-cream"
            onClick={() => setOpen(false)}
          >
            {t.nav.bookVisit}
          </a>
        </nav>
      </div>
    </header>
  );
}
