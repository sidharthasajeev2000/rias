import Image from "next/image";

/** Public asset path including GitHub Pages basePath (Image unoptimized may not prefix). */
const g = (file: string) => `/rias/gallery/${file}`;

const pieces = [
  {
    title: "Little Miss Model Sumut 2023",
    caption: "Blush gown · Night lights · Runner-up sparkle",
    src: g("little-miss-model-sumut-2023.jpg"),
    alt: "Young model in a blush pink ruffled gown with Little Miss Model Sumut 2023 sash, holding a trophy by a lit Ferris wheel",
    span: "sm:col-span-2 sm:row-span-2",
    priority: true,
  },
  {
    title: "Boniaga Modeling Look 2025",
    caption: "Harapan 1 · Kategori Anak · Red & gold",
    src: g("boniaga-modeling-look-2025.jpg"),
    alt: "Young model in a red patterned outfit with Harapan 1 Kategori Anak sash, trophy and certificate from Boniaga Modeling Look 2025",
    span: "",
    priority: false,
  },
  {
    title: "CNY Fashion Show · 1st Winner",
    caption: "Kalam Kudus · Festive red qipao",
    src: g("cny-fashion-show-winner.jpg"),
    alt: "Young model in a red floral Chinese New Year dress holding a first-place fashion show trophy",
    span: "",
    priority: false,
  },
  {
    title: "Bunny stage look",
    caption: "Costume fun · Trophy & sertifikat",
    src: g("rabbit-ears-trophy.jpg"),
    alt: "Young model in a fluffy bunny-ear costume holding a trophy and framed certificate",
    span: "",
    priority: false,
  },
  {
    title: "Best Performance",
    caption: "Pink & blue · Number 377",
    src: g("best-performance.jpg"),
    alt: "Young model Jocelyn Achiera Sianipar in a pink and blue outfit holding a Best Performance trophy and certificate",
    span: "",
    priority: false,
  },
  {
    title: "Colorful stage moment",
    caption: "Bold palette · Award night",
    src: g("colorful-stage-trophy.jpg"),
    alt: "Young model in a colorful asymmetric stage costume holding a trophy and certificate",
    span: "sm:col-span-2",
    priority: false,
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
              Lookbook &amp; moments
            </p>
            <h2
              id="lookbook-heading"
              className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl"
            >
              Little looks we adore
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/75 sm:text-lg">
              Real runway and award moments — Little Miss Model, fashion shows,
              Best Performance, and cute costume looks that capture RIAS energy.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-3 sm:auto-rows-[minmax(220px,auto)]">
          {pieces.map((piece) => (
            <li
              key={piece.src}
              className={`group relative min-h-[260px] overflow-hidden rounded-3xl border border-cream/15 bg-rose-deep/40 ${piece.span}`}
            >
              <Image
                src={piece.src}
                alt={piece.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                priority={piece.priority}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/85 via-rose-deep/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="font-serif text-xl text-cream drop-shadow-sm md:text-2xl">
                  {piece.title}
                </h3>
                <p className="mt-1 text-sm text-cream/80">{piece.caption}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
