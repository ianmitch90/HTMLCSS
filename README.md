# The Web Is a Material
### A field guide to HTML, CSS, accessibility, and the browser

> **See → manipulate → explain → break → rebuild → apply.**
>
> Run it. Change it. Break it. The original idea, continued.

This project began in **2018** as an independent HTML/CSS-only showcase. Its Grid composition, Flexbox cards, Bootstrap example, and layered visual experiment were designed to make people curious enough to inspect and change the source.

The 2026 prototype turns that curiosity into an educational experience for **people learning their first web concepts, curious designers, and junior developers**. It emphasizes not merely which property to type, but **why the browser has that feature, when it is useful, and when it is the wrong tool**.

## Explore the prototype

The new homepage is `index.html`. All links are ordinary document routes, suitable for GitHub Pages. On this branch, GitHub Pages will **not** automatically serve the prototype until the publishing configuration is deliberately updated or the branch is merged into the current published branch.

- [Discover](index.html) — illustrated homepage, direct lesson links, progressively enhanced topic filtering
- [Accessible Web](accessibility.html) — dedicated practical accessibility guide
- [The Archive](archive.html) — the original 2018–2020 experiments preserved at their existing paths
- [Browser fundamentals](lessons/browser.html) — HTML meaning, DOM, accessibility tree, rendering
- [Project structure & routes](lessons/structure.html) — HTML page navigation, relative URLs, shared resources, page-level code splitting
- [Grid lab](lessons/grid.html) — editable columns and gaps
- [Flexbox lab](lessons/flex.html) — editable direction, alignment and gap
- [Native interactions](lessons/interaction.html) — focus, details, popover, modal dialog
- [Color lab](lessons/color.html) — custom properties, perceptual colors and mixing
- [Responsive media decisions](lessons/media.html) — SVG, raster, video and alternatives
- [Visual effects lab](lessons/effects.html) — clip, filter, blending, masking and performance
- [Spatial CSS lab](lessons/spatial.html) — CSS 3D vs WebGL/WebGPU vs the emerging model proposal
- [Modern CSS](lessons/modern.html) — container queries, subgrid, cascade layers, nesting and :has()

The lesson documents include the **Why → Try → Under the hood → When to use → Accessibility & cost → Break / build → Further reading** sequence. Their main explanations are authored into the HTML and do not require client-side rendering.

## Run locally

You can read the files directly, but ES modules are normally subject to file:// origin restrictions. For full functionality, serve the folder over HTTP:

```bash
python3 -m http.server 8000
# Open http://localhost:8000/
```

Or use any local static file server. There are **no install-time dependencies, runtime packages, framework hydration, database, or bundling step**.

## Why it uses separate .html routes

The site is intentionally a **multi-page site**:

```text
HTMLCSS/
├── index.html                 # Homepage, static lesson links
├── accessibility.html         # Dedicated accessibility curriculum
├── archive.html               # Curated index of preserved legacy pages
├── lessons/
│   ├── browser.html
│   ├── structure.html
│   ├── grid.html
│   ├── flex.html
│   └── ...                    # Each is its own reachable document
├── styles/
│   ├── site.css               # Shared design system
│   └── labs.css               # Loaded only on lab pages
├── scripts/
│   ├── site.js                # Optional shared motion preference
│   ├── catalogue.js           # Loaded only by the homepage
│   └── labs.js                # Loaded only by interactive lab pages
├── pages/                     # Original 2018 experiments, untouched
├── assets/                    # Original media assets, untouched
└── tests/                     # Dependency-free structural smoke tests
```

On `lessons/grid.html` the link `../index.html` is a direct route back to the homepage, not a client-side router instruction. The browser handles navigation history, direct loading and refresh. The shared CSS URL stays stable so browsers can cache it between navigations. Only the pages that need a lab include `styles/labs.css` and `scripts/labs.js`: **small-scale, explicit, page-level resource splitting**.

Real-world code splitting in a large app can also mean bundler-generated JavaScript chunks. This site deliberately teaches the simpler web primitive first. See the [project structure lesson](lessons/structure.html) for rationale, examples, and tradeoffs.

