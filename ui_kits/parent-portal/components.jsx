// Connecta parent portal — calm dashboard for guardians.
const PC = {
  ink:'#0F1A24', paper:'#FFFFFF', n50:'#F7F8F9', n100:'#EEF1F3', n200:'#DDE2E7',
  n300:'#C3CBD3', n400:'#98A2AD', n500:'#6B7682', n600:'#4D5762', n700:'#343C46',
  coral:'#F35F49', lime:'#DEFB50', sky:'#BAE6FD', plum:'#571B32', olive:'#424F1A',
  pink:'#FBE1FD', tintOlive:'#EDF1DA',
  paleLime:'#ECFDA8', alertBg:'#FDEAE5', alertFg:'#571B32',
  nudgeBg:'#FBE1FD', nudgeFg:'#571B32', pauseBg:'#EEF1F3', pauseFg:'#0F1A24',
};
const PFONT='"DM Sans", system-ui, sans-serif';
const PMONO='"DM Sans", system-ui, sans-serif';

function PSidebar({ active, onNav }) {
  const items = [
    {k:'home',  i:'home',     l:'Overview'},
    {k:'kids',  i:'users',    l:'Children'},
    {k:'alerts',i:'shield-alert', l:'Alerts'},
    {k:'rules', i:'sliders-horizontal', l:'Rules'},
    {k:'school',i:'school',   l:'School'},
    {k:'priv',  i:'lock',     l:'Privacy'},
  ];
  return (
    <aside style={{
      width:240, flexShrink:0, background:PC.paper, borderRight:`1px solid ${PC.n200}`,
      padding:'24px 16px', display:'flex', flexDirection:'column', gap:24,
    }}>
      <div style={{display:'flex', alignItems:'center', gap:10, padding:'0 8px'}}>
        <img src="../../assets/glyph-nn-coral.svg" style={{width:28, height:28}}/>
        <img src="../../assets/logo-wordmark-black.svg" style={{height:20}}/>
      </div>
      <nav style={{display:'flex', flexDirection:'column', gap:2}}>
        {items.map(it=>{
          const sel = it.k===active;
          return (
            <button key={it.k} onClick={()=>onNav?.(it.k)} style={{
              display:'flex', alignItems:'center', gap:12, padding:'10px 12px',
              border:0, background: sel ? PC.n100 : 'transparent',
              color: sel ? PC.ink : PC.n600,
              borderRadius:10, cursor:'pointer', textAlign:'left',
              font:`${sel?600:500} 14px/1 ${PFONT}`,
            }}>
              <i data-lucide={it.i} style={{width:18, height:18}}></i>
              {it.l}
            </button>
          );
        })}
      </nav>
      <div style={{marginTop:'auto', padding:12, background:PC.n50, borderRadius:12}}>
        <div style={{font:`400 11px/1 ${PMONO}`, letterSpacing:'.08em', textTransform:'uppercase', color:PC.n500, marginBottom:6}}>EU residency</div>
        <div style={{font:`500 12px/1.4 ${PFONT}`, color:PC.ink}}>Your data lives on EU servers. We don't read messages.</div>
      </div>
    </aside>
  );
}

function PStatTile({ label, value, sub, accent }) {
  return (
    <div style={{
      background:PC.paper, border:`1px solid ${PC.n200}`, borderRadius:16, padding:20,
      display:'flex', flexDirection:'column', gap:6, minWidth:0,
    }}>
      <div style={{font:`400 11px/1 ${PMONO}`, letterSpacing:'.08em', textTransform:'uppercase', color:PC.n500}}>{label}</div>
      <div style={{font:`700 32px/1.05 ${PFONT}`, letterSpacing:'-0.02em', color: accent||PC.ink}}>{value}</div>
      <div style={{font:`400 13px/1.4 ${PFONT}`, color:PC.n600}}>{sub}</div>
    </div>
  );
}

function PAlertCard({ kind='alert', title, body, time, child }) {
  const cfg = {
    alert:{bg:PC.alertBg, fg:PC.alertFg, badge:'Alert', accent:PC.coral},
    nudge:{bg:PC.nudgeBg, fg:PC.nudgeFg, badge:'Coached', accent:PC.plum},
    learn:{bg:PC.tintOlive, fg:PC.olive, badge:'Homework', accent:PC.olive},
    pause:{bg:PC.pauseBg, fg:PC.pauseFg, badge:'Cooldown', accent:PC.n500},
  }[kind];
  return (
    <article style={{background:cfg.bg, borderRadius:16, padding:18, display:'flex', flexDirection:'column', gap:10}}>
      <div style={{display:'flex', alignItems:'center', gap:10}}>
        <span style={{
          font:`600 10px/1 ${PMONO}`, letterSpacing:'.08em', textTransform:'uppercase',
          background:cfg.fg, color:cfg.bg, padding:'4px 8px', borderRadius:9999,
        }}>{cfg.badge}</span>
        <span style={{font:`500 12px/1 ${PFONT}`, color:cfg.fg, opacity:.85}}>{child}</span>
        <span style={{font:`400 11px/1 ${PMONO}`, color:cfg.fg, opacity:.7, marginLeft:'auto'}}>{time}</span>
      </div>
      <div style={{font:`700 17px/1.25 ${PFONT}`, color:cfg.fg, letterSpacing:'-0.01em'}}>{title}</div>
      <div style={{font:`400 14px/1.5 ${PFONT}`, color:cfg.fg, opacity:.9}}>{body}</div>
      {kind==='alert' && (
        <div style={{display:'flex', gap:8, marginTop:4}}>
          <button style={{background:PC.ink, color:PC.paper, border:0, borderRadius:10, padding:'8px 14px', font:`600 13px/1 ${PFONT}`, cursor:'pointer'}}>Open guidance</button>
          <button style={{background:'transparent', color:cfg.fg, border:`1px solid ${cfg.fg}`, borderRadius:10, padding:'8px 14px', font:`600 13px/1 ${PFONT}`, cursor:'pointer'}}>Mark reviewed</button>
        </div>
      )}
    </article>
  );
}

