# WebCare — Web Development Rwanda

**WebCare** is the web development service of **ISHConnect**, a Rwandan technology company. This repository is a full marketing website + free tools platform built with modern web technologies.

**Live:** [webcare.ishconnect.rw](https://webcare.ishconnect.rw)

---

## Tech Stack

| Layer | Technology |
|---|---|
| **UI** | React 19.1 |
| **Language** | TypeScript 5.9 |
| **Build** | Vite 7.3 |
| **CSS** | TailwindCSS v4 |
| **Routing** | React Router DOM 7.6 |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React 0.545 |
| **ZIP Export** | JSZip 3.10 |
| **Deploy** | Vercel / Netlify |

---

## Features

### Marketing Site (`/`)

10-section landing page with scroll navigation:

- **Hero** — Headline, CTAs (WhatsApp, Call, Website link), feature badges
- **TrustedBy** — Client logo grid (ISHConnLab, Kiyumba TSS, GS Gishore, etc.)
- **About** — WebCare overview with 12-month support highlight
- **Services** — 6 service cards: Web Design, School Systems, Mobile Design, UI/UX, Security, Support
- **FreeToolsSection** — Teaser cards linking to AI Portfolio Builder, Needs Assessment, Learning Portal
- **Portfolio** — Real school website mockups (RCA, Greenhills Academy, Kiyumba TVET, Ntare-Louis Enlund)
- **WhyUs** — 6 benefit cards
- **Vision** — Vision statement
- **Ishconnect** — Parent company overview
- **Contact** — WhatsApp / Call CTAs

### AI Portfolio Builder (`/portfolio-builder`)

6-step guided form to build a professional portfolio website:

1. **Personal Info** — Name, role, bio, profile photo
2. **Skills & Services** — Skills with proficiency levels, services offered
3. **Projects** — Project cards with tags, live/demo links
4. **Experience & Education** — Timeline entries
5. **Contact & Social** — Email, phone, location, social links
6. **Theme & Style** — 8 prebuilt themes, custom colors, font pairings, section visibility

**Features:**
- Live preview with desktop / tablet / mobile view switching
- 8 themes: Modern, Minimal, Corporate, Developer, Elegant, Dark Mode, Creative, Startup
- Custom color picker + image color extraction
- 5 font pairings
- Export: standalone HTML, ZIP package, copy to clipboard

### Website Needs Assessment (`/free-tools`)

7-question interactive quiz that generates a personalized assessment report:

- Organization type, goal, target audience, current website status
- Feature priorities, timeline, budget
- **Output:** Readiness score (0-98%), estimated pages, investment bracket, timeline estimate, feature recommendations
- Final CTA: "Start with WhatsApp" to discuss

### Learning Portal (`/learning-portal`)

Interactive online learning platform with **10+ courses** across **5 categories**:

| Category | Courses |
|---|---|
| **Programming** | Python, Java, C, C++ |
| **Web & App Dev** | Web Dev, Frontend (React), Backend (Node.js), Full Stack, Mobile (React Native) |
| **Data & AI** | Data Science |
| **Engineering & Tech** | Cyber Security, Cloud Computing |
| **Business & Design** | UI/UX Design, Digital Marketing |

**Course structure:** Each course has 4 levels (Beginner → Intermediate → Advanced → Professional), each with multiple lessons.

**Features:**
- Interactive code editor — edit & run JavaScript/HTML in-browser, with VSCode copy instructions
- Cheat sheets per level
- Bullet-point key points for every lesson
- Progress tracking (LocalStorage) — auto-resume last lesson
- Course search
- Expandable folder sidebar navigation

---

## Routes

| Path | Component | Description |
|---|---|---|
| `/` | `Home.tsx` | Marketing landing page |
| `/about` | `Home.tsx` (scroll) | About section |
| `/services` | `Home.tsx` (scroll) | Services section |
| `/contact` | `Home.tsx` (scroll) | Contact section |
| `/portfolio-builder` | `PortfolioBuilder.tsx` | AI Portfolio Builder tool |
| `/free-tools` | `FreeTools.tsx` | Free tools hub |
| `/learning-portal` | `LearningPortal.tsx` | Learning portal |
| `*` | `Home.tsx` | Catch-all fallback |

---

## Project Structure

```
webcare/
├── public/
│   ├── favicon.svg          # SVG favicon
│   ├── opengraph.jpg        # 1200x630 OG image
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _redirects           # Netlify SPA fallback
├── src/
│   ├── components/
│   │   ├── learning/        # Learning Portal (10 files)
│   │   │   ├── CodeBlock.tsx
│   │   │   ├── CodeEditor.tsx
│   │   │   ├── CourseViewer.tsx
│   │   │   ├── FolderSidebar.tsx
│   │   │   ├── LearningPortal.tsx
│   │   │   ├── LessonView.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── courseData.ts
│   │   │   ├── types.ts
│   │   │   └── useProgress.ts
│   │   ├── portfolio/       # Portfolio Builder (12+ files)
│   │   │   ├── PortfolioBuilder.tsx
│   │   │   ├── PortfolioContext.tsx
│   │   │   ├── types.ts
│   │   │   ├── themes.ts
│   │   │   ├── steps/       # 6 step components
│   │   │   ├── preview/     # Live preview
│   │   │   └── export/      # Export panel + HTML generator
│   │   ├── WebsiteNeedsAssessment.tsx
│   │   ├── FreeToolsSection.tsx
│   │   ├── PortfolioShowcase.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── TrustedBy.tsx
│   │   ├── Portfolio.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Vision.tsx
│   │   ├── Ishconnect.tsx
│   │   ├── Contact.tsx
│   │   ├── ScrollToSection.tsx
│   │   ├── Badge.tsx
│   │   ├── FadeIn.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── WebCareLogo.tsx
│   │   └── WhatsAppFab.tsx
│   ├── hooks/
│   │   └── useScrolled.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── PortfolioBuilder.tsx
│   │   ├── FreeTools.tsx
│   │   └── LearningPortal.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json
└── postcss.config.js
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server with hot reload
npm run dev

# Type-check the project
npm run typecheck

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill values:

| Variable | Default |
|---|---|
| `VITE_SITE_URL` | `https://www.ishconnect.rw` |
| `VITE_WHATSAPP_URL` | `https://wa.me/250787377750` |
| `VITE_CALL_URL` | `tel:+250787377750` |

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server (port 5173) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run typecheck` | TypeScript type checking (`tsc --noEmit`) |

---

## Deployment

### Vercel (recommended)

`vercel.json` is preconfigured with SPA rewrites and cache headers. Connect your Git repo or use the CLI:

```bash
npx vercel
npx vercel --prod
```

### Netlify

`public/_redirects` handles SPA fallback. Deploy via Git or CLI:

```bash
npx netlify deploy --prod
```

### Any static host

Build → deploy `dist/` folder. Configure server to serve `index.html` for all routes (SPA fallback).

---

## Architecture Notes

- **No backend** — all tools run client-side in the browser
- **No authentication** — all data stays in LocalStorage
- **Progress persisted** via `localStorage` for the Learning Portal
- **TypeScript strict** — `tsc --noEmit` passes cleanly
- **Manual chunk splitting** in `vite.config.ts` for optimal loading
- **SEO** — meta tags updated via `useEffect` + DOM manipulation (no react-helmet)
- **Responsive** — desktop sidebar, tablet collapsible, mobile drawer for Learning Portal
