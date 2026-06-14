/* @ds-bundle: {"format":3,"namespace":"ConnectaDesignSystem_97ebf8","components":[],"sourceHashes":{"ui_kits/chat-app/coaching-cards.jsx":"a0e808794b71","ui_kits/chat-app/components.jsx":"d7af8f200951","ui_kits/chat-app/components.standalone.jsx":"7151c60740be","ui_kits/chat-app/ios-frame.jsx":"c535ed22e4f7","ui_kits/chat-app/preview-voices.jsx":"d13567049f49","ui_kits/parent-portal/components.jsx":"2dbafd35005f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ConnectaDesignSystem_97ebf8 = window.ConnectaDesignSystem_97ebf8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

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

// ── Static coaching card (Socratic / Teacher) — same look, no safety flow ─
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
  // Socratic → olive (learning) with lime lab accents
  socratic: {
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
  // Socratic — olive ground, lime type (learning / lab coach)
  socraticBg: '#424F1A',
  socraticFg: '#DEFB50',
  socraticAccent: '#DEFB50',
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
// Instagram-style single bar: a leading camera circle, then ONE input pill
// that holds the placeholder on the left and the action icons — mic · image ·
// camera — inline on the right, all inside the field. "+" opens an attachment
// tray. Once you type, the inline icons collapse into a single send button.
function Composer({
  value,
  onChange,
  onSend,
  onRecordStart,
  onImage,
  onCamera,
  onAttach,
  attachOpen,
  disabled,
  placeholder = 'Message…'
}) {
  const empty = !value;
  const iconBtn = (icon, label, onClick) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": label,
    style: {
      width: 30,
      height: 30,
      borderRadius: 9999,
      border: 0,
      cursor: 'pointer',
      flexShrink: 0,
      background: 'transparent',
      color: C.n700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 21,
      height: 21
    }
  }));
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
    onClick: onCamera,
    "aria-label": "Camera",
    style: {
      width: 38,
      height: 38,
      borderRadius: 9999,
      border: 0,
      cursor: 'pointer',
      flexShrink: 0,
      background: C.coral,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "camera",
    style: {
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: C.n50,
      borderRadius: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      minHeight: 40,
      padding: '4px 8px 4px 16px'
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
  }), empty ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      flexShrink: 0
    }
  }, iconBtn('mic', 'Hold to record', onRecordStart), iconBtn('image', 'Photo', onImage), iconBtn('plus', 'Add', onAttach)) : /*#__PURE__*/React.createElement("button", {
    onClick: onSend,
    disabled: disabled,
    "aria-label": "Send",
    style: {
      width: 34,
      height: 34,
      borderRadius: 9999,
      border: 0,
      flexShrink: 0,
      background: disabled ? C.n100 : C.ink,
      color: disabled ? C.n400 : '#fff',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up",
    style: {
      width: 18,
      height: 18
    }
  }))));
}

// ─────────────────────────── Attachment tray ───────────────────────────
// Slides up over the composer when "+" is tapped. Photo · camera · voice · file.
function AttachTray({
  onPick
}) {
  const items = [{
    id: 'photo',
    icon: 'image',
    label: 'Photo',
    bg: C.sky,
    fg: C.ink
  }, {
    id: 'camera',
    icon: 'camera',
    label: 'Camera',
    bg: C.paleLime,
    fg: C.olive
  }, {
    id: 'voice',
    icon: 'mic',
    label: 'Voice',
    bg: C.pink,
    fg: C.plum
  }, {
    id: 'file',
    icon: 'paperclip',
    label: 'File',
    bg: C.n100,
    fg: C.n700
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 12px 8px',
      borderRadius: 16,
      background: C.paper,
      border: `1px solid ${C.n200}`,
      boxShadow: '0 8px 24px rgba(15,26,36,.10)',
      padding: '12px',
      animation: 'slideDown 180ms cubic-bezier(.3,0,0,1)',
      display: 'flex',
      gap: 10
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    onClick: () => onPick(it.id),
    style: {
      flex: 1,
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 56,
      borderRadius: 16,
      background: it.bg,
      color: it.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `500 11px/1 ${FONT}`,
      color: C.n600
    }
  }, it.label))));
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

