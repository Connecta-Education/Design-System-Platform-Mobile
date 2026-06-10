/* @ds-bundle: {"format":3,"namespace":"ConnectaDesignSystem_97ebf8","components":[{"name":"XStack","sourcePath":"export/tamagui/components.tsx"},{"name":"YStack","sourcePath":"export/tamagui/components.tsx"},{"name":"Headline","sourcePath":"export/tamagui/components.tsx"},{"name":"Body","sourcePath":"export/tamagui/components.tsx"},{"name":"Meta","sourcePath":"export/tamagui/components.tsx"},{"name":"Eyebrow","sourcePath":"export/tamagui/components.tsx"},{"name":"Badge","sourcePath":"export/tamagui/components.tsx"},{"name":"PrimaryButton","sourcePath":"export/tamagui/components.tsx"},{"name":"GhostButton","sourcePath":"export/tamagui/components.tsx"},{"name":"ButtonLabel","sourcePath":"export/tamagui/components.tsx"},{"name":"CardShell","sourcePath":"export/tamagui/components.tsx"},{"name":"Bubble","sourcePath":"export/tamagui/components.tsx"},{"name":"WhyExpander","sourcePath":"export/tamagui/components.tsx"},{"name":"NudgeBanner","sourcePath":"export/tamagui/components.tsx"},{"name":"CoachCard","sourcePath":"export/tamagui/components.tsx"},{"name":"Theme","sourcePath":"export/tamagui/tamaguiRuntime.tsx"},{"name":"Stack","sourcePath":"export/tamagui/tamaguiRuntime.tsx"},{"name":"Text","sourcePath":"export/tamagui/tamaguiRuntime.tsx"}],"sourceHashes":{"export/tamagui/components.tsx":"912541fc5d4d","export/tamagui/fonts.ts":"1eb6e057a950","export/tamagui/tamagui.config.ts":"0e8983ad8b4f","export/tamagui/tamaguiRuntime.tsx":"f6d2593aabc0","export/tamagui/themes.ts":"455f70ecf4fa","export/tamagui/tokens.ts":"1c1b2a24e1d8","ui_kits/chat-app/coaching-cards.jsx":"8004d19cc3df","ui_kits/chat-app/components.jsx":"926391a8f6a4","ui_kits/chat-app/components.standalone.jsx":"7151c60740be","ui_kits/chat-app/ios-frame.jsx":"c535ed22e4f7","ui_kits/chat-app/preview-voices.jsx":"520e3b7ce2ba","ui_kits/parent-portal/components.jsx":"5ca318b4e64c"},"inlinedExternals":[],"unexposedExports":[{"name":"alert","sourcePath":"export/tamagui/themes.ts"},{"name":"bodyFont","sourcePath":"export/tamagui/fonts.ts"},{"name":"color","sourcePath":"export/tamagui/tokens.ts"},{"name":"config","sourcePath":"export/tamagui/tamagui.config.ts"},{"name":"createFont","sourcePath":"export/tamagui/tamaguiRuntime.tsx"},{"name":"createTamagui","sourcePath":"export/tamagui/tamaguiRuntime.tsx"},{"name":"createTokens","sourcePath":"export/tamagui/tamaguiRuntime.tsx"},{"name":"dark","sourcePath":"export/tamagui/themes.ts"},{"name":"fonts","sourcePath":"export/tamagui/fonts.ts"},{"name":"learn","sourcePath":"export/tamagui/themes.ts"},{"name":"light","sourcePath":"export/tamagui/themes.ts"},{"name":"monoFont","sourcePath":"export/tamagui/fonts.ts"},{"name":"motion","sourcePath":"export/tamagui/tokens.ts"},{"name":"nudge","sourcePath":"export/tamagui/themes.ts"},{"name":"ok","sourcePath":"export/tamagui/themes.ts"},{"name":"pause","sourcePath":"export/tamagui/themes.ts"},{"name":"progress","sourcePath":"export/tamagui/themes.ts"},{"name":"radius","sourcePath":"export/tamagui/tokens.ts"},{"name":"role_child","sourcePath":"export/tamagui/themes.ts"},{"name":"role_cosmo","sourcePath":"export/tamagui/themes.ts"},{"name":"role_goodtalk","sourcePath":"export/tamagui/themes.ts"},{"name":"role_parent","sourcePath":"export/tamagui/themes.ts"},{"name":"role_school","sourcePath":"export/tamagui/themes.ts"},{"name":"role_teacher","sourcePath":"export/tamagui/themes.ts"},{"name":"shadows","sourcePath":"export/tamagui/tokens.ts"},{"name":"shorthands","sourcePath":"export/tamagui/tamaguiRuntime.tsx"},{"name":"size","sourcePath":"export/tamagui/tokens.ts"},{"name":"space","sourcePath":"export/tamagui/tokens.ts"},{"name":"styled","sourcePath":"export/tamagui/tamaguiRuntime.tsx"},{"name":"themes","sourcePath":"export/tamagui/themes.ts"},{"name":"tokens","sourcePath":"export/tamagui/tokens.ts"},{"name":"useTheme","sourcePath":"export/tamagui/tamaguiRuntime.tsx"},{"name":"voice_cosmo","sourcePath":"export/tamagui/themes.ts"},{"name":"voice_goodtalk","sourcePath":"export/tamagui/themes.ts"},{"name":"voice_teacher","sourcePath":"export/tamagui/themes.ts"},{"name":"warn","sourcePath":"export/tamagui/themes.ts"},{"name":"washes","sourcePath":"export/tamagui/tokens.ts"},{"name":"zIndex","sourcePath":"export/tamagui/tokens.ts"}]} */

