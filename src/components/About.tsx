export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="section-pad mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-cream-dark">
            <div className="grid grid-cols-2 gap-px bg-line">
              <div className="aspect-square bg-gradient-to-br from-rose to-blush-deep p-6 text-cream">
                <p className="font-serif text-4xl">♡</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-cream/80">
                  Made for kids
                </p>
              </div>
              <div className="aspect-square bg-ivory p-6">
                <p className="font-serif text-4xl text-rose-deep">Soft</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone">
                  Fabrics &amp; fits
                </p>
              </div>
              <div className="aspect-square bg-ivory p-6">
                <p className="font-serif text-4xl text-rose-deep">Fun</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone">
                  Fitting energy
                </p>
              </div>
              <div className="aspect-square bg-gradient-to-tl from-lilac to-blush/60 p-6">
                <p className="font-serif text-4xl text-rose-deep">Shine</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone">
                  On every stage
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            Our story
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-serif text-3xl tracking-tight text-rose-deep sm:text-4xl md:text-5xl"
          >
            A small kids fashion studio with a big soft heart
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-stone sm:text-lg">
            <p>
              RIAS started as a cozy corner for children&apos;s clothes — pastel
              rails, tiny hangers, and the belief that kids deserve outfits as
              joyful as they are.
            </p>
            <p>
              We focus on young models and everyday little stars: portfolio
              looks, party pieces, gentle alterations, and styling for fashion
              shows and competitions — from Little Miss Model moments to festive
              runway wins.
            </p>
            <p>
              Intentionally small, intentionally sweet. Parents feel welcome;
              kids feel like the main character — which, of course, they are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