function PChildCard({ name, age, circles, status }) {
  return (
    <div style={{background:PC.paper, border:`1px solid ${PC.n200}`, borderRadius:16, padding:18, display:'flex', alignItems:'center', gap:14}}>
      <div style={{
        width:48, height:48, borderRadius:14, background:PC.sky, color:PC.ink,
        display:'flex', alignItems:'center', justifyContent:'center',
        font:`700 18px/1 ${PFONT}`, flexShrink:0,
      }}>{name.slice(0,1)}</div>
      <div style={{flex:1, minWidth:0}}>
        <div style={{font:`600 16px/1.2 ${PFONT}`, color:PC.ink}}>{name} <span style={{color:PC.n500, fontWeight:400}}>· {age}</span></div>
        <div style={{font:`400 13px/1.3 ${PFONT}`, color:PC.n600, marginTop:2}}>{circles} circles · {status}</div>
      </div>
      <button style={{background:PC.n50, color:PC.ink, border:0, borderRadius:10, padding:'8px 14px', font:`600 13px/1 ${PFONT}`, cursor:'pointer'}}>Manage</button>
    </div>
  );
}

function PHero() {
  return (
    <div style={{
      background:PC.ink, color:'#fff', borderRadius:20, padding:'28px 32px',
      display:'flex', alignItems:'center', gap:24,
    }}>
      <div style={{flex:1}}>
        <div style={{font:`400 11px/1 ${PMONO}`, letterSpacing:'.08em', textTransform:'uppercase', color:PC.lime, marginBottom:10}}>this week</div>
        <div style={{font:`700 28px/1.15 ${PFONT}`, letterSpacing:'-0.02em', marginBottom:8}}>Nothing to flag. That's the goal.</div>
        <div style={{font:`400 14px/1.5 ${PFONT}`, opacity:.8, maxWidth:520}}>We notify you only when there's real risk. This week, GoodTalk coached 6 messages before they were sent — you didn't need to see any of them.</div>
      </div>
      <img src="../../assets/app-icon-lime.svg" style={{width:88, height:88, borderRadius:18, flexShrink:0}}/>
    </div>
  );
}

function POverview() {
  return (
    <div style={{flex:1, padding:32, background:PC.n50}}>
      <header style={{marginBottom:24}}>
        <div style={{font:`400 11px/1 ${PMONO}`, letterSpacing:'.08em', textTransform:'uppercase', color:PC.n500, marginBottom:8}}>parent portal</div>
        <h1 style={{font:`700 32px/1.1 ${PFONT}`, letterSpacing:'-0.025em', color:PC.ink, margin:0}}>Hi Anne.</h1>
      </header>
      <PHero/>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:14, marginTop:18}}>
        <PStatTile label="High-signal alerts" value="0" sub="this week" accent={PC.olive}/>
        <PStatTile label="Coached pre-send" value="6" sub="GoodTalk nudges accepted" />
        <PStatTile label="Cooldowns" value="1" sub="2 min · Class 7B" />
      </div>
      <section style={{marginTop:32}}>
        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:12}}>
          <h2 style={{font:`600 20px/1.2 ${PFONT}`, color:PC.ink, margin:0, letterSpacing:'-0.01em'}}>Recent activity</h2>
          <span style={{font:`500 13px/1 ${PFONT}`, color:PC.n600}}>High-signal alerts only</span>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
          <PAlertCard kind="learn" child="Toni, 11" title="Toni finished a maths set with Socratic." body="Worked through 8 exercises on fractions — Socratic asked the questions, never gave the answer." time="Wed 17:20"/>
          <PAlertCard kind="nudge" child="Mia, 13" title="A message was rewritten before sending." body="Mia chose 'Try a rewrite' on a heated reply in Class 7B. We don't share what was written." time="Tue 14:32"/>
          <PAlertCard kind="pause" child="Mia, 13" title="A 2-minute cooldown happened." body="Same rule for the whole group — pace was rising fast in Football." time="Mon 19:04"/>
        </div>
      </section>
      <section style={{marginTop:32}}>
        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:12}}>
          <h2 style={{font:`600 20px/1.2 ${PFONT}`, color:PC.ink, margin:0, letterSpacing:'-0.01em'}}>Children</h2>
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:10}}>
          <PChildCard name="Mia" age="13" circles={5} status="active now"/>
          <PChildCard name="Tom" age="9" circles={3} status="quiet today"/>
        </div>
      </section>
    </div>
  );
}

