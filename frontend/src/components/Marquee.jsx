import React from "react";

export const Marquee = () => {
  const text = "✦  Heladería Artesanal  ✦  Cafetería de Especialidad  ✦  Ranelagh  ✦  Hecho con Tiempo  ";
  return (
    <section data-testid="marquee" className="bg-[#eae5df] border-y border-[#d6cec4] py-6 overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="font-serif italic text-3xl md:text-4xl text-[#2a1e17] mx-6"
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
