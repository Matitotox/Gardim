import React from "react";

const ABOUT_IMG = "https://images.unsplash.com/photo-1766017087286-742264987a43?auto=format&fit=crop&w=1400&q=80";

export const About = () => {
  return (
    <section
      id="historia"
      data-testid="about-section"
      className="bg-[#eae5df] border-y border-[#d6cec4] relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* text */}
          <div className="md:col-span-7 reveal">
            <p className="overline mb-8">Nuestra Historia</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] font-light text-[#2a1e17] mb-10">
              Una esquina de Ranelagh donde el tiempo se sirve <em className="italic text-[#9e4733]">en cuchara</em>.
            </h2>
            <div className="space-y-6 font-body text-base md:text-lg text-[#5c4b40] leading-relaxed max-w-2xl">
              <p>
                Gardim nació de la idea de que un buen helado y un buen café merecen estar en el mismo lugar. Trabajamos con frutas de estación, leche fresca, granos seleccionados y mucha calma.
              </p>
              <p>
                Cada bocha se hace en chico, cada espresso se calibra de mañana, y cada copa se arma con dedicación. No buscamos sorprender con artificios: buscamos que vuelvas.
              </p>
            </div>

            {/* stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-10 mt-14 pt-10 border-t border-[#d6cec4]">
              {[
                { n: "30+", l: "Sabores artesanales" },
                { n: "100%", l: "Recetas propias" },
                { n: "365", l: "Días de café" },
              ].map((s, i) => (
                <div key={i} data-testid={`about-stat-${i}`}>
                  <div className="font-serif text-4xl md:text-5xl text-[#9e4733] leading-none mb-2 font-light">
                    {s.n}
                  </div>
                  <div className="font-body text-xs md:text-sm uppercase tracking-[0.2em] text-[#5c4b40]">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* image */}
          <div className="md:col-span-5 reveal">
            <div className="aspect-[3/4] overflow-hidden bg-[#1a110a] relative group">
              <img
                src={ABOUT_IMG}
                alt="Heladería Gardim"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1a110a]/70 to-transparent">
                <p className="font-serif italic text-[#f8f5f0] text-xl">
                  «Lo artesanal no se apura.»
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
