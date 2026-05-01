# Launch Deck Maker — Pitch repo

A Slidev-based pipeline for generating Launch-branded client pitches from SIGNAL-format content documents.

## Phase 1 — What Works

- **Content → Slides converter** (`scripts/convert.ts`): reads a SIGNAL-format content doc from `content/<name>.md`, converts it to Slidev markdown in `decks/<name>/slides.md`
- **Launch theme** (`themes/launch/`): 3 layouts — `cover`, `narrative`, `closing` — with brand tokens (DM Sans, accent blue, gold)
- **HPI deck** (`content/hpi.md` → `decks/hpi/slides.md`): 7 main slides + 1 appendix, HP Inc pitch
- **Build pipeline**: `npm run build:hpi` → `dist/hpi/index.html`
- **Netlify deploy**: auto-deploys HPI deck at `/hpi/` on push

## Running the HPI deck

```bash
npm install --strict-ssl=false   # first time only; corp network requires SSL flag
npm run dev:hpi                  # convert + open dev server
npm run build:hpi                # convert + build to dist/hpi/
```

## Adding a new deck

1. Create `content/<name>.md` in SIGNAL content-doc format (see `content/hpi.md` as reference)
2. Add `dev:<name>`, `build:<name>`, and `export:<name>` scripts to `package.json` following the HPI pattern
3. Run `npm run convert -- <name>` to generate `decks/<name>/slides.md`

## SIGNAL content-doc format

Each slide section uses:
```markdown
### SLIDE N | SLIDE TITLE

**HEADING**
The headline.

**SUBHEADING**
Supporting framing.

**BODY**
- Bullet point
- [Placeholder brackets are preserved verbatim]

> **NOTES**
> Speaker note content (converted to Slidev presenter notes).

> **GRAPHIC PROMPT**
> Dropped in Phase 1 — Phase 2 adds Mermaid generation.
```

Layout rules applied by converter:
- First slide → `cover` (dark mode)
- Last main slide OR title contains "CONVERSATION" → `closing` (dark mode)
- All others → `narrative` (light mode)
- Appendix slides → `narrative` (light mode)

## Phase 1 — What's Deferred

Five layouts not yet implemented (Phase 2):
1. `stat-grid` — 2×2 or 3×3 metric tiles
2. `two-pane` — LEFT/RIGHT split; Phase 1 renders as sequential bullet groups
3. `section-break` — full-bleed divider slide
4. `full-bleed` — image or color fills the viewport
5. `diagram` — Mermaid generation from `> **GRAPHIC PROMPT**` blocks

Other Phase 2 work:
- Dark theme polish (full coverage beyond cover/closing)
- Multi-deck build (`build:all` for every `content/*.md`)
- README with authoring tutorial

## Known issues / notes

- `npm install` requires `--strict-ssl=false` on NTT DATA corporate network
- Slidev resolves `--out` relative to the slides file directory, so `../../dist/hpi` is correct in `build:hpi`
- `slidev export` requires Playwright (`npx playwright install chromium`) — not verified in Phase 1
- The `default/end/error` columns in Slidev's build output are its layout coverage matrix, not build errors

## Repo structure

```
content/           SIGNAL-format source documents
decks/
  _starter/        Original Slidev starter (reference)
  hpi/             Generated HPI slides (do not edit by hand)
scripts/
  convert.ts       Content-doc → Slidev converter
themes/
  launch/          Local Launch brand theme (3 layouts)
dist/
  hpi/             Built HPI deck (Netlify publishes this)
```
