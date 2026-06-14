---
name: connecta-design
description: Use this skill to generate well-branded interfaces and assets for Connecta — a safe communication + AI learning platform for European schools and families (children, teachers, parents, schools). Covers visual + verbal language for the chat app, parent portal, teacher workspace, school admin, Socratic learning canvas, and marketing. Use for production code or throwaway prototypes/mocks.
user-invocable: true
---

Read `README.md` in this skill first — it's the source of truth for voice, audiences, the school graph, and the two AI characters. Then explore the other files as needed.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and apply the rules in `README.md` and `colors_and_type.css`.

**Building UI in code? Use PrimeReact.** Any interface implementation (screens, dialogs, forms, menus, tables, date pickers, toasts) must be built from [PrimeReact](https://primereact.org) components themed through the Connecta preset — never a hand-rolled or alternate component library. See `README.md` → *Component implementation* and `Connecta PrimeReact Bridge.html`. `primereact-connecta.css` is the themed reference; `preview/primereact-*.html` shows each family. (The old Tamagui code export has been removed.)

If the user invokes this skill without other guidance, ask them what they want to build, ask follow-ups (which audience? which surface? Bulgarian or English? Socratic, GoodTalk, or neither?), then act as an expert designer who outputs HTML artifacts *or* production code.

## Quick map
- `colors_and_type.css` — drop-in tokens.
  - Brand: `--connecta-coral`, `--connecta-lime`, `--connecta-sky`, `--connecta-plum`, `--connecta-olive`, `--connecta-ink`, `--connecta-paper`.
  - Semantic: `--fg-1..4`, `--bg-page`, `--border-1..strong`, type scale `--t-*`, spacing `--s-*`, radii `--r-*`, shadows `--shadow-*`, motion `--ease-*` / `--dur-*`.
  - GoodTalk safety states: `--state-nudge-*`, `--state-pause-*`, `--state-warn-*`, `--state-alert-*`, `--state-ok-*`.
  - Socratic learning: `--socratic-bg`, `--socratic-fg`, `--socratic-accent`, `--state-learn-*`, `--state-progress-*`.
  - Audience scopes: `--scope-child-*`, `--scope-teacher-*`, `--scope-parent-*`, `--scope-school-*`, `--scope-socratic-*`.
  - Role badges: `--role-child-*`, `--role-teacher-*`, `--role-parent-*`, `--role-school-*`, `--role-socratic-*`, `--role-goodtalk-*`.
  - Brand washes (marketing only): `--wash-sunrise/dusk/night/socratic/meadow/paper/heat/calm`.
  - Photo scrims: `--scrim-bottom`, `--scrim-top`, `--scrim-vignette`.
- `assets/` — wordmark logos (4 colorways), app-icon "nn" glyph (**4 official + 19 extended colorways** + 4 bare), brand-sheet & mood reference.
- `fonts/` — DM Sans variable font (italic + roman). Self-hosted. Covers full Cyrillic for Bulgarian launch.
- `ui_kits/chat-app/` — kid/teen mobile chat with GoodTalk nudge.
- `ui_kits/parent-portal/` — guardian dashboard.
- `preview/` — token + principle spec cards (incl. `primereact-*` component proofs).
- `primereact-connecta.css` — the component layer: PrimeReact structure themed with Connecta tokens.
- `Connecta PrimeReact Bridge.html` — how to wire PrimeReact into an app (Connecta preset / passthrough).

## Brand non-negotiables (do not violate)
- **PrimeReact is the only component library.** Implement every UI in code with PrimeReact, themed via the Connecta preset (ink = primary/focus, coral = error only, lime = highlight). No alternate libraries, no bespoke widgets. (Tamagui has been removed.)
- **Private by default. Reacts only on risk. Teaches better communication. Teaches better thinking.** Repeat verbatim where shown.
- The four audiences are **child / teacher / parent / school** — each has its own tone of voice and ambient surface scope. Don't mix them.
- The school graph is canonical: `school → class → circle → child ↔ parent ↔ teacher`. Reference it; don't flatten it.
- **Two AIs, never confused.** GoodTalk = safety (lime/olive coaching + plum alert). Socratic = Socratic learning (sky/curious-blue, never gives the answer).
- No emoji in Connecta's own voice (incl. Socratic, GoodTalk). No exclamation marks in product UI.
- One coral element per view. Coral is reserved for primary action.
- Red is forbidden. Alerts use plum on rose.
- Sentence case for all UI. No Title Case.
- No feeds, no followers, no virality loops.
- "You" addresses the reader. "I" is never used (Socratic has no self). "We" is sparing.
- Bilingual by default — verify Bulgarian + English render correctly in any new component. Reserve ~30% string slack for German/Polish expansion.
- No surveillance vocabulary ("monitor", "track", "scan", "patrol"). No "AI tutor" — Socratic is a thinking partner.
- **Gradients are restricted to marketing washes and photo scrims** — never in product UI chrome (buttons, cards, badges, nav, bubbles).
- Watermark imagery sparingly: bottom-left preferred, 14–16px inset, white on dark / ink on bright / coral or lime only for hero marketing tiles. One watermark per image.
- Photography is warm, candid, situated — never staged stock, never cool-graded, never identifiable close-ups of children without consent docs.
