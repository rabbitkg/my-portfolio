# Developer Portfolio (Frontend + Full Stack)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF)](https://www.framer.com/motion/)

<span style="font-size:1.3em;"><strong>⭐️ If this portfolio template helped you, drop a star! It means a lot and helps others find it too 😊🙏</strong></span>

---

Modern **developer portfolio** built with **React + Vite** — a **frontend developer portfolio** and **fullstack portfolio** template you can deploy on **GitHub Pages / Vercel / Netlify**. Content lives in **`src/data/site.json`** (hero, contact, SEO) and **`src/data/projects.json`** (featured work). SEO is handled by **`src/components/Seo.jsx`** (meta tags + JSON‑LD) and a shipped **`public/sitemap.xml`** + **`public/robots.txt`**.

---

## Preview

<p align="center"><img src="docs/readme/darkmode.png" alt="Dark theme" width="920" /><br /><sub>Dark theme</sub></p>

<p align="center"><img src="docs/readme/lightmode.png" alt="Light theme" width="920" /><br /><sub>Light theme</sub></p>

<p align="center"><img src="docs/readme/skills.png" alt="Skills" width="920" /><br /><sub>Skills</sub></p>

<p align="center"><img src="docs/readme/services.png" alt="Services" width="920" /><br /><sub>Services</sub></p>

<p align="center"><img src="docs/readme/projects.png" alt="Projects" width="920" /><br /><sub>Featured projects</sub></p>

PNGs live in **`docs/readme/`** (README only). **`public/robots.txt`** ships with the app.

---

## Features

- SEO-ready **developer portfolio**: canonical URL, OpenGraph/Twitter, JSON‑LD (Person/WebSite/WebPage), `robots.txt`, `sitemap.xml`
- Central **`site.json`**: links, hero roles/tagline, `seo` (title, description, keywords, OG image), `siteUrl` for canonical + `og:url`
- **`projects.json`** + **`src/assets/`** screenshots via **`projectImages.js`**
- **`Seo.jsx`**: meta tags + JSON-LD `Person`
- **`index.html`**: baseline `<head>` (keep aligned with `site.json`)
- **`browserLogger.js`**: Consola for contact form logs in DevTools
- **Navigation**: smaller nav bar while **`#home`** is the active scroll section

---

## Tech stack

| Layer | Choice |
| --- | --- |
| UI | React 18 |
| Build | Vite 5 |
| Motion | Framer Motion |
| Icons | react-icons |
| Logs | Consola (`consola/browser`) |

---

## Quick start

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
npm run lint
```

---

## Configuration

### `src/data/site.json`

| Field | Role |
| --- | --- |
| `siteUrl` | Production URL → canonical + `og:url` when set |
| `person` | Name & copyright |
| `contact` | `email`, `linkedin`, `github`, `telegram` (`""` hides Telegram in hero/footer) |
| `hero` | `roles`, `tagline`, `description` |
| `seo` | `title`, `description`, `keywords[]`, `author`, `ogImage`, Twitter, `jobTitle` |

### `src/data/projects.json`

Per project: `title`, `subtitle`, `description`, `technologies`, `categories` (`Fullstack` \| `Mobile` \| `Blockchain` \| `AI/ML` \| `Game`), `image` (filename in **`src/assets/`**), plus optional `liveLink`, `websiteLink`, `githubLink`, store links.

---

## After deploy

1. Update **`siteUrl`** in **`src/data/site.json`** (canonical + `og:url`)
2. Update **`public/sitemap.xml`** + `public/robots.txt` if you change domains or routes

---

## Repo layout

```
src/data/site.json
src/data/projects.json
src/components/Seo.jsx
src/utils/projectImages.js
src/utils/browserLogger.js
public/robots.txt
docs/readme/*.png
```

---

## Deployment

Build → **`dist/`** → Vercel, Netlify, GitHub Pages, etc. For GitHub Pages subpaths, set Vite **`base`**.

---

## Troubleshooting

If Rollup optional native binary fails on Windows: reinstall Node for your CPU arch, or clean **`node_modules`** + lockfile and **`npm install`**.

---

## License

Personal / learning use.
