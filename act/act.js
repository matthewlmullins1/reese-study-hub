// Reese's ACT Prep app. Plain JS, no build step. Content lives in data-*.js (window.ACT_DATA).
// Question tuple format: [question, [4 choices], correctIndex, explanation]. Text inside ⟦ ⟧ renders underlined.
(function(){
const H=window.HUB,D=window.ACT_DATA,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const app=$('#app'),back=$('#back'),hdr=$('#hdr'),tmr=$('#timer');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fq=s=>esc(s).replace(/⟦(.*?)⟧/g,'<u>$1</u>').replace(/\n/g,'<br>');
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const now=()=>Date.now()+(window.__actSkew||0);
const LS={get(k,d){try{const v=JSON.parse(localStorage.getItem(H.key+':act:'+k));return v==null?d:v}catch(e){return d}},set(k,v){try{localStorage.setItem(H.key+':act:'+k,JSON.stringify(v))}catch(e){}}};
async function sha(s){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
const SEC={english:{name:'English',em:'✏️',min:35,n:50},math:{name:'Math',em:'➗',min:50,n:45},reading:{name:'Reading',em:'📖',min:40,n:36},science:{name:'Science (optional)',em:'🔬',min:40,n:40}};
const ORDER=['english','math','reading','science'];
// Approximate raw-percent -> 1–36 curves (our own rough estimate, NOT ACT's official conversion).
const CURVE={english:[[0,1],[.1,5],[.25,10],[.5,16],[.625,20],[.75,24],[.85,28],[.925,33],[1,36]],
 math:[[0,1],[.1,6],[.25,13],[.5,19],[.65,23],[.75,26],[.9,31],[.97,35],[1,36]],
 reading:[[0,1],[.1,6],[.25,11],[.5,18],[.65,22],[.75,25],[.9,31],[.97,35],[1,36]],
 science:[[0,1],[.15,9],[.3,15],[.5,21],[.65,25],[.75,28],[.9,33],[.97,35],[1,36]]};
function scale(sec,pct){const c=CURVE[sec];for(let i=1;i<c.length;i++){if(pct<=c[i][0]){const[a,b]=c[i-1],[x,y]=c[i];return Math.round(b+(y-b)*(pct-a)/(x-a))}}return 36}
const INDEX={};
function mk(a,sec,stim,gi){return{q:a[0],choices:a[1],answer:a[2],explain:a[3]||'',stim:stim||'',g:gi,sec}}
ORDER.forEach(sec=>{const d=D[sec];if(!d)return;
 (d.drills||[]).forEach(dr=>{const qs=[];if(dr.groups)dr.groups.forEach(g=>g.qs.forEach(q=>qs.push(mk(q,sec,g.stim))));else(dr.qs||[]).forEach(q=>qs.push(mk(q,sec)));
  qs.forEach((q,i)=>{q.id=sec[0]+'-'+dr.id+'-'+i;INDEX[q.id]=q});dr.all=qs});
 if(d.test){const all=[];d.test.groups.forEach((g,gi)=>g.qs.forEach(q=>all.push(mk(q,sec,'',gi))));all.forEach((q,i)=>{q.n=i+1;q.id=sec[0]+'-T-'+(i+1);INDEX[q.id]=q});d.test.all=all}});
const L1='ABCD',L2='FGHJ',let_=(n,k)=>(n%2?L1:L2)[k];
let stack=[],timer=null;
function stopTimer(){if(timer){clearInterval(timer);timer=null}tmr.hidden=true;tmr.className=''}
function go(fn,title){stopTimer();stack.push([fn,title]);render()}
function render(){stopTimer();const[fn,t]=stack[stack.length-1];hdr.textContent=t;back.hidden=false;window.scrollTo(0,0);fn()}
back.onclick=()=>{if(stack.length>1){stack.pop();render()}else location.href='../'};
function banner(){const o=D.official||[];return`<div class="card banner"><b>⚠️ Original practice, not official ACT material.</b> Everything here was written by Reese Study Bot in the style of the enhanced ACT (the version that launched in 2025). Score estimates are approximate. For real ACT questions, take ACT's free official practice tests: ${o.slice(0,2).map(l=>`<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.title)}</a>`).join(' · ')} · <a href="#" id="offl">all official links</a></div>`}
function wireBanner(){const a=$('#offl');if(a)a.onclick=e=>{e.preventDefault();go(official,'Official ACT Practice')}}
function lock(){hdr.textContent='ACT Prep';app.innerHTML=`<div class="card center"><div style="font-size:3rem">🔒</div><h2>Hi ${esc(H.name)}!</h2><p class="muted">Enter your study hub password to open ACT Prep.</p><input id="pw" type="password" autocomplete="current-password"><button class="btn" id="go">Unlock</button><p class="err" id="er"></p></div>`;
 const t=async()=>{if(await sha($('#pw').value)===H.hash){try{localStorage.setItem(H.key+':ok',JSON.stringify(H.hash))}catch(e){}start()}else $('#er').textContent='Not quite, try again.'};$('#go').onclick=t;$('#pw').onkeydown=e=>{if(e.key==='Enter')t()}}
function missed(){return LS.get('missed',{})}
function setMissed(id,on){const m=missed();if(on)m[id]=1;else delete m[id];LS.set('missed',m)}
function home(){const m=Object.keys(missed()).filter(id=>INDEX[id]),best=LS.get('best',{});
 app.innerHTML=banner()+`<p class="muted">Enhanced ACT · English, Math, Reading count toward your Composite. Science is optional.</p><div class="grid">`+
 `<div class="card tap folder" data-go="format"><div class="em">🧭</div><h3>Format & Strategy</h3><div class="muted">What changed in 2025, timing, scoring</div></div>`+
 ORDER.map(s=>{const d=D[s],b=best['test:'+s];const nd=(d.drills||[]).reduce((a,x)=>a+x.all.length,0);return`<div class="card tap folder" data-sec="${s}"><div class="em">${SEC[s].em}</div><h3>${SEC[s].name}</h3><div class="muted">${nd} drill Qs · ${(d.cards||[]).length} cards · full test</div><div class="muted">${b?'Best test est. ~'+b.scale:'Test not taken yet'}</div></div>`}).join('')+
 `<div class="card tap folder" data-go="review"><div class="em">🔁</div><h3>Review Missed</h3><div class="muted">${m.length} question${m.length===1?'':'s'} to redo</div></div>`+
 `<div class="card tap folder" data-go="progress"><div class="em">📈</div><h3>My Progress</h3><div class="muted">Best scores & estimate</div></div>`+
 `<div class="card tap folder" data-go="official"><div class="em">🔗</div><h3>Official Practice</h3><div class="muted">ACT's free real tests</div></div></div>`+
 `<p class="center"><a class="btn sec" href="../">‹ Back to Reese's Study Hub</a></p>`;
 wireBanner();
 $$('.folder[data-sec]').forEach(e=>e.onclick=()=>go(()=>section(e.dataset.sec,'guide'),SEC[e.dataset.sec].name));
 $$('.folder[data-go]').forEach(e=>e.onclick=()=>{const g=e.dataset.go;go({format,review,progress,official}[g],{format:'ACT Format & Strategy',review:'Review Missed',progress:'My Progress',official:'Official ACT Practice'}[g])})}
function secHTML(s){return`<div class="card"><h3>${esc(s.title)}</h3>${s.html||''}${s.bullets?`<ul>${s.bullets.map(b=>`<li>${fq(b)}</li>`).join('')}</ul>`:''}${(s.examples||[]).map(x=>`<details class="ex"><summary>🧩 Worked example: ${fq(x.q)}</summary><ol>${x.steps.map(t=>`<li>${fq(t)}</li>`).join('')}</ol></details>`).join('')}</div>`}
function format(){app.innerHTML=banner()+(D.format.sections||[]).map(secHTML).join('')+`<div class="card"><h3>Sources</h3><ul>${(D.format.sources||[]).map(l=>`<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.title)}</a></li>`).join('')}</ul></div>`;wireBanner()}
function official(){app.innerHTML=`<div class="card"><p>These are ACT's own free materials. They are the closest thing to the real test, so take at least one full official practice test before test day.</p><ul class="links">${(D.official||[]).map(l=>`<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.title)}</a><div class="muted">${esc(l.note||'')}</div></li>`).join('')}</ul></div>`}
function section(sec,tab){const d=D[sec];
 app.innerHTML=`<div class="tabs"><button data-t="guide">📖 Guide</button><button data-t="drills">✅ Drills</button><button data-t="cards">🃏 Cards</button><button data-t="test">⏱️ Full Test</button></div><div id="pane"></div>`;
 $$('.tabs button').forEach(b=>{b.classList.toggle('on',b.dataset.t===tab);b.onclick=()=>{stack[stack.length-1][0]=()=>section(sec,b.dataset.t);section(sec,b.dataset.t)}});
 const p=$('#pane');
 if(tab==='guide')p.innerHTML=(d.guide||[]).map(secHTML).join('');
 else if(tab==='drills'){const best=LS.get('best',{});p.innerHTML=`<p class="muted">Tap a drill. Every answer comes with an explanation.</p>`+(d.drills||[]).map(dr=>{const b=best['drill:'+sec+':'+dr.id];return`<div class="card tap drill" data-id="${esc(dr.id)}"><h3 style="margin:2px 0">${esc(dr.title)}</h3><div class="muted">${esc(dr.desc||'')}</div><span class="tag up">${dr.all.length} questions</span> ${b!=null?`<span class="tag past">Best ${b}%</span>`:''}</div>`}).join('');
  $$('.drill').forEach(e=>e.onclick=()=>{const dr=d.drills.find(x=>x.id===e.dataset.id);go(()=>quiz(dr.all,{key:'drill:'+sec+':'+dr.id,keepOrder:!!dr.groups}),dr.title)})}
 else if(tab==='cards')cards(d.cards||[],p);
 else testIntro(sec,p)}
