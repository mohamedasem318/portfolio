# Portfolio — Placeholders & Improvement Report

> Generated: 2026-02-25

---

## 🔴 Critical Placeholders (Fix Before Launch)

These are incomplete items that need real data before the site goes live.

### 1. CV / Resume Download Link
**File:** `src/components/HeroSection.tsx` — line 26

```html
<!-- PLACEHOLDER -->
<a href="#">Download CV</a>
```

The "Download CV" button points to `#` (nothing). Replace with:
- A direct link to a PDF file hosted online (Google Drive, Dropbox, GitHub, etc.), or
- A local file in `public/` (e.g., `public/cv.pdf`) → then `href="/cv.pdf"`

---

### 2. Email Address
**File:** `src/components/Footer.tsx` — line 17

```html
<!-- PLACEHOLDER -->
<a href="mailto:contact@mohamed.dev">
```

`contact@mohamed.dev` is not a real email. Replace with your actual email address.

---

### 3. LinkedIn Profile URL
**File:** `src/components/Footer.tsx` — line 27

```html
<!-- PLACEHOLDER -->
<a href="https://linkedin.com">
```

Points to the LinkedIn homepage, not a profile. Replace with your full profile URL (e.g., `https://linkedin.com/in/your-username`).

---

### 4. Behance Profile URL
**File:** `src/components/Footer.tsx` — line 45

```html
<!-- PLACEHOLDER -->
<a href="https://behance.net">
```

Points to the Behance homepage. Replace with your portfolio URL (e.g., `https://behance.net/your-username`).

---

### 5. Project Card Images
**File:** `src/components/ProjectsSection.tsx` — line 52–56

```tsx
{/* Image placeholder */}
<div className="h-44 bg-secondary flex items-center justify-center">
  <span className="text-3xl font-bold text-primary/30">
    {project.title.charAt(0)}
  </span>
</div>
```

Every project card shows only the **first letter** of the project name on a plain background. Replace with:
- Real screenshots or mockup images
- Add an `image` field to each project object and render `<img src={project.image} />`

**Suggested update to `projects` array:**
```ts
const projects = [
  {
    title: "CerebroScan",
    description: "...",
    image: "/screenshots/cerebroscan.png",  // add this
    icons: [Code, Database, BrainCircuit],
  },
];
```

---

### 6. Testimonials Section (Disabled)
**File:** `src/pages/Index.tsx` — line 11 & 25

```tsx
// import TestimonialsSection from "@/components/TestimonialsSection";
// <TestimonialsSection />
```

The section is built and ready but uses **fake placeholder testimonials** (Sarah A., Ahmed K., Layla M.) and is commented out. Before enabling:
1. Replace the `testimonials` array in `TestimonialsSection.tsx` with real client reviews
2. Uncomment the import and JSX in `Index.tsx`

---

## 🟡 Bugs & Technical Issues

### 7. Theme Preference Not Persisted
**File:** `src/hooks/useTheme.ts`

The dark/light mode toggle does not save the user's preference. Every page refresh resets to dark mode.

**Fix:** Save to `localStorage`:
```ts
export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") !== "light"; // default dark
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);
  return { isDark, toggle };
}
```

---

### 8. Duplicate `useEffect` in `useTheme.ts`
**File:** `src/hooks/useTheme.ts` — lines 6–17

There are **two `useEffect` calls** — the second one (lines 15–17) forces `dark` class on mount regardless of state, making the first effect partially redundant.

```ts
// This is redundant
useEffect(() => {
  document.documentElement.classList.add("dark");
}, []);
```

Remove the second `useEffect` once the `localStorage` fix above is in place.

---

### 9. `NavLink.tsx` is Unused Dead Code
**File:** `src/components/NavLink.tsx`

The component exists but is never imported or used. Either:
- Adopt it inside `Navbar.tsx` to DRY up the nav link rendering, or
- Delete it to keep the codebase clean.

---

### 10. Project Section Grid Layout Bug
**File:** `src/components/ProjectsSection.tsx` — line 40

```tsx
<div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
```

`sm:grid-cols-2` and `lg:grid-cols-2` are both 2 columns — the `lg` breakpoint is redundant. With only 4 projects, having 3 columns at `xl` leaves one orphaned card in the last row. Consider using `lg:grid-cols-2 xl:grid-cols-2` unless you plan to add more projects.

---

