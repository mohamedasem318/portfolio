# Mohamed Assem — Creative Tech Studio Portfolio

A high-performance, interactive portfolio for **Mohamed Assem**, Software Engineer & Creative Technologist. Built to deliver a premium, "presentation-deck" aesthetic that highlights full-stack engineering, AI/ML projects, and precision UI/UX design work.

🔗 **Live Site**: https://mohamedasem318.github.io/portfolio/

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Vite** | Ultra-fast dev server & build pipeline |
| **React 18 + TypeScript** | Component-driven UI with type safety |
| **Tailwind CSS** | Utility-first styling with dark-mode defaults |
| **Framer Motion** | Scroll-triggered animations & layout transitions |
| **Lucide React + React Icons** | Semantically mapped, branded iconography |
| **sharp** | Server-side image processing (favicon trimming) |

---

## Getting Started

### Prerequisites
- Node.js (v18 or above) — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm (bundled with Node.js)

### Local Development

```sh
# 1. Clone the repository
git clone https://github.com/mohamedasem318/portfolio.git
cd creative-tech-studio-main

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
# → Opens at http://localhost:8080
```

### Production Build

```sh
npm run build
# Output will be in the /dist directory
```

---

## Architecture Overview

The site is a React SPA structured as a long-scroll, single-page layout with anchor-linked sections:

```
/
├── #hero          → Name, title, Download CV button, avatar portrait
├── #about         → Bio, quick-facts labels, styled portrait
├── #skills        → Three-column Tech Arsenal (Core Logic / AI & Workflow / Design)
├── #projects      → Filterable grid with Lightbox modals and external link overlays
├── #services      → Services offered cards
├── #education     → Timeline of academic and professional certifications
└── #contact       → Call to action with social links & email
```

### Key Engineering Decisions

**1. Glassmorphic Design System**
All section cards use a shared `glass` CSS class from `index.css`, providing consistent frosted-glass panels and glowing text accents via CSS custom properties.

**2. Anti-Jumbo Scaling**
On large desktop viewports (`lg:`+), font sizes, padding, and card dimensions are explicitly constrained to prevent content from becoming bloated. Sections use `min-h-screen` to command the user's full attention.

**3. Dynamic Projects Showcase**
- `imagePosition` per project controls `object-top` vs `object-center` cropping for web screenshots vs. desktop UIs.
- Filter tabs use Framer Motion `AnimatePresence mode="popLayout"` for smooth staggered card reflows when switching category.
- Presentation cards open a frosted-glass **Lightbox** modal on click instead of navigating externally.

**4. SEO & Social Metadata**
`index.html` contains full OpenGraph and Twitter Card meta tags. Sharing the link on any social platform generates a rich preview card with title, description, and the custom "MA" favicon.

---

## Project Structure

```
src/
├── assets/                 # Images, icons, CV PDF, and project screenshots
│   ├── avatar-resized.png
│   ├── aboutmeavatar.png
│   ├── gigacart-cover.png
│   ├── cerebroscan-cover.png
│   ├── matlabstresscalc-cover.png
│   ├── presentation-*.png  # 4 presentation slide screenshots
│   └── Mohamed Assem Adel CV.pdf
│
├── components/
│   ├── Navbar.tsx           # Fixed top navigation + dark/light mode toggle
│   ├── HeroSection.tsx      # Hero with Download CV → PDF download
│   ├── AboutSection.tsx     # Bio + portrait (mobile: portrait first, then text)
│   ├── SkillsSection.tsx    # Three-column categorized skill arsenal
│   ├── ProjectsSection.tsx  # Filter tabs + Cards + Lightbox modal
│   ├── ServicesSection.tsx  # Services offered
│   ├── EducationSection.tsx # Academic timeline
│   ├── CTASection.tsx       # Call to Action with social links
│   └── Footer.tsx           # Copyright + links
│
├── index.css                # Global styles: .glass, .glow-text, .glow-box, .section-padding
└── main.tsx                 # React entry point

public/
└── favicon.png              # Custom "MA" cyan monogram logo (auto-trimmed)
```

---

## Deployment

The site is configured to deploy directly to GitHub Pages.

**Deploying Updates**:
```sh
# This will automatically build the site and push it to the gh-pages branch
npm run deploy
```

After deploying, it may take 1-2 minutes for GitHub Pages to refresh the live site.
