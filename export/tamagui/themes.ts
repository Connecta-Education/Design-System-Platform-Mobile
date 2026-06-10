/**
 * Connecta Design System — Tamagui themes
 * ---------------------------------------
 * `light` is the base product theme ("private by default": airy ground, ink type).
 * Sub-themes map the system's semantic surface families. Apply with
 * <Theme name="nudge">…</Theme> (or name="role_child", "voice_cosmo", etc.).
 *
 * Semantic palette (brand colors only — no invented hues):
 *   ink    → primary, writing, contour, message bubbles
 *   coral  → error, check, important (GoodTalk safety)
 *   lime   → underline, highlight, experimental / lab
 *   olive  → subjects, studies, science, learning (Cosmo / EOES lab coach)
 *   pink   → love, social, voice messages from friends
 *   plum   → parents, guardians
 *   sky    → teachers, schools, tasks
 *
 * Theme value contract (consumed by components.tsx):
 *   background        surface fill
 *   color             primary foreground / text on `background`
 *   colorSubtle       secondary/meta text
 *   borderColor       hairline
 *   accent            brand accent for this surface
 *   badgeBackground   solid pill fill
 *   badgeColor        pill text
 *   primaryBackground filled button bg  (PRIMARY = INK everywhere)
 *   primaryColor      filled button text
 *   ghostBorderColor  outline button border
 *   ghostColor        outline button text
 *
 * Source of truth: colors_and_type.css
 */

const PALETTE = {
  coral: '#F35F49', lime: '#DEFB50', paleLime: '#ECFDA8', olive: '#424F1A',
  plum: '#571B32', sky: '#BAE6FD', pink: '#FBE1FD', ink: '#0F1A24', paper: '#FFFFFF',
  // brand tints — the only non-core surface colors (light tints of brand hues)
  tintCoral: '#FDEAE5', tintOlive: '#EDF1DA', tintSky: '#E4F3FC', tintPlum: '#F6ECF0',
  n0: '#FFFFFF', n50: '#F7F8F9', n100: '#EEF1F3', n200: '#DDE2E7', n300: '#C3CBD3',
  n400: '#98A2AD', n500: '#6B7682', n600: '#4D5762', n700: '#343C46', n800: '#1E2630', n900: '#0F1A24',
};

/* ---- Base product theme (light) — PRIMARY = INK ---- */
export const light = {
  background:        PALETTE.n0,
  backgroundSubtle:  PALETTE.n50,
  backgroundMuted:   PALETTE.n100,
  backgroundInverse: PALETTE.ink,
  color:             PALETTE.ink,   // --fg-1
  colorSubtle:       PALETTE.n700,  // --fg-2
  colorMeta:         PALETTE.n500,  // --fg-3
  colorPlaceholder:  PALETTE.n400,  // --fg-4
  borderColor:       PALETTE.n200,  // --border-1
  borderColorStrong: PALETTE.ink,   // contour = ink
  accent:            PALETTE.coral, // coral = important / check
  // default action surface = INK
  primaryBackground: PALETTE.ink,
  primaryColor:      PALETTE.paper,
  ghostBorderColor:  PALETTE.n200,
  ghostColor:        PALETTE.ink,
};

/* ---- Dark / inverse ground (e.g. ink panels) ---- */
export const dark = {
  background:        PALETTE.ink,
  backgroundSubtle:  PALETTE.n800,
  color:             '#FFFFFF',
  colorSubtle:       'rgba(255,255,255,.6)',
  colorMeta:         'rgba(255,255,255,.45)',
  borderColor:       'rgba(255,255,255,.14)',
  accent:            PALETTE.lime,
  primaryBackground: PALETTE.lime,
  primaryColor:      PALETTE.ink,
  ghostBorderColor:  'rgba(255,255,255,.5)',
  ghostColor:        '#FFFFFF',
};

/* ===========================================================
   GoodTalk intervention states — CORAL family (error / check /
   important). Calm by default; escalates within coral. Repair
   resolves to lime ("go"); cooldown is a calm ink wash.
   =========================================================== */
export const nudge = {
  background: PALETTE.tintCoral, color: PALETTE.ink, colorSubtle: 'rgba(15,26,36,.7)',
  borderColor: 'rgba(243,95,73,.30)', accent: PALETTE.coral,
  badgeBackground: PALETTE.coral, badgeColor: PALETTE.paper,
  primaryBackground: PALETTE.ink, primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(15,26,36,.85)', ghostColor: PALETTE.ink,
};
export const pause = {
  background: PALETTE.n100, color: PALETTE.ink, colorSubtle: 'rgba(15,26,36,.62)',
  borderColor: 'rgba(15,26,36,.12)', accent: PALETTE.n500,
  badgeBackground: PALETTE.ink, badgeColor: PALETTE.paper,
  primaryBackground: PALETTE.ink, primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(15,26,36,.5)', ghostColor: PALETTE.ink,
};
export const warn = {
  background: PALETTE.tintCoral, color: PALETTE.ink, colorSubtle: 'rgba(15,26,36,.7)',
  borderColor: 'rgba(243,95,73,.35)', accent: PALETTE.coral,
  badgeBackground: PALETTE.coral, badgeColor: PALETTE.paper,
  primaryBackground: PALETTE.ink, primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(15,26,36,.6)', ghostColor: PALETTE.ink,
};
export const alert = {
  background: PALETTE.tintCoral, color: PALETTE.plum, colorSubtle: 'rgba(87,27,50,.7)',
  borderColor: PALETTE.coral, accent: PALETTE.coral,
  badgeBackground: PALETTE.coral, badgeColor: PALETTE.paper,
  primaryBackground: PALETTE.ink, primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(87,27,50,.6)', ghostColor: PALETTE.plum,
};
export const ok = {
  background: PALETTE.paleLime, color: PALETTE.olive, colorSubtle: 'rgba(66,79,26,.7)',
  borderColor: 'rgba(66,79,26,.20)', accent: PALETTE.lime,
  badgeBackground: PALETTE.olive, badgeColor: PALETTE.paleLime,
  primaryBackground: PALETTE.ink, primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(66,79,26,.6)', ghostColor: PALETTE.olive,
};