function cards(deck,p){let i=0,fl=false;if(!deck.length){p.innerHTML='<p class="muted">No flashcards for this section.</p>';return}
 const draw=()=>{const f=deck[i];p.innerHTML=`<div class="card flash ${fl?'back':''}" id="fc">${fq(fl?f.back:f.front)}</div><p class="center muted">${i+1} / ${deck.length} · tap card to flip</p><div class="center"><button class="btn sec" id="pv">‹ Prev</button><button class="btn sec" id="sh">🔀 Shuffle</button><button class="btn sec" id="nx">Next ›</button></div>`;
 $('#fc').onclick=()=>{fl=!fl;draw()};$('#pv').onclick=()=>{i=(i-1+deck.length)%deck.length;fl=false;draw()};$('#nx').onclick=()=>{i=(i+1)%deck.length;fl=false;draw()};$('#sh').onclick=()=>{deck=shuffle(deck);i=0;fl=false;draw()}};draw()}
function orderChoices(q){const idx=q.choices.map((_,k)=>k);const fixedTop=idx.filter(k=>/^NO CHANGE/.test(q.choices[k])),fixedEnd=idx.filter(k=>/^DELETE/.test(q.choices[k]));
 if(q.choices.some(c=>/^(Where it is now|Yes,|No,|Before|After|Point|Both|Neither|I only|II only)/.test(c)))return idx;
 if(q.choices.every(c=>/^([−\-$]?\d|(less|fewer|greater|more) than|between|Site |Sentence |Group |Hour |Experiment )/i.test(c.trim())))return idx;
 return fixedTop.concat(shuffle(idx.filter(k=>!fixedTop.includes(k)&&!fixedEnd.includes(k))),fixedEnd)}
