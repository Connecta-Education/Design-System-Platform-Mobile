/**
 * Connecta Design System — Tamagui tokens
 * ----------------------------------------
 * 1:1 port of colors_and_type.css `:root` custom properties.
 * Token key names mirror the CSS variable suffixes so you can diff
 * this against your repo's token table line-by-line.
 *
 *   CSS  --connecta-coral   →  tokens.color.connectaCoral   →  "$connectaCoral"
 *   CSS  --s-4              →  tokens.space[4]              →  "$4"
 *   CSS  --r-lg             →  tokens.radius.lg             →  "$lg"
 *
 * Source of truth: colors_and_type.css
 */
import { createTokens } from './tamaguiRuntime'; // prod: '@tamagui/core' (see README)

/* ------------------------------------------------------------------ *
 * COLOR
 * ------------------------------------------------------------------ */
export const color = {
  // ---- Core brand palette ----
  connectaCoral:    '#F35F49', // important / check / error
  connectaLime:     '#DEFB50', // highlight / underline / lab
  connectaPaleLime: '#ECFDA8', // tertiary tint
  connectaOlive:    '#424F1A', // learning / Cosmo
  connectaPlum:     '#571B32', // parents / guardians
  connectaSky:      '#BAE6FD', // teachers / schools / tasks
  connectaPink:     '#FBE1FD', // social / friends
  connectaInk:      '#0F1A24', // PRIMARY — writing / contour / bubbles
  connectaPaper:    '#FFFFFF', // clean white surface

  // ---- Neutrals (cool, slightly desaturated) ----
  neutral0:   '#FFFFFF',
  neutral50:  '#F7F8F9',
  neutral100: '#EEF1F3',
  neutral200: '#DDE2E7',
  neutral300: '#C3CBD3',
  neutral400: '#98A2AD',
  neutral500: '#6B7682',
  neutral600: '#4D5762',
  neutral700: '#343C46',
  neutral800: '#1E2630',
  neutral900: '#0F1A24',

  // ---- Brand tints (only non-core surface colors; tints of brand hues) ----
  tintCoral: '#FDEAE5', tintOlive: '#EDF1DA', tintSky: '#E4F3FC',
  tintPlum:  '#F6ECF0', tintPink: '#FBE1FD', tintLime: '#ECFDA8', tintInk: '#EEF1F3',

  // ---- Intervention states (GoodTalk = CORAL: error / check / important) ----
  stateNudgeBg: '#FDEAE5', stateNudgeFg: '#0F1A24', stateNudgeAccent: '#F35F49',
  statePauseBg: '#EEF1F3', statePauseFg: '#0F1A24', statePauseAccent: '#6B7682',
  stateWarnBg:  '#FDEAE5', stateWarnFg:  '#0F1A24', stateWarnAccent:  '#F35F49',
  stateAlertBg: '#FDEAE5', stateAlertFg: '#571B32', stateAlertAccent: '#F35F49',
  stateOkBg:    '#ECFDA8', stateOkFg:    '#424F1A', stateOkAccent:    '#DEFB50',

  // ---- Cosmo AI (learning = OLIVE, lab accent = LIME) ----
  cosmoBg:       '#EDF1DA',
  cosmoBgStrong: '#424F1A',
  cosmoFg:       '#424F1A',
  cosmoFgStrong: '#DEFB50',
  cosmoAccent:   '#DEFB50',
  cosmoInk:      '#0F1A24',
  stateLearnBg: '#EDF1DA', stateLearnFg: '#424F1A', stateLearnAccent: '#DEFB50',
  stateProgressBg: '#ECFDA8', stateProgressFg: '#424F1A', stateProgressAccent: '#DEFB50',

  // ---- Audience surface scopes ----
  scopeChildBg:   '#FFFFFF', scopeChildTint:   '#FBE1FD', // child = pink (social)
  scopeTeacherBg: '#F7F8F9', scopeTeacherTint: '#E4F3FC', // teacher = sky
  scopeParentBg:  '#FFFFFF', scopeParentTint:  '#F6ECF0', // parent = plum
  scopeSchoolBg:  '#F7F8F9', scopeSchoolTint:  '#E4F3FC', // school = sky
  scopeCosmoBg:   '#EDF1DA',                              // cosmo = olive
  scopeTasksBg:   '#E4F3FC', scopeTasksFg:     '#0F1A24', scopeTasksAccent: '#0F1A24', // tasks = sky/ink

  // ---- Role badge tokens (school graph identity) ----
  roleChildBg:    '#FBE1FD', roleChildFg:    '#0F1A24', // child = pink
  roleTeacherBg:  '#BAE6FD', roleTeacherFg:  '#0F1A24', // teacher = sky
  roleParentBg:   '#F6ECF0', roleParentFg:   '#571B32', // parent = plum
  roleSchoolBg:   '#BAE6FD', roleSchoolFg:   '#0F1A24', // school = sky
  roleCosmoBg:    '#424F1A', roleCosmoFg:    '#DEFB50', // cosmo = olive + lime
  roleGoodtalkBg: '#F35F49', roleGoodtalkFg: '#FFFFFF', // goodtalk = coral

  // ---- Message bubble tokens (color = who is speaking) ----
  bubbleSelfBg: '#0F1A24', bubbleSelfFg: '#FFFFFF',
  bubbleOtherBg: '#EEF1F3', bubbleOtherFg: '#0F1A24',
  bubbleFriendBg: '#FBE1FD', bubbleFriendFg: '#0F1A24',
  bubbleTeacherBg: '#E4F3FC', bubbleTeacherFg: '#0F1A24',
  bubbleParentBg: '#F6ECF0', bubbleParentFg: '#571B32',
  bubbleCosmoBg: '#424F1A', bubbleCosmoFg: '#DEFB50',
  bubbleGoodtalkBg: '#FDEAE5', bubbleGoodtalkFg: '#0F1A24',

  // ---- Semantic foreground / background ----
  bgPage:     '#FFFFFF',
  bgSubtle:   '#F7F8F9',
  bgMuted:    '#EEF1F3',
  bgInverse:  '#0F1A24',
  bgCard:     '#FFFFFF',
  bgCardSoft: '#F7F8F9',
  fg1: '#0F1A24', fg2: '#343C46', fg3: '#6B7682', fg4: '#98A2AD',
  fgOnCoral: '#FFFFFF', fgOnLime: '#0F1A24', fgOnInk: '#FFFFFF',
  border1: '#DDE2E7', border2: '#C3CBD3', borderStrong: '#0F1A24',
  // primary action = ink
  actionPrimaryBg: '#0F1A24', actionPrimaryFg: '#FFFFFF', actionPrimaryHover: '#1E2630',
  // important / check / error = coral
  importantBg: '#FDEAE5', importantFg: '#0F1A24', importantAccent: '#F35F49',
  importantStrongBg: '#F35F49', importantStrongFg: '#FFFFFF',
  // highlight = lime
  highlightBg: '#DEFB50', highlightFg: '#0F1A24', highlightSoft: '#ECFDA8',
} as const;

