# RESPONSIVO
Diseño Responsivo

# Diseño Responsivo con React + TypeScript + Bootstrap

Proyecto de una SPA con **React + TypeScript** y **Bootstrap**, que implementa un **diseño responsivo** con puntos de quiebre específicos:
- **Móvil (≤600px):** 1 columna y navbar en hamburguesa.
- **Tableta (601–1024px):** 2 columnas y espaciado ajustado.
- **Escritorio (>1024px):** 3 columnas.

## Demo desplegada
👉 https://martinez132.github.io/RESPONSIVO/ (GitHub Pages)

## Capturas
| Móvil (≤600px) | Tableta (601–1024px) | Escritorio (>1024px) |
| --- | --- | --- |
| ![Móvil](docs/screenshots/S1.png) | ![Tableta](docs/screenshots/S2.png) | ![Escritorio](docs/screenshots/S3.png) |

## Enfoque de diseño responsivo
- **Framework de estilo:** Bootstrap (rejilla, utilidades y navbar).
- **Ajustes finos con _media queries_ personalizadas** para cumplir tamaños exactos pedidos por la consigna:
  - `@media (max-width: 600px)` para móvil.
  - `@media (min-width: 601px) and (max-width: 1024px)` para tableta.
  - `@media (min-width: 1025px)` para escritorio, usando clase personalizada `.col-desktop-4` (tres columnas).
- **Navbar** con `expand="md"` para menú hamburguesa en pantallas pequeñas.
- **Tipografía y espaciados** adaptados por breakpoint para legibilidad.

## Tecnologías
- React + TypeScript + Vite
- Bootstrap y Bootstrap Icons

## Cómo ejecutar localmente
```bash
npm install
npm run dev

