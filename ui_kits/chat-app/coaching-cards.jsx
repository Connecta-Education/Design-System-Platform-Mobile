// coaching-cards.jsx — the three coaching voices rebuilt on the new
// GoodTalk Nudge Banner anatomy: themed card (soft shadow, no left rule),
// solid badge pill, "Защо?" expander, primary + icon actions.
// GoodTalk carries the full held-draft → suggest → sent interaction.

const { useState, useEffect } = React;
const CC_SANS = '"DM Sans", system-ui, -apple-system, sans-serif';
const CC_MONO = '"DM Sans", system-ui, -apple-system, sans-serif';

function ccIcons() {
  useEffect(() => { if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.75 } }); });
}

// ── Held draft — the intercepted message, not yet sent ──────────────
function HeldDraft({ text, sent }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', marginBottom: 2 }}>
      <div style={{
        maxWidth:'84%',
        background:'#FFFFFF',
        color: sent ? '#0F1A24' : 'rgba(15,26,36,.62)',
        padding:'11px 15px',
        borderRadius:'18px 18px 5px 18px',
        font:`400 14.5px/1.4 ${CC_SANS}`, wordWrap:'break-word',
        border: sent ? '1px solid #DDE2E7' : '1.5px dashed #F35F49',
      }}>{text}</div>
      <div style={{ display:'flex', alignItems:'center', gap:5, marginTop:6, marginRight:6 }}>
        <i data-lucide={sent ? 'check' : 'clock'} style={{ width:11, height:11, color: sent ? '#424F1A' : '#F35F49' }}></i>
        <span style={{ font:`500 10.5px/1 ${CC_MONO}`, color: sent ? '#424F1A' : '#F35F49', letterSpacing:'.02em' }}>
          {sent ? 'изпратено · 14:32' : 'задържано · не е изпратено'}
        </span>
      </div>
    </div>
  );
}

// ── Shared expander ("Защо?" / "Подсказка") ─────────────────────────
function Expander({ label, eyebrow, text, fg }) {
  const [open, setOpen] = useState(false);
  ccIcons();
  return (
    <div style={{ marginBottom: 4 }}>
      <button onClick={() => setOpen(o => !o)} style={{
        display:'inline-flex', alignItems:'center', gap:6, background:'transparent',
        border:0, padding:0, cursor:'pointer', color:fg, font:`600 12px/1.3 ${CC_SANS}`,
      }}>
        <i data-lucide="help-circle" style={{ width:14, height:14 }}></i>
        {label}
        <i data-lucide={open ? 'chevron-up' : 'chevron-down'} style={{ width:13, height:13, opacity:.7 }}></i>
      </button>
      {open && (
        <div style={{
          marginTop:9, background:'rgba(255,255,255,.85)', borderRadius:12, padding:'11px 13px',
          color:'#0F1A24', font:`400 12.5px/1.5 ${CC_SANS}`,
        }}>
          <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:5, color:'rgba(15,26,36,.55)' }}>
            <i data-lucide="corner-left-up" style={{ width:12, height:12 }}></i>
            <span style={{ font:`600 10px/1 ${CC_MONO}`, letterSpacing:'.1em', textTransform:'uppercase' }}>{eyebrow}</span>
          </div>
          {text}
        </div>
      )}
    </div>
  );
}

