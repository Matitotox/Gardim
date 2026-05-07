import React from "react";
import { BUSINESS } from "../data/menu";

export const Footer = () => {
  const wa = `https://wa.me/${BUSINESS.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "¡Hola Gardim! Me gustaría hacer un pedido."
  )}`;

  const mapEmbed = `https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(
    BUSINESS.address
  )}`;
  // fallback iframe (no key) using maps engine
  const mapsIframe = `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <footer
      id="visitanos"
      data-testid="footer-section"
      className="bg-[#1a110a] text-[#f8f5f0] relative overflow-hidden"
    >
      {/* Big CTA */}
      <div className="border-b border-[#f8f5f0]/15">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36">
          <p className="overline text-[#c5ceb6] mb-8">Visitanos</p>
          <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[-0.03em] font-light text-[#f8f5f0]">
            Vení a <em className="italic text-[#9e4733]">conocernos</em>.
          </h2>
          <p className="font-serif italic text-2xl md:text-3xl text-[#f8f5f0]/80 max-w-2xl mt-8 leading-snug">
            Te esperamos en Ranelagh con una buena cuchara y un café como Dios manda.
          </p>
        </div>
      </div>

      {/* Info grid + Map */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4 space-y-10">
          <div>
            <p className="overline text-[#c5ceb6] mb-4">Dirección</p>
            <p className="font-serif text-2xl md:text-3xl leading-tight text-[#f8f5f0] mb-3">
              {BUSINESS.address}
            </p>
            <a
              href={BUSINESS.mapUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="footer-map-link"
              className="font-body text-xs tracking-[0.25em] uppercase text-[#c5ceb6] link-anim"
            >
              Cómo llegar →
            </a>
          </div>

          <div>
            <p className="overline text-[#c5ceb6] mb-4">Horarios</p>
            <ul className="space-y-2">
              {BUSINESS.hours.map((h, i) => (
                <li key={i} className="flex justify-between gap-4 font-body text-sm text-[#f8f5f0]/80 border-b border-[#f8f5f0]/10 pb-2">
                  <span>{h.day}</span>
                  <span className="tabular-nums text-[#f8f5f0]">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="overline text-[#c5ceb6] mb-4">Contacto</p>
            <div className="flex flex-col gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-whatsapp"
                className="inline-flex items-center justify-between gap-3 px-5 py-4 bg-[#f8f5f0] text-[#1a110a] text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#9e4733] hover:text-[#f8f5f0] transition-colors duration-500"
              >
                <span>WhatsApp · {BUSINESS.whatsappDisplay}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-instagram"
                className="inline-flex items-center justify-between gap-3 px-5 py-4 border border-[#f8f5f0]/30 text-[#f8f5f0] text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#f8f5f0]/10 transition-colors duration-500"
              >
                <span>Instagram · {BUSINESS.instagramHandle}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="md:col-span-8" data-testid="footer-map">
          <div className="aspect-[4/3] md:aspect-[16/10] w-full bg-[#2a1e17] border border-[#f8f5f0]/10 overflow-hidden grayscale-[35%]">
            <iframe
              title="Gardim Ranelagh"
              src={mapsIframe}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.6)" }}
            />
          </div>
        </div>
      </div>

      {/* Sub footer */}
      <div className="border-t border-[#f8f5f0]/15">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-serif text-2xl text-[#f8f5f0]">Gardim<span className="text-[#9e4733]">.</span></p>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-[#f8f5f0]/60">
            © {new Date().getFullYear()} Gardim · Ranelagh, Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
