const pieces = [
  {
    title: "Midnight wool suit",
    caption: "Single-breasted · Peak lapel",
    className: "lookbook-card-1",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    title: "Ivory evening coat",
    caption: "Soft shoulder · Silk lining",
    className: "lookbook-card-2",
    span: "",
  },
  {
    title: "Charcoal trousers",
    caption: "High rise · Hand-finished hem",
    className: "lookbook-card-3",
    span: "",
  },
  {
    title: "Champagne bridal alter",
    caption: "Delicate lace · Custom bustle",
    className: "lookbook-card-4",
    span: "sm:col-span-1",
  },
  {
    title: "Navy dinner jacket",
    caption: "Satin shawl · Mother-of-pearl",
    className: "lookbook-card-5",
    span: "",
  },
  {
    title: "Restyled heritage coat",
    caption: "Re-cut · Modern length",
    className: "lookbook-card-6",
    span: "sm:col-span-2",
  },
];

export default function Lookbook() {
  return (
    <section
      id="lookbook"
      className="border-y border-line bg-navy-deep py-20 text-cream md:py-28"
      aria-labelledby="lookbook-heading"
    >
      <div className="section-pad mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold-light">
              Lookbook
            </p>
            <h2
              id="lookbook-heading"
              className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl"
            >
              Silhouettes we love
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg">
              Placeholder studies in cloth and cut—evoking the textures of our
              atelier without relying on external images.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-3 sm:grid-rows-3">
          {pieces.map((piece) => (
            <li
              key={piece.title}
              className={`group relative min-h-[220px] overflow-hidden rounded-2xl border border-cream/10 ${piece.className} ${piece.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="font-serif text-xl text-cream md:text-2xl">
                  {piece.title}
                </h3>
                <p className="mt-1 text-sm text-cream/65">{piece.caption}</p>
              </div>
              <svg
                className="absolute right-4 top-4 h-10 w-10 text-cream/15"
                viewBox="0 0 40 40"
                fill="none"
                aria-hidden="true"
              >
                <rect x="6" y="10" width="28" height="20" rx="2" stroke="currentColor" />
                <circle cx="14" cy="17" r="2" fill="currentColor" />
                <path d="M8 26l8-6 6 4 8-8 4 3v7H8z" fill="currentColor" opacity="0.4" />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
