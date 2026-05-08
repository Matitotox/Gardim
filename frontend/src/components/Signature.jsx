import React from "react";
import { SIGNATURE } from "../data/menu";

export const Signature = () => {
  return (
    <section
      id="firma"
      data-testid="signature-section"
      className="relative bg-[#f8f5f0] py-24 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* heading */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24 reveal">
          <div className="md:col-span-5">
            <p className="overline mb-6">De la Casa</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] font-light text-[#2a1e17]">
              Las firmas <em className="italic text-[#9e4733]">imprescindibles</em> de Gardim.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="font-body text-base md:text-lg text-[#5c4b40] leading-relaxed max-w-md">
              Recetas que nacieron en el mostrador y se quedaron para siempre. Cuatro creaciones que cuentan, en una cucharada o un sorbo, qué somos.
            </p>
          </div>
        </div>

        {/* asymmetric bento */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[#d6cec4] border border-[#d6cec4]">
          {SIGNATURE.map((item, i) => {
            const layouts = [
              "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto md:min-h-[640px]",
              "md:col-span-5 aspect-[5/4] md:aspect-auto md:min-h-[310px]",
              "md:col-span-5 aspect-[5/4] md:aspect-auto md:min-h-[310px]",
              "md:col-span-12 aspect-[16/9] md:aspect-[21/9] md:min-h-[420px]",
            ];
            return (
              <article
                key={item.id}
                data-testid={`signature-item-${item.id}`}
                className={`relative group overflow-hidden bg-[#1a110a] ${layouts[i] || ""} reveal`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <img
                  src={`${item.image}?auto=format&fit=crop&w=1600&q=80`}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a]/85 via-[#1a110a]/20 to-transparent" />
                <div className="absolute inset-0 p-7 md:p-10 flex flex-col justify-end">
                  <span className="overline text-[#c5ceb6] mb-3">{item.category}</span>
                  <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f8f5f0] leading-none mb-4 font-light">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-[#f8f5f0]/85 max-w-md leading-relaxed mb-5">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between border-t border-[#f8f5f0]/30 pt-4">
                    <span className="font-serif text-2xl text-[#f8f5f0]">$ {item.price}</span>
                    <span className="overline text-[#f8f5f0]/70">en el local · para llevar</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Signature;