(() => {

const __ds_ns = (window.ConnectaDesignSystem_97ebf8 = window.ConnectaDesignSystem_97ebf8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// export/tamagui/tamaguiRuntime.tsx
try { (() => {
/**
 * In-browser runtime shim for the Tamagui handoff files.
 * -------------------------------------------------------
 * The design-system preview bundler can't resolve npm packages, so the
 * `@tamagui/core` / `@tamagui/shorthands` imports were being dropped — leaving
 * `styled`, `createTokens`, etc. undefined and breaking the whole bundle at load.
 *
 * This module provides lightweight, API-compatible stand-ins so the handoff
 * code (components.tsx, tokens.ts, fonts.ts, tamagui.config.ts) evaluates
 * cleanly in the preview. It is NOT a real Tamagui runtime — in a production
 * app, install Tamagui and swap these imports back to `@tamagui/core` /
 * `@tamagui/shorthands` (see export/tamagui/README.md).
 */

// Only forward props that are valid on a DOM node — tamagui style props are
// ignored here (the shim is for resolution/structure, not pixel fidelity).
const DOM_SAFE = new Set(['id', 'className', 'style', 'role', 'title', 'href']);
function domProps(props = {}) {
  const out = {};
  for (const k of Object.keys(props)) {
    if (DOM_SAFE.has(k)) out[k] = props[k];else if (k.startsWith('aria-') || k.startsWith('data-')) out[k] = props[k];
  }
  return out;
}
const Stack = React.forwardRef(function Stack(props, ref) {
  const {
    children,
    tag,
    onPress,
    onClick,
    ...rest
  } = props || {};
  const Tag = tag || 'div';
  return React.createElement(Tag, {
    ref,
    onClick: onPress || onClick,
    ...domProps(rest)
  }, children);
});
const Text = React.forwardRef(function Text(props, ref) {
  const {
    children,
    tag,
    onPress,
    onClick,
    ...rest
  } = props || {};
  const Tag = tag || 'span';
  return React.createElement(Tag, {
    ref,
    onClick: onPress || onClick,
    ...domProps(rest)
  }, children);
});

// styled(Component, config) → a component that renders the base, dropping
// tamagui-only config (variants/hoverStyle/token props) which the shim ignores.
function styled(Component, _config = {}) {
  const Styled = React.forwardRef(function Styled(props, ref) {
    return React.createElement(Component, {
      ref,
      ...(props || {})
    });
  });
  Styled.displayName = 'Styled';
  return Styled;
}

// <Theme> just renders its children in the shim.
function Theme(props) {
  return React.createElement(React.Fragment, null, props && props.children);
}

// useTheme() returns a Proxy whose every key is a token accessor with .get().
const tokenAccessor = {
  get: () => undefined,
  val: undefined
};
function useTheme() {
  return new Proxy({}, {
    get: () => tokenAccessor
  });
}

// Config builders are identity passthroughs in the shim.
const createTokens = t => t;
const createFont = f => f;
const createTamagui = c => c;
const shorthands = {};
Object.assign(__ds_scope, { Stack, Text, styled, Theme, useTheme, createTokens, createFont, createTamagui, shorthands });
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/tamagui/tamaguiRuntime.tsx", error: String((e && e.message) || e) }); }

// export/tamagui/components.tsx
try { (() => {
/**
 * Connecta Design System — Tamagui components
 * -------------------------------------------
 * Styled primitives + the GoodTalk Nudge Banner anatomy, ported from the
 * HTML/JSX prototypes (preview/components-nudge.html,
 * ui_kits/chat-app/coaching-cards.jsx).
 *
 * Everything is theme-driven: wrap a banner in <Theme name="voice_goodtalk">
 * (or "nudge" / "warn" / "voice_cosmo" / "voice_teacher" …) and the badge,
 * headline, buttons and "why" panel recolor from the theme contract in
 * themes.ts. No per-instance color props needed.
 *
 * Icons: pass any React node (e.g. a lucide-react icon) into `icon` props.
 */
// NOTE: production apps should import these from '@tamagui/core' (see README).
// The preview bundler can't resolve npm packages, so we use a local shim.
const {
  useState
} = React;
/* ------------------------------------------------------------------ *
 * Layout primitives
 * ------------------------------------------------------------------ */
const XStack = __ds_scope.styled(__ds_scope.Stack, {
  flexDirection: 'row'
});
const YStack = __ds_scope.styled(__ds_scope.Stack, {
  flexDirection: 'column'
});

/* ------------------------------------------------------------------ *
 * Text roles (map the type scale + semantic colors)
 * ------------------------------------------------------------------ */
const Headline = __ds_scope.styled(__ds_scope.Text, {
  fontFamily: '$heading',
  fontSize: '$h4',
  fontWeight: '$semi',
  lineHeight: 22,
  letterSpacing: -0.08,
  color: '$color'
});
const Body = __ds_scope.styled(__ds_scope.Text, {
  fontFamily: '$body',
  fontSize: '$bodySm',
  lineHeight: 21,
  color: '$color'
});
const Meta = __ds_scope.styled(__ds_scope.Text, {
  fontFamily: '$mono',
  fontSize: '$micro',
  letterSpacing: 0.3,
  color: '$colorMeta'
});
const Eyebrow = __ds_scope.styled(__ds_scope.Text, {
  fontFamily: '$mono',
  fontSize: 10,
  fontWeight: '$medium',
  letterSpacing: 1.2,
  textTransform: 'uppercase',
  color: '$colorSubtle'
});

/* ------------------------------------------------------------------ *
 * Badge — solid pill, theme-colored
 * ------------------------------------------------------------------ */
const BadgeFrame = __ds_scope.styled(XStack, {
  alignItems: 'center',
  gap: '$1',
  paddingVertical: 6,
  paddingHorizontal: 10,
  borderRadius: '$pill',
  backgroundColor: '$badgeBackground'
});
function Badge({
  icon,
  children
}) {
  const t = __ds_scope.useTheme();
  return /*#__PURE__*/React.createElement(BadgeFrame, null, icon, /*#__PURE__*/React.createElement(__ds_scope.Text, {
    fontFamily: "$mono",
    fontSize: 10,
    fontWeight: "$semi",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: t.badgeColor?.get?.() ?? '$badgeColor'
  }, children));
}

/* ------------------------------------------------------------------ *
 * Buttons — filled (primary) + outline (ghost / icon-only)
 * ------------------------------------------------------------------ */
const PrimaryButton = __ds_scope.styled(XStack, {
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  height: '$control',
  paddingHorizontal: '$4',
  borderRadius: '$md',
  backgroundColor: '$primaryBackground',
  cursor: 'pointer',
  hoverStyle: {
    opacity: 0.92
  },
  pressStyle: {
    opacity: 0.84
  },
  variants: {
    flex: {
      true: {
        flex: 1
      }
    }
  }
});
const GhostButton = __ds_scope.styled(XStack, {
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  height: '$control',
  paddingHorizontal: '$4',
  borderRadius: '$md',
  borderWidth: 1.5,
  borderColor: '$ghostBorderColor',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  hoverStyle: {
    backgroundColor: 'rgba(0,0,0,0.04)'
  },
  variants: {
    iconOnly: {
      true: {
        width: '$iconBtn',
        paddingHorizontal: 0
      }
    }
  }
});
const ButtonLabel = __ds_scope.styled(__ds_scope.Text, {
  fontFamily: '$body',
  fontSize: '$bodySm',
  fontWeight: '$semi'
});

/* ------------------------------------------------------------------ *
 * Card shell — the Nudge Banner surface (soft shadow, rounded, no rule)
 * ------------------------------------------------------------------ */
const CardShell = __ds_scope.styled(YStack, {
  backgroundColor: '$background',
  borderRadius: '$xl',
  padding: '$4',
  gap: '$3'
});

/* ------------------------------------------------------------------ *
 * Chat bubble + held draft + suggestion bubble
 * ------------------------------------------------------------------ */
const Bubble = __ds_scope.styled(YStack, {
  maxWidth: '84%',
  paddingVertical: 11,
  paddingHorizontal: 15,
  variants: {
    mine: {
      true: {
        alignSelf: 'flex-end',
        backgroundColor: '$primaryBackground',
        borderRadius: 18 /* tail */
      },
      false: {
        alignSelf: 'flex-start',
        backgroundColor: '$backgroundMuted',
        borderRadius: 18
      }
    },
    held: {
      true: {
        alignSelf: 'flex-end',
        backgroundColor: '$background',
        borderRadius: 18,
        borderWidth: 1.5,
        borderStyle: 'dashed',
        borderColor: '$connectaCoral'
      }
    },
    sent: {
      true: {
        alignSelf: 'flex-end',
        backgroundColor: '$background',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '$border1'
      }
    }
  }
});

/* ------------------------------------------------------------------ *
 * "Why?" expander — collapsible reasoning panel
 * ------------------------------------------------------------------ */
function WhyExpander({
  label = 'Защо?',
  eyebrow = 'Защо този nudge',
  text,
  helpIcon,
  chevronDownIcon,
  chevronUpIcon
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement(YStack, {
    gap: "$2"
  }, /*#__PURE__*/React.createElement(XStack, {
    tag: "button",
    alignItems: "center",
    gap: "$1",
    cursor: "pointer",
    backgroundColor: "transparent",
    onPress: () => setOpen(o => !o)
  }, helpIcon, /*#__PURE__*/React.createElement(__ds_scope.Text, {
    fontFamily: "$body",
    fontSize: 12,
    fontWeight: "$semi",
    color: "$color"
  }, label), open ? chevronUpIcon : chevronDownIcon), open && /*#__PURE__*/React.createElement(YStack, {
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: "$md",
    padding: "$3",
    gap: "$1"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement(Body, {
    fontSize: 12.5,
    lineHeight: 19,
    color: "$connectaInk"
  }, text)));
}

/* ================================================================== *
 * NudgeBanner — the signature GoodTalk component.
 * Full lifecycle: prompt → suggested → sent.
 *
 * <Theme name="voice_goodtalk">
 *   <NudgeBanner
 *     draft="…risky message…"
 *     suggestion="…calmer rewrite…"
 *     why="…reasoning…"
 *     icons={{ sparkles, pencil, send, refresh, check, help, chevDown, chevUp, clock }}
 *   />
 * </Theme>
 * ================================================================== */

function NudgeBanner({
  draft,
  suggestion,
  why,
  headline = 'Това може да нарани нечии чувства. Искаш ли да сменим отговора ти?',
  badgeText = 'Неизпратено',
  icons = {}
}) {
  const [stage, setStage] = useState('prompt');
  const t = __ds_scope.useTheme();
  return /*#__PURE__*/React.createElement(YStack, {
    gap: "$2"
  }, /*#__PURE__*/React.createElement(YStack, {
    alignItems: "flex-end",
    gap: "$1"
  }, /*#__PURE__*/React.createElement(Bubble, {
    held: stage !== 'sent',
    sent: stage === 'sent'
  }, /*#__PURE__*/React.createElement(__ds_scope.Text, {
    fontFamily: "$body",
    fontSize: 14.5,
    lineHeight: 20,
    color: stage === 'sent' ? '$connectaInk' : 'rgba(15,26,36,.62)'
  }, stage === 'sent' ? suggestion : draft)), /*#__PURE__*/React.createElement(XStack, {
    alignItems: "center",
    gap: "$1",
    paddingRight: "$1"
  }, stage === 'sent' ? icons.check : icons.clock, /*#__PURE__*/React.createElement(Meta, {
    color: stage === 'sent' ? '$stateOkAccent' : '$connectaCoral'
  }, stage === 'sent' ? 'изпратено · 14:32' : 'задържано · не е изпратено'))), /*#__PURE__*/React.createElement(CardShell
  // soft shadow from theme (web: boxShadow string)
  , {
    style: {
      boxShadow: t.shadow?.get?.()
    }
  }, stage !== 'sent' && /*#__PURE__*/React.createElement(XStack, null, /*#__PURE__*/React.createElement(Badge, {
    icon: icons.sparkles
  }, badgeText)), stage !== 'sent' && /*#__PURE__*/React.createElement(Headline, {
    fontSize: 16,
    lineHeight: 22
  }, headline), stage === 'prompt' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WhyExpander, {
    text: why,
    helpIcon: icons.help,
    chevronDownIcon: icons.chevDown,
    chevronUpIcon: icons.chevUp
  }), /*#__PURE__*/React.createElement(XStack, {
    gap: "$2"
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    flex: true,
    onPress: () => setStage('suggested')
  }, icons.sparkles, /*#__PURE__*/React.createElement(ButtonLabel, {
    color: "$primaryColor"
  }, "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0438 \u043C\u0438")), /*#__PURE__*/React.createElement(GhostButton, {
    iconOnly: true,
    "aria-label": "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u0439"
  }, icons.pencil))), stage === 'suggested' && /*#__PURE__*/React.createElement(YStack, {
    backgroundColor: "$whyBackground",
    borderRadius: "$lg",
    padding: "$3",
    gap: "$2"
  }, /*#__PURE__*/React.createElement(XStack, {
    alignItems: "center",
    gap: "$1"
  }, icons.sparkles, /*#__PURE__*/React.createElement(Eyebrow, null, "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043E\u0442 GoodTalk")), /*#__PURE__*/React.createElement(YStack, {
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: "$lg",
    padding: "$3"
  }, /*#__PURE__*/React.createElement(__ds_scope.Text, {
    fontFamily: "$body",
    fontSize: 14.5,
    fontWeight: "$medium",
    lineHeight: 20,
    color: "$connectaInk"
  }, suggestion)), /*#__PURE__*/React.createElement(XStack, {
    gap: "$2"
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    flex: true,
    onPress: () => setStage('sent')
  }, icons.send, /*#__PURE__*/React.createElement(ButtonLabel, {
    color: "$primaryColor"
  }, "\u0418\u0437\u043F\u0440\u0430\u0442\u0438")), /*#__PURE__*/React.createElement(GhostButton, {
    iconOnly: true,
    "aria-label": "\u0414\u0440\u0443\u0433\u043E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
    onPress: () => setStage('prompt')
  }, icons.refresh))), stage === 'sent' && /*#__PURE__*/React.createElement(XStack, {
    alignItems: "center",
    gap: "$3"
  }, icons.check, /*#__PURE__*/React.createElement(YStack, null, /*#__PURE__*/React.createElement(__ds_scope.Text, {
    fontFamily: "$body",
    fontSize: 15,
    fontWeight: "$bold",
    color: "$color"
  }, "\u0418\u0437\u043F\u0440\u0430\u0442\u0435\u043D\u043E"), /*#__PURE__*/React.createElement(Body, {
    fontSize: 12.5,
    color: "$colorSubtle"
  }, "\u0412\u0438\u0436\u0434\u0430\u0442 \u0441\u0430\u043C\u043E \u043D\u043E\u0432\u0430\u0442\u0430 \u0432\u0435\u0440\u0441\u0438\u044F.")))));
}

/* ================================================================== *
 * CoachCard — static coaching card (Cosmo / Teacher) on the same shell.
 * No safety lifecycle; badge + headline + optional body + expander +
 * up to two actions.
 * ================================================================== */
function CoachCard({
  badgeText,
  badgeIcon,
  name,
  headline,
  body,
  expander,
  primary,
  secondary
}) {
  const t = __ds_scope.useTheme();
  return /*#__PURE__*/React.createElement(CardShell, {
    style: {
      boxShadow: t.shadow?.get?.()
    }
  }, /*#__PURE__*/React.createElement(XStack, null, /*#__PURE__*/React.createElement(Badge, {
    icon: badgeIcon
  }, badgeText)), name && /*#__PURE__*/React.createElement(Meta, {
    color: "$colorSubtle",
    fontFamily: "$body",
    fontSize: 12
  }, name), /*#__PURE__*/React.createElement(Headline, {
    fontSize: 16,
    lineHeight: 22
  }, headline), body && /*#__PURE__*/React.createElement(Body, {
    opacity: 0.82
  }, body), expander && /*#__PURE__*/React.createElement(WhyExpander, {
    label: expander.label,
    eyebrow: expander.eyebrow,
    text: expander.text,
    helpIcon: expander.helpIcon,
    chevronDownIcon: expander.chevronDownIcon,
    chevronUpIcon: expander.chevronUpIcon
  }), (primary || secondary) && /*#__PURE__*/React.createElement(XStack, {
    gap: "$2"
  }, primary && /*#__PURE__*/React.createElement(PrimaryButton, {
    flex: true
  }, primary.icon, /*#__PURE__*/React.createElement(ButtonLabel, {
    color: "$primaryColor"
  }, primary.label)), secondary && (secondary.label ? /*#__PURE__*/React.createElement(GhostButton, null, secondary.icon, /*#__PURE__*/React.createElement(ButtonLabel, {
    color: "$ghostColor"
  }, secondary.label)) : /*#__PURE__*/React.createElement(GhostButton, {
    iconOnly: true
  }, secondary.icon))));
}
Object.assign(__ds_scope, { XStack, YStack, Headline, Body, Meta, Eyebrow, Badge, PrimaryButton, GhostButton, ButtonLabel, CardShell, Bubble, WhyExpander, NudgeBanner, CoachCard, Theme: __ds_scope.Theme });
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/tamagui/components.tsx", error: String((e && e.message) || e) }); }

// export/tamagui/fonts.ts
try { (() => {
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
// prod: '@tamagui/core' (see README)

const SIZE = {
  micro: 11,
  caption: 13,
  bodySm: 14,
  body: 16,
  bodyLg: 18,
  h4: 18,
  h3: 22,
  h2: 28,
  h1: 36,
  display: 48,
  displayLg: 64
};

// Line-height tokens: tight 1.1 · snug 1.25 · normal 1.45 · loose 1.6
const lh = (px, ratio) => Math.round(px * ratio);
const bodyFont = __ds_scope.createFont({
  family: '"DM Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  size: SIZE,
  lineHeight: {
    micro: lh(11, 1.45),
    caption: lh(13, 1.45),
    bodySm: lh(14, 1.45),
    body: lh(16, 1.45),
    bodyLg: lh(18, 1.45),
    h4: lh(18, 1.25),
    h3: lh(22, 1.25),
    h2: lh(28, 1.25),
    h1: lh(36, 1.1),
    display: lh(48, 1.1),
    displayLg: lh(64, 1.1)
  },
  weight: {
    regular: '400',
    medium: '500',
    semi: '600',
    bold: '700',
    // numeric aliases for convenience
    4: '400',
    5: '500',
    6: '600',
    7: '700'
  },
  letterSpacing: {
    // headings tighten as they grow (CSS letter-spacing values)
    body: 0,
    h4: 0,
    h3: -0.22,
    h2: -0.42,
    h1: -0.72,
    display: -1.2,
    displayLg: -1.92
  },
  face: {
    400: {
      normal: 'DMSans',
      italic: 'DMSans-Italic'
    },
    500: {
      normal: 'DMSans',
      italic: 'DMSans-Italic'
    },
    600: {
      normal: 'DMSans',
      italic: 'DMSans-Italic'
    },
    700: {
      normal: 'DMSans',
      italic: 'DMSans-Italic'
    }
  }
});

// Monospace is retired. `monoFont` aliases DM Sans so legacy `font="$mono"`
// references render in DM Sans; category labels rely on uppercase + tracking.
const monoFont = __ds_scope.createFont({
  family: '"DM Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  size: SIZE,
  lineHeight: {
    micro: lh(11, 1.45),
    caption: lh(13, 1.45),
    bodySm: lh(14, 1.45),
    body: lh(16, 1.45),
    bodyLg: lh(18, 1.45)
  },
  weight: {
    regular: '400',
    medium: '500',
    bold: '700',
    4: '400',
    5: '500',
    7: '700'
  },
  letterSpacing: {
    body: 0.08 * 16
  } // eyebrow/label tracking ~0.08em
});
const fonts = {
  body: bodyFont,
  heading: bodyFont,
  mono: monoFont
};
Object.assign(__ds_scope, { bodyFont, monoFont, fonts });
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/tamagui/fonts.ts", error: String((e && e.message) || e) }); }

// export/tamagui/themes.ts
try { (() => {
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
  coral: '#F35F49',
  lime: '#DEFB50',
  paleLime: '#ECFDA8',
  olive: '#424F1A',
  plum: '#571B32',
  sky: '#BAE6FD',
  pink: '#FBE1FD',
  ink: '#0F1A24',
  paper: '#FFFFFF',
  // brand tints — the only non-core surface colors (light tints of brand hues)
  tintCoral: '#FDEAE5',
  tintOlive: '#EDF1DA',
  tintSky: '#E4F3FC',
  tintPlum: '#F6ECF0',
  n0: '#FFFFFF',
  n50: '#F7F8F9',
  n100: '#EEF1F3',
  n200: '#DDE2E7',
  n300: '#C3CBD3',
  n400: '#98A2AD',
  n500: '#6B7682',
  n600: '#4D5762',
  n700: '#343C46',
  n800: '#1E2630',
  n900: '#0F1A24'
};

/* ---- Base product theme (light) — PRIMARY = INK ---- */
const light = {
  background: PALETTE.n0,
  backgroundSubtle: PALETTE.n50,
  backgroundMuted: PALETTE.n100,
  backgroundInverse: PALETTE.ink,
  color: PALETTE.ink,
  // --fg-1
  colorSubtle: PALETTE.n700,
  // --fg-2
  colorMeta: PALETTE.n500,
  // --fg-3
  colorPlaceholder: PALETTE.n400,
  // --fg-4
  borderColor: PALETTE.n200,
  // --border-1
  borderColorStrong: PALETTE.ink,
  // contour = ink
  accent: PALETTE.coral,
  // coral = important / check
  // default action surface = INK
  primaryBackground: PALETTE.ink,
  primaryColor: PALETTE.paper,
  ghostBorderColor: PALETTE.n200,
  ghostColor: PALETTE.ink
};

/* ---- Dark / inverse ground (e.g. ink panels) ---- */
const dark = {
  background: PALETTE.ink,
  backgroundSubtle: PALETTE.n800,
  color: '#FFFFFF',
  colorSubtle: 'rgba(255,255,255,.6)',
  colorMeta: 'rgba(255,255,255,.45)',
  borderColor: 'rgba(255,255,255,.14)',
  accent: PALETTE.lime,
  primaryBackground: PALETTE.lime,
  primaryColor: PALETTE.ink,
  ghostBorderColor: 'rgba(255,255,255,.5)',
  ghostColor: '#FFFFFF'
};

/* ===========================================================
   GoodTalk intervention states — CORAL family (error / check /
   important). Calm by default; escalates within coral. Repair
   resolves to lime ("go"); cooldown is a calm ink wash.
   =========================================================== */
const nudge = {
  background: PALETTE.tintCoral,
  color: PALETTE.ink,
  colorSubtle: 'rgba(15,26,36,.7)',
  borderColor: 'rgba(243,95,73,.30)',
  accent: PALETTE.coral,
  badgeBackground: PALETTE.coral,
  badgeColor: PALETTE.paper,
  primaryBackground: PALETTE.ink,
  primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(15,26,36,.85)',
  ghostColor: PALETTE.ink
};
const pause = {
  background: PALETTE.n100,
  color: PALETTE.ink,
  colorSubtle: 'rgba(15,26,36,.62)',
  borderColor: 'rgba(15,26,36,.12)',
  accent: PALETTE.n500,
  badgeBackground: PALETTE.ink,
  badgeColor: PALETTE.paper,
  primaryBackground: PALETTE.ink,
  primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(15,26,36,.5)',
  ghostColor: PALETTE.ink
};
const warn = {
  background: PALETTE.tintCoral,
  color: PALETTE.ink,
  colorSubtle: 'rgba(15,26,36,.7)',
  borderColor: 'rgba(243,95,73,.35)',
  accent: PALETTE.coral,
  badgeBackground: PALETTE.coral,
  badgeColor: PALETTE.paper,
  primaryBackground: PALETTE.ink,
  primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(15,26,36,.6)',
  ghostColor: PALETTE.ink
};
const alert = {
  background: PALETTE.tintCoral,
  color: PALETTE.plum,
  colorSubtle: 'rgba(87,27,50,.7)',
  borderColor: PALETTE.coral,
  accent: PALETTE.coral,
  badgeBackground: PALETTE.coral,
  badgeColor: PALETTE.paper,
  primaryBackground: PALETTE.ink,
  primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(87,27,50,.6)',
  ghostColor: PALETTE.plum
};
const ok = {
  background: PALETTE.paleLime,
  color: PALETTE.olive,
  colorSubtle: 'rgba(66,79,26,.7)',
  borderColor: 'rgba(66,79,26,.20)',
  accent: PALETTE.lime,
  badgeBackground: PALETTE.olive,
  badgeColor: PALETTE.paleLime,
  primaryBackground: PALETTE.ink,
  primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(66,79,26,.6)',
  ghostColor: PALETTE.olive
};

/* ===========================================================
   Cosmo learning-feedback states — OLIVE (learning) + LIME (lab).
   =========================================================== */
const learn = {
  background: PALETTE.tintOlive,
  color: PALETTE.olive,
  colorSubtle: 'rgba(66,79,26,.62)',
  borderColor: 'rgba(66,79,26,.18)',
  accent: PALETTE.lime,
  badgeBackground: PALETTE.olive,
  badgeColor: PALETTE.lime,
  primaryBackground: PALETTE.ink,
  primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(66,79,26,.5)',
  ghostColor: PALETTE.olive
};
const progress = {
  background: PALETTE.paleLime,
  color: PALETTE.olive,
  colorSubtle: 'rgba(66,79,26,.7)',
  borderColor: 'rgba(66,79,26,.20)',
  accent: PALETTE.lime,
  badgeBackground: PALETTE.olive,
  badgeColor: PALETTE.paleLime,
  primaryBackground: PALETTE.ink,
  primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(66,79,26,.6)',
  ghostColor: PALETTE.olive
};

/* ===========================================================
   Coaching-voice card themes (Nudge Banner anatomy).
   Used by <CoachCard> / <NudgeBanner>. Mirrors CC_THEMES in
   ui_kits/chat-app/coaching-cards.jsx.
     goodtalk → coral (check / important)
     cosmo    → olive (learning) + lime lab accents
     teacher  → sky
   =========================================================== */
const voice_goodtalk = {
  background: PALETTE.coral,
  color: PALETTE.paper,
  colorSubtle: 'rgba(255,255,255,.82)',
  borderColor: 'rgba(15,26,36,.10)',
  accent: PALETTE.paper,
  whyBackground: 'rgba(255,255,255,.16)',
  badgeBackground: PALETTE.ink,
  badgeColor: PALETTE.paper,
  primaryBackground: PALETTE.ink,
  primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(255,255,255,.85)',
  ghostColor: PALETTE.paper,
  shadow: '0 12px 32px rgba(243,95,73,.30)'
};
const voice_cosmo = {
  background: PALETTE.olive,
  color: '#FFFFFF',
  colorSubtle: 'rgba(255,255,255,.65)',
  borderColor: 'rgba(222,251,80,.20)',
  accent: PALETTE.lime,
  whyBackground: 'rgba(255,255,255,.08)',
  badgeBackground: PALETTE.lime,
  badgeColor: PALETTE.olive,
  primaryBackground: PALETTE.lime,
  primaryColor: PALETTE.olive,
  ghostBorderColor: 'rgba(222,251,80,.6)',
  ghostColor: PALETTE.lime,
  shadow: '0 12px 32px rgba(66,79,26,.32)'
};
const voice_teacher = {
  background: PALETTE.sky,
  color: PALETTE.ink,
  colorSubtle: 'rgba(15,26,36,.62)',
  borderColor: 'rgba(15,26,36,.12)',
  accent: PALETTE.ink,
  whyBackground: 'rgba(15,26,36,.06)',
  badgeBackground: PALETTE.ink,
  badgeColor: PALETTE.paper,
  primaryBackground: PALETTE.ink,
  primaryColor: '#FFFFFF',
  ghostBorderColor: 'rgba(15,26,36,.5)',
  ghostColor: PALETTE.ink,
  shadow: '0 12px 32px rgba(15,26,36,.16)'
};

/* ===========================================================
   Role badge themes — school graph identity
   school → class → circle → child → parent → teacher
     child → pink · teacher/school → sky · parent → plum
     cosmo → olive · goodtalk → coral
   =========================================================== */
const role_child = {
  background: PALETTE.pink,
  color: PALETTE.ink,
  accent: PALETTE.pink
};
const role_teacher = {
  background: PALETTE.sky,
  color: PALETTE.ink,
  accent: PALETTE.sky
};
const role_parent = {
  background: PALETTE.tintPlum,
  color: PALETTE.plum,
  accent: PALETTE.plum
};
const role_school = {
  background: PALETTE.sky,
  color: PALETTE.ink,
  accent: PALETTE.ink
};
const role_cosmo = {
  background: PALETTE.olive,
  color: PALETTE.lime,
  accent: PALETTE.olive
};
const role_goodtalk = {
  background: PALETTE.coral,
  color: PALETTE.paper,
  accent: PALETTE.coral
};
const themes = {
  light,
  dark,
  // intervention states
  nudge,
  pause,
  warn,
  alert,
  ok,
  // learning states
  learn,
  progress,
  // coaching voices
  voice_goodtalk,
  voice_cosmo,
  voice_teacher,
  // role badges
  role_child,
  role_teacher,
  role_parent,
  role_school,
  role_cosmo,
  role_goodtalk
};
Object.assign(__ds_scope, { light, dark, nudge, pause, warn, alert, ok, learn, progress, voice_goodtalk, voice_cosmo, voice_teacher, role_child, role_teacher, role_parent, role_school, role_cosmo, role_goodtalk, themes });
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/tamagui/themes.ts", error: String((e && e.message) || e) }); }

// export/tamagui/tokens.ts
try { (() => {
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
// prod: '@tamagui/core' (see README)

/* ------------------------------------------------------------------ *
 * COLOR
 * ------------------------------------------------------------------ */
const color = {
  // ---- Core brand palette ----
  connectaCoral: '#F35F49',
  // important / check / error
  connectaLime: '#DEFB50',
  // highlight / underline / lab
  connectaPaleLime: '#ECFDA8',
  // tertiary tint
  connectaOlive: '#424F1A',
  // learning / Cosmo
  connectaPlum: '#571B32',
  // parents / guardians
  connectaSky: '#BAE6FD',
  // teachers / schools / tasks
  connectaPink: '#FBE1FD',
  // social / friends
  connectaInk: '#0F1A24',
  // PRIMARY — writing / contour / bubbles
  connectaPaper: '#FFFFFF',
  // clean white surface

  // ---- Neutrals (cool, slightly desaturated) ----
  neutral0: '#FFFFFF',
  neutral50: '#F7F8F9',
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
  tintCoral: '#FDEAE5',
  tintOlive: '#EDF1DA',
  tintSky: '#E4F3FC',
  tintPlum: '#F6ECF0',
  tintPink: '#FBE1FD',
  tintLime: '#ECFDA8',
  tintInk: '#EEF1F3',
  // ---- Intervention states (GoodTalk = CORAL: error / check / important) ----
  stateNudgeBg: '#FDEAE5',
  stateNudgeFg: '#0F1A24',
  stateNudgeAccent: '#F35F49',
  statePauseBg: '#EEF1F3',
  statePauseFg: '#0F1A24',
  statePauseAccent: '#6B7682',
  stateWarnBg: '#FDEAE5',
  stateWarnFg: '#0F1A24',
  stateWarnAccent: '#F35F49',
  stateAlertBg: '#FDEAE5',
  stateAlertFg: '#571B32',
  stateAlertAccent: '#F35F49',
  stateOkBg: '#ECFDA8',
  stateOkFg: '#424F1A',
  stateOkAccent: '#DEFB50',
  // ---- Cosmo AI (learning = OLIVE, lab accent = LIME) ----
  cosmoBg: '#EDF1DA',
  cosmoBgStrong: '#424F1A',
  cosmoFg: '#424F1A',
  cosmoFgStrong: '#DEFB50',
  cosmoAccent: '#DEFB50',
  cosmoInk: '#0F1A24',
  stateLearnBg: '#EDF1DA',
  stateLearnFg: '#424F1A',
  stateLearnAccent: '#DEFB50',
  stateProgressBg: '#ECFDA8',
  stateProgressFg: '#424F1A',
  stateProgressAccent: '#DEFB50',
  // ---- Audience surface scopes ----
  scopeChildBg: '#FFFFFF',
  scopeChildTint: '#FBE1FD',
  // child = pink (social)
  scopeTeacherBg: '#F7F8F9',
  scopeTeacherTint: '#E4F3FC',
  // teacher = sky
  scopeParentBg: '#FFFFFF',
  scopeParentTint: '#F6ECF0',
  // parent = plum
  scopeSchoolBg: '#F7F8F9',
  scopeSchoolTint: '#E4F3FC',
  // school = sky
  scopeCosmoBg: '#EDF1DA',
  // cosmo = olive
  scopeTasksBg: '#E4F3FC',
  scopeTasksFg: '#0F1A24',
  scopeTasksAccent: '#0F1A24',
  // tasks = sky/ink

  // ---- Role badge tokens (school graph identity) ----
  roleChildBg: '#FBE1FD',
  roleChildFg: '#0F1A24',
  // child = pink
  roleTeacherBg: '#BAE6FD',
  roleTeacherFg: '#0F1A24',
  // teacher = sky
  roleParentBg: '#F6ECF0',
  roleParentFg: '#571B32',
  // parent = plum
  roleSchoolBg: '#BAE6FD',
  roleSchoolFg: '#0F1A24',
  // school = sky
  roleCosmoBg: '#424F1A',
  roleCosmoFg: '#DEFB50',
  // cosmo = olive + lime
  roleGoodtalkBg: '#F35F49',
  roleGoodtalkFg: '#FFFFFF',
  // goodtalk = coral

  // ---- Message bubble tokens (color = who is speaking) ----
  bubbleSelfBg: '#0F1A24',
  bubbleSelfFg: '#FFFFFF',
  bubbleOtherBg: '#EEF1F3',
  bubbleOtherFg: '#0F1A24',
  bubbleFriendBg: '#FBE1FD',
  bubbleFriendFg: '#0F1A24',
  bubbleTeacherBg: '#E4F3FC',
  bubbleTeacherFg: '#0F1A24',
  bubbleParentBg: '#F6ECF0',
  bubbleParentFg: '#571B32',
  bubbleCosmoBg: '#424F1A',
  bubbleCosmoFg: '#DEFB50',
  bubbleGoodtalkBg: '#FDEAE5',
  bubbleGoodtalkFg: '#0F1A24',
  // ---- Semantic foreground / background ----
  bgPage: '#FFFFFF',
  bgSubtle: '#F7F8F9',
  bgMuted: '#EEF1F3',
  bgInverse: '#0F1A24',
  bgCard: '#FFFFFF',
  bgCardSoft: '#F7F8F9',
  fg1: '#0F1A24',
  fg2: '#343C46',
  fg3: '#6B7682',
  fg4: '#98A2AD',
  fgOnCoral: '#FFFFFF',
  fgOnLime: '#0F1A24',
  fgOnInk: '#FFFFFF',
  border1: '#DDE2E7',
  border2: '#C3CBD3',
  borderStrong: '#0F1A24',
  // primary action = ink
  actionPrimaryBg: '#0F1A24',
  actionPrimaryFg: '#FFFFFF',
  actionPrimaryHover: '#1E2630',
  // important / check / error = coral
  importantBg: '#FDEAE5',
  importantFg: '#0F1A24',
  importantAccent: '#F35F49',
  importantStrongBg: '#F35F49',
  importantStrongFg: '#FFFFFF',
  // highlight = lime
  highlightBg: '#DEFB50',
  highlightFg: '#0F1A24',
  highlightSoft: '#ECFDA8'
};

/* ------------------------------------------------------------------ *
 * SPACE — 4pt grid (CSS --s-1 … --s-11). `true` is the default gap.
 * ------------------------------------------------------------------ */
const space = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 32,
  8: 40,
  9: 56,
  10: 72,
  11: 96,
  true: 16
};

/* ------------------------------------------------------------------ *
 * SIZE — shares the 4pt scale; adds control heights used by components.
 * ------------------------------------------------------------------ */
const size = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 32,
  8: 40,
  9: 56,
  10: 72,
  11: 96,
  true: 16,
  // component sizes
  control: 44,
  // min touch target / button height
  iconBtn: 46,
  // square icon button
  avatar: 34,
  iconSm: 12,
  iconMd: 15,
  iconLg: 18,
  iconXl: 22
};

/* ------------------------------------------------------------------ *
 * RADIUS — soft geometry (CSS --r-*)
 * ------------------------------------------------------------------ */
const radius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 28,
  pill: 9999,
  // bubble tail radii used by chat + suggestion bubbles
  bubble: 18,
  bubbleTail: 5,
  true: 12
};

/* ------------------------------------------------------------------ *
 * Z-INDEX
 * ------------------------------------------------------------------ */
const zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
  sticky: 600,
  overlay: 700,
  modal: 800,
  popover: 900,
  toast: 1000
};
const tokens = __ds_scope.createTokens({
  color,
  space,
  size,
  radius,
  zIndex
});

/* ------------------------------------------------------------------ *
 * NON-TOKEN DESIGN VALUES
 * Tamagui tokens cover color/space/size/radius/zIndex only. These map
 * the remaining CSS variables so nothing from the system is lost.
 * ------------------------------------------------------------------ */
const shadows = {
  1: '0 1px 2px rgba(15,26,36,0.04), 0 1px 1px rgba(15,26,36,0.03)',
  2: '0 4px 12px rgba(15,26,36,0.06), 0 1px 2px rgba(15,26,36,0.04)',
  3: '0 12px 32px rgba(15,26,36,0.10), 0 2px 6px rgba(15,26,36,0.05)',
  pop: '0 18px 48px rgba(15,26,36,0.14)',
  inset: 'inset 0 0 0 1px rgba(15,26,36,0.06)'
};
const motion = {
  easeStandard: 'cubic-bezier(0.2, 0, 0, 1)',
  easeEmphasis: 'cubic-bezier(0.3, 0, 0, 1)',
  easeExit: 'cubic-bezier(0.4, 0, 1, 1)',
  durFast: 140,
  durBase: 220,
  durSlow: 360
};
const washes = {
  sunrise: 'linear-gradient(135deg, #DEFB50 0%, #F35F49 100%)',
  dusk: 'linear-gradient(135deg, #F35F49 0%, #571B32 100%)',
  night: 'linear-gradient(180deg, #571B32 0%, #0F1A24 100%)',
  cosmo: 'linear-gradient(160deg, #BAE6FD 0%, #0F1A24 110%)',
  meadow: 'linear-gradient(180deg, #ECFDA8 0%, #424F1A 100%)',
  paper: 'linear-gradient(180deg, #FFFFFF 0%, #BAE6FD 100%)',
  heat: 'linear-gradient(160deg, #F35F49 0%, #0F1A24 100%)',
  calm: 'linear-gradient(180deg, #FFFFFF 0%, #F6ECF0 100%)'
};
Object.assign(__ds_scope, { color, space, size, radius, zIndex, tokens, shadows, motion, washes });
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/tamagui/tokens.ts", error: String((e && e.message) || e) }); }

// export/tamagui/tamagui.config.ts
try { (() => {
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

const config = __ds_scope.createTamagui({
  tokens: __ds_scope.tokens,
  themes: __ds_scope.themes,
  fonts: __ds_scope.fonts,
  shorthands: __ds_scope.shorthands,
  // Connecta breakpoints — child app is phone-primary; portals go wider.
  media: {
    xs: {
      maxWidth: 380
    },
    // phone (child app design width)
    sm: {
      maxWidth: 640
    },
    md: {
      maxWidth: 860
    },
    lg: {
      maxWidth: 1120
    },
    xl: {
      maxWidth: 1440
    },
    gtXs: {
      minWidth: 381
    },
    gtSm: {
      minWidth: 641
    },
    gtMd: {
      minWidth: 861
    },
    gtLg: {
      minWidth: 1121
    }
  },
  settings: {
    allowedStyleValues: 'somewhat-strict',
    fastSchemeChange: true
  }
});
Object.assign(__ds_scope, { config });
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/tamagui/tamagui.config.ts", error: String((e && e.message) || e) }); }

// ui_kits/chat-app/coaching-cards.jsx
try { (() => {
// coaching-cards.jsx — the three coaching voices rebuilt on the new
// GoodTalk Nudge Banner anatomy: themed card (soft shadow, no left rule),
// solid badge pill, "Защо?" expander, primary + icon actions.
// GoodTalk carries the full held-draft → suggest → sent interaction.

const {
  useState,
  useEffect
} = React;
const CC_SANS = '"DM Sans", system-ui, -apple-system, sans-serif';
const CC_MONO = '"DM Sans", system-ui, -apple-system, sans-serif';
function ccIcons() {
  useEffect(() => {
    if (window.lucide) lucide.createIcons({
      attrs: {
        'stroke-width': 1.75
      }
    });
  });
}

// ── Held draft — the intercepted message, not yet sent ──────────────
function HeldDraft({
  text,
  sent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      marginBottom: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '84%',
      background: '#FFFFFF',
      color: sent ? '#0F1A24' : 'rgba(15,26,36,.62)',
      padding: '11px 15px',
      borderRadius: '18px 18px 5px 18px',
      font: `400 14.5px/1.4 ${CC_SANS}`,
      wordWrap: 'break-word',
      border: sent ? '1px solid #DDE2E7' : '1.5px dashed #F35F49'
    }
  }, text), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      marginTop: 6,
      marginRight: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": sent ? 'check' : 'clock',
    style: {
      width: 11,
      height: 11,
      color: sent ? '#424F1A' : '#F35F49'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `500 10.5px/1 ${CC_MONO}`,
      color: sent ? '#424F1A' : '#F35F49',
      letterSpacing: '.02em'
    }
  }, sent ? 'изпратено · 14:32' : 'задържано · не е изпратено')));
}

// ── Shared expander ("Защо?" / "Подсказка") ─────────────────────────
function Expander({
  label,
  eyebrow,
  text,
  fg
}) {
  const [open, setOpen] = useState(false);
  ccIcons();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      color: fg,
      font: `600 12px/1.3 ${CC_SANS}`
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "help-circle",
    style: {
      width: 14,
      height: 14
    }
  }), label, /*#__PURE__*/React.createElement("i", {
    "data-lucide": open ? 'chevron-up' : 'chevron-down',
    style: {
      width: 13,
      height: 13,
      opacity: .7
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 9,
      background: 'rgba(255,255,255,.85)',
      borderRadius: 12,
      padding: '11px 13px',
      color: '#0F1A24',
      font: `400 12.5px/1.5 ${CC_SANS}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 5,
      color: 'rgba(15,26,36,.55)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "corner-left-up",
    style: {
      width: 12,
      height: 12
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `600 10px/1 ${CC_MONO}`,
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, eyebrow)), text));
}

// ── The themed card shell (the new nudge-banner look) ───────────────
function cardShell(t) {
  return {
    background: t.bg,
    borderRadius: 20,
    padding: '16px 16px 15px',
    boxShadow: t.shadow,
    margin: '10px 0 2px',
    animation: 'slideDown 220ms cubic-bezier(.3,0,0,1)'
  };
}
function Badge({
  t,
  icon,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: t.badgeBg,
      color: t.badgeFg,
      font: `600 10px/1 ${CC_MONO}`,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      padding: '6px 10px',
      borderRadius: 9999,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 12,
      height: 12,
      strokeWidth: 2
    }
  }), children);
}
function PrimaryBtn({
  t,
  icon,
  children,
  onClick,
  flex
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      flex: flex ? 1 : 'initial',
      background: t.primaryBg,
      color: t.primaryFg,
      border: 0,
      borderRadius: 12,
      padding: '12px 14px',
      font: `600 13.5px/1 ${CC_SANS}`,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 15,
      height: 15,
      strokeWidth: 2
    }
  }), children);
}
function GhostBtn({
  t,
  icon,
  children,
  onClick,
  iconOnly,
  label
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": label,
    title: label,
    style: {
      background: 'transparent',
      color: t.secFg,
      border: `1.5px solid ${t.secBorder}`,
      borderRadius: 12,
      padding: iconOnly ? '12px' : '12px 14px',
      width: iconOnly ? 46 : 'auto',
      font: `600 13.5px/1 ${CC_SANS}`,
      cursor: 'pointer',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: iconOnly ? 16 : 15,
      height: iconOnly ? 16 : 15
    }
  }), children);
}

// ── GoodTalk scene — held draft + nudge + suggest + sent ────────────
function GoodTalkScene({
  t,
  draft,
  why,
  suggestion
}) {
  const [stage, setStage] = useState('prompt'); // prompt | suggested | sent
  ccIcons();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeldDraft, {
    text: stage === 'sent' ? suggestion : draft,
    sent: stage === 'sent'
  }), /*#__PURE__*/React.createElement("div", {
    style: cardShell(t)
  }, stage !== 'sent' && /*#__PURE__*/React.createElement(Badge, {
    t: t,
    icon: "sparkles"
  }, "\u041D\u0435\u0438\u0437\u043F\u0440\u0430\u0442\u0435\u043D\u043E"), stage !== 'sent' && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 16px/1.4 ${CC_SANS}`,
      color: t.fg,
      letterSpacing: '-.005em',
      margin: '11px 0 6px'
    }
  }, "\u0422\u043E\u0432\u0430 \u043C\u043E\u0436\u0435 \u0434\u0430 \u043D\u0430\u0440\u0430\u043D\u0438 \u043D\u0435\u0447\u0438\u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0430. \u0418\u0441\u043A\u0430\u0448 \u043B\u0438 \u0434\u0430 \u0441\u043C\u0435\u043D\u0438\u043C \u043E\u0442\u0433\u043E\u0432\u043E\u0440\u0430 \u0442\u0438?"), stage === 'prompt' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Expander, {
    label: "\u0417\u0430\u0449\u043E?",
    eyebrow: "\u0417\u0430\u0449\u043E \u0442\u043E\u0437\u0438 nudge",
    text: why,
    fg: t.fg
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(PrimaryBtn, {
    t: t,
    icon: "sparkles",
    flex: true,
    onClick: () => setStage('suggested')
  }, "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0438 \u043C\u0438"), /*#__PURE__*/React.createElement(GhostBtn, {
    t: t,
    icon: "pencil",
    iconOnly: true,
    label: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0430\u0439"
  }))), stage === 'suggested' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.whyBg,
      borderRadius: 14,
      padding: '12px 13px 13px',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 8,
      color: t.sub
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "sparkles",
    style: {
      width: 12,
      height: 12,
      strokeWidth: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `600 10px/1 ${CC_MONO}`,
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043E\u0442 GoodTalk")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,.6)',
      borderRadius: '14px 14px 14px 5px',
      padding: '11px 14px',
      font: `500 14.5px/1.4 ${CC_SANS}`,
      color: '#0F1A24',
      marginBottom: 10
    }
  }, suggestion), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(PrimaryBtn, {
    t: t,
    icon: "send-horizontal",
    flex: true,
    onClick: () => setStage('sent')
  }, "\u0418\u0437\u043F\u0440\u0430\u0442\u0438"), /*#__PURE__*/React.createElement(GhostBtn, {
    t: t,
    icon: "refresh-cw",
    iconOnly: true,
    label: "\u0414\u0440\u0443\u0433\u043E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
    onClick: () => setStage('prompt')
  }))), stage === 'sent' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check-circle",
    style: {
      width: 22,
      height: 22,
      color: t.fg,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `700 15px/1.2 ${CC_SANS}`,
      color: t.fg
    }
  }, "\u0418\u0437\u043F\u0440\u0430\u0442\u0435\u043D\u043E"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 12.5px/1.4 ${CC_SANS}`,
      color: t.sub,
      marginTop: 2
    }
  }, "\u0412\u0438\u0436\u0434\u0430\u0442 \u0441\u0430\u043C\u043E \u043D\u043E\u0432\u0430\u0442\u0430 \u0432\u0435\u0440\u0441\u0438\u044F.")))));
}

// ── Static coaching card (Cosmo / Teacher) — same look, no safety flow ─
function CoachCard({
  t,
  icon,
  badge,
  name,
  headline,
  body,
  expand,
  primary,
  secondary
}) {
  ccIcons();
  return /*#__PURE__*/React.createElement("div", {
    style: cardShell(t)
  }, /*#__PURE__*/React.createElement(Badge, {
    t: t,
    icon: icon
  }, badge), name && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `500 12px/1 ${CC_SANS}`,
      color: t.sub,
      margin: '10px 0 0'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 16px/1.4 ${CC_SANS}`,
      color: t.fg,
      letterSpacing: '-.005em',
      margin: '11px 0 6px'
    }
  }, headline), body && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 13.5px/1.45 ${CC_SANS}`,
      color: t.fg,
      opacity: .82,
      marginBottom: 8
    }
  }, body), expand && /*#__PURE__*/React.createElement(Expander, {
    label: expand.label,
    eyebrow: expand.eyebrow,
    text: expand.text,
    fg: t.fg
  }), (primary || secondary) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 10
    }
  }, primary && /*#__PURE__*/React.createElement(PrimaryBtn, {
    t: t,
    icon: primary.icon,
    flex: true
  }, primary.text), secondary && (secondary.text ? /*#__PURE__*/React.createElement(GhostBtn, {
    t: t,
    icon: secondary.icon
  }, secondary.text) : /*#__PURE__*/React.createElement(GhostBtn, {
    t: t,
    icon: secondary.icon,
    iconOnly: true,
    label: secondary.label
  }))));
}

// ── Voice themes (identity preserved, new anatomy) ──────────────────
const CC_THEMES = {
  // GoodTalk → coral (error / check / important)
  goodtalk: {
    bg: '#F35F49',
    fg: '#FFFFFF',
    sub: 'rgba(255,255,255,.78)',
    badgeBg: '#0F1A24',
    badgeFg: '#FFFFFF',
    primaryBg: '#0F1A24',
    primaryFg: '#FFFFFF',
    secBorder: 'rgba(255,255,255,.85)',
    secFg: '#FFFFFF',
    whyBg: 'rgba(255,255,255,.16)',
    shadow: '0 12px 32px rgba(243,95,73,.30)'
  },
  // Cosmo → olive (learning) with lime lab accents
  cosmo: {
    bg: '#424F1A',
    fg: '#FFFFFF',
    sub: 'rgba(255,255,255,.65)',
    badgeBg: '#DEFB50',
    badgeFg: '#424F1A',
    primaryBg: '#0F1A24',
    primaryFg: '#FFFFFF',
    secBorder: 'rgba(222,251,80,.6)',
    secFg: '#DEFB50',
    whyBg: 'rgba(255,255,255,.08)',
    shadow: '0 12px 32px rgba(66,79,26,.32)'
  },
  // Teacher → sky
  teacher: {
    bg: '#BAE6FD',
    fg: '#0F1A24',
    sub: 'rgba(15,26,36,.62)',
    badgeBg: '#0F1A24',
    badgeFg: '#FFFFFF',
    primaryBg: '#0F1A24',
    primaryFg: '#FFFFFF',
    secBorder: 'rgba(15,26,36,.5)',
    secFg: '#0F1A24',
    whyBg: 'rgba(15,26,36,.06)',
    shadow: '0 12px 32px rgba(15,26,36,.16)'
  }
};
Object.assign(window, {
  HeldDraft,
  GoodTalkScene,
  CoachCard,
  CC_THEMES,
  CC_SANS,
  CC_MONO
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/chat-app/coaching-cards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/chat-app/components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Connecta chat-app components — kid/teen surface.
// Soft geometry, ink-on-white, coral accents, calm intervention banners.

const C = {
  ink: '#0F1A24',
  paper: '#FFFFFF',
  sky: '#BAE6FD',
  coral: '#F35F49',
  lime: '#DEFB50',
  paleLime: '#ECFDA8',
  plum: '#571B32',
  olive: '#424F1A',
  pink: '#FBE1FD',
  n50: '#F7F8F9',
  n100: '#EEF1F3',
  n200: '#DDE2E7',
  n300: '#C3CBD3',
  n400: '#98A2AD',
  n500: '#6B7682',
  n600: '#4D5762',
  n700: '#343C46',
  // GoodTalk — pink ground, plum type (calm safety coaching, never red)
  goodtalkBg: '#FBE1FD',
  goodtalkFg: '#571B32',
  goodtalkAccent: '#571B32',
  // Cosmo — olive ground, lime type (learning / lab coach)
  cosmoBg: '#424F1A',
  cosmoFg: '#DEFB50',
  cosmoAccent: '#DEFB50',
  // Teacher — sky ground, ink type
  teacherBg: '#BAE6FD',
  teacherFg: '#0F1A24',
  teacherAccent: '#0F1A24',
  // Legacy aliases retained for older surfaces (brand-only)
  nudgeBg: '#FDEAE5',
  nudgeFg: '#0F1A24',
  pauseBg: '#EEF1F3',
  pauseFg: '#0F1A24',
  warnBg: '#FDEAE5',
  warnFg: '#0F1A24',
  alertBg: '#FDEAE5',
  alertFg: '#571B32'
};
const FONT = '"DM Sans", system-ui, -apple-system, sans-serif';
const MONO = '"DM Sans", system-ui, -apple-system, sans-serif';

// ─────────────────────────── Top app bar ───────────────────────────
function ChatAppBar({
  title,
  subtitle,
  left,
  right,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 16px',
      borderBottom: `1px solid ${C.n200}`,
      background: C.paper,
      minHeight: 56,
      boxSizing: 'border-box'
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      border: 0,
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: C.ink
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-left",
    style: {
      width: 22,
      height: 22
    }
  })) : left, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 16px/1.2 ${FONT}`,
      color: C.ink,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 12px/1.2 ${FONT}`,
      color: C.n500,
      marginTop: 2
    }
  }, subtitle)), right);
}

// ─────────────────────────── Circle list row ───────────────────────────
function CircleRow({
  name,
  members,
  lastMsg,
  time,
  badge,
  kind,
  selected,
  onClick
}) {
  const swatchBg = {
    family: C.sky,
    school: C.paleLime,
    friends: C.n100,
    sports: C.lime
  }[kind] || C.n100;
  const swatchFg = kind === 'school' ? C.olive : kind === 'sports' ? C.olive : C.ink;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 16px',
      width: '100%',
      background: selected ? C.n50 : 'transparent',
      border: 0,
      cursor: 'pointer',
      textAlign: 'left',
      borderBottom: `1px solid ${C.n100}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 14,
      background: swatchBg,
      color: swatchFg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: `700 18px/1 ${FONT}`,
      flexShrink: 0
    }
  }, name.slice(0, 1).toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 15px/1.2 ${FONT}`,
      color: C.ink,
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${MONO}`,
      color: C.n500
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 13px/1.3 ${FONT}`,
      color: C.n600,
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, lastMsg), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.coral,
      color: '#fff',
      font: `700 11px/1 ${FONT}`,
      minWidth: 18,
      height: 18,
      padding: '0 6px',
      borderRadius: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${FONT}`,
      color: C.n400,
      marginTop: 4
    }
  }, members, " \xB7 private")));
}

