# AI Evolution Atlas

An illustrated, interactive history of artificial intelligence, created by
Taotao Cai. **Experimental course development / 课程开发测试版本.**
This is an independent learning resource, not the official UniSQ CSC2220
course website. Suggested modules, projects, weights, and rubrics are drafts.

Live: https://taotao1992.github.io/ai-evolution-atlas/

## Experience

- A faithful adaptation of the golden tree from slide eight of the supplied
  invited-talk deck, with 13 selectable historical landmarks, a chronological
  rail, an optional guided tour, restrained ambient motion, zoom, and an
  original-illustration dialog.
- Thirteen short history chapters, each with an editable SVG concept diagram,
  historical context, limitations, and source links.
- Twelve learning modules and four optional project briefs.
- Six frontier cases, three LLM lifecycle stages, nine research profiles,
  82 selected resources, six video entries, and three open research questions.
- Keyboard navigation, mobile layouts, reduced-motion support, and the
  existing installable/offline and native-wrapper behavior.

The illustration is a map of related ideas, not a formal taxonomy or proof of
historical causation. AI traditions overlap and continue in parallel.

## Development

```sh
npm run dev                 # zero-dependency development server
npm run check               # data, references, assets, and route checks
npm run offline-manifest    # refresh after adding/removing assets
python3 tools/build_diagrams.py # regenerate editable concept plates
```

Pushes to `main` trigger the existing GitHub Pages workflow. Only `index.html`,
`styles.css`, `main.js`, and `assets/` are published; local tooling stays out
of the deployment. No package installation or build step is required.

## Files

| Path | Purpose |
| --- | --- |
| `index.html` | Semantic page structure, navigation, identity and test-edition notes |
| `styles.css` | Shared editorial layout and responsive styles |
| `main.js` | Browser / service-worker entry point |
| `assets/app/course.js` | Content collections and chapter/library interactions |
| `assets/history-tree.js` | Original-artwork history interaction; no WebGL dependency |
| `assets/atlas.css` | Tree scene, landmark labels, rail and mobile controls |
| `assets/tree/` | Optimized cleaned tree and the exact original slide-eight image |
| `assets/diagrams/` | Deterministic SVG concept plates |
| `assets/fonts/` | Self-hosted Google Fonts and their OFL licenses |
| `assets/app/` | Installable app shell, manifest, offline asset list and worker |
| `docs/` | Design rationale and content review notes |

## Editing and review

Content data lives in the named arrays at the beginning of
`assets/app/course.js`. Keep IDs stable: module readings and project briefs
refer to library IDs. Add a corresponding landmark in `assets/history-tree.js`
when adding a history chapter. Counts are derived from the collections.

After an asset change, rebuild the offline manifest. For a release, update the
cache version consistently across `index.html`, `main.js`, `app-shell.js`,
`service-worker.js`, and the dynamic tree import in `course.js`.

First-party product pages state the provider’s claims; they do not establish
independent replication or endorsement. Historical entries distinguish
proposals, methods, benchmark results, and interpretations.

## Visual references and asset provenance

The user supplied `qld-sme-ai-2026-invited-talk (1).pdf`; its eighth page is the
source of the golden tree. The exact embedded JPEG is retained for the
original-view dialog. A built-in image edit removed all text, infographic
plaques, and icons while preserving the tree’s composition, colors, bark,
roots and foliage. The web copy is a 310 kB WebP; interactive text stays in
HTML. This is a 2D illustration with optional subtle parallax, not a 3D model.
The image-edit prompt is recorded in `docs/tree-art-direction.md`.

Design research included:

- [Distill](https://distill.pub/): explanations tied to a concrete visual.
- [Transformer Explainer](https://poloclub.github.io/transformer-explainer/):
  legible controls and interaction that reveals an idea.
- [Lusion](https://lusion.co/): one strong focal visual and restrained UI.
- [Bruno Simon](https://bruno-simon.com/): discoverable interaction and quality controls.
- [EZ-Tree](https://github.com/dgreenheck/ez-tree) and
  [Codrops](https://tympanus.net/codrops/hub/): procedural and interactive
  references considered before the user selected faithful 2D artwork.

No third-party site source code was copied. Fonts are Manrope, Instrument
Serif, and IBM Plex Mono, licensed under the bundled SIL Open Font Licenses.
