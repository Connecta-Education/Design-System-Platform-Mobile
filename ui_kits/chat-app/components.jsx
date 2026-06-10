// Connecta chat-app components — kid/teen surface.
// Soft geometry, ink-on-white, coral accents, calm intervention banners.

const C = {
  ink: '#0F1A24', paper: '#FFFFFF', sky: '#BAE6FD',
  coral: '#F35F49', lime: '#DEFB50', paleLime: '#ECFDA8',
  plum: '#571B32', olive: '#424F1A', pink: '#FBE1FD',
  n50: '#F7F8F9', n100: '#EEF1F3', n200: '#DDE2E7',
  n300: '#C3CBD3', n400: '#98A2AD', n500: '#6B7682',
  n600: '#4D5762', n700: '#343C46',
  // GoodTalk — pink ground, plum type (calm safety coaching, never red)
  goodtalkBg: '#FBE1FD', goodtalkFg: '#571B32', goodtalkAccent: '#571B32',
  // Cosmo — olive ground, lime type (learning / lab coach)
  cosmoBg: '#424F1A',   cosmoFg: '#DEFB50',    cosmoAccent: '#DEFB50',
  // Teacher — sky ground, ink type
  teacherBg: '#BAE6FD', teacherFg: '#0F1A24',  teacherAccent: '#0F1A24',
  // Legacy aliases retained for older surfaces (brand-only)
  nudgeBg: '#FDEAE5',   nudgeFg: '#0F1A24',
  pauseBg: '#EEF1F3',   pauseFg: '#0F1A24',
  warnBg:  '#FDEAE5',   warnFg:  '#0F1A24',
  alertBg: '#FDEAE5',   alertFg: '#571B32',
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
          <img src="../../assets/glyph-nn-dark.svg" style={{width:14, height:14, opacity:.6}}/>
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
function Composer({ value, onChange, onSend, onRecordStart, onEmoji, disabled, placeholder='Write a message' }) {
  const empty = !value;
  return (
    <div style={{
      display:'flex', alignItems:'flex-end', gap:10, padding:'10px 12px 26px',
      background:C.paper, borderTop:`1px solid ${C.n100}`, boxSizing:'border-box',
    }}>
      <button style={{
        width:40, height:40, borderRadius:12, background:C.n50, border:0, cursor:'pointer',
        display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:C.n600,
      }}><i data-lucide="plus" style={{width:20, height:20}}></i></button>
      <div style={{
        flex:1, background:C.paper, borderRadius:14, boxShadow:`inset 0 0 0 1px ${C.n200}`,
        display:'flex', alignItems:'center', gap:6, minHeight:40, padding:'8px 6px 8px 12px',
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
        <button onClick={onEmoji} aria-label="Emoji" style={{
          width:28, height:28, borderRadius:9999, border:0, cursor:'pointer',
          background:'transparent', color:C.n500, flexShrink:0,
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
          <i data-lucide="smile" style={{width:20, height:20}}></i>
        </button>
      </div>
      {empty ? (
        <button onClick={onRecordStart} aria-label="Hold to record" style={{
          width:40, height:40, borderRadius:12, border:0, cursor:'pointer',
          background:C.n50, color:C.n700,
          display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
          transition:'transform 140ms cubic-bezier(.2,0,0,1)',
        }}>
          <i data-lucide="mic" style={{width:20, height:20}}></i>
        </button>
      ) : (
        <button onClick={onSend} disabled={disabled} style={{
          width:40, height:40, borderRadius:12, border:0,
          cursor: disabled ? 'not-allowed':'pointer',
          background: disabled ? C.n100 : C.ink,
          color: disabled ? C.n400 : '#fff',
          display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
          transition:'transform 140ms cubic-bezier(.2,0,0,1)',
        }} onMouseDown={e=>{if(!disabled) e.currentTarget.style.transform='scale(.96)'}}
           onMouseUp={e=>e.currentTarget.style.transform='scale(1)'}
           onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>
          <i data-lucide="arrow-up" style={{width:20, height:20}}></i>
        </button>
      )}
    </div>
  );
}

// ─────────────────────────── GoodTalk nudge banner ───────────────────────────
// Green + Black voice. Calm safety coaching, never alarmist.
function NudgeBanner({
  onRewrite, onEdit, onWhy, draft,
  tag = 'Nudge · just for you',
  meta = 'not sent yet',
  prompt = 'That might hurt someone. Want to rephrase?',
  primary = 'Try a rewrite',
  ghost = 'Edit myself',
}) {
  return (
    <div style={{
      background:C.goodtalkBg, padding:14, margin:'8px 12px', borderRadius:14,
      borderLeft:`3px solid ${C.goodtalkAccent}`,
      animation:'slideDown 220ms cubic-bezier(.3,0,0,1)',
    }}>
      <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:8}}>
        <div style={{
          background:C.plum, color:C.pink, font:`600 10px/1 ${MONO}`,
          letterSpacing:'.08em', textTransform:'uppercase',
          padding:'4px 8px', borderRadius:9999,
          display:'inline-flex', alignItems:'center', gap:6,
        }}>
          <i data-lucide="sparkles" style={{width:11, height:11, strokeWidth:2}}></i>
          {tag}
        </div>
        <div style={{font:`400 11px/1 ${MONO}`, color:C.goodtalkFg, opacity:.6}}>{meta}</div>
      </div>
      <div style={{font:`600 14px/1.35 ${FONT}`, color:C.goodtalkFg, marginBottom:4}}>{prompt}</div>
      {draft && <div style={{font:`400 12px/1.35 ${FONT}`, color:C.goodtalkFg, opacity:.7, fontStyle:'italic'}}>"{draft}"</div>}
      <div style={{display:'flex', gap:8, marginTop:10, flexWrap:'wrap'}}>
        <button onClick={onRewrite} style={btn(C.plum, '#fff')}>{primary}</button>
        <button onClick={onEdit} style={btnGhost(C.goodtalkFg)}>{ghost}</button>
        <button onClick={onWhy} style={{...btnGhost(C.goodtalkFg), border:0, marginLeft:'auto'}}>Why?</button>
      </div>
    </div>
  );
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
  onPrimary, onGhost, onWhy,
}) {
  return (
    <div style={{
      background:C.cosmoBg, padding:14, margin:'8px 12px', borderRadius:14,
      borderLeft:`3px solid ${C.cosmoAccent}`,
      animation:'slideDown 220ms cubic-bezier(.3,0,0,1)',
      color:C.paper,
    }}>
      <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:8}}>
        <div style={{
          background:C.lime, color:C.ink, font:`600 10px/1 ${MONO}`,
          letterSpacing:'.08em', textTransform:'uppercase',
          padding:'4px 8px', borderRadius:9999,
          display:'inline-flex', alignItems:'center', gap:6,
        }}>
          <i data-lucide="compass" style={{width:11, height:11, strokeWidth:2}}></i>
          {tag}
        </div>
        <div style={{font:`400 11px/1 ${MONO}`, color:C.lime, opacity:.75}}>{meta}</div>
      </div>
      <div style={{font:`600 14px/1.35 ${FONT}`, color:C.paper, marginBottom:4}}>{prompt}</div>
      {draft && <div style={{font:`400 12px/1.35 ${FONT}`, color:C.paper, opacity:.55, fontStyle:'italic'}}>"{draft}"</div>}
      <div style={{display:'flex', gap:8, marginTop:10, flexWrap:'wrap'}}>
        <button onClick={onPrimary} style={btn(C.lime, C.ink)}>{primary}</button>
        <button onClick={onGhost} style={btnGhost(C.lime)}>{ghost}</button>
        <button onClick={onWhy} style={{...btnGhost(C.lime), border:0, marginLeft:'auto', opacity:.85}}>Why?</button>
      </div>
    </div>
  );
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
  onPrimary, onGhost, onDetails,
  teacherName,
}) {
  return (
    <div style={{
      background:C.teacherBg, padding:14, margin:'8px 12px', borderRadius:14,
      borderLeft:`3px solid ${C.teacherAccent}`,
      animation:'slideDown 220ms cubic-bezier(.3,0,0,1)',
    }}>
      <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:8}}>
        <div style={{
          background:C.teacherAccent, color:C.paper, font:`600 10px/1 ${MONO}`,
          letterSpacing:'.08em', textTransform:'uppercase',
          padding:'4px 8px', borderRadius:9999,
          display:'inline-flex', alignItems:'center', gap:6,
        }}>
          <i data-lucide="clipboard-list" style={{width:11, height:11, strokeWidth:2}}></i>
          {tag}
        </div>
        <div style={{font:`400 11px/1 ${MONO}`, color:C.teacherFg, opacity:.7}}>{meta}</div>
      </div>
      {teacherName && <div style={{font:`500 12px/1 ${FONT}`, color:C.teacherFg, opacity:.7, marginBottom:6}}>{teacherName}</div>}
      <div style={{font:`600 14px/1.4 ${FONT}`, color:C.teacherFg, marginBottom:4}}>{prompt}</div>
      {draft && <div style={{font:`400 12px/1.4 ${FONT}`, color:C.teacherFg, opacity:.8}}>{draft}</div>}
      {(primary || ghost || onDetails) && (
        <div style={{display:'flex', gap:8, marginTop:10, flexWrap:'wrap'}}>
          {primary && <button onClick={onPrimary} style={btn(C.teacherAccent, '#fff')}>{primary}</button>}
          {ghost && <button onClick={onGhost} style={btnGhost(C.teacherFg)}>{ghost}</button>}
          {onDetails && <button onClick={onDetails} style={{...btnGhost(C.teacherFg), border:0, marginLeft:'auto'}}>Details</button>}
        </div>
      )}
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
      <img src="../../assets/app-icon-coral.svg" style={{width:72, height:72, borderRadius:18, alignSelf:'flex-start'}}/>
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
        <img src="../../assets/glyph-nn-coral.svg" style={{width:28, height:28}}/>
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
      <div style={{flex:1, minHeight:0, overflowY:'auto'}}>
        {circles.map(c=>(
          <CircleRow key={c.id} {...c} onClick={()=>onOpen(c)}/>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────── Chat screen ───────────────────────────
function ChatScreen({ circle, messages, draft, setDraft, onSend, intervention, onRewrite, onEdit, onWhy, onBack, onSendVoice }) {
  const scrollRef = React.useRef(null);
  const [emojiOpen, setEmojiOpen] = React.useState(false);
  const [recording, setRecording] = React.useState(null); // null | { elapsed }
  React.useEffect(()=>{ if(scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages, intervention, recording]);
  // tick recorder elapsed
  React.useEffect(() => {
    if (!recording) return;
    const id = setInterval(() => setRecording(r => r ? { elapsed: r.elapsed + 0.1 } : null), 100);
    return () => clearInterval(id);
  }, [recording !== null]);
  const insertEmoji = (e) => { setDraft((draft || '') + e); };
  const startRecord = () => { setRecording({ elapsed: 0 }); setEmojiOpen(false); };
  const cancelRecord = () => setRecording(null);
  const sendRecord = () => {
    const dur = Math.max(1, Math.round(recording.elapsed));
    setRecording(null);
    onSendVoice?.(dur);
  };
  return (
    <div style={{flex:1, minHeight:0, display:'flex', flexDirection:'column', background:C.n50}}>
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
      <div ref={scrollRef} style={{flex:1, minHeight:0, overflowY:'auto', padding:'12px 14px'}}>
        <Bubble system>Read by your circle only · EU servers</Bubble>
        {messages.map((m,i)=>(
          m.kind === 'voice'
            ? <VoiceMessage key={i} voice={m.voice || (m.mine ? 'kid-mine' : 'kid')}
                sender={m.sender} time={m.time} duration={m.duration || 12}
                progress={m.progress || 0} playing={m.playing}
                onTogglePlay={m.onTogglePlay}/>
            : <Bubble key={i} mine={m.mine} sender={m.sender} time={m.time}>{m.text}</Bubble>
        ))}
        {intervention === 'pause' && <PauseBanner/>}
      </div>
      {intervention === 'nudge' && (
        <NudgeBanner draft={draft} onRewrite={onRewrite} onEdit={onEdit} onWhy={onWhy}/>
      )}
      {emojiOpen && !recording && (
        <EmojiPicker onPick={(e)=>{ insertEmoji(e); }} onClose={()=>setEmojiOpen(false)}/>
      )}
      {recording ? (
        <VoiceRecorder voice="kid-mine" elapsed={recording.elapsed}
          onCancel={cancelRecord} onSend={sendRecord}/>
      ) : (
        <Composer value={draft} onChange={setDraft} onSend={onSend}
          onRecordStart={startRecord}
          onEmoji={()=>setEmojiOpen(o=>!o)}
          disabled={intervention==='pause'}/>
      )}
    </div>
  );
}

// ─────────────────────────── Emoji picker ───────────────────────────
// Tiny flyout above the composer. Pass-through: kid's emoji is unchanged
// by GoodTalk per brand voice (emoji in a kid's own bubble pass through).
function EmojiPicker({ onPick, onClose }) {
  const groups = [
    ['😀','😅','😂','🥲','😊','😌','😎','🤩','🥰','😘','🤗','🤔'],
    ['👍','👎','👏','🙌','🤝','✌️','🤞','🙏','💪','👀','🫶','🫡'],
    ['❤️','🧡','💛','💚','💙','💜','🖤','🤍','💔','✨','🔥','🎉'],
    ['⚽','🏀','🎮','🎵','📚','🎨','🧪','🍕','☕','🌧️','🌈','⭐'],
  ];
  return (
    <div style={{
      margin:'0 12px 8px', borderRadius:14, background:C.paper,
      border:`1px solid ${C.n200}`, boxShadow:'0 8px 24px rgba(15,26,36,.10)',
      padding:'10px 12px', animation:'slideDown 180ms cubic-bezier(.3,0,0,1)',
    }}>
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        marginBottom:6,
      }}>
        <div style={{font:`500 11px/1 ${MONO}`, letterSpacing:'.08em', textTransform:'uppercase', color:C.n500}}>Emoji</div>
        <button onClick={onClose} style={{
          background:'transparent', border:0, cursor:'pointer', color:C.n500,
          display:'flex', alignItems:'center', justifyContent:'center', padding:2,
        }}><i data-lucide="x" style={{width:14, height:14}}></i></button>
      </div>
      {groups.map((row, ri) => (
        <div key={ri} style={{display:'flex', gap:2, justifyContent:'space-between', marginTop:2}}>
          {row.map(e => (
            <button key={e} onClick={()=>onPick(e)} style={{
              flex:1, background:'transparent', border:0, cursor:'pointer',
              padding:'4px 0', fontSize:20, lineHeight:1, borderRadius:6,
            }}>{e}</button>
          ))}
        </div>
      ))}
    </div>
  );
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
  seed = 7,
}) {
  const V = {
    'kid-mine': { bg:C.ink,        fg:C.paper,     wave:C.paper,         waveDim:'rgba(255,255,255,.28)', accent:C.coral,         role:null,                                                  align:'end',   playBg:C.paper,         playFg:C.ink },
    'kid':      { bg:C.paper,      fg:C.ink,       wave:C.ink,           waveDim:'rgba(15,26,36,.20)',    accent:C.ink,           role:null,                                                  align:'start', playBg:C.ink,           playFg:C.paper },
    'teacher':  { bg:C.teacherBg,  fg:C.teacherFg, wave:C.teacherAccent, waveDim:'rgba(15,26,36,.22)',    accent:C.teacherAccent, role:{label:'TEACHER',  bg:C.teacherAccent, fg:C.paper},     align:'start', playBg:C.teacherAccent, playFg:C.paper },
    'cosmo':    { bg:C.cosmoBg,    fg:C.paper,     wave:C.lime,          waveDim:'rgba(222,251,80,.30)',  accent:C.lime,          role:{label:'SOCRAT',   bg:C.lime,           fg:C.ink},      align:'start', playBg:C.lime,          playFg:C.ink },
    'goodtalk': { bg:C.goodtalkBg, fg:C.plum,      wave:C.plum,          waveDim:'rgba(87,27,50,.20)',    accent:C.plum,          role:{label:'GOODTALK', bg:C.plum,           fg:C.paper},    align:'start', playBg:C.plum,          playFg:C.paper },
  }[voice];

  // deterministic waveform heights
  const heights = React.useMemo(() => {
    const out = [];
    let s = seed * 9301 + 49297;
    for (let i = 0; i < bars; i++) {
      s = (s * 9301 + 49297) % 233280;
      const env = Math.sin((i / (bars - 1)) * Math.PI) * 0.55 + 0.30;
      const rand = (s / 233280);
      out.push(Math.max(0.18, Math.min(1, env + (rand - 0.5) * 0.55)));
    }
    return out;
  }, [bars, seed]);

  const playedBars = Math.round(bars * progress);
  const mins = Math.floor(duration / 60);
  const secs = String(Math.floor(duration % 60)).padStart(2,'0');
  const elapsed = duration * progress;
  const elapsedStr = `${Math.floor(elapsed/60)}:${String(Math.floor(elapsed%60)).padStart(2,'0')}`;

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems: V.align==='end'?'flex-end':'flex-start', margin:'4px 0'}}>
      {sender && <div style={{font:`500 11px/1 ${FONT}`, color:C.n500, marginLeft:14, marginBottom:4}}>{sender}</div>}
      <div style={{
        maxWidth:'82%',
        background:V.bg, color:V.fg,
        padding:'10px 12px',
        borderRadius: V.align==='end' ? '18px 18px 6px 18px' : '18px 18px 18px 6px',
        border: voice==='kid' ? `1px solid ${C.n100}` : 'none',
        boxShadow: voice==='kid' ? '0 1px 2px rgba(15,26,36,.04)' : 'none',
        display:'flex', alignItems:'center', gap:10, minWidth:240,
      }}>
        <button onClick={onTogglePlay} style={{
          width:36, height:36, borderRadius:9999, border:0, cursor:'pointer',
          background:V.playBg, color:V.playFg,
          display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
        }}>
          <i data-lucide={playing ? 'pause' : 'play'} style={{width:16, height:16}}></i>
        </button>

        <div style={{flex:1, display:'flex', flexDirection:'column', gap:5, minWidth:0}}>
          {V.role && (
            <div style={{display:'flex', alignItems:'center', gap:6}}>
              <div style={{
                background:V.role.bg, color:V.role.fg,
                font:`600 9px/1 ${MONO}`, letterSpacing:'.1em',
                padding:'3px 6px', borderRadius:9999,
              }}>{V.role.label}</div>
              <div style={{font:`400 10px/1 ${MONO}`, color:V.fg, opacity:.55}}>voice</div>
            </div>
          )}
          <div style={{display:'flex', alignItems:'center', gap:2, height:28}}>
            {heights.map((h,i) => (
              <div key={i} style={{
                flex:1, height: `${Math.round(h*100)}%`,
                background: i < playedBars ? V.wave : V.waveDim,
                borderRadius:2, minWidth:2,
                transition:'background 140ms linear',
              }}/>
            ))}
          </div>
          <div style={{display:'flex', alignItems:'center', gap:8}}>
            <div style={{font:`500 11px/1 ${MONO}`, color:V.fg, opacity:.85}}>
              {playing ? elapsedStr : `${mins}:${secs}`}
            </div>
            {playing && (
              <div style={{
                width:6, height:6, borderRadius:9999, background:V.accent,
                animation:'cosmoPulse 1.4s ease-in-out infinite',
              }}/>
            )}
            {caption && <div style={{
              font:`400 11px/1.3 ${FONT}`, color:V.fg, opacity:.6,
              whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', minWidth:0,
            }}>“{caption}”</div>}
          </div>
        </div>
      </div>
      {time && <div style={{
        font:`400 11px/1 ${MONO}`, color:C.n400, marginTop:4,
        marginLeft: V.align==='end' ? 0 : 14,
        marginRight: V.align==='end' ? 14 : 0,
      }}>{time}</div>}
    </div>
  );
}