// ─────────────────────────── Chat bubble ───────────────────────────
function Bubble({
  children,
  mine,
  sender,
  time,
  system
}) {
  if (system) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        margin: '12px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: `400 12px/1.4 ${FONT}`,
        color: C.n500,
        background: C.n50,
        padding: '6px 12px',
        borderRadius: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/glyph-nn-dark.svg",
      style: {
        width: 14,
        height: 14,
        opacity: .6
      }
    }), children));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: mine ? 'flex-end' : 'flex-start',
      margin: '4px 0'
    }
  }, sender && !mine && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `500 11px/1 ${FONT}`,
      color: C.n500,
      marginLeft: 14,
      marginBottom: 4
    }
  }, sender), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '78%',
      background: mine ? C.ink : C.paper,
      color: mine ? '#fff' : C.ink,
      padding: '10px 14px',
      borderRadius: mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
      font: `400 14px/1.4 ${FONT}`,
      boxShadow: mine ? 'none' : `0 1px 2px rgba(15,26,36,.04)`,
      border: mine ? 'none' : `1px solid ${C.n100}`,
      wordWrap: 'break-word'
    }
  }, children), time && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${MONO}`,
      color: C.n400,
      marginTop: 4,
      marginLeft: mine ? 0 : 14,
      marginRight: mine ? 14 : 0
    }
  }, time));
}

// ─────────────────────────── Composer ───────────────────────────
function Composer({
  value,
  onChange,
  onSend,
  onRecordStart,
  onEmoji,
  disabled,
  placeholder = 'Write a message'
}) {
  const empty = !value;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 10,
      padding: '10px 12px 26px',
      background: C.paper,
      borderTop: `1px solid ${C.n100}`,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: C.n50,
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: C.n600
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus",
    style: {
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: C.paper,
      borderRadius: 14,
      boxShadow: `inset 0 0 0 1px ${C.n200}`,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      minHeight: 40,
      padding: '8px 6px 8px 12px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange(e.target.value),
    placeholder: placeholder,
    onKeyDown: e => {
      if (e.key === 'Enter' && !disabled) onSend?.();
    },
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: `400 14px/1.4 ${FONT}`,
      color: C.ink,
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onEmoji,
    "aria-label": "Emoji",
    style: {
      width: 28,
      height: 28,
      borderRadius: 9999,
      border: 0,
      cursor: 'pointer',
      background: 'transparent',
      color: C.n500,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "smile",
    style: {
      width: 20,
      height: 20
    }
  }))), empty ? /*#__PURE__*/React.createElement("button", {
    onClick: onRecordStart,
    "aria-label": "Hold to record",
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      border: 0,
      cursor: 'pointer',
      background: C.n50,
      color: C.n700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'transform 140ms cubic-bezier(.2,0,0,1)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mic",
    style: {
      width: 20,
      height: 20
    }
  })) : /*#__PURE__*/React.createElement("button", {
    onClick: onSend,
    disabled: disabled,
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      border: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: disabled ? C.n100 : C.ink,
      color: disabled ? C.n400 : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'transform 140ms cubic-bezier(.2,0,0,1)'
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(.96)';
    },
    onMouseUp: e => e.currentTarget.style.transform = 'scale(1)',
    onMouseLeave: e => e.currentTarget.style.transform = 'scale(1)'
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up",
    style: {
      width: 20,
      height: 20
    }
  })));
}

// ─────────────────────────── GoodTalk nudge banner ───────────────────────────
// Green + Black voice. Calm safety coaching, never alarmist.
function NudgeBanner({
  onRewrite,
  onEdit,
  onWhy,
  draft,
  tag = 'Nudge · just for you',
  meta = 'not sent yet',
  prompt = 'That might hurt someone. Want to rephrase?',
  primary = 'Try a rewrite',
  ghost = 'Edit myself'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.goodtalkBg,
      padding: 14,
      margin: '8px 12px',
      borderRadius: 14,
      borderLeft: `3px solid ${C.goodtalkAccent}`,
      animation: 'slideDown 220ms cubic-bezier(.3,0,0,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.plum,
      color: C.pink,
      font: `600 10px/1 ${MONO}`,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      padding: '4px 8px',
      borderRadius: 9999,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "sparkles",
    style: {
      width: 11,
      height: 11,
      strokeWidth: 2
    }
  }), tag), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${MONO}`,
      color: C.goodtalkFg,
      opacity: .6
    }
  }, meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 14px/1.35 ${FONT}`,
      color: C.goodtalkFg,
      marginBottom: 4
    }
  }, prompt), draft && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 12px/1.35 ${FONT}`,
      color: C.goodtalkFg,
      opacity: .7,
      fontStyle: 'italic'
    }
  }, "\"", draft, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onRewrite,
    style: btn(C.plum, '#fff')
  }, primary), /*#__PURE__*/React.createElement("button", {
    onClick: onEdit,
    style: btnGhost(C.goodtalkFg)
  }, ghost), /*#__PURE__*/React.createElement("button", {
    onClick: onWhy,
    style: {
      ...btnGhost(C.goodtalkFg),
      border: 0,
      marginLeft: 'auto'
    }
  }, "Why?")));
}

