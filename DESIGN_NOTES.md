# Design Notes — Case Archive Direction

## Reference language

The portfolio is independently implemented but intentionally follows the design language of Killian Herzer's portfolio:

- Dark cinematic presentation
- Black + vivid red primary palette
- Investigation / evidence / archive terminology
- Oversized name typography
- Technical HUD labels around the canvas
- Loader and scanning effects
- Cursor-following spotlight
- Experience cards presented as evidence files
- Detailed project/case modal
- Subject-profile dossier
- Strong terminal-like contact ending
- Long-scroll storytelling

## Adaptation for Jalal Ahmed Anik

The original developer-focused "Evidence Board" concept has been translated into a marketing-oriented professional archive. Instead of inventing portfolio projects or campaign results, the case files are built from the roles documented in Jalal's CV:

1. IP Solutions Ltd
2. Grandior Homes
3. All in line
4. BYETS Project

The visual system is therefore immersive, but the factual content remains CV-grounded.

## Theme system

### Dark
- Background: `#050505`
- Surface: `#090909` / `#0b0b0b`
- Primary text: warm off-white
- Accent: `#ff2a2a`

### Light
- Background: warm paper `#f1eee6`
- Secondary surface: `#e8e4db`
- Primary text: `#111111`
- Accent remains `#ff2a2a`

## UX decisions

- Default dark mode preserves the strongest cinematic reference.
- Light mode is included for usability and the earlier project requirement.
- The horizontal archive only pins on desktop; mobile remains native vertical/horizontal interaction friendly.
- Reduced-motion users bypass smooth/pinned motion behavior where possible.
- Campaign performance numbers are deliberately not fabricated.

## Evidence Board correction — 2026-08-21
The archive cards were revised to match the reference composition more closely:
- narrow, tall portrait cards instead of wide text panels
- full-bleed monochrome visual artwork inside every card
- bottom gradient with serif project/company title
- red evidence labels and vertical technical metadata
- subtle scanline texture and red hover frame
- eight visible archive/dossier cards so the horizontal board feels dense
- smaller one-line `EVIDENCE BOARD` heading and separate slider/list + arrow controls
- GSAP pinned horizontal scrolling retained on desktop, native horizontal scrolling on touch devices

The additional dossier cards represent documented CV capabilities/certification rather than invented client projects.
