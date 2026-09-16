"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#lookbook", label: "Lookbook" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          aria-label="RIAS home"
        >
          RIAS
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-stone transition-colors hover:text-rose-deep"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-rose px-5 py-2.5 text-sm font-semibold tracking-wide text-cream shadow-sm transition-colors hover:bg-rose-deep"
          >
            Book a visit
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ivory text-rose-deep md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
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
            Book a visit
          </a>
        </nav>
      </div>
    </header>
  );
}