// ── The themed card shell (the new nudge-banner look) ───────────────
function cardShell(t) {
  return {
    background:t.bg, borderRadius:20, padding:'16px 16px 15px',
    boxShadow:t.shadow, margin:'10px 0 2px',
    animation:'slideDown 220ms cubic-bezier(.3,0,0,1)',
  };
}
function Badge({ t, icon, children }) {
  return (
    <span style={{
      background:t.badgeBg, color:t.badgeFg, font:`600 10px/1 ${CC_MONO}`,
      letterSpacing:'.12em', textTransform:'uppercase', padding:'6px 10px', borderRadius:9999,
      display:'inline-flex', alignItems:'center', gap:6,
    }}>
      <i data-lucide={icon} style={{ width:12, height:12, strokeWidth:2 }}></i>
      {children}
    </span>
  );
}
function PrimaryBtn({ t, icon, children, onClick, flex }) {
  return (
    <button onClick={onClick} style={{
      flex: flex ? 1 : 'initial', background:t.primaryBg, color:t.primaryFg, border:0, borderRadius:12,
      padding:'12px 14px', font:`600 13.5px/1 ${CC_SANS}`, cursor:'pointer',
      display:'flex', alignItems:'center', justifyContent:'center', gap:7,
    }}>
      {icon && <i data-lucide={icon} style={{ width:15, height:15, strokeWidth:2 }}></i>}
      {children}
    </button>
  );
}
function GhostBtn({ t, icon, children, onClick, iconOnly, label }) {
  return (
    <button onClick={onClick} aria-label={label} title={label} style={{
      background:'transparent', color:t.secFg, border:`1.5px solid ${t.secBorder}`, borderRadius:12,
      padding: iconOnly ? '12px' : '12px 14px', width: iconOnly ? 46 : 'auto',
      font:`600 13.5px/1 ${CC_SANS}`, cursor:'pointer', flexShrink:0,
      display:'flex', alignItems:'center', justifyContent:'center', gap:7,
    }}>
      {icon && <i data-lucide={icon} style={{ width: iconOnly ? 16 : 15, height: iconOnly ? 16 : 15 }}></i>}
      {children}
    </button>
  );
}