// ─────────────────────────── Socratic bubble ───────────────────────────
// Black + Lime — Socratic learning. Visual inverse of GoodTalk.
// Feels like a quiet blackboard. Socratic asks the next question; never the answer.
function SocraticBubble({
  tag = 'Socratic · for this task',
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
      background: C.socraticBg,
      padding: 14,
      margin: '8px 12px',
      borderRadius: 14,
      borderLeft: `3px solid ${C.socraticAccent}`,
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

// ─────────────────────────── Socratic lesson (preview → full-screen) ───────────────────────────
// A multi-step Socratic lesson is too tall for the thread, so it rides in as a
// COMPACT preview bubble. Tapping it opens the whole lesson full-screen (like
// opening media in a chat); back ‹ or tapping outside returns to the keyboard.
function LessonPreview({
  title = "Let's see it together.",
  meta = 'Friction & motion · 3 steps',
  steps = ['Table', 'Think', 'Choose'],
  onOpen
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onOpen,
    style: {
      alignSelf: 'flex-start',
      maxWidth: '84%',
      margin: '8px 12px',
      textAlign: 'left',
      cursor: 'pointer',
      border: 0,
      background: C.socraticBg,
      color: '#fff',
      borderRadius: '18px 18px 18px 6px',
      padding: '13px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      animation: 'slideDown 220ms cubic-bezier(.3,0,0,1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      alignSelf: 'flex-start',
      background: C.lime,
      color: C.ink,
      font: `600 10px/1 ${MONO}`,
      letterSpacing: '.04em',
      padding: '5px 9px',
      borderRadius: 9999
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "compass",
    style: {
      width: 11,
      height: 11,
      strokeWidth: 2
    }
  }), "Socratic \xB7 for this task"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `600 17px/1.2 ${FONT}`,
      letterSpacing: '-.01em',
      color: C.lime
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `400 12px/1.3 ${FONT}`,
      color: 'rgba(255,255,255,.78)'
    }
  }, meta), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      font: `500 10.5px/1 ${FONT}`,
      color: 'rgba(255,255,255,.92)',
      background: 'rgba(255,255,255,.12)',
      borderRadius: 9999,
      padding: '5px 9px'
    }
  }, s))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      marginTop: 1,
      paddingTop: 9,
      borderTop: '1px solid rgba(255,255,255,.14)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `600 12px/1 ${FONT}`,
      color: '#fff'
    }
  }, "Open full screen"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "maximize-2",
    style: {
      width: 16,
      height: 16,
      color: C.lime
    }
  })));
}
function LessonChips({
  options
}) {
  const [sel, setSel] = React.useState(options.findIndex(o => o.sel));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, options.map((o, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setSel(i),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      minHeight: 46,
      padding: '0 14px',
      borderRadius: 14,
      cursor: 'pointer',
      background: sel === i ? C.lime : '#fff',
      color: C.ink,
      border: `1px solid ${sel === i ? C.olive : C.n200}`,
      font: `600 13.5px/1.2 ${FONT}`,
      letterSpacing: '-.005em'
    }
  }, o.ar && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      lineHeight: 1
    }
  }, o.ar), o.label)));
}