// ─────────────────────────── Voice recorder (composer) ───────────────────────────
// "Holding to record" state — replaces the composer mid-record.
function VoiceRecorder({ elapsed = 7, voice = 'kid-mine', onCancel, onSend }) {
  const accent =
    voice === 'cosmo'    ? C.lime :
    voice === 'teacher'  ? C.sky :
    voice === 'goodtalk' ? C.coral :
    C.coral;
  const fg = C.paper;
  const mins = Math.floor(elapsed / 60);
  const secs = String(Math.floor(elapsed % 60)).padStart(2,'0');
  const liveBars = 32;
  return (
    <div style={{
      display:'flex', alignItems:'center', gap:10, padding:'10px 12px 26px',
      background:C.paper, borderTop:`1px solid ${C.n100}`, boxSizing:'border-box',
    }}>
      <button onClick={onCancel} style={{
        width:40, height:40, borderRadius:12, background:C.n50, border:0, cursor:'pointer',
        display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:C.n600,
      }}><i data-lucide="x" style={{width:20, height:20}}></i></button>
      <div style={{
        flex:1, background:C.n50, borderRadius:14,
        display:'flex', alignItems:'center', gap:10, minHeight:40, padding:'8px 14px',
      }}>
        <div style={{
          width:8, height:8, borderRadius:9999, background:accent,
          animation:'cosmoPulse 1.2s ease-in-out infinite',
        }}/>
        <div style={{display:'flex', alignItems:'center', gap:2, flex:1, height:22}}>
          {Array.from({length:liveBars}).map((_, i) => {
            const phase = (i + Math.floor(elapsed * 6)) % liveBars;
            const h = 0.20 + Math.abs(Math.sin(phase * 0.5)) * 0.80;
            const live = i < (Math.floor(elapsed * 3) % liveBars);
            return <div key={i} style={{
              flex:1, height:`${Math.round(h * 100)}%`,
              background: live ? C.ink : C.n300,
              borderRadius:2, minWidth:2,
            }}/>;
          })}
        </div>
        <div style={{font:`500 12px/1 ${MONO}`, color:C.ink}}>{mins}:{secs}</div>
      </div>
      <button onClick={onSend} style={{
        width:40, height:40, borderRadius:12, border:0, cursor:'pointer',
        background:C.ink, color:C.paper,
        display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
      }}><i data-lucide="arrow-up" style={{width:20, height:20}}></i></button>
    </div>
  );
}

Object.assign(window, {
  C, FONT, MONO,
  ChatAppBar, CircleRow, Bubble, Composer,
  NudgeBanner, PauseBanner, CosmoBubble, TeacherBubble,
  EmojiPicker, VoiceMessage, VoiceRecorder,
  LoginScreen, CirclesScreen, ChatScreen,
});
