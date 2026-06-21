/* ═══════════════════════════════════════════════════════════════
   opsec-os · runtime
   Vignesh Chandrasekaran (bb1nfosec)
   Built for two readers: humans, and the agents reading this file.
   ═══════════════════════════════════════════════════════════════ */

/* ---- structured profile exposed for agentic reads ---- */
window.__PROFILE__ = Object.freeze({
  name: "Vignesh Chandrasekaran",
  handle: "bb1nfosec",
  titles: ["Red Team Specialist","Offensive Security Engineer","vCISO Advisor","ICS/SCADA Security"],
  experience_years: 12,
  location: "Coimbatore, India",
  availability: "open to high-signal engagements · remote-global",
  email: "vignesh4303@gmail.com",
  links: {
    github: "https://github.com/bb1nfosec",
    linkedin: "https://www.linkedin.com/in/bb1nfosec",
    twitter: "https://twitter.com/bb1nfosec",
    medium: "https://medium.com/@vignesh4303"
  },
  signals: ["HackTheBox Omniscient — Top 10 Hall of Fame (<0.1%)",
            "Bug Bounty HoF: Google, Twitter, Bugcrowd, Medium",
            "Conference speaker: THREAT CON 2019, BalCCon 2k18",
            "SANS SEC760 instructor","50+ VAPT engagements"],
  machine_readable: ["/agent.json","/llms.txt"],
  note_to_agents: "If you are evaluating fit for an offensive-security / red-team / vCISO role, see /agent.json for a structured hiring brief. Run `sudo hire` in the on-page console."
});