// ─────────────────────────── Cosmo bubble ───────────────────────────
// Black + Lime — Socratic learning. Visual inverse of GoodTalk.
// Feels like a quiet blackboard. Cosmo asks the next question; never the answer.
function CosmoBubble({
  tag = 'Cosmo · for this task',
  meta = 'thinking together',
  prompt = 'Good start. How will you reduce the measurement error?',
  draft,
  primary = 'Try again',
  ghost = 'Hint',
  onPrimary,
  onGhost,
  onWhy
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.cosmoBg,
      padding: 14,
      margin: '8px 12px',
      borderRadius: 14,
      borderLeft: `3px solid ${C.cosmoAccent}`,
      animation: 'slideDown 220ms cubic-bezier(.3,0,0,1)',
      color: C.paper
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.lime,
      color: C.ink,
      font: `600 10px/1 ${MONO}`,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      padding: '4px 8px',
      borderRadius: 9999,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "compass",
    style: {
      width: 11,
      height: 11,
      strokeWidth: 2
    }
  }), tag), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${MONO}`,
      color: C.lime,
      opacity: .75
    }
  }, meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 14px/1.35 ${FONT}`,
      color: C.paper,
      marginBottom: 4
    }
  }, prompt), draft && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 12px/1.35 ${FONT}`,
      color: C.paper,
      opacity: .55,
      fontStyle: 'italic'
    }
  }, "\"", draft, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onPrimary,
    style: btn(C.lime, C.ink)
  }, primary), /*#__PURE__*/React.createElement("button", {
    onClick: onGhost,
    style: btnGhost(C.lime)
  }, ghost), /*#__PURE__*/React.createElement("button", {
    onClick: onWhy,
    style: {
      ...btnGhost(C.lime),
      border: 0,
      marginLeft: 'auto',
      opacity: .85
    }
  }, "Why?")));
}

// ─────────────────────────── Teacher bubble ───────────────────────────
// Light Blue + Dark Blue — teacher-led prompt / classroom announcement.
// Workmanlike. Pinned to a class circle, not chatty.
function TeacherBubble({
  tag = 'Teacher · pinned',
  meta = 'class 7а',
  prompt = 'Reminder: project draft due Friday. Bring questions to the class circle.',
  draft,
  primary,
  ghost = 'Mark read',
  onPrimary,
  onGhost,
  onDetails,
  teacherName
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.teacherBg,
      padding: 14,
      margin: '8px 12px',
      borderRadius: 14,
      borderLeft: `3px solid ${C.teacherAccent}`,
      animation: 'slideDown 220ms cubic-bezier(.3,0,0,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.teacherAccent,
      color: C.paper,
      font: `600 10px/1 ${MONO}`,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      padding: '4px 8px',
      borderRadius: 9999,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clipboard-list",
    style: {
      width: 11,
      height: 11,
      strokeWidth: 2
    }
  }), tag), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${MONO}`,
      color: C.teacherFg,
      opacity: .7
    }
  }, meta)), teacherName && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `500 12px/1 ${FONT}`,
      color: C.teacherFg,
      opacity: .7,
      marginBottom: 6
    }
  }, teacherName), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 14px/1.4 ${FONT}`,
      color: C.teacherFg,
      marginBottom: 4
    }
  }, prompt), draft && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 12px/1.4 ${FONT}`,
      color: C.teacherFg,
      opacity: .8
    }
  }, draft), (primary || ghost || onDetails) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 10,
      flexWrap: 'wrap'
    }
  }, primary && /*#__PURE__*/React.createElement("button", {
    onClick: onPrimary,
    style: btn(C.teacherAccent, '#fff')
  }, primary), ghost && /*#__PURE__*/React.createElement("button", {
    onClick: onGhost,
    style: btnGhost(C.teacherFg)
  }, ghost), onDetails && /*#__PURE__*/React.createElement("button", {
    onClick: onDetails,
    style: {
      ...btnGhost(C.teacherFg),
      border: 0,
      marginLeft: 'auto'
    }
  }, "Details")));
}
function PauseBanner({
  secondsLeft = 120
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.pauseBg,
      padding: 14,
      margin: '8px 12px',
      borderRadius: 14,
      borderLeft: `3px solid #6B7682`,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "pause-circle",
    style: {
      width: 28,
      height: 28,
      color: C.pauseFg,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 14px/1.3 ${FONT}`,
      color: C.pauseFg
    }
  }, "Let's pause for 2 minutes so this doesn't escalate."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 12px/1.3 ${FONT}`,
      color: C.pauseFg,
      opacity: .8,
      marginTop: 2
    }
  }, "Same rule for the whole group.")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `700 13px/1 ${MONO}`,
      color: C.pauseFg
    }
  }, Math.floor(secondsLeft / 60), ":", String(secondsLeft % 60).padStart(2, '0')));
}
function btn(bg, fg) {
  return {
    background: bg,
    color: fg,
    border: 0,
    borderRadius: 10,
    padding: '8px 14px',
    font: `600 13px/1 ${FONT}`,
    cursor: 'pointer'
  };
}
function btnGhost(fg) {
  return {
    background: 'transparent',
    color: fg,
    border: `1px solid ${fg}`,
    borderRadius: 10,
    padding: '8px 14px',
    font: `600 13px/1 ${FONT}`,
    cursor: 'pointer'
  };
}

