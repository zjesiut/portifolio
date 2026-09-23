# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Portfolio Notes

This workspace contains a personal portfolio site built with React and Framer Motion. Recent UI updates include:

-- Professional name/tagline update to `SETELIGN` and role `Full-Stack Engineer`.
-- Improved profile photo controls (overlay + circular change button).
-- Added an `Experience` section to highlight internships and projects.
-- CTA updated: "View Projects" and "Download CV" (a web resume preview is available at `public/resume.html`; you can also add `resume.pdf` for direct download).

Run locally:

```bash
npm install
npm run dev
```

To publish, deploy to Vercel/Netlify or enable GitHub Pages for `https://github.com/zjesiut/portifolio`.