/* ------------------------------------------------------------------ *
 * SPACE — 4pt grid (CSS --s-1 … --s-11). `true` is the default gap.
 * ------------------------------------------------------------------ */
export const space = {
  0: 0,
  1: 4,  2: 8,  3: 12, 4: 16, 5: 20,
  6: 24, 7: 32, 8: 40, 9: 56, 10: 72, 11: 96,
  true: 16,
} as const;

/* ------------------------------------------------------------------ *
 * SIZE — shares the 4pt scale; adds control heights used by components.
 * ------------------------------------------------------------------ */
export const size = {
  0: 0,
  1: 4,  2: 8,  3: 12, 4: 16, 5: 20,
  6: 24, 7: 32, 8: 40, 9: 56, 10: 72, 11: 96,
  true: 16,
  // component sizes
  control: 44,      // min touch target / button height
  iconBtn: 46,      // square icon button
  avatar: 34,
  iconSm: 12, iconMd: 15, iconLg: 18, iconXl: 22,
} as const;

/* ------------------------------------------------------------------ *
 * RADIUS — soft geometry (CSS --r-*)
 * ------------------------------------------------------------------ */
export const radius = {
  xs: 4, sm: 8, md: 12, lg: 16, xl: 20,
  '2xl': 28, pill: 9999,
  // bubble tail radii used by chat + suggestion bubbles
  bubble: 18, bubbleTail: 5,
  true: 12,
} as const;

/* ------------------------------------------------------------------ *
 * Z-INDEX
 * ------------------------------------------------------------------ */
export const zIndex = {
  0: 0, 1: 100, 2: 200, 3: 300, 4: 400, 5: 500,
  sticky: 600, overlay: 700, modal: 800, popover: 900, toast: 1000,
} as const;

export const tokens = createTokens({ color, space, size, radius, zIndex });

/* ------------------------------------------------------------------ *
 * NON-TOKEN DESIGN VALUES
 * Tamagui tokens cover color/space/size/radius/zIndex only. These map
 * the remaining CSS variables so nothing from the system is lost.
 * ------------------------------------------------------------------ */
export const shadows = {
  1:     '0 1px 2px rgba(15,26,36,0.04), 0 1px 1px rgba(15,26,36,0.03)',
  2:     '0 4px 12px rgba(15,26,36,0.06), 0 1px 2px rgba(15,26,36,0.04)',
  3:     '0 12px 32px rgba(15,26,36,0.10), 0 2px 6px rgba(15,26,36,0.05)',
  pop:   '0 18px 48px rgba(15,26,36,0.14)',
  inset: 'inset 0 0 0 1px rgba(15,26,36,0.06)',
} as const;

export const motion = {
  easeStandard: 'cubic-bezier(0.2, 0, 0, 1)',
  easeEmphasis: 'cubic-bezier(0.3, 0, 0, 1)',
  easeExit:     'cubic-bezier(0.4, 0, 1, 1)',
  durFast: 140, durBase: 220, durSlow: 360,
} as const;

export const washes = {
  sunrise: 'linear-gradient(135deg, #DEFB50 0%, #F35F49 100%)',
  dusk:    'linear-gradient(135deg, #F35F49 0%, #571B32 100%)',
  night:   'linear-gradient(180deg, #571B32 0%, #0F1A24 100%)',
  cosmo:   'linear-gradient(160deg, #BAE6FD 0%, #0F1A24 110%)',
  meadow:  'linear-gradient(180deg, #ECFDA8 0%, #424F1A 100%)',
  paper:   'linear-gradient(180deg, #FFFFFF 0%, #BAE6FD 100%)',
  heat:    'linear-gradient(160deg, #F35F49 0%, #0F1A24 100%)',
  calm:    'linear-gradient(180deg, #FFFFFF 0%, #F6ECF0 100%)',
} as const;