// Full-screen lesson sheet, mounted absolutely inside the chat screen.
function LessonOverlay({
  onClose
}) {
  const stepCard = (n, title, children, bulb) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 18,
      padding: '15px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 11,
      boxShadow: '0 1px 2px rgba(15,26,36,.05),0 6px 18px -12px rgba(15,26,36,.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      flex: 'none',
      background: C.olive,
      color: C.lime,
      display: 'grid',
      placeItems: 'center',
      font: `700 13px/1 ${FONT}`
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `600 15px/1.2 ${FONT}`,
      color: C.ink,
      letterSpacing: '-.005em',
      flex: 1
    }
  }, title), bulb && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "lightbulb",
    style: {
      width: 20,
      height: 20,
      color: C.olive
    }
  })), children);
  const helper = t => /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: `400 13.5px/1.5 ${FONT}`,
      color: C.n600
    }
  }, t);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(15,26,36,.42)',
      animation: 'fadeIn .2s ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 14,
      background: C.socraticTint || '#EEF1E1',
      borderRadius: '22px 22px 0 0',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      boxShadow: '0 -8px 30px rgba(15,26,36,.25)',
      animation: 'sheetUp .28s cubic-bezier(.2,0,0,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: 14,
      flex: 'none',
      borderBottom: '1px solid rgba(66,79,26,.14)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Back",
    style: {
      width: 34,
      height: 34,
      borderRadius: 10,
      border: 0,
      background: 'rgba(66,79,26,.10)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      color: C.olive,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-left",
    style: {
      width: 20,
      height: 20,
      strokeWidth: 2.2
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9999,
      background: C.olive,
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "compass",
    style: {
      width: 19,
      height: 19,
      color: C.lime,
      strokeWidth: 2
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `600 16px/1.1 ${FONT}`,
      color: C.ink
    }
  }, "Let's see it together."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 11px/1 ${FONT}`,
      color: C.olive,
      marginTop: 2
    }
  }, "Socratic \xB7 friction"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, stepCard(1, 'Look at the table.', /*#__PURE__*/React.createElement(React.Fragment, null, helper('Look at the table. What goes in the empty cell?'), /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid ${C.n200}`,
      borderRadius: 12,
      overflow: 'hidden',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 13px',
      display: 'flex',
      alignItems: 'center',
      minHeight: 46,
      background: C.olive,
      color: '#fff',
      font: `600 12.5px/1.3 ${FONT}`,
      borderRight: '1px solid rgba(255,255,255,.16)'
    }
  }, "When there is\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 13px',
      display: 'flex',
      alignItems: 'center',
      minHeight: 46,
      background: C.olive,
      color: '#fff',
      font: `600 12.5px/1.3 ${FONT}`
    }
  }, "The cart\u2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 13px',
      display: 'flex',
      alignItems: 'center',
      minHeight: 54,
      font: `500 13.5px/1.3 ${FONT}`,
      color: C.ink,
      borderTop: `1px solid ${C.n200}`,
      borderRight: `1px solid ${C.n200}`
    }
  }, "Friction"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 13px',
      display: 'flex',
      alignItems: 'center',
      minHeight: 54,
      font: `500 13.5px/1.3 ${FONT}`,
      color: C.ink,
      borderTop: `1px solid ${C.n200}`
    }
  }, "Stops")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 13px',
      display: 'flex',
      alignItems: 'center',
      minHeight: 54,
      font: `500 13.5px/1.3 ${FONT}`,
      color: C.ink,
      borderTop: `1px solid ${C.n200}`,
      borderRight: `1px solid ${C.n200}`
    }
  }, "No friction"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 54,
      background: C.lime,
      font: `700 17px/1 ${FONT}`,
      color: C.ink,
      borderTop: `1px solid ${C.n200}`
    }
  }, "?"))))), stepCard(2, 'Think.', /*#__PURE__*/React.createElement(React.Fragment, null, helper("If there's no friction, what happens?"), /*#__PURE__*/React.createElement(LessonChips, {
    options: [{
      label: 'Stops'
    }, {
      label: 'Keeps going',
      sel: true
    }, {
      label: 'Not sure'
    }]
  })), true), stepCard(3, 'Choose an answer.', /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: `1px solid ${C.n200}`,
      borderRadius: 14,
      height: 180,
      display: 'grid',
      placeItems: 'center',
      padding: 8,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 320 170",
    style: {
      width: '100%',
      height: '100%'
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "122",
    x2: "300",
    y2: "122",
    stroke: C.ink,
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "#9aa39a",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }, [40, 62, 84, 106, 128, 150, 172, 194, 216, 238, 260, 282].map(x => /*#__PURE__*/React.createElement("line", {
    key: x,
    x1: x,
    y1: "124",
    x2: x - 10,
    y2: "136"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "160",
    cy: "98",
    r: "24",
    fill: "#fff",
    stroke: C.ink,
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "44",
    y1: "92",
    x2: "108",
    y2: "92",
    stroke: C.olive,
    strokeWidth: "4",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "108,82 126,92 108,102",
    fill: C.olive
  }), /*#__PURE__*/React.createElement("text", {
    x: "74",
    y: "74",
    textAnchor: "middle",
    fontFamily: "DM Sans",
    fontSize: "14",
    fontWeight: "600",
    fontStyle: "italic",
    fill: C.olive
  }, "push"), /*#__PURE__*/React.createElement("line", {
    x1: "276",
    y1: "92",
    x2: "212",
    y2: "92",
    stroke: "#9aa39a",
    strokeWidth: "4",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "212,82 194,92 212,102",
    fill: "#9aa39a"
  }), /*#__PURE__*/React.createElement("text", {
    x: "246",
    y: "74",
    textAnchor: "middle",
    fontFamily: "DM Sans",
    fontSize: "14",
    fontWeight: "600",
    fontStyle: "italic",
    fill: "#7e887e"
  }, "friction"))), helper('Which arrow disappears when there is no friction?'), /*#__PURE__*/React.createElement(LessonChips, {
    options: [{
      label: 'friction',
      ar: '←',
      sel: true
    }, {
      label: 'push',
      ar: '→'
    }, {
      label: 'both'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.paleLime,
      borderRadius: 18,
      minHeight: 70,
      padding: '14px 15px',
      display: 'flex',
      alignItems: 'center',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 9999,
      flex: 'none',
      background: C.olive,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 20,
      height: 20,
      color: C.lime,
      strokeWidth: 2.5
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `700 14px/1.2 ${FONT}`,
      color: C.ink
    }
  }, "Exactly."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 13px/1.45 ${FONT}`,
      color: C.n600,
      marginTop: 2
    }
  }, "With no friction, the friction arrow disappears."))))));
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
  const [attachOpen, setAttachOpen] = React.useState(false);
  const [recording, setRecording] = React.useState(null); // null | { elapsed }
  const [lessonOpen, setLessonOpen] = React.useState(false);
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, intervention, recording]);
  // re-render lucide icons for anything that mounts after the initial paint
  // (attach tray, emoji close, recorder) — App's effect only covers its own render.
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons({
      attrs: {
        'stroke-width': 1.75
      }
    });
  });
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
    setAttachOpen(false);
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
      background: C.n50,
      position: 'relative'
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
  }, "Read by your circle only \xB7 EU servers"), messages.map((m, i) => m.kind === 'lesson' ? /*#__PURE__*/React.createElement(LessonPreview, {
    key: i,
    onOpen: () => setLessonOpen(true)
  }) : m.kind === 'voice' ? /*#__PURE__*/React.createElement(VoiceMessage, {
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
  }, m.text)), intervention === 'pause' && /*#__PURE__*/React.createElement(PauseBanner, null)), lessonOpen && /*#__PURE__*/React.createElement(LessonOverlay, {
    onClose: () => setLessonOpen(false)
  }), intervention === 'nudge' && /*#__PURE__*/React.createElement(NudgeBanner, {
    draft: draft,
    onRewrite: onRewrite,
    onEdit: onEdit,
    onWhy: onWhy
  }), attachOpen && !recording && /*#__PURE__*/React.createElement(AttachTray, {
    onPick: () => setAttachOpen(false)
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
    onImage: () => {
      setAttachOpen(true);
    },
    onCamera: () => {
      setAttachOpen(true);
    },
    onAttach: () => {
      setAttachOpen(o => !o);
    },
    attachOpen: attachOpen,
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
//   'socratic'     — Socratic voice prompt (ink ground, lime waveform)
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
    'socratic': {
      bg: C.socraticBg,
      fg: C.paper,
      wave: C.lime,
      waveDim: 'rgba(222,251,80,.30)',
      accent: C.lime,
      role: {
        label: 'SOCRATIC',
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
      animation: 'socraticPulse 1.4s ease-in-out infinite'
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
  const accent = voice === 'socratic' ? C.lime : voice === 'teacher' ? C.sky : voice === 'goodtalk' ? C.coral : C.coral;
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
      animation: 'socraticPulse 1.2s ease-in-out infinite'
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
  SocraticBubble,
  LessonPreview,
  LessonOverlay,
  TeacherBubble,
  EmojiPicker,
  AttachTray,
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
    socratic: '#DEFB50',
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
    title: "Toni finished a maths set with Socratic.",
    body: "Worked through 8 exercises on fractions \u2014 Socratic asked the questions, never gave the answer.",
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
    title: "Toni finished a maths set with Socratic.",
    body: "8 exercises on fractions \u2014 Socratic asked, never answered.",
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

})();
