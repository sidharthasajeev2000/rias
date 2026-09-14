export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      </div>

      <div className="section-pad mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-gold">
            Bespoke Tailoring Atelier
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-[2.75rem] leading-[1.1] tracking-tight text-navy sm:text-5xl md:text-6xl lg:text-[4rem]"
          >
            Clothes shaped
            <span className="block italic text-navy-soft">to you.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
            At Rias, every seam is considered, every fitting unhurried. We craft
            custom garments and refine what you already love—with quiet precision
            and a warm welcome.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-navy px-7 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-navy-soft"
            >
              Book a fitting
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-navy/20 bg-ivory px-7 py-3.5 text-sm font-medium tracking-wide text-navy transition-colors hover:border-navy/40 hover:bg-cream-dark"
            >
              Explore services
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line bg-navy shadow-[0_30px_60px_-30px_rgba(26,39,68,0.45)]">
            <div className="relative flex h-full flex-col justify-between p-8 text-cream">
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  background:
                    "radial-gradient(ellipse at 70% 20%, #2a3a5c 0%, transparent 50%), linear-gradient(165deg, #1a2744 0%, #121b30 55%, #1a2744 100%)",
                }}
                aria-hidden="true"
              />
              <svg
                className="absolute right-6 top-10 h-40 w-40 text-gold/20"
                viewBox="0 0 120 120"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="0.75" />
                <path
                  d="M30 78 C45 45, 75 45, 90 78"
                  stroke="currentColor"
                  strokeWidth="0.75"
                />
                <path d="M48 42h24M60 30v24" stroke="currentColor" strokeWidth="0.75" />
              </svg>
              <div className="relative">
                <p className="font-serif text-3xl leading-snug md:text-4xl">
                  Measured.
                  <br />
                  Made.
                  <br />
                  Meant for you.
                </p>
              </div>
              <div className="relative border-t border-cream/15 pt-5">
                <p className="text-xs uppercase tracking-[0.22em] text-gold-light">
                  Est. atelier
                </p>
                <p className="mt-2 text-sm text-cream/75">
                  Hand-finished details · Personal fittings · Timeless cuts
                </p>
              </div>
            </div>
          </div>
          <div
            className="absolute -bottom-4 -left-4 hidden h-24 w-24 rounded-2xl border border-gold/30 bg-gold/10 backdrop-blur-sm sm:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
