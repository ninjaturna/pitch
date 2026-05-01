# Combined Solution Architecture
## SIGNAL × Pitch → Launch Deck Maker (LDM working name)

**Author:** Tam Danier · **Date:** May 2026 · **Status:** Phase 1 scope locked

---

## The decision

**Slidev is the runtime. SIGNAL's content-doc format is the input. The Launch theme is the bridge.**

You are not merging two codebases. You are picking Slidev as the engine and porting the *valuable ideas* from SIGNAL into it: the structured content-doc template, the parser logic, and the brand tokens.

Why this works:

1. Slidev gives you presenter mode, click animations, PDF export, Mermaid diagrams, code highlighting, and Netlify-ready static builds — all out of the box. Rebuilding any of these inside SIGNAL's React stack would consume your CC budget for weeks.
2. SIGNAL's `parseContentDoc.ts` is genuinely good code. The HEADING/SUBHEADING/BODY/NOTES format is portable. It compiles to Slidev markdown just as easily as it compiles to React.
3. The Launch brand becomes a Slidev theme — colors, fonts, and 8 slide layouts that mirror SIGNAL's slide types. Once it exists, every deck is brand-consistent by construction.
4. Your "1 hour MVP, 5 min CC budget" constraint is only realistic on this path. The Slidev-side scope is small enough to ship.

---

## What stays, what goes, what's new

### Keep from SIGNAL (port over)
- **The content-doc template** (`signal-content-doc-template.md`) — the authoring format
- **`parseContentDoc.ts` logic** — adapt the parser to emit Slidev markdown instead of `SlideData[]`
- **The 8 slide-type taxonomy** — cover, narrative, stat-grid, two-pane, section-break, full-bleed, diagram, closing
- **Brand tokens** — `#1E5AF2` blue, gold accent, ink `#111113`, DM Sans / DM Mono
- **The HPI content doc** (delivered alongside this brief) — first real-world test asset

### Keep from Pitch (it IS the runtime)
- Slidev CLI, build pipeline, dev server
- `netlify.toml` with the rewrite rule and Node 20 build config
- `package.json` Slidev dependencies
- `vercel.json` — keep it as a fallback option, but Netlify is primary

### Drop / defer
- **Drop:** SIGNAL's React rendering pipeline, `SlideViewer`, `SlideShell`, `DeckDashboard`, all `src/components/slides/*` — Slidev replaces all of this
- **Drop:** Vercel serverless functions for AI co-pilot — not in MVP scope
- **Drop:** Image upload layer, draggable image positioning — deferred
- **Defer:** Polls (`SlidePoll`), embeds (`SlideEmbed`), AI graphic co-pilot, link tracking, deck dashboard with analytics — these are SIGNAL's "phase 3+" features. Get the brand-consistent live link working first.
- **Defer:** Brandfetch logo service, theme selector heuristic — Phase 2

### Build new (Phase 1)
- **`scripts/convert.ts`** — Node script: SIGNAL content-doc → Slidev `slides.md`
- **`themes/launch/`** — local Slidev theme: Launch brand layouts (light + dark variants)
- **`content/`** — folder of authored content docs (HPI lives here)
- **One npm script** — `npm run pitch -- content/hpi.md` builds and serves

---

## File structure (target)

```
launch-deck-maker/
├── README.md
├── package.json                  ← Slidev + tsx for the converter
├── netlify.toml                  ← from Pitch, unchanged
├── vercel.json                   ← from Pitch, kept as fallback
├── .gitignore
│
├── content/                      ← authored content docs (SIGNAL format)
│   ├── _template.md              ← copy of signal-content-doc-template
│   └── hpi.md                    ← the HP Inc pitch
│
├── scripts/
│   └── convert.ts                ← content-doc → slides.md converter
│
├── themes/
│   └── launch/                   ← local Slidev theme
│       ├── package.json          ← name: slidev-theme-launch
│       ├── layouts/
│       │   ├── cover.vue         ← maps to SIGNAL 'cover'
│       │   ├── narrative.vue     ← maps to 'narrative'
│       │   ├── stat-grid.vue     ← maps to 'stat-grid'
│       │   ├── two-pane.vue      ← maps to 'two-pane'
│       │   ├── section-break.vue ← maps to 'section-break'
│       │   ├── full-bleed.vue    ← maps to 'full-bleed'
│       │   ├── diagram.vue       ← maps to 'diagram'
│       │   └── closing.vue       ← maps to 'closing'
│       ├── styles/
│       │   ├── tokens.css        ← Launch brand variables (light + dark)
│       │   └── index.css
│       └── components/
│           └── LaunchFooter.vue  ← persistent footer
│
├── decks/                        ← generated Slidev decks (one per content doc)
│   └── hpi/
│       ├── slides.md             ← OUTPUT of convert.ts
│       └── (slidev runs from here)
│
└── dist/                         ← Slidev build output → Netlify
```

---

## How the pipeline runs

