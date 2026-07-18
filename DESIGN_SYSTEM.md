# Design system

## Positioning

The portfolio behaves like a field notebook and an evidence dossier, not a generic software landing page. Every visual decision supports scanability, provenance, and technical credibility.

## Tokens

- Paper `#fbfaf6`: primary surface
- Canvas `#f1eee6`: page background
- Ink `#15171b`: primary text
- Signal `#ff4d2f`: primary action and status marker
- Blue `#2457ff`: analytical link and system accent
- Acid `#d9ff55`: sparing highlight

The UI uses system sans and monospace stacks to avoid font-loading latency and to keep the editorial voice consistent.

## Components

- **Case file:** title, role, evidence, validation, limitations, architecture, and next steps.
- **Evidence strip:** short quantitative or factual claims with clear labels.
- **Editorial card:** square corners, hard shadow, strong border, no decorative glass.
- **Status marker:** compact monospace label for dates, project state, and provenance.

## Interaction rules

- Keyboard focus is always visible.
- Links describe their destination; icon-only controls receive accessible labels.
- Motion is optional and removed under `prefers-reduced-motion`.
- Contrast targets WCAG AA for body text.
- Layout checkpoints: 375, 768, 1024, and 1440 px.
- Decorative gradients, fake dashboards, fabricated metrics, and autoplay effects are excluded.
