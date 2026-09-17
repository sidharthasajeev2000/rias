"use client";

import { LOCALES } from "@/i18n/dictionaries";
import { useLanguage } from "@/i18n/LanguageContext";

type Props = {
  compact?: boolean;
};

export default function LanguageSwitcher({ compact = false }: Props) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-line bg-ivory/90 p-0.5 ${
        compact ? "text-[0.65rem]" : "text-xs"
      }`}
      role="group"
      aria-label={t.lang.switcherAria}
    >
      {LOCALES.map((item) => {
        const active = locale === item.code;
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLocale(item.code)}
            aria-pressed={active}
            title={item.label}
            className={`rounded-full px-2.5 py-1.5 font-semibold tracking-wide transition-colors ${
              active
                ? "bg-rose text-cream shadow-sm"
                : "text-stone hover:text-rose-deep"
            }`}
          >
            {compact ? item.short : item.label}
          </button>
        );
      })}
    </div>
  );
}
