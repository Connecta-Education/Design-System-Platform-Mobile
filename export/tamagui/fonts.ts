/**
 * Connecta Design System — Tamagui fonts
 * --------------------------------------
 * Two families, ported from colors_and_type.css.
 *   body / heading → DM Sans  (Latin Extended + full Cyrillic)
 *   mono (retired)  → aliases DM Sans; category/label text uses uppercase tracked DM Sans
 *
 * Size keys map the type scale tokens:
 *   micro 11 · caption 13 · bodySm 14 · body 16 · bodyLg 18 ·
 *   h4 18 · h3 22 · h2 28 · h1 36 · display 48 · displayLg 64
 */
import { createFont } from './tamaguiRuntime'; // prod: '@tamagui/core' (see README)

const SIZE = {
  micro: 11, caption: 13, bodySm: 14, body: 16, bodyLg: 18,
  h4: 18, h3: 22, h2: 28, h1: 36, display: 48, displayLg: 64,
} as const;

// Line-height tokens: tight 1.1 · snug 1.25 · normal 1.45 · loose 1.6
const lh = (px: number, ratio: number) => Math.round(px * ratio);

export const bodyFont = createFont({
  family: '"DM Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  size: SIZE,
  lineHeight: {
    micro: lh(11, 1.45), caption: lh(13, 1.45), bodySm: lh(14, 1.45),
    body: lh(16, 1.45), bodyLg: lh(18, 1.45),
    h4: lh(18, 1.25), h3: lh(22, 1.25), h2: lh(28, 1.25),
    h1: lh(36, 1.1), display: lh(48, 1.1), displayLg: lh(64, 1.1),
  },
  weight: {
    regular: '400', medium: '500', semi: '600', bold: '700',
    // numeric aliases for convenience
    4: '400', 5: '500', 6: '600', 7: '700',
  },
  letterSpacing: {
    // headings tighten as they grow (CSS letter-spacing values)
    body: 0, h4: 0, h3: -0.22, h2: -0.42, h1: -0.72,
    display: -1.2, displayLg: -1.92,
  },
  face: {
    400: { normal: 'DMSans', italic: 'DMSans-Italic' },
    500: { normal: 'DMSans', italic: 'DMSans-Italic' },
    600: { normal: 'DMSans', italic: 'DMSans-Italic' },
    700: { normal: 'DMSans', italic: 'DMSans-Italic' },
  },
});

// Monospace is retired. `monoFont` aliases DM Sans so legacy `font="$mono"`
// references render in DM Sans; category labels rely on uppercase + tracking.
export const monoFont = createFont({
  family: '"DM Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  size: SIZE,
  lineHeight: {
    micro: lh(11, 1.45), caption: lh(13, 1.45), bodySm: lh(14, 1.45),
    body: lh(16, 1.45), bodyLg: lh(18, 1.45),
  },
  weight: { regular: '400', medium: '500', bold: '700', 4: '400', 5: '500', 7: '700' },
  letterSpacing: { body: 0.08 * 16 }, // eyebrow/label tracking ~0.08em
});

export const fonts = {
  body: bodyFont,
  heading: bodyFont,
  mono: monoFont,
};
