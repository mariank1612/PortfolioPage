# Portfolio - Marian Köhler

This is the source code for my personal portfolio website, designed to showcase my experience, projects, and certifications in a sleek, modern, and high-performance package.

Built with **Astro**, **React**, and **Tailwind CSS**, the site features a data-driven architecture where most content is managed through a central `resume.json` file.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build/) (Static Site Generation)
- **UI Libraries:** [React](https://reactjs.org/) & [Lucide React](https://lucide.dev/) (Icons)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Typography:** Inter & Geist Mono (via [@fontsource](https://fontsource.org/))
- **SEO:** Built-in sitemap generation and metadata optimization

## ✨ Key Features

- **Data-Driven:** Content is centrally managed in `resume.json`, making updates simple and consistent across the site.
- **Modern Design:** Features a dark-themed, glassmorphism-inspired aesthetic with a dynamic spotlight effect.
- **Certifications Redesign:** Structured certification display with custom icons and status tags.
- **Skills Grid:** Uniformly sized skills categories for a balanced and professional look.
- **Interactive Elements:** Smooth transitions and interactive preference sliders.
- **SEO Optimized:** Automated sitemap generation and search-engine-friendly metadata.

## 🧞 Commands

All commands are run from the root of the project:

| Command           | Action                                           |
| :---------------- | :----------------------------------------------- |
| `npm install`     | Installs dependencies                            |
| `npm run dev`     | Starts local dev server at `localhost:4321`      |
| `npm run build`   | Build your production site to `./dist/`          |
| `npm run preview` | Preview your build locally                       |

## 📈 SEO & Sitemaps

This project includes `@astrojs/sitemap` to automatically generate a sitemap on every build.
- **Sitemap Index:** `https://mariankoehler.me/sitemap-index.xml`
- **Robots.txt:** Configured to point search engine crawlers to the sitemap.

---

Engineered by me. Visual concept and design inspiration by Brittany Chiang.
