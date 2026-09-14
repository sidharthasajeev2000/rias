export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="section-pad mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[1.5rem] border border-line bg-cream-dark">
            <div className="grid grid-cols-2 gap-px bg-line">
              <div className="aspect-square bg-gradient-to-br from-navy to-navy-soft p-6 text-cream">
                <p className="font-serif text-4xl">12+</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-cream/70">
                  Years of craft
                </p>
              </div>
              <div className="aspect-square bg-ivory p-6">
                <p className="font-serif text-4xl text-navy">1</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-stone">
                  Dedicated atelier
                </p>
              </div>
              <div className="aspect-square bg-ivory p-6">
                <p className="font-serif text-4xl text-navy">∞</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-stone">
                  Fittings, as needed
                </p>
              </div>
              <div className="aspect-square bg-gradient-to-tl from-gold/30 to-cream p-6">
                <p className="font-serif text-4xl text-navy">By hand</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-stone">
                  Finishing & detail
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
            Our story
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-serif text-3xl tracking-tight text-navy sm:text-4xl md:text-5xl"
          >
            A small atelier with a long memory for detail
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-stone sm:text-lg">
            <p>
              Rias began as a quiet corner workshop—one sewing machine, a
              chalk-marked table, and the belief that clothing should feel like it
              belongs to the person wearing it.
            </p>
            <p>
              Today we remain intentionally small. That means you meet the same
              hands that cut and stitch your garment, and conversations that
              stretch beyond measurements into how you move through your day.
            </p>
            <p>
              We favor natural fabrics, clean lines, and work that lasts. No
              rush. No assembly-line anonymity. Just careful making, offered with
              warmth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