function PMStat({ v, l, accent }) {
  return (
    <div style={{background:'#fff', border:`1px solid ${PC.n200}`, borderRadius:12, padding:'10px 6px', textAlign:'center'}}>
      <div style={{font:`700 22px/1 ${PFONT}`, color:accent||PC.ink}}>{v}</div>
      <div style={{font:`500 9px/1.2 ${PMONO}`, letterSpacing:'.05em', textTransform:'uppercase', color:PC.n500, marginTop:4}}>{l}</div>
    </div>
  );
}

function PMobile() {
  const tabs = [
    {i:'home', l:'Home', sel:true},{i:'users', l:'Kids'},{i:'shield-alert', l:'Alerts'},
    {i:'sliders-horizontal', l:'Rules'},{i:'lock', l:'Privacy'},
  ];
  return (
    <div style={{width:360, background:'#fff', borderRadius:38, border:`1px solid ${PC.n200}`, boxShadow:'0 24px 60px rgba(15,26,36,.18)', overflow:'hidden', display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 24px 6px', font:`600 13px/1 ${PMONO}`, color:PC.ink}}>
        <span>9:41</span>
        <span style={{display:'flex', gap:5}}>{[0,1,2].map(i=><i key={i} style={{width:5, height:5, borderRadius:9999, background:PC.n400, display:'block'}}/>)}</span>
      </div>
      <div style={{padding:'8px 18px 14px', display:'flex', alignItems:'center', gap:10, borderBottom:`1px solid ${PC.n100}`}}>
        <img src="../../assets/glyph-nn-coral.svg" style={{width:24, height:24}}/>
        <div style={{flex:1}}>
          <div style={{font:`400 10px/1 ${PMONO}`, letterSpacing:'.08em', textTransform:'uppercase', color:PC.n500}}>parent portal</div>
          <div style={{font:`700 18px/1.1 ${PFONT}`, color:PC.ink, marginTop:2}}>Hi Anne.</div>
        </div>
      </div>
      <div style={{flex:1, overflowY:'auto', padding:16, display:'flex', flexDirection:'column', gap:14, background:PC.n50, maxHeight:560}}>
        <div style={{background:PC.ink, color:'#fff', borderRadius:18, padding:18, display:'flex', gap:12, alignItems:'center'}}>
          <div style={{flex:1}}>
            <div style={{font:`400 10px/1 ${PMONO}`, letterSpacing:'.08em', textTransform:'uppercase', color:PC.lime, marginBottom:6}}>this week</div>
            <div style={{font:`700 19px/1.2 ${PFONT}`, letterSpacing:'-.01em'}}>Nothing to flag. That's the goal.</div>
          </div>
          <img src="../../assets/app-icon-lime.svg" style={{width:54, height:54, borderRadius:14, flexShrink:0}}/>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8}}>
          <PMStat v="0" l="alerts" accent={PC.olive}/>
          <PMStat v="6" l="coached"/>
          <PMStat v="1" l="cooldowns"/>
        </div>
        <div style={{font:`600 14px/1 ${PFONT}`, color:PC.ink, marginTop:2}}>Recent activity</div>
        <PAlertCard kind="learn" child="Toni, 11" title="Toni finished a maths set with Socratic." body="8 exercises on fractions — Socratic asked, never answered." time="Wed 17:20"/>
        <PAlertCard kind="nudge" child="Mia, 13" title="A message was rewritten before sending." body="Mia chose 'Try a rewrite' on a heated reply. We don't share what was written." time="Tue 14:32"/>
        <PAlertCard kind="pause" child="Mia, 13" title="A 2-minute cooldown happened." body="Same rule for the whole group." time="Mon 19:04"/>
        <div style={{font:`600 14px/1 ${PFONT}`, color:PC.ink, marginTop:2}}>Children</div>
        <PChildCard name="Mia" age="13" circles={5} status="active now"/>
        <PChildCard name="Tom" age="9" circles={3} status="quiet today"/>
      </div>
      <div style={{display:'flex', justifyContent:'space-around', padding:'10px 8px 16px', borderTop:`1px solid ${PC.n100}`, background:'#fff'}}>
        {tabs.map(t=>(
          <div key={t.l} style={{display:'flex', flexDirection:'column', alignItems:'center', gap:3, color:t.sel?PC.ink:PC.n400}}>
            <i data-lucide={t.i} style={{width:20, height:20}}></i>
            <span style={{font:`${t.sel?600:500} 9px/1 ${PFONT}`}}>{t.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { PC, PFONT, PMONO, PSidebar, PStatTile, PAlertCard, PChildCard, PHero, POverview, PMobile, PMStat });
