# Rias — Bespoke Tailoring Atelier

Marketing website for **Rias**, a craft-focused bespoke tailoring atelier. Built as a single-page, mobile-responsive experience with smooth-scroll navigation.

**Live site:** [https://sidharthasajeev2000.github.io/rias/](https://sidharthasajeev2000.github.io/rias/)

> **GitHub Pages:** set the Pages source to **GitHub Actions** (not “Deploy from a branch”). The workflow in `.github/workflows/deploy-pages.yml` builds the Next.js static export and publishes the `out/` folder.

## Stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- Google Fonts: Cormorant Garamond (serif) + Outfit (sans)
- Static export for GitHub Pages (`output: 'export'`, `basePath: '/rias'`)

## Assumptions

- Contact form uses **client-side validation only**; successful submit shows a confirmation UI and does not send email or hit an API.
- Address, phone, hours, and email on the Contact section are **placeholders**.
- Lookbook cards use CSS gradients / inline SVG placeholders (no external stock image URLs).
- Site is a static marketing front; no CMS or auth.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000/rias/](http://localhost:3000/rias/) (dev server respects `basePath`).

## Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start development server                     |
| `npm run build`   | Production static export → `out/`            |
| `npm run start`   | Serve production build (not used for Pages)  |
| `npm run lint`    | Run ESLint                                   |

## Design notes

- Palette: soft cream / ivory neutrals with deep navy as primary accent and warm gold for highlights.
- Typography: elegant serif headlines, clean sans body copy, generous whitespace.
- Tone: refined, warm, craft-first—not a generic SaaS template.

## License

Private project for Rias.
