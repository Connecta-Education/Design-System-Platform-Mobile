# Connecta Design System → Tamagui export

A faithful port of the Connecta design system into Tamagui config + components,
so you can **map this structure against the one in your repo**. Everything traces
back to the canonical source, `colors_and_type.css`.

```
export/tamagui/
├── tokens.ts          createTokens(): color · space · size · radius · zIndex  (+ shadows/motion/washes as plain objects)
├── themes.ts          base (light/dark) + state · learning · voice · role sub-themes
├── fonts.ts           DM Sans (body/heading) + JetBrains Mono, with the type scale
├── tamagui.config.ts  createTamagui() assembling the above + media + settings
├── components.tsx     NudgeBanner (signature) + CoachCard, Badge, Buttons, Bubble, WhyExpander, primitives
├── tokens.json        format-agnostic DTCG-style dump (every CSS var, resolved) — best for structural diffing
└── README.md          this file
```

## Quick start

```bash
npm i @tamagui/core @tamagui/shorthands
```

```tsx
import { TamaguiProvider, Theme } from '@tamagui/core';
import config from './export/tamagui/tamagui.config';
import { NudgeBanner } from './export/tamagui/components';
import { Sparkles, Pencil, SendHorizontal, RefreshCw, CheckCircle, HelpCircle, ChevronDown, ChevronUp, Clock } from 'lucide-react';

export default function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <Theme name="voice_goodtalk">
        <NudgeBanner
          draft="Никой не иска Алекс в групата, той е безполезен"
          suggestion="Може ли да поговорим какво се случи?"
          why="Спри за момент. Това съобщение може да накара някого да се почувства изключен…"
          icons={{
            sparkles: <Sparkles size={15} />, pencil: <Pencil size={16} />,
            send: <SendHorizontal size={14} />, refresh: <RefreshCw size={15} />,
            check: <CheckCircle size={22} />, help: <HelpCircle size={14} />,
            chevDown: <ChevronDown size={13} />, chevUp: <ChevronUp size={13} />,
            clock: <Clock size={11} />,
          }}
        />
      </Theme>
    </TamaguiProvider>
  );
}
```

## Token mapping cheatsheet

| CSS variable        | Tamagui token              | Usage in styles |
|---------------------|----------------------------|-----------------|
| `--connecta-coral`  | `tokens.color.connectaCoral` | `"$connectaCoral"` |
| `--neutral-200`     | `tokens.color.neutral200`  | `"$neutral200"` |
| `--fg-1`            | `tokens.color.fg1`         | `"$fg1"` |
| `--s-4` (16px)      | `tokens.space[4]`          | `"$4"` |
| `--r-lg` (16px)     | `tokens.radius.lg`         | `"$lg"` |
| `--r-pill`          | `tokens.radius.pill`       | `"$pill"` |
| `--t-h1` (36px)     | `fonts.body.size.h1`       | `fontSize="$h1"` |
| `--lh-snug` (1.25)  | `fonts.body.lineHeight.*`  | resolved per-size |
| `--w-semi` (600)    | `fonts.body.weight.semi`   | `fontWeight="$semi"` |
| `--shadow-3`        | `shadows[3]` (plain export)| `style={{ boxShadow: shadows[3] }}` |
| `--ease-standard`   | `motion.easeStandard`      | animation configs |
| `--wash-sunrise`    | `washes.sunrise`           | marketing only |

> **Why some values aren't tokens.** Tamagui's token system covers
> `color / space / size / radius / zIndex`. Shadows, motion curves/durations,
> gradient washes, scrims and the notebook background pattern are exported as
> plain objects (`shadows`, `motion`, `washes` in `tokens.ts`) because Tamagui
> has no native token bucket for them — wire them into `style={{…}}` or your
> animation driver. `tokens.json` lists **all 151** CSS variables regardless of
> bucket, which is the most reliable artifact for a structural diff.

## Themes = semantic surfaces

Connecta signals meaning with **ground color**, not chrome. Each surface family
is a Tamagui sub-theme; components read a fixed contract
(`background`, `color`, `colorSubtle`, `borderColor`, `accent`,
`badgeBackground`, `badgeColor`, `primaryBackground`, `primaryColor`,
`ghostBorderColor`, `ghostColor`, and for cards `whyBackground`, `shadow`).

| Group | Theme names |
|-------|-------------|
| Base | `light`, `dark` |
| GoodTalk intervention states | `nudge`, `pause`, `warn`, `alert`, `ok` |
| Cosmo learning states | `learn`, `progress` |
| Coaching voices (card anatomy) | `voice_goodtalk`, `voice_cosmo`, `voice_teacher` |
| Role badges (school graph) | `role_child`, `role_teacher`, `role_parent`, `role_school`, `role_cosmo`, `role_goodtalk` |

Swap a banner's entire palette by changing the wrapping `<Theme name>` — no
per-instance color props.

## Components → source prototypes

| Component | Ported from | Notes |
|-----------|-------------|-------|
| `NudgeBanner` | `preview/components-nudge.html` | Signature GoodTalk piece. Full lifecycle: **prompt → suggested → sent**. Held dashed-coral draft becomes a delivered bubble on send. |
| `CoachCard` | `ui_kits/chat-app/coaching-cards.jsx` | Static coaching card (Cosmo/Teacher) on the same shell. |
| `Badge` | nudge badge pill | Solid pill, theme-colored. |
| `PrimaryButton` / `GhostButton` | nudge actions | Filled + outline (icon-only variant). |
| `Bubble` | chat-app `components.jsx` | `mine` / `held` / `sent` variants. |
| `WhyExpander` | "Защо?" disclosure | Collapsible reasoning panel. |
| `Headline` / `Body` / `Meta` / `Eyebrow` | type roles | Map the type scale. |

Icons are injected as props (any React node — examples use `lucide-react`) so the
package carries no icon dependency.

## Mapping into an existing config

If your repo already calls `createTamagui`, **don't** import `tamagui.config.ts`
wholesale. Instead merge selectively:

```ts
import { color, space, radius, size } from './export/tamagui/tokens';
import { themes as connectaThemes } from './export/tamagui/themes';
import { bodyFont, monoFont } from './export/tamagui/fonts';

const config = createTamagui({
  tokens: createTokens({
    color: { ...yourColors, ...color },     // namespace if keys collide
    space: { ...yourSpace, ...space },
    radius, size, zIndex: yourZIndex,
  }),
  themes: { ...yourThemes, ...connectaThemes },
  fonts: { ...yourFonts, body: bodyFont, mono: monoFont },
});
```

Watch for **key collisions** — Connecta uses descriptive color keys
(`connectaCoral`, `neutral200`, `fg1`) rather than Tamagui's default numeric
palette, so namespace or prefix if your existing tokens use the same names.

## Caveats

- **Fonts**: `fonts.ts` references the DM Sans variable TTFs in `/fonts`. On
  React Native you must register the faces (`Font.loadAsync` / native linking);
  on web the `@font-face` in `colors_and_type.css` already covers it. JetBrains
  Mono comes from Google Fonts.
- **Shadows on native**: the components apply `boxShadow` via `style` (web). For
  RN, translate `shadows[n]` to `shadowColor/Offset/Opacity/Radius` + `elevation`.
- This is a structural/handoff export, not a published npm package — paths are
  relative; adjust imports when you drop it into your repo.
