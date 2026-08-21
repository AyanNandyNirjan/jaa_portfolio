# Jalal Ahmed Anik — Interactive Portfolio

A React portfolio inspired by the cinematic "digital investigation / case archive" interaction style of Killian Herzer's portfolio, adapted specifically for a Digital Marketing Manager.

## Stack

- React 19
- Vite 7
- Tailwind CSS 3
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- Lucide React icons

## Main UX features

- Cinematic boot loader
- Dark mode by default + light mode toggle
- Persistent theme preference
- Cursor crosshair on desktop
- Cursor-following hero flashlight
- Animated scanning beam / HUD overlays
- GSAP entrance and scroll-triggered animations
- Pinned horizontal experience archive on desktop
- Slider/List experience view switch
- Click-to-decrypt experience modal
- Responsive subject/profile dossier
- Skills "equipment inventory"
- Contact transmission panel
- CV and LinkedIn actions
- Reduced-motion accessibility fallback

## Run in VS Code

1. Extract the ZIP.
2. Open the project folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Install dependencies:

```bash
npm install
```

5. Start the local development server:

```bash
npm run dev
```

6. Open the URL shown by Vite, normally:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
npm run preview
```

The production files will be generated in `dist/`.

## Where to edit content

Most portfolio information is stored in:

```text
src/data/portfolioData.js
```

Profile image:

```text
public/assets/jalal-ahmed-anik.jpg
```

CV:

```text
public/Jalal-Ahmed-Anik-CV.pdf
```

## Adding real campaign case studies later

The current "Evidence Board" uses documented work experience from Jalal's CV. When real campaign screenshots, SEO reports, ad creatives, ROAS figures, certificates, or client projects become available, add them to `public/assets/` and extend `caseFiles` in `src/data/portfolioData.js`.

## Latest archive-card update
The Evidence Board now uses tall cinematic image cards inspired by the supplied Killian Herzer reference screenshot. Decorative monochrome SVG artwork lives in `public/assets/evidence/`, while the layout and interactions are in `src/components/CaseArchive.jsx`.
