# Content and experience review — 29 October 2026

## Scope and changes

Reviewed the home, history, learning path, project briefs, current briefing,
frontier cases, lifecycle, research profiles, resource library, videos, and
research questions. Kept source URLs and stable content IDs where possible.

- Renamed the live site, document titles, structured data, installable app,
  personal-homepage showcase, and Teaching feature to **AI Evolution Atlas**.
  Added the English and Chinese course-development/test-edition note. Removed
  university course identity from the atlas; retained factual academic course
  listings on the personal website.
- Replaced the simplified WebGL tree with the supplied illustration, cleaned
  without its annotations. Added interactive historical landmarks, chronological
  selection, chapter links, original viewing, zoom/reset, an optional guided
  tour, motion controls, and a readable phone layout.
- Added Turing and symbolic AI. Revised all 13 history entries to distinguish
  proposals, methods, benchmark evidence, and interpretation. Corrected the
  impression that backpropagation originated in 1986 and the implication that
  agents necessarily descend from language models.
- Added 13 editable concept plates, one for every history entry. Schematic
  figures explicitly avoid claiming exact model dimensions or measured data.
- Revised all nine research profiles, all six frontier introductions and all
  three lifecycle stages. Removed investment/funding language as evidence of
  technical capability; shortened promotional superlatives in the resource copy.
- Clarified that the twelve learning modules and four project briefs are
  experimental suggestions. Added background guidance. Preserved readings,
  learning outcomes, experiments, project requirements, and 100-point rubrics.
- Replaced the parked `harnessengineering.academy` resource with OpenAI’s
  first-party harness-engineering account. Corrected Marble from image
  generation to persistent 3D-world generation. Reclassified the Navier–Stokes
  announcement as a research account rather than a paper, directing readers
  to its linked writeup and Lean artifact.
- Added Turing, McCarthy, Transformer Explainer, and Distill to the shelf:
  82 entries in total. Source domains are visible in the resource list.
- Simplified the navigation and repeated home content; made the header
  available while reading. Updated mobile library details, preserved keyboard
  controls, reduced-motion behavior, and native-wrapper route state.
- Removed the unused Three.js engine and renderer. Self-hosted the fonts and
  bundled their licenses. Optimized the principal tree to a 310 kB WebP.

## Source checks

A batch HTTP check covered 89 distinct existing source URLs. Eight YouTube
URLs returned HTTP 429 to automated requests, so their direct availability was
not certified by this check. The other 81 returned successful responses;
successful HTTP status alone was not treated as content validation. The
harness academy redirected to a domain-sale page and was replaced.

Separately inspected first-party material for Beam, Gemini 4 Argon, the
Navier–Stokes announcement, Recursive, Sakana RSI, Thinking Machines
interaction models, Seedance’s technical report, World Labs taxonomy and
Marble, OpenAI’s harness-engineering account, Turing’s paper, McCarthy’s
logical-AI proposal, and the Agents SDK sandbox documentation. Provider
statements remain attributed; inclusion does not imply independent replication.

Design research considered Distill, Transformer Explainer, Lusion, Bruno
Simon, Codrops, and EZ-Tree. The final illustration follows the user’s explicit
preference for the actual slide-eight tree, not a procedural substitute.

## Validation

`npm run check` verifies collection IDs, valid source URL syntax, reading and
project references, 100-point rubrics, local image paths, HTML references,
route anchors, required DOM elements, offline assets, landmark coverage, and
independent branding. JavaScript syntax checks pass. The GitHub Pages workflow
runs the same content check before publishing.

Browser checks cover all section routes; tree hotspot/next/keyboard selection;
original illustration opening; tree-to-history navigation; compound resource
search and type filters; empty-state/reset behavior; pagination; topic filters;
module next/end navigation and the last-module disabled state; linked project
expansion; lifecycle and frontier selection; research filters; and image loads.
Responsive checks use phone and tablet iframe viewports in the managed
preview. Production publication and final verification are recorded in the
release commit and deployment, not inferred from local preview success.