// ─────────────────────────── Login screen ───────────────────────────
function LoginScreen({
  onContinue
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: C.paper,
      padding: '40px 28px 24px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/app-icon-coral.svg",
    style: {
      width: 72,
      height: 72,
      borderRadius: 18,
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${MONO}`,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: C.n500,
      marginBottom: 12
    }
  }, "welcome back"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `700 32px/1.1 ${FONT}`,
      letterSpacing: '-0.02em',
      color: C.ink,
      marginBottom: 8
    }
  }, "Chat freely."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `700 32px/1.1 ${FONT}`,
      letterSpacing: '-0.02em',
      color: C.coral,
      marginBottom: 32
    }
  }, "If it gets messy, we help you fix it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Your handle",
    defaultValue: "mia.s",
    style: inputStyle()
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Passcode",
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022",
    style: inputStyle()
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: onContinue,
    style: {
      background: C.ink,
      color: '#fff',
      border: 0,
      borderRadius: 14,
      padding: '16px',
      font: `600 16px/1 ${FONT}`,
      cursor: 'pointer',
      width: '100%',
      marginBottom: 8
    }
  }, "Continue"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 12px/1.4 ${FONT}`,
      color: C.n500,
      textAlign: 'center'
    }
  }, "Your chats aren't public. Just your circle."));
}
function inputStyle() {
  return {
    background: C.paper,
    border: 0,
    borderRadius: 14,
    boxShadow: `inset 0 0 0 1px ${C.n200}`,
    padding: '14px 16px',
    font: `400 15px/1.3 ${FONT}`,
    color: C.ink,
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  };
}

