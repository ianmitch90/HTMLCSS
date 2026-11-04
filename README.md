# The Web Is a Material

**Learn how the browser works. Make something. Understand why.**

A free, interactive field guide to HTML, CSS, responsive design, accessibility, visual effects, and choosing the tools that belong in a project.

**[Explore the live guide](https://ianmitch90.github.io/HTMLCSS/)** · **[Start with the first lesson](lessons/browser.html)** · **[Browse the experiments](index.html#explore)** · **[See the original project](https://github.com/ianmitch90/HTMLCSS/tree/archive/original-2018-2020)**

> **See → manipulate → explain → break → rebuild → apply.**
>
> *Run it. Change it. Break it.* An invitation from the original project, continued.

## What is this?

This project began in **2018** as a small collection of experiments in what HTML and CSS could do. It explored CSS Grid, Flexbox, framework styling, and even the illusion of complex interactive effects without requiring a JavaScript application.

The modern version turns that same curiosity into a cohesive learning resource. Each lesson begins with a question, invites you to inspect or change something, and explains the browser behavior and tradeoffs behind the result. The aim is to help people **develop intuition**, not merely memorize properties.

You do **not** have to know how to code to explore it. You also do **not** have to build everything from scratch to benefit from understanding it.

This repository's **`master` branch is the current, canonical version**, and it is the source of the public site. The pre-revival project is preserved separately in **[`archive/original-2018-2020`](https://github.com/ianmitch90/HTMLCSS/tree/archive/original-2018-2020)**. You do not need that branch to use, modify, or run the new guide.

## Get started in under a minute

**Option A — No installation:** Open the **[live learning site](https://ianmitch90.github.io/HTMLCSS/)**. Choose a lesson and experiment in your browser.

**Option B — Explore the source locally:**

```bash
git clone https://github.com/ianmitch90/HTMLCSS.git
cd HTMLCSS

# Serve the current master branch with any local HTTP server:
python3 -m http.server 8000
```

Open **http://localhost:8000/**. Edit `index.html`, a lesson in `lessons/`, or a stylesheet in `styles/` and reload the browser to see your changes.

You can use a different static file server or an editor's local-server extension. **Python is only one convenient way to serve the files locally; the site does not use Python to render pages.** There are no `npm install` steps, application credentials, database, runtime packages, React hydration, or bundler required to run the main guide.

If you already have an earlier clone, switch back to the canonical branch and update it:

```bash
git switch master
git pull --ff-only origin master
```

The educational site is intentionally a collection of real HTML documents. If opening `index.html` directly with a `file://` URL causes module or origin restrictions, use the local HTTP server above.

## Choose your own learning path

There is no required order. These suggested paths are just ways to find the next useful question.

| If you are… | Start here | Then explore |
| --- | --- | --- |
| **Curious, but not a developer** | [Why browsers need HTML](lessons/browser.html) | [Native interactions](lessons/interaction.html) → [Do I need a library?](lessons/toolkit.html) |
| **Learning to make websites** | [Project structure and URLs](lessons/structure.html) | [Grid](lessons/grid.html) → [Flexbox](lessons/flex.html) → [Responsive composition](pages/grid/grid.html) |
| **A designer or visual explorer** | [CSS color](lessons/color.html) | [Media decisions](lessons/media.html) → [CSS-only creative studio](lessons/css-only.html) → [Visual effects](lessons/effects.html) |
| **A developer evaluating architecture** | [Native vs reusable tools](lessons/toolkit.html) | [Modern CSS](lessons/modern.html) → [Growing a static site](lessons/growing.html) |
| **Interested in inclusive design** | [Accessibility guide](accessibility.html) | [Native interactions](lessons/interaction.html) → [Media alternatives](lessons/media.html) |
| **Interested in the project's history** | [Origins studio](archive.html) | [Original pre-revival branch](https://github.com/ianmitch90/HTMLCSS/tree/archive/original-2018-2020) |

### How to use a lesson

Most lessons repeat the same learning loop:

1. **See** — start with an idea or working example.
2. **Manipulate** — adjust an input, change a layout, or inspect what the browser is displaying.
3. **Explain** — learn what the HTML/CSS means and what the browser is doing.
4. **Break** — intentionally challenge an assumption: narrow the width, remove a style, try a keyboard, or change a value.
5. **Rebuild** — apply the principle to a small exercise of your own.
6. **Apply** — decide when the technique is appropriate, when it isn't, and what accessibility or performance tradeoffs it introduces.

For example, in the [Grid composition viewer](pages/grid/grid.html), start with the original artwork, switch to Desktop/Tablet/Mobile, and adjust the desktop width slider. Those frames use **real embedded HTML documents and CSS media queries**; they are not just screenshots scaled down to resemble devices. Then open [the Grid lesson](lessons/grid.html) to experiment with tracks and gaps directly.

If a code example seems mysterious, use your browser's **View Source** or **Developer Tools**. This guide is meant to be taken apart.

## Explore the curriculum

There are **13 standalone lessons**, plus four modernized origin exhibits and one isolated, real Bootstrap example.

| Area | Lessons and experiments | What you'll understand |
| --- | --- | --- |
| **Foundations** | [The browser and HTML](lessons/browser.html) · [Project structure and routing](lessons/structure.html) | Semantic documents, the DOM, real links, relative paths, shared assets, and progressive enhancement |
| **Layout** | [CSS Grid](lessons/grid.html) · [Flexbox](lessons/flex.html) · [Responsive composition](pages/grid/grid.html) | One-dimensional versus two-dimensional layout, tracks, alignment, resizing and responsive reflow |
| **Interaction** | [Native HTML interactions](lessons/interaction.html) | Links versus buttons, keyboard focus, disclosure widgets, popovers and dialogs |
| **Graphics and media** | [Modern CSS color](lessons/color.html) · [SVG, image or video?](lessons/media.html) · [Clipping and effects](lessons/effects.html) | Color spaces, file-format choices, masks, filters, blending, rendering costs and accessible alternatives |
| **Creative CSS** | [CSS 3D](lessons/spatial.html) · [CSS-only studio](lessons/css-only.html) | Perspective, luminous cards, a traveling-edge glow, animated SVG, simple charting and state-driven mini-games |
| **The evolving platform** | [Modern CSS](lessons/modern.html) | Container queries, subgrid, nesting, cascade layers, relational selectors and feature maturity |
| **Tools and growth** | [Libraries and design systems](lessons/toolkit.html) · [From static site to application](lessons/growing.html) | Bootstrap versus Tailwind, component systems, JavaScript, server frameworks, maintenance and deciding what to reuse |

**[The accessibility guide](accessibility.html)** is its own track *and* a recurring consideration in every technical lesson. Its goal is to make inclusive design part of the first decision, not a last-minute checklist.

### Do I need to learn every library?

No. The [toolkit lesson](lessons/toolkit.html) explains the difference between native web features, CSS frameworks, utility-first CSS, styled component libraries, headless primitives, Web Components, design systems, and templates.

It introduces established options such as Bootstrap, Tailwind, Material UI, Fluent UI, Carbon, React Aria, and jQuery, along with more situational choices. The purpose isn't to pick a fashionable winner. It's to understand **what problem a library solves, what you still own, and what you must maintain**.

For a practical demonstration, [this isolated Bootstrap starter](examples/bootstrap-live.html) loads an actual, version-pinned Bootstrap distribution. The main site itself does not depend on Bootstrap. That separation is intentional: learn how to use a real library without making every lesson depend on its CDN.

## How this repository works

This project is intentionally a **multi-page static website**, not a client-side routed application.

```text
HTMLCSS/
├── index.html                  # Landing page and lesson catalogue
├── accessibility.html          # Inclusive design track
├── archive.html                # Modern origins studio and history links
├── lessons/                    # 13 individually addressable .html lessons
│   ├── browser.html
│   ├── structure.html          # Explains this architecture
│   ├── grid.html
│   ├── css-only.html
│   ├── toolkit.html
│   ├── growing.html
│   └── ...
├── pages/                      # Reimagined origin experiments
│   ├── grid/
│   │   ├── grid.html           # Original, desktop, tablet and phone views
│   │   └── preview.html        # Embedded document with actual @media rules
│   ├── flex/flex.html
│   ├── bootstrap/bootstrap.html
│   └── traditional/traditional.html
├── examples/
│   └── bootstrap-live.html     # Optional real library integration
├── styles/
│   ├── site.css                # Shared typography, navigation and tokens
│   ├── labs.css                # Interactive lessons only
│   ├── exhibits.css            # Origins exhibits only
│   ├── css-only.css            # Creative CSS studio only
│   ├── grid-preview.css        # Media queries inside embedded viewport
│   └── grid-responsive.css     # Viewing-mode controls and device frames
├── scripts/
│   ├── site.js                 # Optional motion preference
│   ├── catalogue.js            # Homepage filtering
│   ├── labs.js                 # Adjustable experiment controls
│   └── grid-responsive.js      # Viewing tabs, slider and frame scaling
├── tests/site.test.mjs         # Dependency-free structural smoke tests
└── .github/workflows/          # Automated checks
```

### Why separate HTML pages?

Because **URLs and navigation are part of the curriculum**. A link from `lessons/grid.html` back to `../index.html` is a normal document navigation. Deep links, bookmarks, refresh, back/forward history, and meaningful content all work without a JavaScript router.

Each page links to the shared stylesheet, which browsers can cache across navigation. Extra CSS and JavaScript load on the pages that use them. That's a straightforward example of **page-level resource splitting**—not an attempt to imitate a bundler-generated chunk system.

A static site generator or framework could make larger-scale content maintenance easier later. For now, the simplest architecture is also one of the things this project teaches.

### Does “CSS-only” mean no JavaScript anywhere?

No. Some learning controls use small JavaScript modules, and the optional motion-preference control is implemented in `site.js`. But the **visual effects and interaction state in the [CSS-only studio](lessons/css-only.html)**—including the card edge, SVG path, chart mode and mini-game choices—use HTML and CSS themselves.

That distinction matters. CSS can express a surprising amount of visual behavior, but it is not a replacement for secure validation, complex game rules, data transformations, persistence or reliable live announcements to assistive technologies.

### What dependencies are required?

**For the main site:** none beyond a modern browser and an HTTP file server when working locally.

The visual lessons and rebuilt origin exhibits do not need external fonts, image hosting, component packages or animation services to render. Links to documentation, reference sites, and the original source naturally lead to external resources. The standalone Bootstrap example is an explicit exception: it uses a pinned CDN distribution with Subresource Integrity to demonstrate how a real library is imported.

## Test, experiment and contribute

The repository includes structural checks using Node's built-in test runner. No package installation is required:

```bash
node --test tests/site.test.mjs

node --check scripts/site.js
node --check scripts/catalogue.js
node --check scripts/labs.js
node --check scripts/grid-responsive.js
```

These tests cover direct document routes, local paths and anchors, navigation, markup conventions, the independent responsive Grid layouts, and certain accessibility foundations. They are **not** a substitute for browser rendering, visual comparison, performance testing or a complete accessibility audit.

**Accessibility target:** WCAG 2.2 Level AA. This is an engineering and design goal, **not a claim of verified conformance**. Before treating a change as production-ready, test keyboard navigation, visible focus, zoom and reflow, reduced motion, contrast, relevant screen readers, and the browsers/devices your audience uses.

Want to explore the code or make a change? A good first experiment is to:

- Change a design token in `styles/site.css` and see where it appears.
- Adjust an exercise in `lessons/`, keeping its semantic HTML intact.
- Explore the real CSS media queries in `styles/grid-preview.css`.
- Compare a simple effect in `styles/css-only.css` against the same outcome built with JavaScript.
- Run the tests, then check the result with your keyboard and browser inspector.

For a proposed contribution, keep the educational goals in mind: **teach the reason, use the platform appropriately, preserve accessibility, state tradeoffs clearly, and avoid adding a dependency without a specific benefit.** Fixes, clarifications, accessible examples, and maintenance improvements are all useful.

## The original project is preserved

The original project explored CSS at a time when many of today's layout and interaction capabilities were still new or less widely used. Among its goals were:

- Showing the expressive possibilities of Grid and Flexbox.
- Demonstrating how to include and use Bootstrap directly.
- Creating the *illusion* of scripted zoom and atmospheric effects with HTML and CSS.
- Encouraging readers to inspect the source instead of treating a visual effect as magic.

The modern Origins studio revisits those ideas as self-contained examples. **It is not a verbatim reproduction of the 2018 site.**

If you want the original code as it stood immediately before the revival, go directly to:

**[Original project archive branch: `archive/original-2018-2020`](https://github.com/ianmitch90/HTMLCSS/tree/archive/original-2018-2020)**

That branch points to the historical pre-revival commit `3f31dbedf70553d919d1a55de04cf175d8d75372`. It preserves the old structure, assets and dependencies for reference. Some of those remote resources may no longer work, which is part of the reason the current version was made more self-contained.

You can inspect or locally check out the archive without changing the primary installation instructions:

```bash
git fetch origin
git switch --detach origin/archive/original-2018-2020
# To return to the current project:
git switch master
```

Please use `master` for the modern learning experience and new contributions. The archive is there to make the evolution visible.

## Why I revived this project

*An author's note*

I originally built this project out of curiosity: I wanted to understand what the browser could do with HTML and CSS alone, and I wanted other people to be able to run the code, change it, and discover things for themselves.

Revisiting it years later felt especially relevant because of how quickly software development is changing. AI-assisted tools can now help produce an extraordinary amount of working code. That lowers the barrier for people who aren't developers, and it changes what experienced engineers spend their time doing. I see that increased access as a good thing.

**I used AI assistance extensively to revive this project.** I'm not hiding that. The new curriculum, design and implementation grew through an iterative conversation: research, generating code, examining the results, identifying mismatches, and making targeted corrections. I provided direction, reviewed the work and kept refining how the examples connected to the actual intent of the original project.

That process also reinforced something I don't want to lose: **understanding the fundamentals matters even more when generating code becomes easier**.

An assistant can create a plausible page quickly. It may also make reasonable-looking assumptions about things that weren't fully specified. Is this a single-page application or a collection of real HTML routes? Is a glowing border supposed to rotate, or should only the light travel around a stationary edge? Is an old Bootstrap example a history lesson, or is its real purpose to demonstrate using the actual library? Small distinctions like these change the implementation.

Good review is not just noticing that something looks wrong. It is having enough context to explain **why** it is wrong, which constraint matters, and how to fix it without introducing unnecessary changes elsewhere.

I don't think this needs to become an argument about “vibe coding” versus traditional engineering. People arrive with different levels of knowledge and different goals. AI tools can help all of us explore more. But accessibility, browser behavior, user experience, systems thinking, and thoughtful constraints are not made obsolete by automation. They are part of how we steer it.

This is a small project, deliberately so. It offers a concrete, freely available example of what can happen when an older learning resource is revisited with new tools **and** an understanding of the platform underneath them.

I want the project to be useful whether you're opening your first HTML file, exploring design, or reviewing the work of an AI coding agent. Learn the primitives; use libraries when they save you meaningful work; ask better questions as your understanding grows.

The repository also preserves the pre-revival source and the [AI-assisted development pull request](https://github.com/ianmitch90/HTMLCSS/pull/2), so the process is visible rather than presented as a mysterious finished artifact.

— **Ian Mitchell**

## Keeping the guide useful over time

This is meant to be a **free, open educational resource**, not a course that requires an account or an ongoing dependency on a proprietary service. Some examples explore newer CSS features, and browsers and libraries will continue to evolve. Where a feature is experimental, the lessons aim to say so; follow official documentation and [Web Platform Baseline](https://web.dev/baseline) when compatibility matters.

Future improvements can be small: fix a misleading explanation, simplify a demo, improve keyboard support, update a standards reference, or add a new experiment. There's no requirement to chase every framework release or rebuild the site's architecture for each trend.

### Recommended references

- [MDN Curriculum](https://developer.mozilla.org/en-US/curriculum/)
- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/)
- [W3C Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C WAI Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Web Platform Baseline](https://web.dev/baseline)
- [web.dev Learn](https://web.dev/learn/)

## License

[MIT](LICENSE.md), consistent with the original project.

---

**[Explore the live guide](https://ianmitch90.github.io/HTMLCSS/)** · **[Browse the source](index.html)** · **[Study the original branch](https://github.com/ianmitch90/HTMLCSS/tree/archive/original-2018-2020)**
