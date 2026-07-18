# AI Evolution Atlas — CSC2220 Artificial Intelligence

A single-page interactive atlas for **CSC2220 Artificial Intelligence** at the
University of Southern Queensland (UniSQ), created by Taotao Cai. It maps the
field from Dartmouth and backpropagation through transformers, LLMs, reasoning
models, agents, the training-to-inference infrastructure stack, frontier labs,
and world models — with every claim linked to a primary source (paper, official
docs, talk, or product page).

## File structure

```
index.html      # Page markup: hero, guide, timeline, frontier, LLM stack,
                # labs, library, watch, future, footer
styles.css      # Design system (dark ink + ice cyan/amber), layout, responsive
main.js         # Content data arrays + all rendering/interaction logic
assets/         # Images: SVG diagrams, generated art, watch thumbnails,
                # and 560x360 cover cards under assets/covers/<collection>/
scripts/        # Local dev server (zero dependencies)
tools/          # Maintenance scripts (e.g. cover generator); not deployed
.github/        # GitHub Actions workflow for Pages deployment
```

## Run locally

```bash
npm run dev                 # http://127.0.0.1:7100
npm run dev -- --port 8080  # custom port (or PORT=8080)
```

Any static file server works too (`python3 -m http.server`, `npx serve`, …).

## Deployment

Pushing to the default branch triggers the GitHub Actions workflow in
`.github/`, which publishes to GitHub Pages. Only these paths are deployed:

- `index.html`
- `styles.css`
- `main.js`
- `assets/`

Everything else (`scripts/`, `tools/`, this README) stays repo-local.

## Editing content

All site content lives in the data arrays at the top of `main.js`:

| Array             | Section                       |
| ----------------- | ----------------------------- |
| `timelineItems`   | AI history timeline           |
| `frontierItems`   | Frontier systems tabs         |
| `lifecycleStages` | LLM pre/post-training + inference |
| `labItems`        | Neo-lab cards + detail panel  |
| `libraryItems`    | Curated library grid          |
| `watchItems`      | Video cards                   |

Hero and "What's inside" counts are derived from these arrays automatically
(`data-metric` / `data-source-count` attributes in `index.html`), so adding an
item updates the numbers — no manual count edits needed.

### Cover images

Detail panels and cards resolve artwork to
`./assets/covers/<collection>/<id>.jpg` unless the item declares an explicit
`image` field; a missing file falls back to `assets/generated/ai-atlas-motif.jpg`.
Covers are 560×360 dark typographic cards; `tools/generate_covers.py` regenerates
the most recent additions in the same style.