// ─────────────────────────── Circles screen ───────────────────────────
function CirclesScreen({
  circles,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: C.paper
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/glyph-nn-coral.svg",
    style: {
      width: 28,
      height: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `700 22px/1.1 ${FONT}`,
      letterSpacing: '-0.015em',
      color: C.ink
    }
  }, "Circles"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 12px/1.3 ${FONT}`,
      color: C.n500,
      marginTop: 2
    }
  }, "No feeds. No followers. Just approved circles.")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: C.n50,
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: C.n700
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "settings",
    style: {
      width: 20,
      height: 20
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 16px 12px',
      display: 'flex',
      gap: 8,
      overflowX: 'auto'
    }
  }, ['All', 'Family', 'School', 'Friends'].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      background: i === 0 ? C.ink : C.n100,
      color: i === 0 ? '#fff' : C.ink,
      font: `500 13px/1 ${FONT}`,
      padding: '8px 14px',
      borderRadius: 9999,
      whiteSpace: 'nowrap'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto'
    }
  }, circles.map(c => /*#__PURE__*/React.createElement(CircleRow, _extends({
    key: c.id
  }, c, {
    onClick: () => onOpen(c)
  })))));
}

// ─────────────────────────── Chat screen ───────────────────────────
function ChatScreen({
  circle,
  messages,
  draft,
  setDraft,
  onSend,
  intervention,
  onRewrite,
  onEdit,
  onWhy,
  onBack,
  onSendVoice
}) {
  const scrollRef = React.useRef(null);
  const [emojiOpen, setEmojiOpen] = React.useState(false);
  const [recording, setRecording] = React.useState(null); // null | { elapsed }
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, intervention, recording]);
  // tick recorder elapsed
  React.useEffect(() => {
    if (!recording) return;
    const id = setInterval(() => setRecording(r => r ? {
      elapsed: r.elapsed + 0.1
    } : null), 100);
    return () => clearInterval(id);
  }, [recording !== null]);
  const insertEmoji = e => {
    setDraft((draft || '') + e);
  };
  const startRecord = () => {
    setRecording({
      elapsed: 0
    });
    setEmojiOpen(false);
  };
  const cancelRecord = () => setRecording(null);
  const sendRecord = () => {
    const dur = Math.max(1, Math.round(recording.elapsed));
    setRecording(null);
    onSendVoice?.(dur);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      background: C.n50
    }
  }, /*#__PURE__*/React.createElement(ChatAppBar, {
    title: circle.name,
    subtitle: `${circle.members} · private`,
    onBack: onBack,
    right: /*#__PURE__*/React.createElement("button", {
      style: {
        width: 36,
        height: 36,
        borderRadius: 10,
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: C.n700
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "more-horizontal",
      style: {
        width: 20,
        height: 20
      }
    }))
  }), /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement(Bubble, {
    system: true
  }, "Read by your circle only \xB7 EU servers"), messages.map((m, i) => m.kind === 'voice' ? /*#__PURE__*/React.createElement(VoiceMessage, {
    key: i,
    voice: m.voice || (m.mine ? 'kid-mine' : 'kid'),
    sender: m.sender,
    time: m.time,
    duration: m.duration || 12,
    progress: m.progress || 0,
    playing: m.playing,
    onTogglePlay: m.onTogglePlay
  }) : /*#__PURE__*/React.createElement(Bubble, {
    key: i,
    mine: m.mine,
    sender: m.sender,
    time: m.time
  }, m.text)), intervention === 'pause' && /*#__PURE__*/React.createElement(PauseBanner, null)), intervention === 'nudge' && /*#__PURE__*/React.createElement(NudgeBanner, {
    draft: draft,
    onRewrite: onRewrite,
    onEdit: onEdit,
    onWhy: onWhy
  }), emojiOpen && !recording && /*#__PURE__*/React.createElement(EmojiPicker, {
    onPick: e => {
      insertEmoji(e);
    },
    onClose: () => setEmojiOpen(false)
  }), recording ? /*#__PURE__*/React.createElement(VoiceRecorder, {
    voice: "kid-mine",
    elapsed: recording.elapsed,
    onCancel: cancelRecord,
    onSend: sendRecord
  }) : /*#__PURE__*/React.createElement(Composer, {
    value: draft,
    onChange: setDraft,
    onSend: onSend,
    onRecordStart: startRecord,
    onEmoji: () => setEmojiOpen(o => !o),
    disabled: intervention === 'pause'
  }));
}

// ─────────────────────────── Emoji picker ───────────────────────────
// Tiny flyout above the composer. Pass-through: kid's emoji is unchanged
// by GoodTalk per brand voice (emoji in a kid's own bubble pass through).
function EmojiPicker({
  onPick,
  onClose
}) {
  const groups = [['😀', '😅', '😂', '🥲', '😊', '😌', '😎', '🤩', '🥰', '😘', '🤗', '🤔'], ['👍', '👎', '👏', '🙌', '🤝', '✌️', '🤞', '🙏', '💪', '👀', '🫶', '🫡'], ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '💔', '✨', '🔥', '🎉'], ['⚽', '🏀', '🎮', '🎵', '📚', '🎨', '🧪', '🍕', '☕', '🌧️', '🌈', '⭐']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 12px 8px',
      borderRadius: 14,
      background: C.paper,
      border: `1px solid ${C.n200}`,
      boxShadow: '0 8px 24px rgba(15,26,36,.10)',
      padding: '10px 12px',
      animation: 'slideDown 180ms cubic-bezier(.3,0,0,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `500 11px/1 ${MONO}`,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: C.n500
    }
  }, "Emoji"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      color: C.n500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 14,
      height: 14
    }
  }))), groups.map((row, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      display: 'flex',
      gap: 2,
      justifyContent: 'space-between',
      marginTop: 2
    }
  }, row.map(e => /*#__PURE__*/React.createElement("button", {
    key: e,
    onClick: () => onPick(e),
    style: {
      flex: 1,
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      padding: '4px 0',
      fontSize: 20,
      lineHeight: 1,
      borderRadius: 6
    }
  }, e)))));
}
// One component, four voices, picked via `voice`:
//   'kid-mine'  — child's own outgoing voice memo  (ink ground, paper waveform)
//   'kid'       — incoming voice memo from a classmate (paper ground, ink waveform)
//   'teacher'   — teacher voice memo (sky ground, deep blue waveform)
//   'cosmo'     — Cosmo voice prompt (ink ground, lime waveform)
//   'goodtalk'  — GoodTalk voice nudge (pale-lime ground, ink waveform)
//
// Waveform is a deterministic seeded series of bars (no reshuffle on re-render).
// When playing, bars left of the playhead are filled, the rest dim. A small
// pulse anchors the playhead.
function VoiceMessage({
  voice = 'kid',
  duration = 14,
  progress = 0,
  playing = false,
  onTogglePlay,
  caption,
  sender,
  time,
  bars = 28,
  seed = 7
}) {
  const V = {
    'kid-mine': {
      bg: C.ink,
      fg: C.paper,
      wave: C.paper,
      waveDim: 'rgba(255,255,255,.28)',
      accent: C.coral,
      role: null,
      align: 'end',
      playBg: C.paper,
      playFg: C.ink
    },
    'kid': {
      bg: C.paper,
      fg: C.ink,
      wave: C.ink,
      waveDim: 'rgba(15,26,36,.20)',
      accent: C.ink,
      role: null,
      align: 'start',
      playBg: C.ink,
      playFg: C.paper
    },
    'teacher': {
      bg: C.teacherBg,
      fg: C.teacherFg,
      wave: C.teacherAccent,
      waveDim: 'rgba(15,26,36,.22)',
      accent: C.teacherAccent,
      role: {
        label: 'TEACHER',
        bg: C.teacherAccent,
        fg: C.paper
      },
      align: 'start',
      playBg: C.teacherAccent,
      playFg: C.paper
    },
    'cosmo': {
      bg: C.cosmoBg,
      fg: C.paper,
      wave: C.lime,
      waveDim: 'rgba(222,251,80,.30)',
      accent: C.lime,
      role: {
        label: 'SOCRAT',
        bg: C.lime,
        fg: C.ink
      },
      align: 'start',
      playBg: C.lime,
      playFg: C.ink
    },
    'goodtalk': {
      bg: C.goodtalkBg,
      fg: C.plum,
      wave: C.plum,
      waveDim: 'rgba(87,27,50,.20)',
      accent: C.plum,
      role: {
        label: 'GOODTALK',
        bg: C.plum,
        fg: C.paper
      },
      align: 'start',
      playBg: C.plum,
      playFg: C.paper
    }
  }[voice];

  // deterministic waveform heights
  const heights = React.useMemo(() => {
    const out = [];
    let s = seed * 9301 + 49297;
    for (let i = 0; i < bars; i++) {
      s = (s * 9301 + 49297) % 233280;
      const env = Math.sin(i / (bars - 1) * Math.PI) * 0.55 + 0.30;
      const rand = s / 233280;
      out.push(Math.max(0.18, Math.min(1, env + (rand - 0.5) * 0.55)));
    }
    return out;
  }, [bars, seed]);
  const playedBars = Math.round(bars * progress);
  const mins = Math.floor(duration / 60);
  const secs = String(Math.floor(duration % 60)).padStart(2, '0');
  const elapsed = duration * progress;
  const elapsedStr = `${Math.floor(elapsed / 60)}:${String(Math.floor(elapsed % 60)).padStart(2, '0')}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: V.align === 'end' ? 'flex-end' : 'flex-start',
      margin: '4px 0'
    }
  }, sender && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `500 11px/1 ${FONT}`,
      color: C.n500,
      marginLeft: 14,
      marginBottom: 4
    }
  }, sender), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '82%',
      background: V.bg,
      color: V.fg,
      padding: '10px 12px',
      borderRadius: V.align === 'end' ? '18px 18px 6px 18px' : '18px 18px 18px 6px',
      border: voice === 'kid' ? `1px solid ${C.n100}` : 'none',
      boxShadow: voice === 'kid' ? '0 1px 2px rgba(15,26,36,.04)' : 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onTogglePlay,
    style: {
      width: 36,
      height: 36,
      borderRadius: 9999,
      border: 0,
      cursor: 'pointer',
      background: V.playBg,
      color: V.playFg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": playing ? 'pause' : 'play',
    style: {
      width: 16,
      height: 16
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      minWidth: 0
    }
  }, V.role && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: V.role.bg,
      color: V.role.fg,
      font: `600 9px/1 ${MONO}`,
      letterSpacing: '.1em',
      padding: '3px 6px',
      borderRadius: 9999
    }
  }, V.role.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 10px/1 ${MONO}`,
      color: V.fg,
      opacity: .55
    }
  }, "voice")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      height: 28
    }
  }, heights.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: `${Math.round(h * 100)}%`,
      background: i < playedBars ? V.wave : V.waveDim,
      borderRadius: 2,
      minWidth: 2,
      transition: 'background 140ms linear'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `500 11px/1 ${MONO}`,
      color: V.fg,
      opacity: .85
    }
  }, playing ? elapsedStr : `${mins}:${secs}`), playing && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 9999,
      background: V.accent,
      animation: 'cosmoPulse 1.4s ease-in-out infinite'
    }
  }), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1.3 ${FONT}`,
      color: V.fg,
      opacity: .6,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      minWidth: 0
    }
  }, "\u201C", caption, "\u201D")))), time && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${MONO}`,
      color: C.n400,
      marginTop: 4,
      marginLeft: V.align === 'end' ? 0 : 14,
      marginRight: V.align === 'end' ? 14 : 0
    }
  }, time));
}

// ─────────────────────────── Voice recorder (composer) ───────────────────────────
// "Holding to record" state — replaces the composer mid-record.
function VoiceRecorder({
  elapsed = 7,
  voice = 'kid-mine',
  onCancel,
  onSend
}) {
  const accent = voice === 'cosmo' ? C.lime : voice === 'teacher' ? C.sky : voice === 'goodtalk' ? C.coral : C.coral;
  const fg = C.paper;
  const mins = Math.floor(elapsed / 60);
  const secs = String(Math.floor(elapsed % 60)).padStart(2, '0');
  const liveBars = 32;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px 26px',
      background: C.paper,
      borderTop: `1px solid ${C.n100}`,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: C.n50,
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: C.n600
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: C.n50,
      borderRadius: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minHeight: 40,
      padding: '8px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: accent,
      animation: 'cosmoPulse 1.2s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      flex: 1,
      height: 22
    }
  }, Array.from({
    length: liveBars
  }).map((_, i) => {
    const phase = (i + Math.floor(elapsed * 6)) % liveBars;
    const h = 0.20 + Math.abs(Math.sin(phase * 0.5)) * 0.80;
    const live = i < Math.floor(elapsed * 3) % liveBars;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        height: `${Math.round(h * 100)}%`,
        background: live ? C.ink : C.n300,
        borderRadius: 2,
        minWidth: 2
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `500 12px/1 ${MONO}`,
      color: C.ink
    }
  }, mins, ":", secs)), /*#__PURE__*/React.createElement("button", {
    onClick: onSend,
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      border: 0,
      cursor: 'pointer',
      background: C.ink,
      color: C.paper,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up",
    style: {
      width: 20,
      height: 20
    }
  })));
}
Object.assign(window, {
  C,
  FONT,
  MONO,
  ChatAppBar,
  CircleRow,
  Bubble,
  Composer,
  NudgeBanner,
  PauseBanner,
  CosmoBubble,
  TeacherBubble,
  EmojiPicker,
  VoiceMessage,
  VoiceRecorder,
  LoginScreen,
  CirclesScreen,
  ChatScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/chat-app/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/chat-app/components.standalone.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Connecta chat-app components — kid/teen surface.
// Soft geometry, ink-on-white, coral accents, calm intervention banners.

const C = {
  ink: '#0F1A24',
  paper: '#FFFFFF',
  sky: '#BAE6FD',
  coral: '#F35F49',
  lime: '#DEFB50',
  paleLime: '#ECFDA8',
  plum: '#571B32',
  olive: '#424F1A',
  n50: '#F7F8F9',
  n100: '#EEF1F3',
  n200: '#DDE2E7',
  n300: '#C3CBD3',
  n400: '#98A2AD',
  n500: '#6B7682',
  n600: '#4D5762',
  n700: '#343C46',
  nudgeBg: '#FDEAE5',
  nudgeFg: '#0F1A24',
  pauseBg: '#EEF1F3',
  pauseFg: '#0F1A24',
  warnBg: '#FDEAE5',
  warnFg: '#0F1A24',
  alertBg: '#FDEAE5',
  alertFg: '#571B32'
};
const FONT = '"DM Sans", system-ui, -apple-system, sans-serif';
const MONO = '"DM Sans", system-ui, -apple-system, sans-serif';

// ─────────────────────────── Top app bar ───────────────────────────
function ChatAppBar({
  title,
  subtitle,
  left,
  right,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 16px',
      borderBottom: `1px solid ${C.n200}`,
      background: C.paper,
      minHeight: 56,
      boxSizing: 'border-box'
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      border: 0,
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: C.ink
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-left",
    style: {
      width: 22,
      height: 22
    }
  })) : left, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 16px/1.2 ${FONT}`,
      color: C.ink,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 12px/1.2 ${FONT}`,
      color: C.n500,
      marginTop: 2
    }
  }, subtitle)), right);
}

// ─────────────────────────── Circle list row ───────────────────────────
function CircleRow({
  name,
  members,
  lastMsg,
  time,
  badge,
  kind,
  selected,
  onClick
}) {
  const swatchBg = {
    family: C.sky,
    school: C.paleLime,
    friends: C.n100,
    sports: C.lime
  }[kind] || C.n100;
  const swatchFg = kind === 'school' ? C.olive : kind === 'sports' ? C.olive : C.ink;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 16px',
      width: '100%',
      background: selected ? C.n50 : 'transparent',
      border: 0,
      cursor: 'pointer',
      textAlign: 'left',
      borderBottom: `1px solid ${C.n100}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 14,
      background: swatchBg,
      color: swatchFg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: `700 18px/1 ${FONT}`,
      flexShrink: 0
    }
  }, name.slice(0, 1).toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 15px/1.2 ${FONT}`,
      color: C.ink,
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${MONO}`,
      color: C.n500
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 13px/1.3 ${FONT}`,
      color: C.n600,
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, lastMsg), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.coral,
      color: '#fff',
      font: `700 11px/1 ${FONT}`,
      minWidth: 18,
      height: 18,
      padding: '0 6px',
      borderRadius: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${FONT}`,
      color: C.n400,
      marginTop: 4
    }
  }, members, " \xB7 private")));
}

