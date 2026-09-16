const pieces = [
  {
    title: "Blush tulle twirl",
    caption: "Party dress · Soft layers",
    className: "lookbook-card-1",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    title: "Lilac knit set",
    caption: "Studio casual · Cozy chic",
    className: "lookbook-card-2",
    span: "",
  },
  {
    title: "Cream sailor look",
    caption: "Portfolio classic · Clean lines",
    className: "lookbook-card-3",
    span: "",
  },
  {
    title: "Golden bow blouse",
    caption: "Occasion top · Sweet detail",
    className: "lookbook-card-4",
    span: "sm:col-span-1",
  },
  {
    title: "Rose romper day",
    caption: "Playdate ready · Easy move",
    className: "lookbook-card-5",
    span: "",
  },
  {
    title: "Pastel shoot edit",
    caption: "Mixed looks · Camera soft",
    className: "lookbook-card-6",
    span: "sm:col-span-2",
  },
];

export default function Lookbook() {
  return (
    <section
      id="lookbook"
      className="border-y border-line bg-gradient-to-b from-rose-deep to-[#8a3d5c] py-20 text-cream md:py-28"
      aria-labelledby="lookbook-heading"
    >
      <div className="section-pad mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
              Lookbook
            </p>
            <h2
              id="lookbook-heading"
              className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl"
            >
              Little looks we adore
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/75 sm:text-lg">
              Soft pastel placeholders — cute kidswear moods without external
              stock photos. Think bows, blush, and camera-ready smiles.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-3 sm:grid-rows-3">
          {pieces.map((piece) => (
            <li
              key={piece.title}
              className={`group relative min-h-[220px] overflow-hidden rounded-3xl border border-cream/15 ${piece.className} ${piece.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/70 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="font-serif text-xl text-cream md:text-2xl">
                  {piece.title}
                </h3>
                <p className="mt-1 text-sm text-cream/75">{piece.caption}</p>
              </div>
              <svg
                className="absolute right-4 top-4 h-8 w-8 text-cream/25"
                viewBox="0 0 40 40"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20 8c-2.5-5-8.5-7-11-4.5 3.5 1.2 6 5 6 5s-5 1.2-7.5 5c2.5 1.2 7.5 0 10-2.5 0 0 1.2 6 2.5 8.5 1.2-2.5 2.5-8.5 2.5-8.5 2.5 2.5 7.5 3.7 10 2.5-2.5-3.8-7.5-5-7.5-5s2.5-3.8 6-5C28.5 1 22.5 3 20 8z" />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
