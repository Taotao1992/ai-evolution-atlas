# 3D Evolution Atlas — design brief

## Concept

Turn the existing static hero emblem into a navigable spatial timeline: eleven verified milestones connected by a living evidence trail, with the visual restraint of the current editorial course atlas.

## Requirements checklist

- [ ] Use the existing `timelineItems` data; do not create a second content source.
- [ ] Render a real Three.js scene with orbit, zoom, milestone picking, animated evidence pulses, and depth.
- [ ] Provide visible previous/next, rotation, reset, and open-milestone controls.
- [ ] Selecting a milestone synchronizes the existing history detail; opening it scrolls to the history section.
- [ ] Keep the original SVG as a no-WebGL/no-JavaScript fallback.
- [ ] Support keyboard operation through native buttons and touch orbit through OrbitControls.
- [ ] Honor reduced motion, pause when hidden or offscreen, and clean up GPU resources on unload.
- [ ] Preserve all course, assignment, library, and mobile behavior.

## Existing visual feature → implementation

| Observed site feature | Scene decision |
| --- | --- |
| Deep navy editorial surfaces | Transparent renderer over a radial midnight-blue stage |
| Cyan primary accent and amber secondary accent | Cyan evidence trail; amber marks the selected milestone |
| Monospaced metadata and restrained panels | Compact HTML controls and a glass-like milestone readout |
| Existing orbital SVG language | True spatial orbit controls and layered elliptical guide rings |
| Primary-source chronology | One luminous curve through eleven nodes, ordered 1956–2026 |
| Mobile single-column reading | Dedicated shorter stage with retained controls and no page overflow |

## Layout and composition

- Desktop: right-hand square stage beside the existing hero copy; full timeline visible on first frame.
- Tablet: subdued decorative stage behind the hero copy; no hidden interactive controls.
- Mobile: 420 px-high stage below the hero copy with all controls restored.
- Abstract scene units: path spans about 13 units horizontally and 5 units vertically; camera begins at `(0, 1.2, 16)`.

## Palette and materials

- Background: `#050B14`; cyan `#6EE7FF`; mint `#87FFC1`; amber `#FFB86B`; violet `#B8A1FF`.
- Milestones: emissive icosahedral cores with larger additive halo sprites.
- Trail: low-radius tube with emissive core plus a restrained transparent outer sheath.
- Particles: seeded buffer geometry, no downloaded textures, additive soft-point shader.
- No realistic models, outdoor environment, shadows, or Blender routing: every element is abstract, generated, and interactive in Three.js.

## Interaction

- Drag: orbit; wheel/pinch: zoom; click/tap: select milestone.
- Previous/next buttons: ordered selection; rotation button: pause/resume; reset: restore camera and first milestone.
- Open milestone: synchronize and reveal the existing history detail.
- First frame shows controls and the current milestone readout.

## Performance budget

- Fewer than 100 draw calls and 100,000 triangles.
- At most 1,100 background particles on desktop and 650 on small screens.
- Pixel ratio capped at 1.75 desktop / 1.4 mobile; no shadow maps or post-processing.
- One requestAnimationFrame loop, suspended when the stage is offscreen or the document is hidden.
- Local, pinned Three.js 0.186.1 modules with MIT license; no runtime CDN dependency.

## Review views

1. Desktop 1440 px: full hero, selected milestone, controls.
2. Tablet 952 px: copy remains primary and no hidden UI overflows.
3. Mobile 390 px: touch stage, readout, controls, and page overflow.
4. Interaction: node selection, next/previous, pause, reset, and history handoff.
5. Reduced motion and simulated WebGL failure: static fallback and usable course content.

## Editorial and motion refinement — 26 October 2026

- [ ] Make the spatial timeline the primary hero subject without removing or rewriting course content.
- [ ] Add editorial typography contrast with Instrument Serif used only for the hero phrase; keep Manrope, Bricolage Grotesque, and IBM Plex Mono for reading and interface text.
- [ ] Widen the desktop canvas to approximately 1320 px and use a 0.88 / 1.12 copy-to-scene grid above 1150 px; retain the existing tablet and single-column mobile fallbacks.
- [ ] Establish one visual focal point: selected milestone scale 1.6, brighter amber treatment, quieter unselected labels, and a dimmer central lattice.
- [ ] Replace abrupt selection changes with a 1.05-second ease-out camera/target transition; cancel it immediately when the user starts orbiting.
- [ ] Use restrained 500–850 ms entrance and readout transitions with `cubic-bezier(0.16, 1, 0.3, 1)`; disable nonessential motion under reduced-motion preferences.
- [ ] Keep the rendering budget unchanged: under 100 draw calls and 100,000 triangles, no post-processing, no shadow maps, and no additional per-frame geometry allocation.
- [ ] Version the CSS and JavaScript URLs so returning visitors do not execute stale deployment assets.

The refinement deliberately avoids more bloom, extra panels, or continuous large-amplitude movement. The intended impression is a quiet editorial interface around a precise, cinematic scientific instrument.

## Independent reading views — 26 October 2026

- Present the brand byline as `Taotao Cai · COURSE FIELD GUIDE · 2026`; retain UniSQ in the course attribution and structured metadata.
- Turn the primary navigation into focused reading views without changing the existing fragment URLs. Home combines the 3D hero and course guide; History includes the milestone ribbon; every other tab shows only its own section.
- Resolve nested fragments such as `#assignments` and `#assignment-a3` to their parent view, preserve native back/forward navigation, and keep `#main` as an accessible skip-link target.
- Update the active tab with `aria-current="page"` and give each view a specific document title.
- Use a restrained 560 ms opacity/vertical transition between views, disabled by the existing reduced-motion treatment.
- Apply `hidden` only from JavaScript so the complete long-form document remains available when scripting is unavailable.