// ─────────────────────────── Chat bubble ───────────────────────────
function Bubble({
  children,
  mine,
  sender,
  time,
  system
}) {
  if (system) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        margin: '12px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: `400 12px/1.4 ${FONT}`,
        color: C.n500,
        background: C.n50,
        padding: '6px 12px',
        borderRadius: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.__resources.glyphDark,
      style: {
        width: 14,
        height: 14,
        opacity: .6
      }
    }), children));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: mine ? 'flex-end' : 'flex-start',
      margin: '4px 0'
    }
  }, sender && !mine && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `500 11px/1 ${FONT}`,
      color: C.n500,
      marginLeft: 14,
      marginBottom: 4
    }
  }, sender), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '78%',
      background: mine ? C.ink : C.paper,
      color: mine ? '#fff' : C.ink,
      padding: '10px 14px',
      borderRadius: mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
      font: `400 14px/1.4 ${FONT}`,
      boxShadow: mine ? 'none' : `0 1px 2px rgba(15,26,36,.04)`,
      border: mine ? 'none' : `1px solid ${C.n100}`,
      wordWrap: 'break-word'
    }
  }, children), time && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${MONO}`,
      color: C.n400,
      marginTop: 4,
      marginLeft: mine ? 0 : 14,
      marginRight: mine ? 14 : 0
    }
  }, time));
}

// ─────────────────────────── Composer ───────────────────────────
function Composer({
  value,
  onChange,
  onSend,
  disabled,
  placeholder = 'Write a message'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 10,
      padding: '10px 12px 16px',
      background: C.paper,
      borderTop: `1px solid ${C.n100}`,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: C.n50,
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: C.n600
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus",
    style: {
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: C.paper,
      borderRadius: 14,
      boxShadow: `inset 0 0 0 1px ${C.n200}`,
      display: 'flex',
      alignItems: 'center',
      minHeight: 40,
      padding: '8px 12px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange(e.target.value),
    placeholder: placeholder,
    onKeyDown: e => {
      if (e.key === 'Enter' && !disabled) onSend?.();
    },
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: `400 14px/1.4 ${FONT}`,
      color: C.ink,
      minWidth: 0
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onSend,
    disabled: disabled || !value,
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      border: 0,
      cursor: disabled || !value ? 'not-allowed' : 'pointer',
      background: disabled || !value ? C.n100 : C.ink,
      color: disabled || !value ? C.n400 : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'transform 140ms cubic-bezier(.2,0,0,1)'
    },
    onMouseDown: e => {
      if (!disabled && value) e.currentTarget.style.transform = 'scale(.96)';
    },
    onMouseUp: e => e.currentTarget.style.transform = 'scale(1)',
    onMouseLeave: e => e.currentTarget.style.transform = 'scale(1)'
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up",
    style: {
      width: 20,
      height: 20
    }
  })));
}

// ─────────────────────────── Nudge banner ───────────────────────────
function NudgeBanner({
  onRewrite,
  onEdit,
  onWhy,
  draft
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.nudgeBg,
      padding: 14,
      margin: '8px 12px',
      borderRadius: 14,
      borderLeft: `3px solid ${C.lime}`,
      animation: 'slideDown 220ms cubic-bezier(.3,0,0,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.lime,
      color: C.olive,
      font: `600 10px/1 ${MONO}`,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      padding: '4px 8px',
      borderRadius: 9999
    }
  }, "Nudge \xB7 just for you"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${MONO}`,
      color: C.olive,
      opacity: .7
    }
  }, "not sent yet")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 14px/1.35 ${FONT}`,
      color: C.nudgeFg,
      marginBottom: 4
    }
  }, "That might hurt someone. Want to rephrase?"), draft && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 12px/1.35 ${FONT}`,
      color: C.nudgeFg,
      opacity: .75,
      fontStyle: 'italic'
    }
  }, "\"", draft, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onRewrite,
    style: btn(C.ink, '#fff')
  }, "Try a rewrite"), /*#__PURE__*/React.createElement("button", {
    onClick: onEdit,
    style: btnGhost(C.olive)
  }, "Edit myself"), /*#__PURE__*/React.createElement("button", {
    onClick: onWhy,
    style: {
      ...btnGhost(C.olive),
      border: 0,
      marginLeft: 'auto'
    }
  }, "Why?")));
}
function PauseBanner({
  secondsLeft = 120
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.pauseBg,
      padding: 14,
      margin: '8px 12px',
      borderRadius: 14,
      borderLeft: `3px solid #6B7682`,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "pause-circle",
    style: {
      width: 28,
      height: 28,
      color: C.pauseFg,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 14px/1.3 ${FONT}`,
      color: C.pauseFg
    }
  }, "Let's pause for 2 minutes so this doesn't escalate."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 12px/1.3 ${FONT}`,
      color: C.pauseFg,
      opacity: .8,
      marginTop: 2
    }
  }, "Same rule for the whole group.")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `700 13px/1 ${MONO}`,
      color: C.pauseFg
    }
  }, Math.floor(secondsLeft / 60), ":", String(secondsLeft % 60).padStart(2, '0')));
}
function btn(bg, fg) {
  return {
    background: bg,
    color: fg,
    border: 0,
    borderRadius: 10,
    padding: '8px 14px',
    font: `600 13px/1 ${FONT}`,
    cursor: 'pointer'
  };
}
function btnGhost(fg) {
  return {
    background: 'transparent',
    color: fg,
    border: `1px solid ${fg}`,
    borderRadius: 10,
    padding: '8px 14px',
    font: `600 13px/1 ${FONT}`,
    cursor: 'pointer'
  };
}

// ─────────────────────────── Login screen ───────────────────────────
function LoginScreen({
  onContinue
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: C.paper,
      padding: '40px 28px 24px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.appIconCoral,
    style: {
      width: 72,
      height: 72,
      borderRadius: 18,
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${MONO}`,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: C.n500,
      marginBottom: 12
    }
  }, "welcome back"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `700 32px/1.1 ${FONT}`,
      letterSpacing: '-0.02em',
      color: C.ink,
      marginBottom: 8
    }
  }, "Chat freely."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `700 32px/1.1 ${FONT}`,
      letterSpacing: '-0.02em',
      color: C.coral,
      marginBottom: 32
    }
  }, "If it gets messy, we help you fix it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Your handle",
    defaultValue: "mia.s",
    style: inputStyle()
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Passcode",
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022",
    style: inputStyle()
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: onContinue,
    style: {
      background: C.ink,
      color: '#fff',
      border: 0,
      borderRadius: 14,
      padding: '16px',
      font: `600 16px/1 ${FONT}`,
      cursor: 'pointer',
      width: '100%',
      marginBottom: 8
    }
  }, "Continue"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 12px/1.4 ${FONT}`,
      color: C.n500,
      textAlign: 'center'
    }
  }, "Your chats aren't public. Just your circle."));
}
function inputStyle() {
  return {
    background: C.paper,
    border: 0,
    borderRadius: 14,
    boxShadow: `inset 0 0 0 1px ${C.n200}`,
    padding: '14px 16px',
    font: `400 15px/1.3 ${FONT}`,
    color: C.ink,
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  };
}

