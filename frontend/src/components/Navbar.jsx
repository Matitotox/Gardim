import React, { useEffect, useState } from "react";
import { BUSINESS } from "../data/menu";

const NAV = [
  { id: "menu", label: "Menú" },
  { id: "firma", label: "De la Casa" },
  { id: "historia", label: "Historia" },
  { id: "galeria", label: "Galería" },
  { id: "visitanos", label: "Visitanos" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const wa = `https://wa.me/${BUSINESS.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "¡Hola Gardim! Quería hacer una consulta."
  )}`;

  const pedidoya = "https://www.pedidosya.com.ar/restaurantes/berazategui/heladeria-gardim-ranelagh-7f96642c-01e7-4258-939b-0e00b51501b1-menu?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnRbQHNDaR3LPgqaN9SHgZACDllO2aq5oVvf26taIylZ9CZskzh1Rx06jWgsg_aem_RCwWrzkqk6zAeVagywhTfw";

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#f8f5f0]/85 backdrop-blur-xl border-b border-[#d6cec4]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="logo-home"
          className="font-serif text-3xl md:text-4xl tracking-tight leading-none text-[#2a1e17]"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          Gardim
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#9e4733] ml-2 align-top">est.</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-link-${n.id}`}
              onClick={() => scrollTo(n.id)}
              className="font-body text-sm tracking-wider uppercase text-[#2a1e17] link-anim"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={pedidoya}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-whatsapp"
            className="hidden md:inline-flex items-center gap-2 px-5 py-3 bg-[#1a110a] text-[#f8f5f0] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#9e4733] transition-colors duration-500"
          >
            <span>Pedido Ya</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-whatsapp"
            className="hidden md:inline-flex items-center gap-2 px-5 py-3 bg-[#1a110a] text-[#f8f5f0] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#9e4733] transition-colors duration-500"
          >
            <span>WhatsApp</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <button
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen(!open)}
            data-testid="mobile-menu-toggle"
            aria-label="Menú"
          >
            <span className={`block w-6 h-px bg-[#2a1e17] transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-px bg-[#2a1e17] transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-[#2a1e17] transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden bg-[#f8f5f0] border-t border-[#d6cec4] transition-all duration-500 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
        data-testid="mobile-drawer"
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="font-serif text-3xl text-left text-[#2a1e17]"
              data-testid={`mobile-nav-${n.id}`}
            >
              {n.label}
            </button>
          ))}
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="mt-4 px-5 py-4 bg-[#1a110a] text-[#f8f5f0] text-xs tracking-[0.2em] uppercase text-center"
            data-testid="mobile-whatsapp"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
