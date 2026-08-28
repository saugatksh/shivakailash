# Shiva Kailash Real Estate and Investment Pvt. Ltd. — Website

A premium, cinematic React website built with Vite, Tailwind CSS, Framer Motion, and React Router.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal (usually http://localhost:5173).

## Building for production

```bash
npm run build
npm run preview
```

## Editing content

All company content lives in one place: `src/data/companyInfo.js`.
Update the company name, tagline, contact details, services, projects,
stats, testimonials, and navigation there — every component reads from
this file, so there's no need to hunt through components to update text.

Placeholder values (stats like `XX+`, project details, testimonials, and
contact info) are clearly marked with comments and should be replaced
with real data before launch.

## Structure

- `src/components/` — reusable UI building blocks (Navbar, Hero, sections, Footer, etc.)
- `src/pages/` — one file per route (Home, About, Services, Projects, Investments, Contact, etc.)
- `src/data/companyInfo.js` — centralized editable content
- `src/hooks/` — theme (light/dark) and reduced-motion hooks
- `src/styles/index.css` — design tokens (CSS variables) for both themes

## Notes

- Light/dark theme preference is saved to `localStorage` and respects the
  visitor's system preference on first visit.
- The contact form is frontend-only (no backend configured). Wire up a
  real endpoint in `src/pages/Contact.jsx` where noted in the comments.
- `prefers-reduced-motion` is respected throughout (loader, hero parallax,
  cursor, scroll animations).
- Hero and section images are placeholder stock photography from Unsplash
  — swap for real project/property photography when available.