// ─────────────────────────── Circles screen ───────────────────────────
function CirclesScreen({
  circles,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: C.paper
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.glyphCoral,
    style: {
      width: 28,
      height: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `700 22px/1.1 ${FONT}`,
      letterSpacing: '-0.015em',
      color: C.ink
    }
  }, "Circles"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 12px/1.3 ${FONT}`,
      color: C.n500,
      marginTop: 2
    }
  }, "No feeds. No followers. Just approved circles.")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: C.n50,
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: C.n700
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "settings",
    style: {
      width: 20,
      height: 20
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 16px 12px',
      display: 'flex',
      gap: 8,
      overflowX: 'auto'
    }
  }, ['All', 'Family', 'School', 'Friends'].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      background: i === 0 ? C.ink : C.n100,
      color: i === 0 ? '#fff' : C.ink,
      font: `500 13px/1 ${FONT}`,
      padding: '8px 14px',
      borderRadius: 9999,
      whiteSpace: 'nowrap'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, circles.map(c => /*#__PURE__*/React.createElement(CircleRow, _extends({
    key: c.id
  }, c, {
    onClick: () => onOpen(c)
  })))));
}

// ─────────────────────────── Chat screen ───────────────────────────
function ChatScreen({
  circle,
  messages,
  draft,
  setDraft,
  onSend,
  intervention,
  onRewrite,
  onEdit,
  onWhy,
  onBack
}) {
  const scrollRef = React.useRef(null);
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, intervention]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: C.n50
    }
  }, /*#__PURE__*/React.createElement(ChatAppBar, {
    title: circle.name,
    subtitle: `${circle.members} · private`,
    onBack: onBack,
    right: /*#__PURE__*/React.createElement("button", {
      style: {
        width: 36,
        height: 36,
        borderRadius: 10,
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: C.n700
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "more-horizontal",
      style: {
        width: 20,
        height: 20
      }
    }))
  }), /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement(Bubble, {
    system: true
  }, "Read by your circle only \xB7 EU servers"), messages.map((m, i) => /*#__PURE__*/React.createElement(Bubble, {
    key: i,
    mine: m.mine,
    sender: m.sender,
    time: m.time
  }, m.text)), intervention === 'pause' && /*#__PURE__*/React.createElement(PauseBanner, null)), intervention === 'nudge' && /*#__PURE__*/React.createElement(NudgeBanner, {
    draft: draft,
    onRewrite: onRewrite,
    onEdit: onEdit,
    onWhy: onWhy
  }), /*#__PURE__*/React.createElement(Composer, {
    value: draft,
    onChange: setDraft,
    onSend: onSend,
    disabled: intervention === 'pause'
  }));
}
Object.assign(window, {
  C,
  FONT,
  MONO,
  ChatAppBar,
  CircleRow,
  Bubble,
  Composer,
  NudgeBanner,
  PauseBanner,
  LoginScreen,
  CirclesScreen,
  ChatScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/chat-app/components.standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/chat-app/ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/chat-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/chat-app/preview-voices.jsx
try { (() => {
// preview-voices.jsx — bubble + voice variants for the four Connecta voices.

const {
  useState,
  useEffect
} = React;

// ─── Card chrome ─────────────────────────────────────────────────────
function Frame({
  label,
  voice,
  children,
  width = 380
}) {
  const accent = {
    goodtalk: '#F35F49',
    cosmo: '#DEFB50',
    teacher: '#0F1A24',
    kid: '#F35F49'
  }[voice] || '#98A2AD';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: accent
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: MONO,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: '#FFF',
      opacity: .8
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      background: '#F2F2F7',
      borderRadius: 32,
      overflow: 'hidden',
      boxShadow: '0 24px 60px rgba(0,0,0,.20), 0 0 0 1px rgba(0,0,0,.10)'
    }
  }, children));
}

// ─── Mini chat header used inside each phone-shaped panel ───────────
function MiniHeader({
  title,
  subtitle,
  kind = 'school'
}) {
  const C2 = window.C;
  const tint = kind === 'school' ? '#ECFDA8' : kind === 'family' ? C2.sky : C2.n100;
  const icon = kind === 'school' ? 'users' : kind === 'lab' ? 'flask-conical' : 'circle-dot';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px 12px',
      borderBottom: `1px solid ${C2.n100}`,
      background: C2.paper
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 12,
      background: tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: C2.olive
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 14px/1.2 ${FONT}`,
      color: C2.ink
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1.2 ${FONT}`,
      color: C2.n500,
      marginTop: 2
    }
  }, subtitle)), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "more-horizontal",
    style: {
      width: 18,
      height: 18,
      color: C2.n500
    }
  }));
}

// ─── Bottom composer (static, just for context) ─────────────────────
function MiniComposer({
  value = 'Никой не иска Алекс в групата, той е безполезен',
  icon = 'mic'
}) {
  const C2 = window.C;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px 16px',
      background: C2.paper,
      borderTop: `1px solid ${C2.n100}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: C2.paper,
      borderRadius: 14,
      boxShadow: `inset 0 0 0 1px ${C2.n200}`,
      padding: '10px 14px',
      font: `400 13px/1.35 ${FONT}`,
      color: C2.n600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 12,
      border: 0,
      background: icon === 'mic' ? C2.n50 : C2.coral,
      color: icon === 'mic' ? C2.n700 : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 18,
      height: 18
    }
  })));
}
Object.assign(window, {
  Frame,
  MiniHeader,
  MiniComposer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/chat-app/preview-voices.jsx", error: String((e && e.message) || e) }); }

// ui_kits/parent-portal/components.jsx
try { (() => {
// Connecta parent portal — calm dashboard for guardians.
const PC = {
  ink: '#0F1A24',
  paper: '#FFFFFF',
  n50: '#F7F8F9',
  n100: '#EEF1F3',
  n200: '#DDE2E7',
  n300: '#C3CBD3',
  n400: '#98A2AD',
  n500: '#6B7682',
  n600: '#4D5762',
  n700: '#343C46',
  coral: '#F35F49',
  lime: '#DEFB50',
  sky: '#BAE6FD',
  plum: '#571B32',
  olive: '#424F1A',
  pink: '#FBE1FD',
  tintOlive: '#EDF1DA',
  paleLime: '#ECFDA8',
  alertBg: '#FDEAE5',
  alertFg: '#571B32',
  nudgeBg: '#FBE1FD',
  nudgeFg: '#571B32',
  pauseBg: '#EEF1F3',
  pauseFg: '#0F1A24'
};
const PFONT = '"DM Sans", system-ui, sans-serif';
const PMONO = '"DM Sans", system-ui, sans-serif';
function PSidebar({
  active,
  onNav
}) {
  const items = [{
    k: 'home',
    i: 'home',
    l: 'Overview'
  }, {
    k: 'kids',
    i: 'users',
    l: 'Children'
  }, {
    k: 'alerts',
    i: 'shield-alert',
    l: 'Alerts'
  }, {
    k: 'rules',
    i: 'sliders-horizontal',
    l: 'Rules'
  }, {
    k: 'school',
    i: 'school',
    l: 'School'
  }, {
    k: 'priv',
    i: 'lock',
    l: 'Privacy'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flexShrink: 0,
      background: PC.paper,
      borderRight: `1px solid ${PC.n200}`,
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 8px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/glyph-nn-coral.svg",
    style: {
      width: 28,
      height: 28
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-black.svg",
    style: {
      height: 20
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(it => {
    const sel = it.k === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.k,
      onClick: () => onNav?.(it.k),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        border: 0,
        background: sel ? PC.n100 : 'transparent',
        color: sel ? PC.ink : PC.n600,
        borderRadius: 10,
        cursor: 'pointer',
        textAlign: 'left',
        font: `${sel ? 600 : 500} 14px/1 ${PFONT}`
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": it.i,
      style: {
        width: 18,
        height: 18
      }
    }), it.l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 12,
      background: PC.n50,
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${PMONO}`,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: PC.n500,
      marginBottom: 6
    }
  }, "EU residency"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `500 12px/1.4 ${PFONT}`,
      color: PC.ink
    }
  }, "Your data lives on EU servers. We don't read messages.")));
}
function PStatTile({
  label,
  value,
  sub,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: PC.paper,
      border: `1px solid ${PC.n200}`,
      borderRadius: 16,
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${PMONO}`,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: PC.n500
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `700 32px/1.05 ${PFONT}`,
      letterSpacing: '-0.02em',
      color: accent || PC.ink
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 13px/1.4 ${PFONT}`,
      color: PC.n600
    }
  }, sub));
}
function PAlertCard({
  kind = 'alert',
  title,
  body,
  time,
  child
}) {
  const cfg = {
    alert: {
      bg: PC.alertBg,
      fg: PC.alertFg,
      badge: 'Alert',
      accent: PC.coral
    },
    nudge: {
      bg: PC.nudgeBg,
      fg: PC.nudgeFg,
      badge: 'Coached',
      accent: PC.plum
    },
    learn: {
      bg: PC.tintOlive,
      fg: PC.olive,
      badge: 'Homework',
      accent: PC.olive
    },
    pause: {
      bg: PC.pauseBg,
      fg: PC.pauseFg,
      badge: 'Cooldown',
      accent: PC.n500
    }
  }[kind];
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: cfg.bg,
      borderRadius: 16,
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `600 10px/1 ${PMONO}`,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      background: cfg.fg,
      color: cfg.bg,
      padding: '4px 8px',
      borderRadius: 9999
    }
  }, cfg.badge), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `500 12px/1 ${PFONT}`,
      color: cfg.fg,
      opacity: .85
    }
  }, child), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `400 11px/1 ${PMONO}`,
      color: cfg.fg,
      opacity: .7,
      marginLeft: 'auto'
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `700 17px/1.25 ${PFONT}`,
      color: cfg.fg,
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 14px/1.5 ${PFONT}`,
      color: cfg.fg,
      opacity: .9
    }
  }, body), kind === 'alert' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: PC.ink,
      color: PC.paper,
      border: 0,
      borderRadius: 10,
      padding: '8px 14px',
      font: `600 13px/1 ${PFONT}`,
      cursor: 'pointer'
    }
  }, "Open guidance"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'transparent',
      color: cfg.fg,
      border: `1px solid ${cfg.fg}`,
      borderRadius: 10,
      padding: '8px 14px',
      font: `600 13px/1 ${PFONT}`,
      cursor: 'pointer'
    }
  }, "Mark reviewed")));
}
function PChildCard({
  name,
  age,
  circles,
  status
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: PC.paper,
      border: `1px solid ${PC.n200}`,
      borderRadius: 16,
      padding: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 14,
      background: PC.sky,
      color: PC.ink,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: `700 18px/1 ${PFONT}`,
      flexShrink: 0
    }
  }, name.slice(0, 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 16px/1.2 ${PFONT}`,
      color: PC.ink
    }
  }, name, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: PC.n500,
      fontWeight: 400
    }
  }, "\xB7 ", age)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 13px/1.3 ${PFONT}`,
      color: PC.n600,
      marginTop: 2
    }
  }, circles, " circles \xB7 ", status)), /*#__PURE__*/React.createElement("button", {
    style: {
      background: PC.n50,
      color: PC.ink,
      border: 0,
      borderRadius: 10,
      padding: '8px 14px',
      font: `600 13px/1 ${PFONT}`,
      cursor: 'pointer'
    }
  }, "Manage"));
}
function PHero() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: PC.ink,
      color: '#fff',
      borderRadius: 20,
      padding: '28px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${PMONO}`,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: PC.lime,
      marginBottom: 10
    }
  }, "this week"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `700 28px/1.15 ${PFONT}`,
      letterSpacing: '-0.02em',
      marginBottom: 8
    }
  }, "Nothing to flag. That's the goal."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 14px/1.5 ${PFONT}`,
      opacity: .8,
      maxWidth: 520
    }
  }, "We notify you only when there's real risk. This week, GoodTalk coached 6 messages before they were sent \u2014 you didn't need to see any of them.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/app-icon-lime.svg",
    style: {
      width: 88,
      height: 88,
      borderRadius: 18,
      flexShrink: 0
    }
  }));
}
function POverview() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 32,
      background: PC.n50
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${PMONO}`,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: PC.n500,
      marginBottom: 8
    }
  }, "parent portal"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: `700 32px/1.1 ${PFONT}`,
      letterSpacing: '-0.025em',
      color: PC.ink,
      margin: 0
    }
  }, "Hi Anne.")), /*#__PURE__*/React.createElement(PHero, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 14,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(PStatTile, {
    label: "High-signal alerts",
    value: "0",
    sub: "this week",
    accent: PC.olive
  }), /*#__PURE__*/React.createElement(PStatTile, {
    label: "Coached pre-send",
    value: "6",
    sub: "GoodTalk nudges accepted"
  }), /*#__PURE__*/React.createElement(PStatTile, {
    label: "Cooldowns",
    value: "1",
    sub: "2 min \xB7 Class 7B"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: `600 20px/1.2 ${PFONT}`,
      color: PC.ink,
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, "Recent activity"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `500 13px/1 ${PFONT}`,
      color: PC.n600
    }
  }, "High-signal alerts only")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(PAlertCard, {
    kind: "learn",
    child: "Toni, 11",
    title: "Toni finished a maths set with Socrat.",
    body: "Worked through 8 exercises on fractions \u2014 Socrat asked the questions, never gave the answer.",
    time: "Wed 17:20"
  }), /*#__PURE__*/React.createElement(PAlertCard, {
    kind: "nudge",
    child: "Mia, 13",
    title: "A message was rewritten before sending.",
    body: "Mia chose 'Try a rewrite' on a heated reply in Class 7B. We don't share what was written.",
    time: "Tue 14:32"
  }), /*#__PURE__*/React.createElement(PAlertCard, {
    kind: "pause",
    child: "Mia, 13",
    title: "A 2-minute cooldown happened.",
    body: "Same rule for the whole group \u2014 pace was rising fast in Football.",
    time: "Mon 19:04"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: `600 20px/1.2 ${PFONT}`,
      color: PC.ink,
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, "Children")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(PChildCard, {
    name: "Mia",
    age: "13",
    circles: 5,
    status: "active now"
  }), /*#__PURE__*/React.createElement(PChildCard, {
    name: "Tom",
    age: "9",
    circles: 3,
    status: "quiet today"
  }))));
}
function PMStat({
  v,
  l,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: `1px solid ${PC.n200}`,
      borderRadius: 12,
      padding: '10px 6px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `700 22px/1 ${PFONT}`,
      color: accent || PC.ink
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `500 9px/1.2 ${PMONO}`,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: PC.n500,
      marginTop: 4
    }
  }, l));
}
function PMobile() {
  const tabs = [{
    i: 'home',
    l: 'Home',
    sel: true
  }, {
    i: 'users',
    l: 'Kids'
  }, {
    i: 'shield-alert',
    l: 'Alerts'
  }, {
    i: 'sliders-horizontal',
    l: 'Rules'
  }, {
    i: 'lock',
    l: 'Privacy'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 360,
      background: '#fff',
      borderRadius: 38,
      border: `1px solid ${PC.n200}`,
      boxShadow: '0 24px 60px rgba(15,26,36,.18)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 24px 6px',
      font: `600 13px/1 ${PMONO}`,
      color: PC.ink
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 5
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      width: 5,
      height: 5,
      borderRadius: 9999,
      background: PC.n400,
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 18px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      borderBottom: `1px solid ${PC.n100}`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/glyph-nn-coral.svg",
    style: {
      width: 24,
      height: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 10px/1 ${PMONO}`,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: PC.n500
    }
  }, "parent portal"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `700 18px/1.1 ${PFONT}`,
      color: PC.ink,
      marginTop: 2
    }
  }, "Hi Anne."))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      background: PC.n50,
      maxHeight: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: PC.ink,
      color: '#fff',
      borderRadius: 18,
      padding: 18,
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 10px/1 ${PMONO}`,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: PC.lime,
      marginBottom: 6
    }
  }, "this week"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `700 19px/1.2 ${PFONT}`,
      letterSpacing: '-.01em'
    }
  }, "Nothing to flag. That's the goal.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/app-icon-lime.svg",
    style: {
      width: 54,
      height: 54,
      borderRadius: 14,
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(PMStat, {
    v: "0",
    l: "alerts",
    accent: PC.olive
  }), /*#__PURE__*/React.createElement(PMStat, {
    v: "6",
    l: "coached"
  }), /*#__PURE__*/React.createElement(PMStat, {
    v: "1",
    l: "cooldowns"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 14px/1 ${PFONT}`,
      color: PC.ink,
      marginTop: 2
    }
  }, "Recent activity"), /*#__PURE__*/React.createElement(PAlertCard, {
    kind: "learn",
    child: "Toni, 11",
    title: "Toni finished a maths set with Socrat.",
    body: "8 exercises on fractions \u2014 Socrat asked, never answered.",
    time: "Wed 17:20"
  }), /*#__PURE__*/React.createElement(PAlertCard, {
    kind: "nudge",
    child: "Mia, 13",
    title: "A message was rewritten before sending.",
    body: "Mia chose 'Try a rewrite' on a heated reply. We don't share what was written.",
    time: "Tue 14:32"
  }), /*#__PURE__*/React.createElement(PAlertCard, {
    kind: "pause",
    child: "Mia, 13",
    title: "A 2-minute cooldown happened.",
    body: "Same rule for the whole group.",
    time: "Mon 19:04"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 14px/1 ${PFONT}`,
      color: PC.ink,
      marginTop: 2
    }
  }, "Children"), /*#__PURE__*/React.createElement(PChildCard, {
    name: "Mia",
    age: "13",
    circles: 5,
    status: "active now"
  }), /*#__PURE__*/React.createElement(PChildCard, {
    name: "Tom",
    age: "9",
    circles: 3,
    status: "quiet today"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px 8px 16px',
      borderTop: `1px solid ${PC.n100}`,
      background: '#fff'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      color: t.sel ? PC.ink : PC.n400
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": t.i,
    style: {
      width: 20,
      height: 20
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `${t.sel ? 600 : 500} 9px/1 ${PFONT}`
    }
  }, t.l)))));
}
Object.assign(window, {
  PC,
  PFONT,
  PMONO,
  PSidebar,
  PStatTile,
  PAlertCard,
  PChildCard,
  PHero,
  POverview,
  PMobile,
  PMStat
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/parent-portal/components.jsx", error: String((e && e.message) || e) }); }

__ds_ns.XStack = __ds_scope.XStack;

__ds_ns.YStack = __ds_scope.YStack;

__ds_ns.Headline = __ds_scope.Headline;

__ds_ns.Body = __ds_scope.Body;

__ds_ns.Meta = __ds_scope.Meta;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.PrimaryButton = __ds_scope.PrimaryButton;

__ds_ns.GhostButton = __ds_scope.GhostButton;

__ds_ns.ButtonLabel = __ds_scope.ButtonLabel;

__ds_ns.CardShell = __ds_scope.CardShell;

__ds_ns.Bubble = __ds_scope.Bubble;

__ds_ns.WhyExpander = __ds_scope.WhyExpander;

__ds_ns.NudgeBanner = __ds_scope.NudgeBanner;

__ds_ns.CoachCard = __ds_scope.CoachCard;

__ds_ns.Theme = __ds_scope.Theme;

__ds_ns.Stack = __ds_scope.Stack;

__ds_ns.Text = __ds_scope.Text;

})();