// ── GoodTalk scene — held draft + nudge + suggest + sent ────────────
function GoodTalkScene({ t, draft, why, suggestion }) {
  const [stage, setStage] = useState('prompt'); // prompt | suggested | sent
  ccIcons();
  return (
    <div>
      <HeldDraft text={stage === 'sent' ? suggestion : draft} sent={stage === 'sent'} />
      <div style={cardShell(t)}>
        {stage !== 'sent' && <Badge t={t} icon="sparkles">Неизпратено</Badge>}

        {stage !== 'sent' && (
          <div style={{ font:`600 16px/1.4 ${CC_SANS}`, color:t.fg, letterSpacing:'-.005em', margin:'11px 0 6px' }}>
            Това може да нарани нечии чувства. Искаш ли да сменим отговора ти?
          </div>
        )}

        {stage === 'prompt' && (
          <React.Fragment>
            <Expander label="Защо?" eyebrow="Защо този nudge" text={why} fg={t.fg} />
            <div style={{ display:'flex', gap:9, marginTop:10 }}>
              <PrimaryBtn t={t} icon="sparkles" flex onClick={() => setStage('suggested')}>Предложи ми</PrimaryBtn>
              <GhostBtn t={t} icon="pencil" iconOnly label="Редактирай" />
            </div>
          </React.Fragment>
        )}

        {stage === 'suggested' && (
          <div style={{ background:t.whyBg, borderRadius:14, padding:'12px 13px 13px', marginTop:12 }}>
            <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:8, color:t.sub }}>
              <i data-lucide="sparkles" style={{ width:12, height:12, strokeWidth:2 }}></i>
              <span style={{ font:`600 10px/1 ${CC_MONO}`, letterSpacing:'.1em', textTransform:'uppercase' }}>Предложение от GoodTalk</span>
            </div>
            <div style={{
              background:'rgba(255,255,255,.6)', borderRadius:'14px 14px 14px 5px', padding:'11px 14px',
              font:`500 14.5px/1.4 ${CC_SANS}`, color:'#0F1A24', marginBottom:10,
            }}>{suggestion}</div>
            <div style={{ display:'flex', gap:9 }}>
              <PrimaryBtn t={t} icon="send-horizontal" flex onClick={() => setStage('sent')}>Изпрати</PrimaryBtn>
              <GhostBtn t={t} icon="refresh-cw" iconOnly label="Друго предложение" onClick={() => setStage('prompt')} />
            </div>
          </div>
        )}

        {stage === 'sent' && (
          <div style={{ display:'flex', alignItems:'center', gap:11 }}>
            <i data-lucide="check-circle" style={{ width:22, height:22, color:t.fg, flexShrink:0 }}></i>
            <div>
              <div style={{ font:`700 15px/1.2 ${CC_SANS}`, color:t.fg }}>Изпратено</div>
              <div style={{ font:`400 12.5px/1.4 ${CC_SANS}`, color:t.sub, marginTop:2 }}>Виждат само новата версия.</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Static coaching card (Cosmo / Teacher) — same look, no safety flow ─
function CoachCard({ t, icon, badge, name, headline, body, expand, primary, secondary }) {
  ccIcons();
  return (
    <div style={cardShell(t)}>
      <Badge t={t} icon={icon}>{badge}</Badge>
      {name && <div style={{ font:`500 12px/1 ${CC_SANS}`, color:t.sub, margin:'10px 0 0' }}>{name}</div>}
      <div style={{ font:`600 16px/1.4 ${CC_SANS}`, color:t.fg, letterSpacing:'-.005em', margin:'11px 0 6px' }}>{headline}</div>
      {body && <div style={{ font:`400 13.5px/1.45 ${CC_SANS}`, color:t.fg, opacity:.82, marginBottom:8 }}>{body}</div>}
      {expand && <Expander label={expand.label} eyebrow={expand.eyebrow} text={expand.text} fg={t.fg} />}
      {(primary || secondary) && (
        <div style={{ display:'flex', gap:9, marginTop:10 }}>
          {primary && <PrimaryBtn t={t} icon={primary.icon} flex>{primary.text}</PrimaryBtn>}
          {secondary && (secondary.text
            ? <GhostBtn t={t} icon={secondary.icon}>{secondary.text}</GhostBtn>
            : <GhostBtn t={t} icon={secondary.icon} iconOnly label={secondary.label} />)}
        </div>
      )}
    </div>
  );
}

// ── Voice themes (identity preserved, new anatomy) ──────────────────
const CC_THEMES = {
  // GoodTalk → coral (error / check / important)
  goodtalk: {
    bg:'#F35F49', fg:'#FFFFFF', sub:'rgba(255,255,255,.78)',
    badgeBg:'#0F1A24', badgeFg:'#FFFFFF', primaryBg:'#0F1A24', primaryFg:'#FFFFFF',
    secBorder:'rgba(255,255,255,.85)', secFg:'#FFFFFF', whyBg:'rgba(255,255,255,.16)',
    shadow:'0 12px 32px rgba(243,95,73,.30)',
  },
  // Cosmo → olive (learning) with lime lab accents
  cosmo: {
    bg:'#424F1A', fg:'#FFFFFF', sub:'rgba(255,255,255,.65)',
    badgeBg:'#DEFB50', badgeFg:'#424F1A', primaryBg:'#0F1A24', primaryFg:'#FFFFFF',
    secBorder:'rgba(222,251,80,.6)', secFg:'#DEFB50', whyBg:'rgba(255,255,255,.08)',
    shadow:'0 12px 32px rgba(66,79,26,.32)',
  },
  // Teacher → sky
  teacher: {
    bg:'#BAE6FD', fg:'#0F1A24', sub:'rgba(15,26,36,.62)',
    badgeBg:'#0F1A24', badgeFg:'#FFFFFF', primaryBg:'#0F1A24', primaryFg:'#FFFFFF',
    secBorder:'rgba(15,26,36,.5)', secFg:'#0F1A24', whyBg:'rgba(15,26,36,.06)',
    shadow:'0 12px 32px rgba(15,26,36,.16)',
  },
};

Object.assign(window, { HeldDraft, GoodTalkScene, CoachCard, CC_THEMES, CC_SANS, CC_MONO });
