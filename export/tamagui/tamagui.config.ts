/**
 * Connecta Design System — Tamagui config
 * ---------------------------------------
 * Assembles tokens + themes + fonts into a single Tamagui config.
 * Drop into your repo, then `import config from './tamagui.config'`.
 *
 * If your app already has a createTamagui call, don't import this whole
 * file — instead merge the pieces you need from tokens.ts / themes.ts /
 * fonts.ts into your existing config (see README "Mapping into an
 * existing config").
 */
// prod: import from '@tamagui/core' / '@tamagui/shorthands' (see README).
import { createTamagui, shorthands } from './tamaguiRuntime';
import { tokens } from './tokens';
import { themes } from './themes';
import { fonts } from './fonts';

export const config = createTamagui({
  tokens,
  themes,
  fonts,
  shorthands,
  // Connecta breakpoints — child app is phone-primary; portals go wider.
  media: {
    xs:  { maxWidth: 380 },   // phone (child app design width)
    sm:  { maxWidth: 640 },
    md:  { maxWidth: 860 },
    lg:  { maxWidth: 1120 },
    xl:  { maxWidth: 1440 },
    gtXs: { minWidth: 381 },
    gtSm: { minWidth: 641 },
    gtMd: { minWidth: 861 },
    gtLg: { minWidth: 1121 },
  },
  settings: {
    allowedStyleValues: 'somewhat-strict',
    fastSchemeChange: true,
  },
});

export type AppConfig = typeof config;
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
