# Connecta — Chat app UI kit

Mobile-first kid/teen surface. Three screens, one click-thru flow:

1. **Login** — calm hero, ink + coral wordmark line, sky-tile reassurance.
2. **Circles** — list of approved circles. No feed, no discover, no followers.
3. **Chat** — message thread + composer + GoodTalk **nudge banner** when risky words are typed.

## Try the demo
Open `index.html`. Tap **Continue**, pick a circle, type a message containing a word like *stupid*, *hate*, *kys*, *idiot*. The nudge banner appears above the composer with three actions (Try a rewrite / Edit myself / Why?). The banner is **calm** — pale-lime ground, lime accent border, olive type — never red.

## Components
- `components.jsx` — `ChatAppBar`, `CircleRow`, `Bubble`, `Composer`, `NudgeBanner`, `PauseBanner`, `LoginScreen`, `CirclesScreen`, `ChatScreen`.
- `ios-frame.jsx` — iOS device chrome (starter component).

## Visual notes
- Outgoing bubbles are **ink** (`#0F1A24`). The *send* button is also **ink**.
- The nudge banner is in-flow above the composer — kids learn its source. It's not a toast.
- System messages render with the bare "nn" glyph, never an emoji.
- Composer send button is ink when there is content; greys out when disabled (e.g. cooldown).

## Caveats
- This is a recreation against the brand brief — there is no production codebase or Figma to mirror exactly. Once those exist, re-derive bubble curvature, exact paddings, and the exact coral hover.
