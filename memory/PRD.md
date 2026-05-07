# Gardim — Sitio Web

## Problem statement
"necesito que crees una pagina web para un negocio (heladeria y cafeteria), se llama Gardim. Esta es su pagina web: https://gardim.ola.click/ necesito que la hagas con las mismas opciones (apartados de menu principalmente) pero mas llamativa y que represente mejor al negocio. Su instagram es:https://www.instagram.com/gardim.ranelagh/"

## User Choices
- Tipo: Sitio informativo/vitrina (sin pedidos online)
- Estilo visual: Cálido y artesanal + Moderno y elegante
- Menú: Datos reales extraídos de gardim.ola.click
- Idioma: Español
- Extra: Galería estilo Instagram

## Architecture
- Frontend: React 19 + Tailwind + shadcn/ui, fuentes Cormorant Garamond + Manrope
- Backend: FastAPI + MongoDB (template base, sin endpoints custom — sitio informativo)
- Hosting: Emergent (supervisor)

## Implemented (Dec 2025)
- Navbar fijo glassmorphism con scroll-spy
- Hero inmersivo con imagen full-bleed, tipografía editorial, animación slow-zoom
- Marquee editorial con valores de marca
- "De la Casa": bento asimétrico con 4 productos firma (Copa Gardim, Café Gardim, Don Pedro, Affogato)
- Menú completo con sidebar sticky (15 categorías, ~70 productos con precios reales)
- Sección "Nuestra Historia" con stats
- Galería estilo Instagram (6 fotos asimétricas)
- Footer con CTA editorial, Google Maps embed, horarios, WhatsApp, Instagram
- Animaciones reveal-on-scroll, hover states refinados, paleta ivory/espresso/terracota

## Backlog
- P1: Form de reservas / contacto integrado (en lugar de WhatsApp)
- P1: Sección de eventos privados y pedidos por encargo
- P2: Multilenguaje (ES/EN para turistas)
- P2: SEO local, schema.org Restaurant, Open Graph
- P2: PWA + favicon de marca propio
- P2: Reemplazar imágenes Unsplash por fotos reales del local