function quiz(list,o){let qs=o.keepOrder?list.slice():shuffle(list);if(o.limit)qs=qs.slice(0,o.limit);let i=0,score=0,wrong=[];
 const show=()=>{if(i>=qs.length){const pct=Math.round(score/qs.length*100);if(o.key){const b=LS.get('best',{});if(b[o.key]==null||pct>b[o.key]){b[o.key]=pct;LS.set('best',b)}}
   app.innerHTML=`<div class="card center"><div style="font-size:3rem">${pct>=90?'🏆':pct>=70?'🎉':'💪'}</div><h2>${score} / ${qs.length}</h2><p>${pct}%</p>${wrong.length?`<p class="muted">${wrong.length} added to Review Missed.</p>`:''}<button class="btn" id="again">Try Again</button>${wrong.length?'<button class="btn sec" id="redo">Redo the ones I missed</button>':''}</div>`;
   $('#again').onclick=()=>quiz(list,o);const r=$('#redo');if(r)r.onclick=()=>quiz(wrong,{keepOrder:true});return}
  const q=qs[i],ord=orderChoices(q);let locked=false;
  app.innerHTML=(q.stim?`<details class="stimbox" open><summary>Passage / data</summary><div class="stim">${q.stim}</div></details>`:'')+`<div class="card"><div class="muted">Question ${i+1} of ${qs.length} · Score ${score}</div><h3 class="qq">${fq(q.q)}</h3>${ord.map((k,j)=>`<button class="choice" data-k="${k}"><b>${'ABCD'[j]}.</b> ${fq(q.choices[k])}</button>`).join('')}<div id="fb"></div></div>`;
  $$('.choice').forEach(b=>b.onclick=()=>{if(locked)return;locked=true;const k=+b.dataset.k,ok=k===q.answer;if(ok){score++;if(o.review||o.key)setMissed(q.id,false)}else{wrong.push(q);setMissed(q.id,true)}
   $$('.choice').forEach(x=>{if(+x.dataset.k===q.answer)x.classList.add('right');else if(x===b)x.classList.add('wrong')});
   $('#fb').innerHTML=`<div class="fb"><b>${ok?'✅ Correct!':'❌ Not quite.'}</b> Answer: ${fq(q.choices[q.answer])}<div class="expl">${fq(q.explain)}</div></div><button class="btn" id="nq">${i+1<qs.length?'Next ›':'See score'}</button>`;
   $('#nq').onclick=()=>{i++;show()}})};show()}