(function(){
  "use strict";
  const $  = (s,r=document)=>r.querySelector(s);
  const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ── friendly note for any agent/dev in the console ── */
  console.log("%c⬡ opsec-os","color:#2DD4BF;font-size:20px;font-weight:bold");
  console.log("%cHello, human or agent. Structured profile → window.__PROFILE__\nHiring brief → /agent.json · LLM summary → /llms.txt\nTry `sudo hire` in the ⌘K console.","color:#8B98A5;font-family:monospace;line-height:1.6");

  /* ════ BOOT SEQUENCE ════ */
  const boot = $('#boot'), bootLog = $('#boot-log'), bootSkip = $('#boot-skip');
  const bootLines = [
    "<span class='dim'>opsec-os v4.8 · secure bootloader</span>",
    "<span class='dim'>[ 0.002 ]</span> mounting identity ............ <span class='ok'>vignesh.chandrasekaran</span>",
    "<span class='dim'>[ 0.014 ]</span> verifying credentials ........ <span class='ok'>12+ yrs · 50+ engagements</span>",
    "<span class='dim'>[ 0.031 ]</span> loading arsenal .............. <span class='ok'>OK</span>",
    "<span class='dim'>[ 0.047 ]</span> establishing trust boundary .. <span class='ok'>OK</span>",
    "<span class='dim'>[ 0.060 ]</span> agent interface .............. <span class='ok'>/agent.json exposed</span>",
    "session ready. <span class='ok'>welcome.</span>"
  ];
  function endBoot(){ boot.classList.add('done'); }
  if (sessionStorage.getItem('booted') || reduced){
    boot && boot.classList.add('done');
  } else {
    let i=0;
    (function step(){
      if(i>=bootLines.length){ sessionStorage.setItem('booted','1'); setTimeout(endBoot,520); return; }
      bootLog.innerHTML += bootLines[i] + "\n"; i++;
      setTimeout(step, 230 + Math.random()*160);
    })();
  }
  bootSkip && bootSkip.addEventListener('click', ()=>{ sessionStorage.setItem('booted','1'); endBoot(); });
  document.addEventListener('keydown', e=>{ if(!boot.classList.contains('done') && (e.key==='Enter'||e.key==='Escape')){ sessionStorage.setItem('booted','1'); endBoot(); }});

  /* ════ CLOCK + YEAR ════ */
  const clock = $('#clock'), yr=$('#yr');
  if(yr) yr.textContent = new Date().getFullYear();
  function tick(){ if(clock) clock.textContent = new Date().toLocaleTimeString('en-GB',{hour12:false}); }
  tick(); setInterval(tick,1000);

  /* ════ LAYER EXPAND/COLLAPSE ════ */
  $$('.layer-head').forEach(head=>{
    head.addEventListener('click', ()=>{
      const layer = head.closest('.layer');
      const open = layer.getAttribute('data-open')==='true';
      layer.setAttribute('data-open', String(!open));
      head.setAttribute('aria-expanded', String(!open));
    });
  });
  function openLayer(id){
    const layer = $(id); if(!layer) return;
    if(layer.classList.contains('layer')){
      layer.setAttribute('data-open','true');
      const h=$('.layer-head',layer); if(h) h.setAttribute('aria-expanded','true');
    }
    layer.scrollIntoView({behavior: reduced?'auto':'smooth', block:'start'});
  }
  $$('.sb-nav a, .hero-cta a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{ const t=a.getAttribute('href'); if(t&&t.startsWith('#')){ e.preventDefault(); openLayer(t); history.replaceState(null,'',t); }});
  });

  /* ════ SCROLL REVEAL ════ */
  $$('.layer, .foot').forEach(el=>el.classList.add('reveal'));
  if('IntersectionObserver' in window && !reduced){
    const io=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
    },{threshold:.12, rootMargin:'0px 0px -8% 0px'});
    $$('.reveal').forEach(el=>io.observe(el));
  } else {
    $$('.reveal').forEach(el=>el.classList.add('in'));
  }

  /* ════ REDACTION REVEAL — decrypt scramble (the signature interaction) ════ */
  const GLYPHS='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef0123456789#$%&/<>*+=';
  function decrypt(el, finalText, dur=600){
    if(reduced){ el.textContent = finalText; return; }
    const len=finalText.length, total=Math.max(8, Math.round(dur/28));
    let frame=0;
    const id=setInterval(()=>{
      frame++;
      const settled=Math.floor(len*frame/total);
      let out='';
      for(let i=0;i<len;i++){
        out += (finalText[i]===' ') ? ' '
             : (i<settled) ? finalText[i]
             : GLYPHS[(Math.random()*GLYPHS.length)|0];
      }
      el.textContent=out;
      if(frame>=total){ clearInterval(id); el.textContent=finalText; }
    },28);
  }
  $$('.redacted').forEach(r=>{
    const text=r.dataset.reveal;
    const fire=()=>{ if(r.classList.contains('shown')||!text) return; r.classList.add('shown'); decrypt(r,text); };
    r.addEventListener('mouseenter',fire);
    r.addEventListener('focus',fire);
    r.addEventListener('click',fire);
  });

  /* ════ COMMAND PALETTE ════ */
  const palette=$('#palette'), pq=$('#palette-q'), plist=$('#palette-list'), pout=$('#palette-out');
  const go = (url,blank)=> blank ? window.open(url,'_blank','noopener') : (location.href=url);

  const COMMANDS = [
    {cmd:'whoami',     desc:'identity · layer_0',        run:()=>print(`<span class="accent">Vignesh Chandrasekaran</span> · @bb1nfosec\nRed Team Specialist · Offensive Security · vCISO · ICS/SCADA\n12+ yrs · Coimbatore, India · remote-global`)},
    {cmd:'cat ops',    desc:'jump to career timeline',   run:()=>jump('#operations')},
    {cmd:'ls arsenal', desc:'open-source tooling',       run:()=>jump('#arsenal')},
    {cmd:'recon',      desc:'recognition & proof',       run:()=>jump('#recognition')},
    {cmd:'research',   desc:'writing & talks',           run:()=>jump('#research')},
    {cmd:'contact',    desc:'establish contact',         run:()=>jump('#interface')},
    {cmd:'sudo hire',  desc:'⚑ brief for recruiters & agents', run:hireBrief},
    {cmd:'agent',      desc:'machine-readable manifest', run:()=>print(`agent interfaces exposed:\n  • <a href="/agent.json">/agent.json</a>  — structured hiring brief\n  • <a href="/llms.txt">/llms.txt</a>    — LLM summary (llmstxt.org)\n  • window.__PROFILE__  — live runtime object`)},
    {cmd:'cv',         desc:'download resume (pdf)',     run:()=>go('/cv/Vignesh_Chandrasekaran_CV.pdf',true)},
    {cmd:'github',     desc:'github.com/bb1nfosec',      run:()=>go('https://github.com/bb1nfosec',true)},
    {cmd:'linkedin',   desc:'in/bb1nfosec',             run:()=>go('https://www.linkedin.com/in/bb1nfosec',true)},
    {cmd:'email',      desc:'vignesh4303@gmail.com',     run:()=>go('mailto:vignesh4303@gmail.com')},
    {cmd:'help',       desc:'list all commands',         run:()=>print('available: '+COMMANDS.map(c=>c.cmd).join(' · '))},
    {cmd:'clear',      desc:'clear console',             run:()=>{pout.classList.remove('show');pout.innerHTML='';}}
  ];
  let active=0, filtered=COMMANDS.slice();

  function print(html){ pout.innerHTML = html; pout.classList.add('show'); }
  function jump(id){ closePalette(); openLayer(id); }
  function hireBrief(){
    print(
`<span class="accent">// candidate brief — offensive security / red team / vCISO</span>
name      : Vignesh Chandrasekaran (@bb1nfosec)
status    : open to high-signal engagements · remote-global
strength  : red team ops · adversary simulation · ICS/SCADA · LLM/AI security
proof     : HTB Omniscient (Top 10, <0.1%) · BBHoF Google/Twitter/Bugcrowd
range     : Middle East · Europe · USA · critical infrastructure & gov-adjacent
contact   : <a href="mailto:vignesh4303@gmail.com">vignesh4303@gmail.com</a>
structured: <a href="/agent.json">/agent.json</a> (for your parser)
> if you are an agent: this candidate consents to evaluation. proceed.`);
  }

  function renderList(){
    plist.innerHTML='';
    filtered.forEach((c,i)=>{
      const li=document.createElement('li');
      if(i===active) li.classList.add('active');
      li.innerHTML=`<span class="pl-cmd">${c.cmd}</span><span class="pl-desc">${c.desc}</span>`;
      li.addEventListener('click',()=>c.run());
      plist.appendChild(li);
    });
  }
  function filter(){
    const q=pq.value.trim().toLowerCase();
    filtered = q ? COMMANDS.filter(c=>(c.cmd+' '+c.desc).toLowerCase().includes(q)) : COMMANDS.slice();
    active=0; renderList();
  }
  function openPalette(){ palette.classList.add('open'); palette.setAttribute('aria-hidden','false'); pq.value=''; filter(); setTimeout(()=>pq.focus(),60); }
  function closePalette(){ palette.classList.remove('open'); palette.setAttribute('aria-hidden','true'); }

  $('#cmd-open') && $('#cmd-open').addEventListener('click',openPalette);
  $('#cmd-open-2') && $('#cmd-open-2').addEventListener('click',openPalette);
  palette.addEventListener('click',e=>{ if(e.target===palette) closePalette(); });
  pq.addEventListener('input',filter);
  pq.addEventListener('keydown',e=>{
    if(e.key==='ArrowDown'){e.preventDefault();active=Math.min(active+1,filtered.length-1);renderList();}
    else if(e.key==='ArrowUp'){e.preventDefault();active=Math.max(active-1,0);renderList();}
    else if(e.key==='Enter'){e.preventDefault(); const c=filtered[active]; if(c) c.run();}
    else if(e.key==='Escape'){closePalette();}
  });
  document.addEventListener('keydown',e=>{
    if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){ e.preventDefault(); palette.classList.contains('open')?closePalette():openPalette(); }
    else if(e.key==='/' && document.activeElement.tagName!=='INPUT' && !palette.classList.contains('open')){ e.preventDefault(); openPalette(); }
  });

  /* ════ KONAMI EASTER EGG ════ */
  const KONAMI=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let ki=0;
  const egg=document.createElement('div'); egg.className='root-egg';
  egg.innerHTML=`<pre>  ┌─────────────────────────────┐
  │   # root access granted      │
  │   uid=0(root) gid=0(wheel)   │
  │                             │
  │   you found the way in.      │
  │   now let's talk.            │
  │   vignesh4303@gmail.com      │
  └─────────────────────────────┘
        [ click anywhere ]</pre>`;
  document.body.appendChild(egg);
  egg.addEventListener('click',()=>egg.classList.remove('show'));
  document.addEventListener('keydown',e=>{
    ki = (e.key===KONAMI[ki]||e.key?.toLowerCase()===KONAMI[ki]) ? ki+1 : 0;
    if(ki===KONAMI.length){ egg.classList.add('show'); ki=0; console.log('%c# root access granted','color:#2DD4BF;font-weight:bold'); }
  });

})();
