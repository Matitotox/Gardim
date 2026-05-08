import React from "react";
import { BUSINESS } from "../data/menu";

const PHOTOS = [
  { url: "https://images.unsplash.com/photo-1646526533915-52f5b9e7c176", caption: "Cucurucho del día" },
  { url: "https://images.unsplash.com/photo-1680381724318-c8ac9fe3a484", caption: "Latte art" },
  { url: "https://images.unsplash.com/photo-1771002469956-1932a606a55e", caption: "El interior" },
  { url: "https://images.unsplash.com/photo-1596698184973-5f9e0ddc7faa", caption: "Mesa servida" },
  { url: "https://images.unsplash.com/photo-1759843541048-95dcad7bb44a", caption: "La vereda" },
  { url: "https://images.unsplash.com/photo-1771681208400-c4d837f329c4", caption: "Esquina de café" },
];

export const Gallery = () => {
  // asymmetric grid pattern
  const spans = [
    "md:col-span-5 md:row-span-2 aspect-[4/5]",
    "md:col-span-4 aspect-[4/3]",
    "md:col-span-3 aspect-[3/4]",
    "md:col-span-3 aspect-[4/5]",
    "md:col-span-4 aspect-[4/3]",
    "md:col-span-5 aspect-[16/10]",
  ];

  return (
    <section id="galeria" data-testid="gallery-section" className="bg-[#f8f5f0] border-t border-[#d6cec4]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20 reveal">
          <div>
            <p className="overline mb-6">Galería</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] font-light text-[#2a1e17]">
              Visitanos en <em className="italic text-[#9e4733]">Instagram</em>.
            </h2>
          </div>
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noreferrer"
            data-testid="instagram-cta"
            className="inline-flex items-center gap-3 px-6 py-4 border border-[#2a1e17] text-[#2a1e17] text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#2a1e17] hover:text-[#f8f5f0] transition-colors duration-500 self-start md:self-end"
          >
            <span>{BUSINESS.instagramHandle}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
          {PHOTOS.map((p, i) => (
            <a
              key={i}
              href={BUSINESS.instagram}
              target="_blank"
              rel="noreferrer"
              data-testid={`gallery-img-${i}`}
              className={`relative group overflow-hidden bg-[#1a110a] ${spans[i]} reveal`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={`${p.url}?auto=format&fit=crop&w=1200&q=80`}
                alt={p.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1a110a]/0 group-hover:bg-[#1a110a]/55 transition-colors duration-500 flex items-end p-5">
                <span className="font-serif italic text-[#f8f5f0] text-xl translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {p.caption}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
