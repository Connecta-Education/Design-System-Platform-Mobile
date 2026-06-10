// preview-voices.jsx — bubble + voice variants for the four Connecta voices.

const { useState, useEffect } = React;

// ─── Card chrome ─────────────────────────────────────────────────────
function Frame({ label, voice, children, width = 380 }) {
  const accent = {
    goodtalk: '#F35F49', cosmo: '#DEFB50', teacher: '#0F1A24', kid: '#F35F49',
  }[voice] || '#98A2AD';
  return (
    <div style={{display:'flex', flexDirection:'column', gap:10}}>
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <span style={{width:8, height:8, borderRadius:9999, background:accent}}/>
        <span style={{
          fontFamily:MONO, fontSize:11, letterSpacing:'.08em',
          textTransform:'uppercase', color:'#FFF', opacity:.8,
        }}>{label}</span>
      </div>
      <div style={{
        width, background:'#F2F2F7', borderRadius:32, overflow:'hidden',
        boxShadow:'0 24px 60px rgba(0,0,0,.20), 0 0 0 1px rgba(0,0,0,.10)',
      }}>{children}</div>
    </div>
  );
}

// ─── Mini chat header used inside each phone-shaped panel ───────────
function MiniHeader({ title, subtitle, kind = 'school' }) {
  const C2 = window.C;
  const tint = kind === 'school' ? '#ECFDA8' : kind === 'family' ? C2.sky : C2.n100;
  const icon = kind === 'school' ? 'users' : kind === 'lab' ? 'flask-conical' : 'circle-dot';
  return (
    <div style={{
      display:'flex', alignItems:'center', gap:12, padding:'14px 16px 12px',
      borderBottom:`1px solid ${C2.n100}`, background:C2.paper,
    }}>
      <div style={{
        width:36, height:36, borderRadius:12, background:tint,
        display:'flex', alignItems:'center', justifyContent:'center', color:C2.olive,
      }}><i data-lucide={icon} style={{width:18, height:18}}></i></div>
      <div style={{flex:1, minWidth:0}}>
        <div style={{font:`600 14px/1.2 ${FONT}`, color:C2.ink}}>{title}</div>
        <div style={{font:`400 11px/1.2 ${FONT}`, color:C2.n500, marginTop:2}}>{subtitle}</div>
      </div>
      <i data-lucide="more-horizontal" style={{width:18, height:18, color:C2.n500}}></i>
    </div>
  );
}

// ─── Bottom composer (static, just for context) ─────────────────────
function MiniComposer({ value = 'Никой не иска Алекс в групата, той е безполезен', icon = 'mic' }) {
  const C2 = window.C;
  return (
    <div style={{
      display:'flex', alignItems:'center', gap:10, padding:'10px 12px 16px',
      background:C2.paper, borderTop:`1px solid ${C2.n100}`,
    }}>
      <div style={{
        flex:1, background:C2.paper, borderRadius:14, boxShadow:`inset 0 0 0 1px ${C2.n200}`,
        padding:'10px 14px', font:`400 13px/1.35 ${FONT}`, color:C2.n600,
        whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
      }}>{value}</div>
      <button style={{
        width:38, height:38, borderRadius:12, border:0,
        background: icon==='mic' ? C2.n50 : C2.coral,
        color: icon==='mic' ? C2.n700 : '#fff',
        display:'flex', alignItems:'center', justifyContent:'center',
      }}><i data-lucide={icon} style={{width:18, height:18}}></i></button>
    </div>
  );
}

Object.assign(window, { Frame, MiniHeader, MiniComposer });
