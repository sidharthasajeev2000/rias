export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-cream-dark">
      <div className="section-pad mx-auto flex max-w-6xl flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href="#top"
            className="font-serif text-xl tracking-[0.08em] text-navy"
          >
            Rias
          </a>
          <p className="mt-1 text-sm text-stone">
            Bespoke tailoring · Measured with care
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone" aria-label="Footer">
          <a href="#services" className="hover:text-navy">
            Services
          </a>
          <a href="#about" className="hover:text-navy">
            About
          </a>
          <a href="#lookbook" className="hover:text-navy">
            Lookbook
          </a>
          <a href="#contact" className="hover:text-navy">
            Contact
          </a>
        </nav>
        <p className="text-sm text-stone-light">© {year} Rias Atelier</p>
      </div>
    </footer>
  );
}