### 11. Copyright Year is Hardcoded
**File:** `src/components/Footer.tsx` — line 83

```tsx
<p>© 2026 Mohamed. Built with precision.</p>
```

This will become outdated. Replace with a dynamic year:
```tsx
<p>© {new Date().getFullYear()} Mohamed. Built with precision.</p>
```

---

### 12. `package.json` Name is Generic
**File:** `package.json` — line 2

```json
"name": "vite_react_shadcn_ts"
```

This is Lovable's default project name. Update to something meaningful like `"name": "mohamed-portfolio"`.

---

## 🟢 Enhancement Suggestions (Nice-to-Have)

These are improvements that would elevate the portfolio significantly.

### A. Add a Contact Form Section
The footer has a "Send an Email" link, but no embedded contact form. A form (with React Hook Form + Zod validation, which are already installed) would allow visitors to message you without leaving the site. You could connect it to Formspree, EmailJS, or a custom backend.

---

### B. Add Project Links (GitHub / Live Demo)
Each project card currently has no link. Add `githubUrl` and `liveUrl` fields to the projects data and render icon-link buttons on each card.

---

### C. Skill Progress Bars or Proficiency Levels
The `SkillsSection` lists skills as a plain text list. Adding a visual proficiency indicator (progress bar, badge level, or star rating) would make it more engaging.

---

### D. Animate Section Headings with a Typewriter Effect
The hero headline could use a typewriter animation for "Software Engineer & Creative Technologist" to make the landing more dynamic.

---

### E. SEO Meta Tags
`index.html` has minimal SEO metadata. Add:
- `<meta name="description" content="...">` 
- `<meta property="og:title">` / `og:image` for social sharing previews
- A canonical URL tag

---

### F. Enable the Upwork Social Link
**File:** `src/components/Footer.tsx` — lines 71–79

An Upwork link is already written in the code but commented out. Uncomment and add your profile URL if/when you're active on that platform.

---

### G. Add a `data/` or `content/` Layer
Currently, all content (projects, skills, services, testimonials) is **hardcoded inline in component files**. Moving them to a separate `src/data/` folder would make content updates cleaner and faster without touching component logic:

```
src/data/
├── projects.ts
├── skills.ts
├── services.ts
└── testimonials.ts
```

---

### H. Animate the Skills Section Icons
The skill icons in `SkillsSection` are static. Adding a subtle `whileHover={{ scale: 1.2, rotate: 10 }}` Framer Motion wrapper to each skill chip would make it feel more interactive.

---

### I. Remove Lovable Dev Dependencies (Optional)
**File:** `package.json` — line 82

```json
"lovable-tagger": "^1.1.13"
```

`lovable-tagger` is a Lovable-specific dev dependency used in their platform's editor. It is safe to remove if you're no longer using Lovable to edit the project. Also check `vite.config.ts` for any `componentTagger()` call to remove alongside it.

---

## Summary Table

| # | Issue | Severity | Effort |
|---|---|---|---|
| 1 | CV link is `#` | 🔴 Critical | Low |
| 2 | Email is placeholder | 🔴 Critical | Low |
| 3 | LinkedIn URL incomplete | 🔴 Critical | Low |
| 4 | Behance URL incomplete | 🔴 Critical | Low |
| 5 | Project images missing | 🔴 Critical | Medium |
| 6 | Testimonials use fake data | 🔴 Critical | Medium |
| 7 | Theme not persisted | 🟡 Bug | Low |
| 8 | Duplicate `useEffect` | 🟡 Bug | Low |
| 9 | `NavLink.tsx` unused | 🟡 Cleanup | Low |
| 10 | Grid layout redundancy | 🟡 Minor | Low |
| 11 | Hardcoded copyright year | 🟡 Minor | Low |
| 12 | Generic package name | 🟡 Minor | Low |
| A | Contact form | 🟢 Enhancement | High |
| B | Project links | 🟢 Enhancement | Low |
| C | Skill proficiency visuals | 🟢 Enhancement | Medium |
| D | Typewriter hero effect | 🟢 Enhancement | Low |
| E | SEO meta tags | 🟢 Enhancement | Low |
| F | Upwork link | 🟢 Enhancement | Low |
| G | Data layer separation | 🟢 Enhancement | Medium |
| H | Animate skill icons | 🟢 Enhancement | Low |
| I | Remove Lovable deps | 🟢 Cleanup | Low |