/* ===========================================================
   Cosmo learning-feedback states — OLIVE (learning) + LIME (lab).
   =========================================================== */
export const learn = {
  background: PALETTE.tintOlive, color: PALETTE.olive, colorSubtle: 'rgba(66,79,26,.62)',
  borderColor: 'rgba(66,79,26,.18)', accent: PALETTE.lime,
  badgeBackground: PALETTE.olive, badgeColor: PALETTE.lime,
  primaryBackground: PALETTE.ink, primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(66,79,26,.5)', ghostColor: PALETTE.olive,
};
export const progress = {
  background: PALETTE.paleLime, color: PALETTE.olive, colorSubtle: 'rgba(66,79,26,.7)',
  borderColor: 'rgba(66,79,26,.20)', accent: PALETTE.lime,
  badgeBackground: PALETTE.olive, badgeColor: PALETTE.paleLime,
  primaryBackground: PALETTE.ink, primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(66,79,26,.6)', ghostColor: PALETTE.olive,
};

/* ===========================================================
   Coaching-voice card themes (Nudge Banner anatomy).
   Used by <CoachCard> / <NudgeBanner>. Mirrors CC_THEMES in
   ui_kits/chat-app/coaching-cards.jsx.
     goodtalk → coral (check / important)
     cosmo    → olive (learning) + lime lab accents
     teacher  → sky
   =========================================================== */
export const voice_goodtalk = {
  background: PALETTE.coral, color: PALETTE.paper, colorSubtle: 'rgba(255,255,255,.82)',
  borderColor: 'rgba(15,26,36,.10)', accent: PALETTE.paper, whyBackground: 'rgba(255,255,255,.16)',
  badgeBackground: PALETTE.ink, badgeColor: PALETTE.paper,
  primaryBackground: PALETTE.ink, primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(255,255,255,.85)', ghostColor: PALETTE.paper,
  shadow: '0 12px 32px rgba(243,95,73,.30)',
};
export const voice_cosmo = {
  background: PALETTE.olive, color: '#FFFFFF', colorSubtle: 'rgba(255,255,255,.65)',
  borderColor: 'rgba(222,251,80,.20)', accent: PALETTE.lime, whyBackground: 'rgba(255,255,255,.08)',
  badgeBackground: PALETTE.lime, badgeColor: PALETTE.olive,
  primaryBackground: PALETTE.lime, primaryColor: PALETTE.olive,
  ghostBorderColor: 'rgba(222,251,80,.6)', ghostColor: PALETTE.lime,
  shadow: '0 12px 32px rgba(66,79,26,.32)',
};
export const voice_teacher = {
  background: PALETTE.sky, color: PALETTE.ink, colorSubtle: 'rgba(15,26,36,.62)',
  borderColor: 'rgba(15,26,36,.12)', accent: PALETTE.ink, whyBackground: 'rgba(15,26,36,.06)',
  badgeBackground: PALETTE.ink, badgeColor: PALETTE.paper,
  primaryBackground: PALETTE.ink, primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(15,26,36,.5)', ghostColor: PALETTE.ink,
  shadow: '0 12px 32px rgba(15,26,36,.16)',
};

/* ===========================================================
   Role badge themes — school graph identity
   school → class → circle → child → parent → teacher
     child → pink · teacher/school → sky · parent → plum
     cosmo → olive · goodtalk → coral
   =========================================================== */
export const role_child    = { background: PALETTE.pink,  color: PALETTE.ink,   accent: PALETTE.pink };
export const role_teacher  = { background: PALETTE.sky,   color: PALETTE.ink,   accent: PALETTE.sky };
export const role_parent   = { background: PALETTE.tintPlum, color: PALETTE.plum, accent: PALETTE.plum };
export const role_school   = { background: PALETTE.sky,   color: PALETTE.ink,   accent: PALETTE.ink };
export const role_cosmo    = { background: PALETTE.olive, color: PALETTE.lime,  accent: PALETTE.olive };
export const role_goodtalk = { background: PALETTE.coral, color: PALETTE.paper, accent: PALETTE.coral };

export const themes = {
  light, dark,
  // intervention states
  nudge, pause, warn, alert, ok,
  // learning states
  learn, progress,
  // coaching voices
  voice_goodtalk, voice_cosmo, voice_teacher,
  // role badges
  role_child, role_teacher, role_parent, role_school, role_cosmo, role_goodtalk,
};
