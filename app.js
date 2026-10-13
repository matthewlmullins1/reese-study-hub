(function(){
const H=window.HUB,$=s=>document.querySelector(s),app=$('#app'),back=$('#back'),hdr=$('#hdr');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const today=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const fmt=d=>{const[y,m,dd]=d.split('-');return +m+'/'+ +dd+'/'+y};
const isUp=u=>u.testDate>=today();
const LS={get(k,d){try{return JSON.parse(localStorage.getItem(H.key+':'+k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(H.key+':'+k,JSON.stringify(v))}catch(e){}}};
async function sha(s){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
let stack=[];
function go(fn,title){stack.push([fn,title]);render()}
function render(){const[fn,t]=stack[stack.length-1];hdr.textContent=t;back.hidden=stack.length<2;window.scrollTo(0,0);fn()}
back.onclick=()=>{if(stack.length>1){stack.pop();render()}};
function lock(){hdr.textContent=H.name+"'s Study Hub";app.innerHTML=`<div class="card center"><div style="font-size:3rem">🔒</div><h2>Hi ${esc(H.name)}!</h2><p class="muted">Enter your password to start studying.</p><input id="pw" type="password" autocomplete="current-password"><button class="btn" id="go">Unlock</button><p class="err" id="er"></p></div>`;
 const tryIt=async()=>{if(await sha($('#pw').value)===H.hash){LS.set('ok',H.hash);start()}else $('#er').textContent='Not quite, try again.'};
 $('#go').onclick=tryIt;$('#pw').onkeydown=e=>{if(e.key==='Enter')tryIt()}}
function subjects(){const m={};(window.UNITS||[]).forEach(u=>{(m[u.subject]=m[u.subject]||[]).push(u)});return m}
const SE={ELA:'📚',Religion:'✝️',Science:'🔬',Math:'➗',History:'🏛️',Spanish:'🇪🇸'};
function home(){const m=subjects(),ks=Object.keys(m).sort();
 if(!ks.length){app.innerHTML=`<div class="card center"><div style="font-size:3rem">🌱</div><h2>No tests yet!</h2><p class="muted">New study units will show up here as soon as they're added. Check back soon, ${esc(H.name)}!</p></div>`;return}
 app.innerHTML=`<p class="muted">${esc(H.grade)} grade · pick a subject</p><div class="grid">`+ks.map(k=>{const us=m[k],nx=us.filter(isUp).sort((a,b)=>a.testDate<b.testDate?-1:1)[0];
 return`<div class="card tap folder" data-s="${esc(k)}"><div class="em">${SE[k]||'📁'}</div><h3>${esc(k)}</h3><div class="muted">${us.length} test${us.length>1?'s':''}</div><div class="muted">${nx?'Next: '+fmt(nx.testDate):'No upcoming test'}</div></div>`}).join('')+'</div>';
 app.querySelectorAll('.folder').forEach(e=>e.onclick=()=>go(()=>folder(e.dataset.s),e.dataset.s))}
function folder(s){const us=(window.UNITS||[]).filter(u=>u.subject===s).sort((a,b)=>a.testDate<b.testDate?1:-1);
 app.innerHTML=us.map(u=>`<div class="card tap unit" data-id="${esc(u.id)}"><div style="font-size:1.6rem">${esc(u.emoji||'📝')}</div><h3 style="margin:4px 0">${esc(u.title)}</h3><div class="muted">${esc(u.subtitle||'')}</div><span class="tag ${isUp(u)?'up':'past'}">${isUp(u)?'Upcoming':'Past test'} · ${fmt(u.testDate)}</span></div>`).join('');
 app.querySelectorAll('.unit').forEach(e=>e.onclick=()=>{const u=us.find(x=>x.id===e.dataset.id);go(()=>unit(u,'guide'),u.title)})}
function unit(u,mode){const c=(window.CONTENT||{})[u.id]||{sections:[],flashcards:[],quiz:[]};
 app.innerHTML=`<div class="muted">${esc(u.subtitle||'')}</div><div class="tabs"><button data-m="guide">📖 Guide</button><button data-m="cards">🃏 Cards</button><button data-m="quiz">✅ Quiz</button></div><div id="pane"></div>`;
 app.querySelectorAll('.tabs button').forEach(b=>{b.classList.toggle('on',b.dataset.m===mode);b.onclick=()=>unit(u,b.dataset.m)});
 const p=$('#pane');({guide,cards,quiz})[mode](u,c,p)}
function guide(u,c,p){p.innerHTML=(c.sections||[]).map(s=>`<div class="card"><h3>${esc(s.title)}</h3><ul>${(s.bullets||[]).map(b=>`<li>${esc(b)}</li>`).join('')}${(s.highlight||[]).map(b=>`<li class="hl"><span class="star">★ Likely on test:</span> ${esc(b)}</li>`).join('')}</ul></div>`).join('')||'<p class="muted">No study guide yet.</p>'}
function cards(u,c,p){let deck=(c.flashcards||[]).slice(),i=0,fl=false;if(!deck.length){p.innerHTML='<p class="muted">No flashcards yet.</p>';return}
 const draw=()=>{const f=deck[i];p.innerHTML=`<div class="card flash ${fl?'back':''}" id="fc">${esc(fl?f.back:f.front)}</div><p class="center muted">${i+1} / ${deck.length} · tap card to flip</p><div class="center"><button class="btn sec" id="pv">‹ Prev</button><button class="btn sec" id="sh">🔀 Shuffle</button><button class="btn sec" id="nx">Next ›</button></div>`;
 $('#fc').onclick=()=>{fl=!fl;draw()};$('#pv').onclick=()=>{i=(i-1+deck.length)%deck.length;fl=false;draw()};$('#nx').onclick=()=>{i=(i+1)%deck.length;fl=false;draw()};$('#sh').onclick=()=>{deck=shuffle(deck);i=0;fl=false;draw()}};draw()}
function drawSet(u,pool,n){n=n||15;const seen=LS.get('seen:'+u.id,{}),groups={};
 pool.forEach((q,ix)=>{const k=q.sourceId??('q'+ix);(groups[k]=groups[k]||[]).push(ix)});
 const pick=Object.keys(groups).map(k=>{const vs=shuffle(groups[k]).sort((a,b)=>(seen[a]||0)-(seen[b]||0));return vs[0]});
 const chosen=shuffle(pick).sort((a,b)=>(seen[a]||0)-(seen[b]||0)).slice(0,n);
 const now=Date.now();chosen.forEach(ix=>seen[ix]=now);LS.set('seen:'+u.id,seen);
 return shuffle(chosen).map(ix=>{const q=pool[ix],ans=typeof q.answer==='number'?q.choices[q.answer]:q.answer;return{q:q.q,choices:shuffle(q.choices),ans,explain:q.explain||''}})}
function quiz(u,c,p){const pool=c.quiz||[];if(!pool.length){p.innerHTML='<p class="muted">No quiz yet.</p>';return}
 const set=drawSet(u,pool);let i=0,score=0;
 const show=()=>{if(i>=set.length){const pct=Math.round(score/set.length*100);p.innerHTML=`<div class="card center"><div style="font-size:3rem">${pct>=90?'🏆':pct>=70?'🎉':'💪'}</div><h2>${score} / ${set.length}</h2><p>${pct}%</p><button class="btn" id="again">Try Again</button></div>`;$('#again').onclick=()=>quiz(u,c,p);return}
 const q=set[i];p.innerHTML=`<div class="card"><div class="muted">Question ${i+1} of ${set.length} · Score ${score}</div><h3>${esc(q.q)}</h3>${q.choices.map((ch,k)=>`<button class="choice" data-k="${k}">${esc(ch)}</button>`).join('')}<div id="fb"></div></div>`;
 p.querySelectorAll('.choice').forEach(b=>b.onclick=()=>{if(p.dataset.lock==='1')return;p.dataset.lock='1';const pickd=q.choices[+b.dataset.k],ok=pickd===q.ans;if(ok)score++;
  p.querySelectorAll('.choice').forEach(x=>{const t=q.choices[+x.dataset.k];if(t===q.ans)x.classList.add('right');else if(x===b)x.classList.add('wrong')});
  $('#fb').innerHTML=`<div class="fb"><b>${ok?'✅ Correct!':'❌ Not quite.'}</b> Answer: ${esc(q.ans)}<br>${esc(q.explain)}</div><button class="btn" id="nq">${i+1<set.length?'Next ›':'See score'}</button>`;
  $('#nq').onclick=()=>{p.dataset.lock='';i++;show()}})};p.dataset.lock='';show()}
function start(){stack=[];go(home,H.name+"'s Study Hub")}
window.__hub={drawSet,shuffle,home,folder,unit,start};
if(LS.get('ok','')===H.hash)start();else lock();
})();