```
1. Author writes content/hpi.md in SIGNAL format
2. npm run pitch -- hpi
   ├── runs scripts/convert.ts
   ├── reads content/hpi.md
   ├── strips internal scaffolding (already done in template format)
   ├── writes decks/hpi/slides.md with Launch theme frontmatter
   ├── starts Slidev dev server pointed at decks/hpi/
3. Author iterates → Slidev hot-reloads
4. npm run build:hpi
   ├── slidev build decks/hpi/
   ├── outputs to dist/hpi/
5. git push → Netlify auto-deploys → live link
6. npm run pdf:hpi → slidev export → hpi.pdf
```

Sharing model — every deck is a live URL on Netlify (`yourdomain.com/hpi/`). Update the content doc, push, link reflects. PDF download is `slidev export` on demand. No tracking yet — that's a Phase 2 add-on (Vercel/Netlify analytics or a simple pixel).

---

## Converter logic (the core mapping)

| SIGNAL content doc | Slidev output |
|---|---|
| `### SLIDE 0 \| WHERE HP STANDS TODAY` | `---` slide separator + frontmatter |
| `**HEADING**` | `# {{value}}` (h1) |
| `**SUBHEADING**` | `> {{value}}` (blockquote subtitle) |
| `**BODY**` (bullets) | bullet list |
| `**BODY**` with `LEFT:` / `RIGHT:` | `layout: two-pane` + slot syntax |
| `**FOOTER**` | `<!-- footer text -->` (rendered by theme) |
| `> **NOTES** ...` | `<!-- ${notes} -->` (Slidev presenter notes) |
| `> **GRAPHIC PROMPT**` | stripped in Phase 1 (Phase 2: Mermaid generation) |
| `### APPENDIX A \| ...` | regular slide with `layout: appendix` |
| Slide title contains "POLL" | stripped in Phase 1 (Phase 2: Vue poll component) |
| `[Metrics — bracketed text]` | passes through verbatim — visible in deck |

The converter detects which Slidev `layout:` to use by looking at the slide content shape:
- bullets in BODY → `layout: narrative`
- LEFT:/RIGHT: in BODY → `layout: two-pane`
- Slide N=0 or first slide → `layout: cover`
- Slide title starts with "CASE STUDY" → `layout: case-study` (a narrative variant)
- Last numbered slide → `layout: closing`

Any slide with `mode: dark` annotation in the content doc gets `class: dark` in Slidev frontmatter, triggering the dark variant of the theme.

---

## Light + dark theme variants

The Launch theme exposes both modes via CSS variables:

```css
/* themes/launch/styles/tokens.css */
:root {
  --launch-bg: #FFFFFF;
  --launch-ink: #111113;
  --launch-blue: #1E5AF2;
  --launch-gold: #FFCC2D;
  --launch-muted: #77706F;
  --launch-font-sans: 'DM Sans', system-ui, sans-serif;
  --launch-font-mono: 'DM Mono', monospace;
}

.slidev-layout.dark,
.slidev-layout[data-mode="dark"] {
  --launch-bg: #111113;
  --launch-ink: #FFFFFF;
  --launch-muted: #999999;
}
```

Authors switch a slide to dark by adding `mode: dark` in the content doc (SIGNAL's existing convention) — converter passes it through as Slidev frontmatter `class: dark`.

---

## Phase 1 deliverables (CC scope)

The first CC session produces:

1. Repo scaffold based on Pitch's `package.json` + `netlify.toml`
2. `themes/launch/` with **3 layouts** to start: `cover`, `narrative`, `closing` (the absolute minimum to render HPI)
3. `scripts/convert.ts` handling HEADING/SUBHEADING/BODY/NOTES + 3 layout types
4. `content/hpi.md` placed in repo
5. `decks/hpi/slides.md` generated, builds locally with `npm run dev`
6. One Netlify deploy proven end-to-end

Phase 2 adds the remaining 5 layouts (stat-grid, two-pane, section-break, full-bleed, diagram), the dark theme variant, and PDF download polish. Phase 3 adds polls, embeds, and tracking.

---

## Risk register

- **Slidev frontmatter is finicky.** YAML parsing breaks on unescaped quotes in headlines. Converter must escape — there is a known issue in SIGNAL's parser around this too.
- **Dark mode rendering of code/diagram blocks.** Slidev's default themes mix Shiki light/dark themes for code; Launch theme will need to set `colorSchema: dark` in Slidev config explicitly when a dark slide appears.
- **Netlify rewrite rule.** Pitch's existing `netlify.toml` redirects `/*` to `/index.html` which is correct for SPA-style Slidev builds. If you ever publish multiple decks side-by-side under one domain (e.g. `/hpi/` and `/q3-board/`), the rewrite needs scoping. Phase 2 problem.
- **The "1 hour MVP" claim only holds if Phase 1 ships exactly the 3 layouts above.** Adding stat-grid or two-pane in the first session is what blows the budget. Hold the line.

---

## What this gets you on day 1

- One command builds a Launch-branded deck from a markdown content doc
- Live URL on Netlify, updates on push
- PDF export via `slidev export`
- Speaker notes preserved from the content doc
- Bracketed metrics placeholders visible in the deck (Ted/Jason can fill them in by editing the content doc)
- A foundation that Phase 2 / 3 features (polls, AI co-pilot, tracking) plug into without rework

What it does *not* get you on day 1: AI generation, the dashboard UI, link tracking, polls, embeds, theme selector heuristics. Those are real SIGNAL features — they're just not on the MVP path.
