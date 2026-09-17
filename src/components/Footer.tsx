"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const phones = t.contact.phones;

  return (
    <footer className="bg-footer border-t border-line">
      <div className="section-pad mx-auto max-w-6xl py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <a
              href="#top"
              className="brand-wordmark text-2xl text-rose-deep md:text-3xl"
            >
              RIAS
            </a>
            <p className="mt-1 text-sm text-stone">{t.footer.tagline}</p>
            <div className="mt-4 space-y-2 text-sm text-stone">
              {t.contact.addresses.map((addr) => (
                <p key={addr.label}>
                  <span className="font-semibold text-rose-deep">{addr.label}:</span>{" "}
                  {addr.lines.join(", ")}
                </p>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {phones.map((phone) => (
                <span key={phone.tel} className="inline-flex flex-wrap items-center gap-2">
                  <a
                    href={`tel:${phone.tel}`}
                    className="font-medium text-rose-deep hover:underline"
                  >
                    {phone.label} {phone.display}
                  </a>
                  <a
                    href={phone.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-rose hover:underline"
                  >
                    WhatsApp
                  </a>
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <nav
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-stone"
              aria-label="Footer"
            >
              <a href="#services" className="hover:text-rose-deep">
                {t.nav.services}
              </a>
              <a href="#about" className="hover:text-rose-deep">
                {t.nav.about}
              </a>
              <a href="#lookbook" className="hover:text-rose-deep">
                {t.nav.lookbook}
              </a>
              <a href="#contact" className="hover:text-rose-deep">
                {t.nav.contact}
              </a>
            </nav>
            <LanguageSwitcher compact />
            <p className="text-sm text-stone-light">
              {t.footer.copyright.replace("{year}", String(year))}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