function testIntro(sec,p){const t=D[sec].test,n=t.all.length,best=LS.get('best',{})['test:'+sec],hist=LS.get('hist:'+sec,[]);
 p.innerHTML=`<div class="card"><h3>${esc(t.title)}</h3><p><b>${n} questions · ${t.minutes} minutes</b> (about ${Math.round(t.minutes*60/n)} seconds per question), same count and time as the real enhanced ACT ${SEC[sec].name.replace(' (optional)','')} section.</p><ul>${(t.tips||[]).map(x=>`<li>${fq(x)}</li>`).join('')}<li>The timer counts down at the top. At 5:00 left it turns red. When it hits 0:00 the test submits itself.</li><li>Your score estimate is <b>approximate</b>, from a rough curve, not ACT's official conversion.</li></ul>
 ${best?`<p>Best so far: ${best.raw}/${n} · est. ~${best.scale}</p>`:''}${hist.length?`<p class="muted">Attempts: ${hist.map(h=>h.date+' ~'+h.scale).join(' · ')}</p>`:''}
 <button class="btn" id="st">⏱️ Start timed test</button><button class="btn sec" id="su">Practice untimed</button></div>`;
 $('#st').onclick=()=>go(()=>runTest(sec,true),SEC[sec].name+' Test');$('#su').onclick=()=>go(()=>runTest(sec,false),SEC[sec].name+' (untimed)')}
function passageHTML(g,curN){let s=g.text||'';s=s.replace(/\[\[(\d+)\|([^\]]*)\]\]/g,(m,n,t)=>t?`<span class="ul${+n===curN?' cur':''}" id="m${n}"><u>${t}</u><sup>${n}</sup></span>`:`<span class="box${+n===curN?' cur':''}" id="m${n}">${n}</span>`);
 return (g.title?`<h4>${g.title}</h4>`:'')+s.split(/\n\n+/).map(x=>/^\s*</.test(x)?x:`<p>${x}</p>`).join('')}
