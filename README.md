# The Web Is a Material
### Learn the browser. Make something. Choose your tools.

> See → manipulate → explain → break → rebuild → apply.
>
> Run it. Change it. Break it. The original idea, continued.

This project began in 2018 as an experimental HTML/CSS teaching resource. The revival makes those visual explorations part of a coherent, accessible, multi-page field guide: learners discover **why** web features exist, try them in practical experiments, and learn when to use a library rather than building from scratch.

## Start exploring

The published `master` branch remains untouched until this draft prototype is approved and merged. To view the current work, clone the `prototype/learn-the-web-2026` branch and run a local static server.

- [Discovery homepage](index.html) — guided learning paths and searchable lesson catalogue
- [Accessibility guide](accessibility.html) — meaningful HTML, keyboard focus, motion, contrast, zoom and testing
- [Origins studio](archive.html) — four visually unified, self-contained reinterpretations of the historical experiments
- [Why does a browser need HTML?](lessons/browser.html) — semantics, DOM and rendering
- [How should I organize a small website?](lessons/structure.html) — direct .html routes and source structure
- [CSS Grid lab](lessons/grid.html) — tracks, two-dimensional layout, ordering
- [Flexbox lab](lessons/flex.html) — flexible sizing, main/cross axes, wrapping
- [Native interaction](lessons/interaction.html) — focus, details, popover and dialog
- [Color systems](lessons/color.html) — CSS variables, OKLCH, color-mix and contrast
- [SVG, image or video?](lessons/media.html) — format decisions and media accessibility
- [Clipping, masking, filtering](lessons/effects.html) — shape, rendering, filters and blend modes
- [CSS 3D](lessons/spatial.html) — perspective vs WebGL/WebGPU and experimental model
- [Modern CSS](lessons/modern.html) — container queries, subgrid, nesting, layers, :has
- [Do I have to build everything from scratch?](lessons/toolkit.html) — **Bootstrap, Tailwind, Material UI, Fluent UI, Carbon, Radix, React Aria, Web Components, jQuery, and smaller tools**
- [How does a static page become an app?](lessons/growing.html) — **browser JavaScript, static generators, Node and Python backend options, progressive growth**

Every core lesson explains the problem, a visual example, the browser's behavior, tradeoffs, accessibility/performance considerations, an exercise and maintained references. Toolkit lessons explicitly support both casually curious learners and developers evaluating real-world stack choices.

## Run locally

```bash
git clone --branch prototype/learn-the-web-2026 https://github.com/ianmitch90/HTMLCSS.git
cd HTMLCSS
python3 -m http.server 8000
# Open http://localhost:8000/
```

The Python command is **only a development HTTP file server**. It is not the app's programming language or deployment dependency. Any static HTTP server can serve these files. GitHub Pages can serve them with no server-side Python process and no build step. Modern browser JavaScript powers only optional search, motion preferences and interactive labs.

## Source structure is a lesson too

```text
HTMLCSS/
├── index.html                  # Direct .html routing and catalogue
├── accessibility.html          # Dedicated inclusive-design guide
├── archive.html                # Origins studio
├── lessons/
│   ├── browser.html
│   ├── structure.html
│   ├── grid.html
│   ├── toolkit.html            # CSS/component/design-system choices
│   ├── growing.html            # Static-to-dynamic application choices
│   └── ...                     # Each lesson is a real HTML document
├── pages/
│   ├── grid/grid.html
│   ├── flex/flex.html
│   ├── bootstrap/bootstrap.html
│   └── traditional/traditional.html
├── styles/
│   ├── site.css                # Shared, cacheable design system
│   ├── labs.css                # Loaded only by interactive lessons
│   └── exhibits.css            # Loaded only by origins exhibits
├── scripts/
│   ├── site.js                 # Optional site motion toggle
│   ├── catalogue.js            # Homepage only
│   └── labs.js                 # Interactive lesson pages only
└── tests/site.test.mjs         # Dependency-free structural checks
```

A route like `lessons/grid.html` is a real document, not an instruction to a client-side router. The browser handles bookmarks, refresh, navigation history and relative URLs. Shared CSS is cached across pages, while the lab CSS and JS are explicitly included only where needed: **page-level resource splitting without a bundler**. A build tool or content generator may become useful later if duplicated editorial layouts become costly to maintain.

## Origins studio: preserving history, not stale dependencies

The original four exhibit URLs are still valid:

- [CSS Grid composition](pages/grid/grid.html)
- [Flexbox resource cards](pages/flex/flex.html)
- [Bootstrap to design systems](pages/bootstrap/bootstrap.html)
- [Layered atmospheric scene](pages/traditional/traditional.html)

They were **rebuilt as responsive, accessible, self-contained interpretations** using the same design system as the rest of the site. They no longer request Google Fonts, dynamic Unsplash/third-party image endpoints, old CDPN/S3 imagery, Pexels photos, or Bootstrap 4 from a CDN. The exhibits use native HTML/CSS and no unreviewed third-party runtime dependency. The Bootstrap exhibit explains the *idea* of framework conventions without actually installing Bootstrap as a production dependency.

The original versions remain permanently reviewable in the repository's historical Git commit:
[Open the pre-revival source snapshot](https://github.com/ianmitch90/HTMLCSS/tree/3f31dbedf70553d919d1a55de04cf175d8d75372).

Unused original images and legacy CSS were pruned from this prototype's working tree to reduce download/bloat and maintenance surface. Their history is preserved in Git; they were not simply overwritten or lost.

The landscape in the revised atmospheric exhibit uses an opt-in CSS depth toggle and honors reduced-motion preferences. The geometric composition and Flexbox cards require no remote illustrations, fonts or images.

## Libraries are choices, not prerequisites

See [the toolkit lesson](lessons/toolkit.html) for approachable and developer-focused comparisons:

- **Native browser primitives:** zero extra dependency, but the team owns consistency and custom accessibility.
- **Bootstrap:** an established CSS/UI toolkit usable with static HTML. Its modern JavaScript plugins no longer require jQuery.
- **Tailwind:** utility-first styling generally compiled into production CSS; the browser Play CDN is for experimentation only.
- **Material Design vs Material UI:** Google's design language vs a React component implementation.
- **Fluent, Carbon and Spectrum:** long-lived organization-level design systems with particular implementation libraries.
- **Radix and React Aria:** accessibility-focused components/primitives for appropriate framework stacks.
- **Web Components:** reusable custom elements, with framework-independent offerings available.
- **jQuery:** valuable for existing ecosystems and compatibility, not an automatic requirement for new work.
- **Alpine.js, htmx, component galleries:** situational explorations whose releases and integrations should be reviewed before adoption.

The guide intentionally avoids fragile version-number promises. Tools evolve; learners should consult the linked official docs, release/support policies, licenses, security information and actual bundle output when choosing a dependency. No framework automatically makes the finished site accessible.

## Quality checks

```bash
node --test tests/site.test.mjs
node --check scripts/site.js
node --check scripts/catalogue.js
node --check scripts/labs.js
```

The GitHub Actions workflow runs these checks on the prototype branch and pull requests. The tests verify real routes, local asset references, site navigation, focus/skip-link foundations, staged-exhibit independence from remote assets and the presence of the new toolkit curriculum.

**WCAG 2.2 Level AA is the target, not a claim of completed compliance.** Structural tests cannot replace real browser and assistive-technology audits. Before release, validate keyboard-only paths, screen readers, zoom/reflow, contrast, reduced-motion, forced-colors, browser interoperability and performance. Automated axe/Playwright, visual regression and ongoing link health checks are potential future improvements.

## Content longevity principles

1. Teach `why`, not only `how`; favor browser fundamentals that outlive current frameworks.
2. Use real links, semantic HTML and progressive enhancement.
3. Keep the required teaching experience independent of external fonts, images, CDN scripts and transient APIs.
4. Distinguish widely supported features from progressive enhancement and experimental APIs using [Web Platform Baseline](https://web.dev/baseline).
5. Prefer official, maintained documentation to personal blogs that might disappear.
6. Cover when not to use a feature or library, what it costs, and who must maintain it.
7. Make accessible behavior and performance part of the initial implementation.
8. Preserve the original project source through a pinned history reference while keeping current URLs useful.

## Editorial and design references

- [MDN Curriculum](https://developer.mozilla.org/en-US/curriculum/)
- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/)
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Web Platform Baseline](https://web.dev/baseline)
- [web.dev Learn](https://web.dev/learn/)

Visual-gallery ideas, including patterns on 21st.dev, informed this independently authored design. No third-party gallery component was copied or introduced without code, license, accessibility and support review.

## License

MIT, as in the original [LICENSE.md](LICENSE.md).
