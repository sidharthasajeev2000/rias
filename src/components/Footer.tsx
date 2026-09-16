export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-cream-dark">
      <div className="section-pad mx-auto flex max-w-6xl flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href="#top"
            className="brand-wordmark text-2xl text-rose-deep md:text-3xl"
          >
            RIAS
          </a>
          <p className="mt-1 text-sm text-stone">
            Kids modeling · Cute kidswear · Little stars
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-stone" aria-label="Footer">
          <a href="#services" className="hover:text-rose-deep">
            Services
          </a>
          <a href="#about" className="hover:text-rose-deep">
            About
          </a>
          <a href="#lookbook" className="hover:text-rose-deep">
            Lookbook
          </a>
          <a href="#contact" className="hover:text-rose-deep">
            Contact
          </a>
        </nav>
        <p className="text-sm text-stone-light">© {year} RIAS</p>
      </div>
    </footer>
  );
}
