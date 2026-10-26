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
