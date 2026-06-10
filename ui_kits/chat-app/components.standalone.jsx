// Connecta chat-app components — kid/teen surface.
// Soft geometry, ink-on-white, coral accents, calm intervention banners.

const C = {
  ink: '#0F1A24', paper: '#FFFFFF', sky: '#BAE6FD',
  coral: '#F35F49', lime: '#DEFB50', paleLime: '#ECFDA8',
  plum: '#571B32', olive: '#424F1A',
  n50: '#F7F8F9', n100: '#EEF1F3', n200: '#DDE2E7',
  n300: '#C3CBD3', n400: '#98A2AD', n500: '#6B7682',
  n600: '#4D5762', n700: '#343C46',
  nudgeBg: '#FDEAE5', nudgeFg: '#0F1A24',
  pauseBg: '#EEF1F3', pauseFg: '#0F1A24',
  warnBg:  '#FDEAE5', warnFg:  '#0F1A24',
  alertBg: '#FDEAE5', alertFg: '#571B32',
};

const FONT = '"DM Sans", system-ui, -apple-system, sans-serif';
const MONO = '"DM Sans", system-ui, -apple-system, sans-serif';

// ─────────────────────────── Top app bar ───────────────────────────
function ChatAppBar({ title, subtitle, left, right, onBack }) {
  return (
    <div style={{
      display:'flex', alignItems:'center', gap:12, padding:'10px 16px',
      borderBottom:`1px solid ${C.n200}`, background:C.paper, minHeight:56, boxSizing:'border-box',
    }}>
      {onBack ? (
        <button onClick={onBack} style={{
          width:36, height:36, borderRadius:10, border:0, background:'transparent',
          display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', color:C.ink,
        }}>
          <i data-lucide="chevron-left" style={{width:22, height:22}}></i>
        </button>
      ) : left}
      <div style={{flex:1, minWidth:0}}>
        <div style={{font:`600 16px/1.2 ${FONT}`, color:C.ink, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{title}</div>
        {subtitle && <div style={{font:`400 12px/1.2 ${FONT}`, color:C.n500, marginTop:2}}>{subtitle}</div>}
      </div>
      {right}
    </div>
  );
}

// ─────────────────────────── Circle list row ───────────────────────────
function CircleRow({ name, members, lastMsg, time, badge, kind, selected, onClick }) {
  const swatchBg = {family:C.sky, school:C.paleLime, friends:C.n100, sports:C.lime}[kind] || C.n100;
  const swatchFg = kind==='school' ? C.olive : kind==='sports' ? C.olive : C.ink;
  return (
    <button onClick={onClick} style={{
      display:'flex', alignItems:'center', gap:14, padding:'12px 16px', width:'100%',
      background: selected ? C.n50 : 'transparent', border:0, cursor:'pointer', textAlign:'left',
      borderBottom:`1px solid ${C.n100}`,
    }}>
      <div style={{
        width:48, height:48, borderRadius:14, background:swatchBg, color:swatchFg,
        display:'flex', alignItems:'center', justifyContent:'center',
        font:`700 18px/1 ${FONT}`, flexShrink:0,
      }}>{name.slice(0,1).toUpperCase()}</div>
      <div style={{flex:1, minWidth:0}}>
        <div style={{display:'flex', alignItems:'baseline', gap:8}}>
          <div style={{font:`600 15px/1.2 ${FONT}`, color:C.ink, flex:1, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{name}</div>
          <div style={{font:`400 11px/1 ${MONO}`, color:C.n500}}>{time}</div>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:8, marginTop:4}}>
          <div style={{font:`400 13px/1.3 ${FONT}`, color:C.n600, flex:1, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{lastMsg}</div>
          {badge && <div style={{
            background:C.coral, color:'#fff', font:`700 11px/1 ${FONT}`,
            minWidth:18, height:18, padding:'0 6px', borderRadius:9999,
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>{badge}</div>}
        </div>
        <div style={{font:`400 11px/1 ${FONT}`, color:C.n400, marginTop:4}}>{members} · private</div>
      </div>
    </button>
  );
}

// ─────────────────────────── Chat bubble ───────────────────────────
function Bubble({ children, mine, sender, time, system }) {
  if (system) {
    return (
      <div style={{display:'flex', justifyContent:'center', margin:'12px 0'}}>
        <div style={{
          font:`400 12px/1.4 ${FONT}`, color:C.n500, background:C.n50,
          padding:'6px 12px', borderRadius:9999, display:'flex', alignItems:'center', gap:8,
        }}>
          <img src={window.__resources.glyphDark} style={{width:14, height:14, opacity:.6}}/>
          {children}
        </div>
      </div>
    );
  }
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems: mine?'flex-end':'flex-start', margin:'4px 0'}}>
      {sender && !mine && <div style={{font:`500 11px/1 ${FONT}`, color:C.n500, marginLeft:14, marginBottom:4}}>{sender}</div>}
      <div style={{
        maxWidth:'78%',
        background: mine ? C.ink : C.paper,
        color: mine ? '#fff' : C.ink,
        padding:'10px 14px',
        borderRadius: mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
        font:`400 14px/1.4 ${FONT}`,
        boxShadow: mine ? 'none' : `0 1px 2px rgba(15,26,36,.04)`,
        border: mine ? 'none' : `1px solid ${C.n100}`,
        wordWrap:'break-word',
      }}>{children}</div>
      {time && <div style={{font:`400 11px/1 ${MONO}`, color:C.n400, marginTop:4, marginLeft: mine?0:14, marginRight: mine?14:0}}>{time}</div>}
    </div>
  );
}

// ─────────────────────────── Composer ───────────────────────────
function Composer({ value, onChange, onSend, disabled, placeholder='Write a message' }) {
  return (
    <div style={{
      display:'flex', alignItems:'flex-end', gap:10, padding:'10px 12px 16px',
      background:C.paper, borderTop:`1px solid ${C.n100}`, boxSizing:'border-box',
    }}>
      <button style={{
        width:40, height:40, borderRadius:12, background:C.n50, border:0, cursor:'pointer',
        display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:C.n600,
      }}><i data-lucide="plus" style={{width:20, height:20}}></i></button>
      <div style={{
        flex:1, background:C.paper, borderRadius:14, boxShadow:`inset 0 0 0 1px ${C.n200}`,
        display:'flex', alignItems:'center', minHeight:40, padding:'8px 12px',
      }}>
        <input
          value={value} onChange={e=>onChange(e.target.value)}
          placeholder={placeholder}
          onKeyDown={e=>{if(e.key==='Enter' && !disabled) onSend?.()}}
          style={{
            flex:1, border:0, outline:'none', background:'transparent',
            font:`400 14px/1.4 ${FONT}`, color:C.ink, minWidth:0,
          }}
        />
      </div>
      <button onClick={onSend} disabled={disabled || !value} style={{
        width:40, height:40, borderRadius:12, border:0, cursor: disabled||!value ? 'not-allowed':'pointer',
        background: disabled||!value ? C.n100 : C.ink,
        color: disabled||!value ? C.n400 : '#fff',
        display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
        transition:'transform 140ms cubic-bezier(.2,0,0,1)',
      }} onMouseDown={e=>{if(!disabled && value) e.currentTarget.style.transform='scale(.96)'}}
         onMouseUp={e=>e.currentTarget.style.transform='scale(1)'}
         onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>
        <i data-lucide="arrow-up" style={{width:20, height:20}}></i>
      </button>
    </div>
  );
}

// ─────────────────────────── Nudge banner ───────────────────────────
function NudgeBanner({ onRewrite, onEdit, onWhy, draft }) {
  return (
    <div style={{
      background:C.nudgeBg, padding:14, margin:'8px 12px', borderRadius:14,
      borderLeft:`3px solid ${C.lime}`,
      animation:'slideDown 220ms cubic-bezier(.3,0,0,1)',
    }}>
      <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:8}}>
        <div style={{
          background:C.lime, color:C.olive, font:`600 10px/1 ${MONO}`,
          letterSpacing:'.08em', textTransform:'uppercase',
          padding:'4px 8px', borderRadius:9999,
        }}>Nudge · just for you</div>
        <div style={{font:`400 11px/1 ${MONO}`, color:C.olive, opacity:.7}}>not sent yet</div>
      </div>
      <div style={{font:`600 14px/1.35 ${FONT}`, color:C.nudgeFg, marginBottom:4}}>That might hurt someone. Want to rephrase?</div>
      {draft && <div style={{font:`400 12px/1.35 ${FONT}`, color:C.nudgeFg, opacity:.75, fontStyle:'italic'}}>"{draft}"</div>}
      <div style={{display:'flex', gap:8, marginTop:10, flexWrap:'wrap'}}>
        <button onClick={onRewrite} style={btn(C.ink, '#fff')}>Try a rewrite</button>
        <button onClick={onEdit} style={btnGhost(C.olive)}>Edit myself</button>
        <button onClick={onWhy} style={{...btnGhost(C.olive), border:0, marginLeft:'auto'}}>Why?</button>
      </div>
    </div>
  );
}

function PauseBanner({ secondsLeft = 120 }) {
  return (
    <div style={{
      background:C.pauseBg, padding:14, margin:'8px 12px', borderRadius:14,
      borderLeft:`3px solid #6B7682`, display:'flex', alignItems:'center', gap:12,
    }}>
      <i data-lucide="pause-circle" style={{width:28, height:28, color:C.pauseFg, flexShrink:0}}></i>
      <div style={{flex:1}}>
        <div style={{font:`600 14px/1.3 ${FONT}`, color:C.pauseFg}}>Let's pause for 2 minutes so this doesn't escalate.</div>
        <div style={{font:`400 12px/1.3 ${FONT}`, color:C.pauseFg, opacity:.8, marginTop:2}}>Same rule for the whole group.</div>
      </div>
      <div style={{font:`700 13px/1 ${MONO}`, color:C.pauseFg}}>{Math.floor(secondsLeft/60)}:{String(secondsLeft%60).padStart(2,'0')}</div>
    </div>
  );
}

function btn(bg, fg) {
  return {
    background:bg, color:fg, border:0, borderRadius:10,
    padding:'8px 14px', font:`600 13px/1 ${FONT}`, cursor:'pointer',
  };
}
function btnGhost(fg) {
  return {
    background:'transparent', color:fg, border:`1px solid ${fg}`, borderRadius:10,
    padding:'8px 14px', font:`600 13px/1 ${FONT}`, cursor:'pointer',
  };
}

// ─────────────────────────── Login screen ───────────────────────────
function LoginScreen({ onContinue }) {
  return (
    <div style={{flex:1, display:'flex', flexDirection:'column', background:C.paper, padding:'40px 28px 24px', boxSizing:'border-box'}}>
      <img src={window.__resources.appIconCoral} style={{width:72, height:72, borderRadius:18, alignSelf:'flex-start'}}/>
      <div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <div style={{font:`400 11px/1 ${MONO}`, letterSpacing:'.08em', textTransform:'uppercase', color:C.n500, marginBottom:12}}>welcome back</div>
        <div style={{font:`700 32px/1.1 ${FONT}`, letterSpacing:'-0.02em', color:C.ink, marginBottom:8}}>Chat freely.</div>
        <div style={{font:`700 32px/1.1 ${FONT}`, letterSpacing:'-0.02em', color:C.coral, marginBottom:32}}>If it gets messy, we help you fix it.</div>
        <div style={{display:'flex', flexDirection:'column', gap:12}}>
          <input placeholder="Your handle" defaultValue="mia.s" style={inputStyle()}/>
          <input placeholder="Passcode" type="password" defaultValue="••••••" style={inputStyle()}/>
        </div>
      </div>
      <button onClick={onContinue} style={{
        background:C.ink, color:'#fff', border:0, borderRadius:14,
        padding:'16px', font:`600 16px/1 ${FONT}`, cursor:'pointer', width:'100%', marginBottom:8,
      }}>Continue</button>
      <div style={{font:`400 12px/1.4 ${FONT}`, color:C.n500, textAlign:'center'}}>
        Your chats aren't public. Just your circle.
      </div>
    </div>
  );
}

function inputStyle() {
  return {
    background:C.paper, border:0, borderRadius:14, boxShadow:`inset 0 0 0 1px ${C.n200}`,
    padding:'14px 16px', font:`400 15px/1.3 ${FONT}`, color:C.ink, outline:'none', width:'100%', boxSizing:'border-box',
  };
}

// ─────────────────────────── Circles screen ───────────────────────────
function CirclesScreen({ circles, onOpen }) {
  return (
    <div style={{flex:1, display:'flex', flexDirection:'column', background:C.paper}}>
      <div style={{padding:'16px 16px 8px', display:'flex', alignItems:'center', gap:12}}>
        <img src={window.__resources.glyphCoral} style={{width:28, height:28}}/>
        <div style={{flex:1}}>
          <div style={{font:`700 22px/1.1 ${FONT}`, letterSpacing:'-0.015em', color:C.ink}}>Circles</div>
          <div style={{font:`400 12px/1.3 ${FONT}`, color:C.n500, marginTop:2}}>No feeds. No followers. Just approved circles.</div>
        </div>
        <button style={{
          width:40, height:40, borderRadius:12, background:C.n50, border:0, cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center', color:C.n700,
        }}><i data-lucide="settings" style={{width:20, height:20}}></i></button>
      </div>
      <div style={{padding:'8px 16px 12px', display:'flex', gap:8, overflowX:'auto'}}>
        {['All','Family','School','Friends'].map((t,i)=>(
          <span key={t} style={{
            background:i===0?C.ink:C.n100, color:i===0?'#fff':C.ink,
            font:`500 13px/1 ${FONT}`, padding:'8px 14px', borderRadius:9999, whiteSpace:'nowrap',
          }}>{t}</span>
        ))}
      </div>
      <div style={{flex:1, overflowY:'auto'}}>
        {circles.map(c=>(
          <CircleRow key={c.id} {...c} onClick={()=>onOpen(c)}/>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────── Chat screen ───────────────────────────
function ChatScreen({ circle, messages, draft, setDraft, onSend, intervention, onRewrite, onEdit, onWhy, onBack }) {
  const scrollRef = React.useRef(null);
  React.useEffect(()=>{ if(scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages, intervention]);
  return (
    <div style={{flex:1, display:'flex', flexDirection:'column', background:C.n50}}>
      <ChatAppBar
        title={circle.name}
        subtitle={`${circle.members} · private`}
        onBack={onBack}
        right={
          <button style={{
            width:36, height:36, borderRadius:10, border:0, background:'transparent', cursor:'pointer',
            display:'flex', alignItems:'center', justifyContent:'center', color:C.n700,
          }}><i data-lucide="more-horizontal" style={{width:20, height:20}}></i></button>
        }
      />
      <div ref={scrollRef} style={{flex:1, overflowY:'auto', padding:'12px 14px'}}>
        <Bubble system>Read by your circle only · EU servers</Bubble>
        {messages.map((m,i)=>(
          <Bubble key={i} mine={m.mine} sender={m.sender} time={m.time}>{m.text}</Bubble>
        ))}
        {intervention === 'pause' && <PauseBanner/>}
      </div>
      {intervention === 'nudge' && (
        <NudgeBanner draft={draft} onRewrite={onRewrite} onEdit={onEdit} onWhy={onWhy}/>
      )}
      <Composer value={draft} onChange={setDraft} onSend={onSend} disabled={intervention==='pause'}/>
    </div>
  );
}

Object.assign(window, {
  C, FONT, MONO,
  ChatAppBar, CircleRow, Bubble, Composer, NudgeBanner, PauseBanner,
  LoginScreen, CirclesScreen, ChatScreen,
});
