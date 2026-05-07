import React from "react";
import { BUSINESS } from "../data/menu";

const HERO_IMG = "https://images.unsplash.com/photo-1689076758310-92b693fe6b8b?auto=format&fit=crop&w=2000&q=80";

export const Hero = () => {
  const scrollDown = () => {
    document.getElementById("firma")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" data-testid="hero-section" className="relative w-full min-h-screen overflow-hidden bg-[#1a110a]">
      <div
        className="absolute inset-0 bg-cover bg-center animate-slowZoom"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a]/85 via-[#1a110a]/30 to-[#1a110a]/40" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-44 pb-24 min-h-screen flex flex-col">
        {/* top tags */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-auto">
          <span className="overline text-[#c5ceb6]">Ranelagh · Buenos Aires</span>
          <span className="hidden md:block w-12 h-px bg-[#c5ceb6]/60" />
          <span className="overline text-[#c5ceb6]">desde la primera cucharada</span>
        </div>

        {/* main title */}
        <div className="mt-auto max-w-5xl">
          <h1
            data-testid="hero-title"
            className="font-serif text-[#f8f5f0] text-[18vw] md:text-[14vw] lg:text-[200px] leading-[0.85] tracking-[-0.04em] font-light"
          >
            Gardim<span className="text-[#9e4733]">.</span>
          </h1>
          <div className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="font-serif italic text-[#f8f5f0] text-2xl md:text-3xl max-w-xl leading-snug font-light">
              Helados artesanales y cafés de especialidad, hechos con paciencia y oficio.
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={scrollDown}
                data-testid="hero-explore-btn"
                className="px-7 py-4 bg-[#f8f5f0] text-[#1a110a] text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#9e4733] hover:text-[#f8f5f0] transition-colors duration-500"
              >
                Descubrir la Carta
              </button>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noreferrer"
                data-testid="hero-instagram"
                className="text-[#f8f5f0] text-xs tracking-[0.25em] uppercase font-semibold link-anim"
              >
                {BUSINESS.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <button
          onClick={scrollDown}
          aria-label="Scroll"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#f8f5f0]/70 hover:text-[#f8f5f0] transition-colors"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <span className="block w-px h-12 bg-[#f8f5f0]/40 overflow-hidden relative">
            <span className="absolute top-0 left-0 right-0 h-4 bg-[#f8f5f0] animate-[marquee_2s_linear_infinite]" style={{animation: "scrollLine 2s ease-in-out infinite"}}/>
          </span>
        </button>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
