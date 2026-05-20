import React, { useEffect, useState } from "react";
import { CATEGORIES, MENU } from "../data/menu";

export const Menu = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://opensheet.elk.sh/1h__pfpPaSm4wHLLP53PmJDgqoAi9itn86SLX7mRT1h8/Hoja1")
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  const [active, setActive] = useState(CATEGORIES[0].id);

  useEffect(() => {
    const onScroll = () => {
      const positions = CATEGORIES.map((c) => {
        const el = document.getElementById(`cat-${c.id}`);
        return { id: c.id, top: el ? el.getBoundingClientRect().top : Infinity };
      });
      const visible = positions
        .filter((p) => p.top < 200)
        .sort((a, b) => b.top - a.top)[0];
      if (visible) setActive(visible.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToCat = (id) => {
    document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="menu" data-testid="menu-section" className="bg-[#f8f5f0] border-t border-[#d6cec4]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        {/* heading */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24 reveal">
          <div className="md:col-span-12">
            <p className="overline mb-6">La Carta</p>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.02em] font-light text-[#2a1e17] max-w-4xl">
              Quince capítulos para sentarse <em className="italic text-[#9e4733]">despacio</em>.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* sticky sidebar */}
          <aside className="md:col-span-4 lg:col-span-3" data-testid="menu-sidebar">
            <div className="md:sticky md:top-28 md:max-h-[calc(100vh-8rem)] md:flex md:flex-col">
              <p className="overline mb-6 shrink-0">Categorías</p>
              <nav
                className="flex flex-col gap-y-1 border-l border-[#d6cec4] overflow-y-auto overscroll-contain pr-2 min-h-0"
                style={{ scrollbarWidth: "thin" }}
              >
                {CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => goToCat(c.id)}
                    data-testid={`menu-category-${c.id}`}
                    className={`text-left pl-4 md:pl-5 py-2 transition-all duration-300 font-serif text-xl md:text-2xl ${
                      active === c.id
                        ? "text-[#9e4733] border-l-2 border-[#9e4733] -ml-px"
                        : "text-[#2a1e17]/60 hover:text-[#2a1e17]"
                    }`}
                  >
                    {c.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* menu content */}
          <div className="md:col-span-8 lg:col-span-9">
            {CATEGORIES.map((cat) => {
              const items = productos.filter((p) => p.category === cat.id);
              return (
                <div
                  key={cat.id}
                  id={`cat-${cat.id}`}
                  data-testid={`menu-cat-${cat.id}`}
                  className="mb-20 md:mb-28 last:mb-0"
                >
                  <header className="mb-10 pb-6 border-b border-[#d6cec4] flex items-end justify-between gap-4">
                    <div>
                      <p className="overline mb-3">{cat.subtitle}</p>
                      <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-none tracking-[-0.01em] font-light text-[#2a1e17]">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="font-serif italic text-3xl md:text-4xl text-[#9e4733] hidden md:block">{cat.emoji}</span>
                  </header>

                  <ul className="divide-y divide-[#eae5df]">
                    {items.map((it, idx) => (
                      <li
                        key={idx}
                        data-testid={`item-${cat.id}-${idx}`}
                        className={`group py-6 md:py-7 transition-all duration-300 hover:bg-[#eae5df]/40 -mx-2 md:-mx-4 px-4 rounded-2xl ${
                          it.featured ? "bg-[#eae5df]/40" : ""
                        }`}
                      >
                        <div className="flex justify-between items-start w-full gap-8">

                          {/* izquierda */}
                          <div className="flex-1 min-w-0">

                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-sans font-semibold text-2xl text-[#111] leading-tight">
                                {it.name}
                              </h4>

                              {it.featured === "TRUE" && (
                                <span className="text-xs uppercase tracking-[0.25em] text-[#9e4733] font-semibold">
                                  ★ Favorita
                                </span>
                              )}
                            </div>

                            {it.desc && (
                              <p className="text-[#555] text-sm md:text-base mt-2 leading-relaxed max-w-xl">
                                {it.desc}
                              </p>
                            )}

                            <div className="mt-10">
                              <span className="font-bold text-2xl text-[#111]">
                                {it.price === "—" ? "—" : `$${it.price}`}
                              </span>
                            </div>

                          </div>

                          {/* derecha */}
                          {it.image && (
                            <img
                              src={it.image}
                              alt={it.name}
                              className="w-44 h-32 md:w-52 md:h-36 rounded-2xl object-cover shrink-0"
                            />
                          )}

                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            <p className="text-xs text-[#5c4b40]/70 italic font-body mt-12">
              Los precios pueden variar. Para confirmar disponibilidad y promociones, consultanos por WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
