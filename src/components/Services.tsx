const services = [
  {
    title: "Kids & adult fittings",
    description:
      "Gentle, playful fittings for girls and women — comfort first, camera-ready next.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
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
  },
  {
    title: "Portfolio looks",
    description:
      "Clean, cute looks styled for modeling books — soft colors, polished fits for every age.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
        <rect x="8" y="10" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="17" r="2" fill="currentColor" />
        <path d="M10 26l7-5 5 3 6-6 3 2v6H10z" fill="currentColor" opacity="0.35" />
      </svg>
    ),
  },
  {
    title: "Runway & pageants",
    description:
      "Stage-ready styling for fashion shows, competitions, and pageant moments — girls and women.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
        <path
          d="M20 8l2.5 6h6.5l-5 4 2 6.5L20 21l-6 3.5 2-6.5-5-4h6.5L20 8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M12 32h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Party & occasion",
    description:
      "Birthday dresses, festive sets, and special-day outfits with sweet details you will love.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
        <path
          d="M14 12c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2-1 3.8-2.5 4.9L28 34H12l4.5-17.1C15 15.8 14 14 14 12z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M16 22h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Shoot styling",
    description:
      "On-set and studio styling — coordinated looks, quick changes, and calm, cheerful energy.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
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
  },
  {
    title: "Wardrobe consults",
    description:
      "Help building a small capsule of cute everyday + occasion pieces you can mix with ease.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" aria-hidden="true">
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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            What we offer
          </p>
          <h2
            id="services-heading"
            className="mt-3 font-serif text-3xl tracking-tight text-rose-deep sm:text-4xl md:text-5xl"
          >
            Cute looks for every star
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone sm:text-lg">
            From first portfolio shots to runway and pageant sparkle, RIAS helps
            women and girls look and feel wonderful — softly, sweetly, and with
            care at every age.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="group rounded-3xl border border-line bg-cream p-7 transition-shadow hover:shadow-[0_20px_40px_-28px_rgba(158,74,106,0.3)]"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-line bg-blush/30 p-2.5 text-rose transition-colors group-hover:border-blush-deep/40 group-hover:bg-blush/50">
                {service.icon}
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
