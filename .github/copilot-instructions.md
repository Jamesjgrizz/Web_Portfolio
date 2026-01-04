# Copilot instructions for Reeves_Portfolio

Short, actionable notes to help AI agents be productive in this repo.

## Big picture
- This is a small static single-page portfolio site (no backend). The site is built with plain HTML (`index.html`), CSS (`css/portfolio.css`) and a tiny JS file (`portfolio.js`).
- Assets live in `SVGS/` and `pictures/` and are referenced directly from `index.html`.

## Key files and responsibilities
- `index.html` — single-page content and layout, uses anchor links for navigation (`#skill_section`, `#aboutme-section`, etc.).
- `css/portfolio.css` — all styling. Notable patterns: CSS variables are defined in `:root`; many layout choices use fixed heights (e.g., `.hero_section` height: 800px) and a `min-width: 800px` which affects mobile responsiveness.
- `portfolio.js` — currently contains only `const btn = document.getElementById("btn");` and serves as the place for interactive behavior (nav actions, scrolling, modal logic, etc.).
- `SVGS/` and `pictures/` — image and logo assets referenced by HTML.

## How to run & test locally
- There is no build step or package manager: open `index.html` in a browser to preview.
- For a local static server (recommended for dev), use your editor's Live Server extension or a simple static server such as `npx serve` or `python -m http.server` (optional).
- Debugging: use browser DevTools (Elements, Console, Network). Pay attention to layout issues caused by fixed heights and `min-width` values.

## Conventions & patterns to preserve
- Keep site static and dependency-free — avoid adding heavy frameworks unless explicitly requested.
- Styles use CSS variables (see `:root`) — reuse these variables for colors rather than hard-coded hex values.
- Accessibility: images include `alt` attributes in `index.html`; when adding new images follow existing pattern and add meaningful `alt` text.
- Keep interactive behavior isolated to `portfolio.js`. If adding features, follow current minimal approach (vanilla JS, no build tools).

## Common pitfalls and guidance for edits
- Responsiveness: `.hero_section` contains `min-width: 800px` and fixed `height: 800px`; changes here affect mobile layout and horizontal scrolling. Prefer responsive units and media queries for mobile fixes.
- Navigation: nav links are anchor-based (same page). If you add routing, keep the single-page structure in mind.
- JS entry point: `portfolio.js` is the logical place to add event listeners (e.g., for the `#btn` call-to-action) — currently there is no click handler.

## Example tasks an AI can perform immediately
- Add a click handler to `#btn` in `portfolio.js` to smooth-scroll to `#projects-section` (or an element that will be created).
- Improve responsiveness: replace fixed hero height with `min-height` and add a simple media query at max-width: 600px.
- Add a small README subsection describing how to preview the site (optional update to `README.md`).

---

If anything here is unclear or you'd like more specific instructions (commit message templates, branching rules, or adding tests), tell me what you'd prefer and I will iterate. ✅