## Accessibility is infrastructure, not an appendix

The new interface is designed around semantic headings, nav landmarks, skip links, clear native links/buttons, focus-visible outlines, responsive reflow, visible form labels, motion preferences, and forced-colors considerations. The interaction lab demonstrates the browser's own details, popover, and dialog primitives.

**Target:** WCAG 2.2 Level AA. This is a design goal, **not a claim of compliance**. The first prototype includes structural smoke tests and manual audit guidance, not a completed assistive-technology audit.

Before calling a version release-ready, do all of the following:

1. Run an automated accessibility audit with axe or equivalent on every route.
2. Test keyboard-only traversal, visible focus, and native dialog/popover behavior.
3. Test NVDA + a Chromium/Firefox browser and VoiceOver + Safari on representative paths.
4. Test at 200% text resize, 400% zoom, and narrow viewport reflow.
5. Test high-contrast/forced-colors, light/dark preference where implemented, and reduced-motion.
6. Inspect actual contrast ratios for body text, links, controls, and essential graphics.
7. Confirm captions/transcripts and media alternatives when new media is added.
8. Test the homepage catalogue and direct lesson navigation with JavaScript disabled.

Don't interpret a passing automated test as accessibility certification.

## Quality checks

The project uses Node's built-in test runner, no `node_modules` required:

```bash
node --test tests/site.test.mjs
```

The GitHub Actions workflow runs those dependency-free checks on branches and pull requests. They validate routes, internal links, main landmarks, skip links, titles, script/style paths, and a few architecture guardrails. They **do not replace** real-browser functional, visual, accessibility, or performance testing.

## Content principles

Each lesson should teach:
- **What problem did this feature solve?** Lead with the historical or user problem, not syntax.
- **What can I change?** Give a small, focused working example.
- **What did the browser do?** Explain the underlying model without invented certainty.
- **When shouldn't I use it?** Discuss alternatives and limitations.
- **What about accessibility and performance?** Normalize inclusive, measured design.
- **What should I build?** Offer a challenge that transfers the idea to new work.
- **Where can I confirm this?** Link to MDN, WHATWG, W3C/WAI, web.dev, and standards.

Feature-maturity language should follow [Web Platform Baseline](https://web.dev/baseline). Evolving features (for instance, portions of view transitions, anchor positioning, WebGPU and the proposed `<model>` element) should be introduced as optional enhancements where appropriate. Verify actual support before changing labels.

## Design and 21st.dev

The UI borrows general patterns common to modern visual component galleries—editorial type, tactile cards, navigable learning paths, and progressively disclosed experiments—but is **independently implemented** using plain HTML/CSS/JS. It does not import an unreviewed 21st.dev React component, animation library, or shader simply for decoration. Any later component adoption should include explicit review of license, source, keyboard interactions, reduced-motion behavior, and performance.

## Next iterations

- User testing with non-developers and junior developers; revise terminology and instruction pacing.
- More accessible live comparisons: responsive media, actual image file-size experiments, subgrid/container query comparison, native popover vs dialog.
- Further lessons: normal flow, box model, forms, typography, logical properties, advanced accessibility, scroll animation, performance profiling.
- Browser-tested interactions, automated axe/Playwright checks, visual regression tests and external-link verification.
- Carefully chosen downloadable practice exercises and additional annotations connecting 2018 source to modern code.
- Consider Astro/MDX only when editorial volume and content workflows justify a build pipeline; keep teaching samples close to native HTML/CSS.

## Original experiment archive

- [Grid](pages/grid/grid.html)
- [Flexbox](pages/flex/flex.html)
- [Bootstrap 4](pages/bootstrap/bootstrap.html)
- [Traditional / layered atmosphere](pages/traditional/traditional.html)

These files and original image assets remain intact. They are historical examples, including older patterns and dependencies; prefer the modern lessons for current guidance.

## References

- [MDN Curriculum](https://developer.mozilla.org/en-US/curriculum/)
- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/)
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Web Platform Baseline](https://web.dev/baseline)
- [web.dev Learn](https://web.dev/learn/)

## License

MIT, consistent with the original project's [LICENSE.md](LICENSE.md).