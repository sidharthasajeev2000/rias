const services = [
  {
    title: "Custom suits",
    description:
      "From cloth selection to final press—tailored jackets and trousers built around your posture, lifestyle, and taste.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
        <path
          d="M12 34V16l8-6 8 6v18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M20 10v8M16 34h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Alterations",
    description:
      "Hemming, tapering, waist adjustments, and structural fixes that restore comfort without losing the garment’s character.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
        <path
          d="M10 28l12-12 6 6-12 12H10v-6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M20 18l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Fittings",
    description:
      "Unhurried appointments where we mark, discuss, and refine—so the finished piece feels inevitable on you.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
        <circle cx="20" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 32c2-6 6-9 10-9s8 3 10 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Bridal & formal",
    description:
      "Ceremony and evening wear treated with care—delicate fabrics, precise silhouettes, and last-minute confidence.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
        <path
          d="M20 8l3 7h7l-5.5 4.5 2 7L20 22l-6.5 4.5 2-7L10 15h7l3-7z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Restyling",
    description:
      "Reimagine pieces you already own—modernize a lapel, refresh a silhouette, or reinvent a beloved coat.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
        <path
          d="M12 22a8 8 0 0114-5.5M28 18a8 8 0 01-14 5.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M26 12v6h-6M14 28v-6h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-y border-line bg-ivory py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="section-pad mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
            What we offer
          </p>
          <h2
            id="services-heading"
            className="mt-3 font-serif text-3xl tracking-tight text-navy sm:text-4xl md:text-5xl"
          >
            Craft for every occasion
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone sm:text-lg">
            Whether you need a first custom suit or a careful alteration before a
            milestone day, we meet you with patience and exacting skill.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="group rounded-2xl border border-line bg-cream p-7 transition-shadow hover:shadow-[0_20px_40px_-28px_rgba(26,39,68,0.35)]"
            >
              <div className="mb-5 inline-flex rounded-xl border border-line bg-ivory p-2.5 text-navy transition-colors group-hover:border-gold/40 group-hover:text-gold">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl text-navy">{service.title}</h3>
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