function runTest(sec,timed){const t=D[sec].test,all=t.all,N=all.length,ans={},flag={};let i=0,endAt=timed?now()+t.minutes*60000:0,startAt=now(),done=false;
 const left=()=>Math.max(0,Math.ceil((endAt-now())/1000));
 const tick=()=>{if(done||!timed)return;const s=left();tmr.textContent='⏱️ '+Math.floor(s/60)+':'+String(s%60).padStart(2,'0');tmr.className=s<=300?'warn':'';if(s<=0)finish(true)};
 if(timed){tmr.hidden=false;tick();timer=setInterval(tick,1000)}
 window.__actTick=tick;
 const draw=()=>{const q=all[i],g=t.groups[q.g];
  app.innerHTML=`<div class="tbar"><span>Q ${q.n} of ${N}</span><span>${Object.keys(ans).length} answered</span><button class="btn sec sm" id="map">Question map</button></div>`+
  (g.text?`<div class="passage" id="psg">${passageHTML(g,sec==='english'?q.n:0)}</div>`:'')+
  `<div class="card"><h3 class="qq"><span class="qn">${q.n}.</span> ${q.q?fq(q.q):'Choose the best version of the underlined portion.'}</h3>${q.choices.map((c,k)=>`<button class="choice${ans[q.n]===k?' sel':''}" data-k="${k}"><b>${let_(q.n,k)}.</b> ${fq(c)}</button>`).join('')}
  <div class="center"><button class="btn sec" id="pv">‹ Prev</button><button class="btn sec" id="fl">${flag[q.n]?'🚩 Flagged':'⚑ Flag'}</button><button class="btn sec" id="nx">Next ›</button></div><div class="center"><button class="btn" id="sub">Submit test</button></div><div id="conf"></div></div>`;
  const m=$('#m'+q.n);if(m&&m.scrollIntoView)try{m.scrollIntoView({block:'nearest'})}catch(e){}
  $$('.choice').forEach(b=>b.onclick=()=>{ans[q.n]=+b.dataset.k;draw()});
  $('#pv').onclick=()=>{if(i>0){i--;draw()}};$('#nx').onclick=()=>{if(i<N-1){i++;draw()}};$('#fl').onclick=()=>{flag[q.n]=!flag[q.n];draw()};
  $('#map').onclick=()=>{app.innerHTML=`<div class="card"><h3>Question map</h3><p class="muted">Green = answered · 🚩 = flagged</p><div class="qgrid">${all.map((x,k)=>`<button class="qcell${ans[x.n]!=null?' done':''}${flag[x.n]?' flg':''}" data-i="${k}">${x.n}${flag[x.n]?'🚩':''}</button>`).join('')}</div><button class="btn" id="bk">Back to question</button></div>`;$$('.qcell').forEach(b=>b.onclick=()=>{i=+b.dataset.i;draw()});$('#bk').onclick=draw};
  $('#sub').onclick=()=>{const un=N-Object.keys(ans).length;$('#conf').innerHTML=`<div class="fb">${un?`You have <b>${un}</b> unanswered. There is no penalty for guessing, so fill in every blank. `:''}Submit now?<br><button class="btn" id="yes">Yes, submit</button><button class="btn sec" id="no">Keep working</button></div>`;$('#yes').onclick=()=>finish(false);$('#no').onclick=()=>{$('#conf').innerHTML=''}}};
 function finish(timeUp){if(done)return;done=true;stopTimer();window.__actTick=null;const raw=all.filter(q=>ans[q.n]===q.answer).length,pct=raw/N,sc=scale(sec,pct),used=Math.round((now()-startAt)/60000);
  all.forEach(q=>setMissed(q.id,ans[q.n]!==q.answer));
  const b=LS.get('best',{});if(!b['test:'+sec]||raw>b['test:'+sec].raw){b['test:'+sec]={raw,scale:sc,n:N};LS.set('best',b)}
  const h=LS.get('hist:'+sec,[]);const d=new Date();h.push({date:(d.getMonth()+1)+'/'+d.getDate(),raw,scale:sc,timed});LS.set('hist:'+sec,h.slice(-10));
  const rev=(only)=>all.filter(q=>!only||ans[q.n]!==q.answer).map(q=>{const a=ans[q.n],ok=a===q.answer,g=t.groups[q.g];return`<div class="card rv ${ok?'ok':'no'}"><div class="muted">${ok?'✅':'❌'} Question ${q.n}${g.title?' · '+esc(g.title.replace(/<[^>]+>/g,'')):''}</div><h4 class="qq">${q.q?fq(q.q):'Underlined portion #'+q.n}</h4>${q.choices.map((c,k)=>`<div class="choice ${k===q.answer?'right':k===a?'wrong':''}"><b>${let_(q.n,k)}.</b> ${fq(c)}</div>`).join('')}<div class="fb">${a==null?'<b>Left blank.</b> ':''}<b>Answer: ${let_(q.n,q.answer)}.</b><div class="expl">${fq(q.explain)}</div></div>${g.text&&sec!=='math'?`<details><summary>Show passage</summary><div class="passage">${passageHTML(g,q.n)}</div></details>`:''}</div>`}).join('');
  hdr.textContent=SEC[sec].name+' Test · Results';
  app.innerHTML=`<div class="card center"><div style="font-size:2.6rem">${pct>=.8?'🏆':pct>=.6?'🎉':'💪'}</div>${timeUp?'<p><b>⏰ Time is up!</b></p>':''}<h2>${raw} / ${N} correct</h2><p class="big">Estimated ${SEC[sec].name.replace(' (optional)','')} score: ~${sc}</p><p class="muted">⚠️ Approximate estimate from a rough curve on original practice questions. It is not an official ACT score. ${timed?'Time used: about '+used+' min.':'Untimed attempt.'}</p><button class="btn sec" id="om">Show only missed</button><button class="btn sec" id="oa">Show all</button><button class="btn" id="rt">Retake</button></div><div id="rvw">${rev(false)}</div>`;
  $('#om').onclick=()=>{$('#rvw').innerHTML=rev(true)};$('#oa').onclick=()=>{$('#rvw').innerHTML=rev(false)};$('#rt').onclick=()=>{stack.pop();go(()=>runTest(sec,timed),hdr.textContent)}}
 window.__actFinish=()=>finish(false);window.__actAnswer=(n,k)=>{ans[n]=k};draw()}
