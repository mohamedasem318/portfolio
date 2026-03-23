# Mohamed's Portfolio — Developer Documentation

> Updated: 2026-03-24 | Built originally with [Lovable](https://lovable.dev), maintained manually.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Pages & Routing](#4-pages--routing)
5. [Components Reference](#5-components-reference)
6. [Hooks](#6-hooks)
7. [Design System](#7-design-system)
8. [Updating Content (Quick Reference)](#8-updating-content-quick-reference)
9. [Running Locally](#9-running-locally)

---

## 1. Project Overview

The Creative Tech Studio is a React-based single-page application (SPA) built to deliver a premium, "presentation-deck" aesthetic.

### Key Features
*   **Custom Glassmorphic UI:** A dark-mode optimized design system featuring frosted glass panels, subtle glowing borders, and animated floating elements.
*   **Dynamic Projects Showcase:** A masonry-style grid featuring categorized Web Apps, Desktop Apps, and Presentation Decks, complete with fully animated filter tabs and an integrated image lightbox.
*   **Skill Architecture:** A structured breakdown of Core Logic, AI/Workflow frameworks, and Creative Design proficiencies using perfectly mapped, semantic SVG icons.
*   **Responsive Scaling:** Specialized desktop scaling logic limits viewport stretching, optimizing the reading experience and visual hierarchy on ultra-wide monitors.
*   **Seamless Animations:** Extensive use of `framer-motion` for scroll-triggered fade-ups, layout reflows, and micro-interactions.
*   **Modern Tech Stack:** React, TypeScript, Tailwind CSS, Vite, and Lucide React.

The page is structured as a long-scroll layout with anchor-linked sections:

```
/ (root) → Navbar → Hero → About → Skills → Projects → Services → Footer
```

---

## 2. Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| TypeScript | 5 | Type safety |
| Vite | 5 | Build tool & dev server |
| TailwindCSS | 3 | Utility-first styling |
| shadcn/ui | latest | Pre-built accessible UI components (Radix UI based) |
| Framer Motion | 12 | Scroll & entrance animations |
| React Router DOM | 6 | Client-side routing |
| lucide-react | 0.462 | Icon library |
| TanStack Query | 5 | (Installed but not yet actively used) |
| Sonner / Toaster | — | Toast notifications (installed, available) |
| Vitest | 3 | Unit testing |

---

## 3. Project Structure

```
creative-tech-studio-main/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg          # Generic image placeholder
│   └── robots.txt
│
├── src/
│   ├── assets/                  # Images, icons, CV PDF, and project screenshots
│   │   ├── avatar.png           # Profile photo used in HeroSection
│   │   ├── aboutmeavatar.png    # Portrait used in AboutSection
│   │   ├── *-cover.png          # Project cover images
│   │   ├── vibecheck-*.png      # VibeCheck screenshots (slideshow)
│   │   ├── gigacart-*.png       # GigaCart screenshots (slideshow)
│   │   ├── cerebroscan-*.png    # CerebroScan screenshots (slideshow)
│   │   ├── matlabstresscalc-*.png  # Mohr's Calculator screenshots (slideshow)
│   │   ├── presentation-*.png   # Presentation slide covers
│   │   └── Mohamed Assem Adel CV.pdf
│   │
│   ├── components/
│   │   ├── Navbar.tsx           # Fixed top navigation bar
│   │   ├── HeroSection.tsx      # Landing / top-of-page section
│   │   ├── AboutSection.tsx     # Bio, education, achievements
│   │   ├── SkillsSection.tsx    # Tech skills grouped by category
│   │   ├── ProjectsSection.tsx  # Filter tabs + Cards (auto-cycling slideshow) + Lightbox
│   │   ├── ServicesSection.tsx  # Offered services cards
│   │   ├── CTASection.tsx       # Call to action with social links
│   │   ├── Footer.tsx           # Copyright + links
│   │   └── ui/                  # shadcn/ui components (do not modify manually)
│   │
│   ├── hooks/
│   │   ├── useTheme.ts          # Dark/light mode toggle logic
│   │   ├── useHaptics.ts        # Haptic/vibration feedback hook
│   │   ├── use-mobile.tsx       # Detects mobile viewport
│   │   └── use-toast.ts         # Toast notification hook
│   │
│   ├── lib/
│   │   └── utils.ts             # Tailwind cn() utility
│   │
│   ├── pages/
│   │   ├── Index.tsx            # Main page — composes all sections
│   │   └── NotFound.tsx         # 404 fallback page
│   │
│   ├── test/                    # Vitest unit tests
│   ├── App.tsx                  # Root app: providers + router
│   ├── main.tsx                 # React DOM entry point
│   ├── index.css                # Global styles, CSS variables, design tokens
│   └── App.css                  # (Minimal — mostly unused)
│
├── tailwind.config.ts           # Tailwind theme + custom keyframes
├── components.json              # shadcn/ui CLI config
├── vite.config.ts               # Vite build config
├── tsconfig.app.json            # TypeScript config
└── package.json                 # Dependencies & scripts
```

---

## 4. Pages & Routing

The app uses **React Router v6** with two routes defined in `App.tsx`:

| Path | Component | Description |
|---|---|---|
| `/` | `Index` | Main portfolio page |
| `*` | `NotFound` | 404 catch-all |

To **add a new page**, create `src/pages/MyPage.tsx` and add a `<Route>` in `App.tsx` above the `*` catch-all route.

---

## 5. Components Reference

### `Navbar.tsx`
**Location:** `src/components/Navbar.tsx`

Fixed glassmorphism navigation bar. Slides in from top on load via Framer Motion.

| Prop | Type | Description |
|---|---|---|
| `isDark` | `boolean` | Current theme state |
| `onToggleTheme` | `() => void` | Callback to toggle dark/light mode |

**To update nav links**, edit the `navLinks` array at the top of the file:
```ts
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  // add more here
];
```

---

### `HeroSection.tsx`
**Location:** `src/components/HeroSection.tsx`

Top landing section with avatar image, headline, and two CTA buttons.

**Key items to update:**
- **Headline text** — hardcoded on line 17: `"Software Engineer & Creative Technologist"`
- **Subtitle/tagline** — hardcoded on line 21–22
- **"Download CV" button** — `href="#"` on line 26 → **replace with actual CV file link**
- **Avatar image** — imported from `src/assets/avatar.png` → replace file to update photo

---

### `AboutSection.tsx`
**Location:** `src/components/AboutSection.tsx`

Bio paragraph + education cards + achievement badge.

**Key items to update:**
- **Bio paragraph** — lines 33–36
- **Education cards** — two `motion.div` blocks (lines 41–70), each with a university/program name
- **Achievement badge** — line 81: the text `"Successfully Passed 1st Graduation Project Defense Presentation"`

To **add more education cards**, duplicate a `motion.div` block and increment the `custom` prop (stagger delay index).

---

### `SkillsSection.tsx`
**Location:** `src/components/SkillsSection.tsx`

Three skill category cards, each with a list of skills and icons.

**To update skills**, edit the `categories` array at the top of the file:
```ts
const categories = [
  {
    title: "Core Logic",
    icon: Terminal,
    skills: [
      { name: "Python", icon: Code },
      // add or remove skills here
    ],
  },
  // add more categories here
];
```
Icons come from `lucide-react`. Browse available icons at [lucide.dev](https://lucide.dev).

---

### `ProjectsSection.tsx`
**Location:** `src/components/ProjectsSection.tsx`

Grid of project cards. Each card shows a color-block image placeholder, title, description, and tech icons.

**To update projects**, edit the `projects` array at the top of the file. Each app project supports an `images` array for the auto-cycling slideshow — the first entry is always the cover shown on load:
```ts
const projects = [
  {
    title: "CerebroScan",
    category: "Web App",
    description: "...",
    cover: cerebroscanCover,
    images: [cerebroscanCover, cerebroscanLight, cerebroscanResulthealthy],
    liveUrl: "https://...",
    tags: [{ label: "React", Icon: SiReact }],
    imagePosition: "object-top",
  },
];
```

Presentation cards use a single `cover` image and open in a fullscreen **Lightbox** on click — the `images` array is not used for them.

---

### `ServicesSection.tsx`
**Location:** `src/components/ServicesSection.tsx`

Two service offering cards with icon, title, and description.

**To update services**, edit the `services` array:
```ts
const services = [
  {
    icon: BrainCircuit,
    title: "AI-Assisted Software Solutions",
    description: "...",
  },
  // add more services here
];
```

---

### `CTASection.tsx`
**Location:** `src/components/CTASection.tsx`

Call-to-action section with social media links (GitHub, LinkedIn, Behance, Upwork, Mostaql, Khamsat) and an email button.

---

### `Footer.tsx`
**Location:** `src/components/Footer.tsx`

Contact CTA with email button + social media dock.

**Key items to update:**
- **Email** — `href="mailto:contact@mohamed.dev"` on line 17 → **replace with real email**
- **LinkedIn URL** — `href="https://linkedin.com"` on line 27 → **add full profile URL**
- **Behance URL** — `href="https://behance.net"` on line 45 → **add full profile URL**
- **Mostaql & Khamsat** — lines 53–69 → update or remove as needed
- **Upwork link** — commented out (lines 71–79) → uncomment and add URL if needed
- **Copyright year** — hardcoded as `2026` on line 83

---

## 6. Hooks

### `useTheme.ts`
Manages dark/light mode by toggling the `dark` class on `<html>`.

- Defaults to **dark mode** on first load.
- Does not persist the user's preference to `localStorage` — refreshing resets to dark.

### `useHaptics.ts`
Exposes a `vibrate(ms)` function that triggers the Web Vibration API on supported devices. Used on interactive buttons throughout the portfolio for a tactile feel.

### `use-mobile.tsx`
Returns `true` if the viewport width is less than 768px. Used for responsive logic.

### `use-toast.ts`
A toast state manager. Works in tandem with `<Toaster />` in `App.tsx`.

---

## 7. Design System

All design tokens are CSS custom properties defined in `src/index.css`.

### Color Palette

| Token | Light Mode | Dark Mode | Description |
|---|---|---|---|
| `--primary` | Teal `174 60% 32%` | Cyan `187 80% 55%` | Accent / brand color |
| `--background` | Very light blue-grey | Deep navy `215 28% 10%` | Page background |
| `--foreground` | Dark navy | Light grey | Main text |
| `--muted-foreground` | Mid grey | Mid grey | Secondary text |
| `--glow` | Same as primary | Same as primary | Glow effects |

### Custom Utility Classes

| Class | Description |
|---|---|
| `.glass` | Glassmorphism card — `backdrop-blur + translucent background + border` |
| `.glow-text` | Primary-colored text with subtle text-shadow glow |
| `.glow-box` | Adds a soft box-shadow glow to cards |
| `.section-padding` | Consistent vertical + horizontal padding for all sections |
| `.text-gradient` | Transparent text with a gradient fill |

### Typography

- **Font:** `Plus Jakarta Sans` (loaded from Google Fonts)
- **Configured in:** `tailwind.config.ts` → `theme.extend.fontFamily.sans`

### Animations

| Animation | Defined In | Behavior |
|---|---|---|
| `float` | `tailwind.config.ts` | Avatar floats up/down infinitely (4s loop) |
| `accordion-down/up` | `tailwind.config.ts` | shadcn/ui accordion expand/collapse |
| Entrance animations | Framer Motion (per component) | Fade/slide in on scroll with `whileInView` |

---

## 8. Updating Content (Quick Reference)

| What to change | File | What to edit |
|---|---|---|
| Profile photo | `src/assets/avatar.png` | Replace the file |
| Name in navbar | `Navbar.tsx` line 29 | `"Mohamed"` text |
| Hero headline | `HeroSection.tsx` line 17–18 | Headline JSX |
| Hero tagline | `HeroSection.tsx` line 21–22 | `<p>` text |
| Download CV link | `HeroSection.tsx` line 26 | `href="#"` → real URL |
| About bio text | `AboutSection.tsx` lines 33–36 | `<motion.p>` content |
| Education cards | `AboutSection.tsx` lines 41–70 | Card content |
| Achievement text | `AboutSection.tsx` line 81 | `<p>` content |
| Skills | `SkillsSection.tsx` | `categories` array |
| Projects | `ProjectsSection.tsx` | `projects` array |
| Services | `ServicesSection.tsx` | `services` array |
| Testimonials | `TestimonialsSection.tsx` | `testimonials` array + uncomment in `Index.tsx` |
| Email address | `Footer.tsx` line 17 | `mailto:` link |
| Social links | `Footer.tsx` lines 27–69 | `href` values |
| Theme colors | `src/index.css` | CSS variables in `:root` / `.dark` |

---

## 9. Running Locally

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test
```

> **Node version**: Use Node 18+ for compatibility with all dependencies.