function review(){const m=Object.keys(missed()).filter(id=>INDEX[id]),by={};m.forEach(id=>{const s=INDEX[id].sec;(by[s]=by[s]||[]).push(INDEX[id])});
 app.innerHTML=`<div class="card"><p>Every question you miss in a drill or full test lands here. Get it right here and it drops off the list.</p>${m.length?`<button class="btn" id="all">Redo all ${m.length}</button>`:'<p class="muted">Nothing to review yet. Nice!</p>'}</div>`+ORDER.filter(s=>by[s]).map(s=>`<div class="card tap rs" data-s="${s}"><h3 style="margin:2px 0">${SEC[s].em} ${SEC[s].name}</h3><div class="muted">${by[s].length} to redo</div></div>`).join('');
 const a=$('#all');if(a)a.onclick=()=>go(()=>quiz(m.map(id=>INDEX[id]),{review:true,limit:25}),'Review Missed');
 $$('.rs').forEach(e=>e.onclick=()=>go(()=>quiz(by[e.dataset.s],{review:true,limit:25}),'Review: '+SEC[e.dataset.s].name))}
function progress(){const b=LS.get('best',{}),est=s=>b['test:'+s]&&b['test:'+s].scale;const e=est('english'),m=est('math'),r=est('reading'),sci=est('science');
 const comp=e&&m&&r?Math.round((e+m+r)/3):null,stem=m&&sci?Math.round((m+sci)/2):null;
 app.innerHTML=`<div class="card center"><h3>Estimated Composite</h3><p class="big">${comp?'~'+comp:'—'}</p><p class="muted">${comp?'Average of your best English, Math, and Reading test estimates, rounded, the same way ACT computes the real Composite. ':'Take the English, Math, and Reading full tests to see an estimate. '}Approximate, not official.${stem?' STEM estimate (Math + Science): ~'+stem+'.':''}</p></div>`+
 `<div class="card"><h3>Full tests</h3><ul>${ORDER.map(s=>`<li>${SEC[s].name}: ${b['test:'+s]?b['test:'+s].raw+'/'+b['test:'+s].n+' · est. ~'+b['test:'+s].scale:'not taken'}</li>`).join('')}</ul></div>`+
 ORDER.map(s=>`<div class="card"><h3>${SEC[s].em} ${SEC[s].name} drills</h3><ul>${(D[s].drills||[]).map(dr=>`<li>${esc(dr.title)}: ${b['drill:'+s+':'+dr.id]!=null?'best '+b['drill:'+s+':'+dr.id]+'%':'not tried'}</li>`).join('')}</ul></div>`).join('')+
 `<div class="card center"><button class="btn sec" id="rs">Reset all ACT progress</button><div id="rc"></div></div>`;
 $('#rs').onclick=()=>{$('#rc').innerHTML='<p>This erases best scores and the missed list. Sure?</p><button class="btn" id="ry">Yes, reset</button>';$('#ry').onclick=()=>{['best','missed'].concat(ORDER.map(s=>'hist:'+s)).forEach(k=>LS.set(k,k==='best'||k==='missed'?{}:[]));progress()}}}
function start(){stack=[];go(home,"Reese's ACT Prep")}
window.__act={D,INDEX,scale,start,section,runTest,quiz,home,go};
let ok=null;try{ok=JSON.parse(localStorage.getItem(H.key+':ok'))}catch(e){}
if(ok===H.hash)start();else lock();
})();
