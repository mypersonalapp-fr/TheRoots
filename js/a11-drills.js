/* The Roots A1.1 — activités pratiques autonomes, branche de test */
(()=>{'use strict';
const KEY='roots_a11_drills_v1';
const units=[
{title:'Vocabulaire — Se présenter',help:'Choisis le sens correct de chaque expression.',items:[
['Nice to meet you.',['Enchanté(e).','À demain.','Je suis fatigué(e).'],0,'Nice to meet you = enchanté(e).'],
['surname',['prénom','nom de famille','nationalité'],1,'Surname ou last name = nom de famille.'],
['I live in Paris.',['Je viens de Paris.','J’habite à Paris.','Je travaille à Paris.'],1,'Live in = habiter à.'],
['I am from Portugal.',['Je viens du Portugal.','Je vais au Portugal.','Je parle portugais.'],0,'Be from = venir de.'],
['teacher',['médecin','enseignant','étudiant'],1,'Teacher = enseignant ; student = étudiant.'],
['brown eyes',['yeux marron','cheveux bruns','yeux bleus'],0,'Eyes = yeux ; hair = cheveux.'],
['How old are you?',['Quel est ton nom ?','Où habites-tu ?','Quel âge as-tu ?'],2,'How old = quel âge.'],
['Good evening',['Bonsoir','Bonjour (matin)','Bonne nuit'],0,'Good evening s’utilise en saluant le soir.']]},
{title:'Grammaire — Be, have, do',help:'Complète chaque phrase.',items:[
['She ___ from Spain.',['are','is','am'],1,'Avec she, on utilise is.'],
['They ___ British.',['is','are','am'],1,'Avec they, on utilise are.'],
['I ___ a brother.',['has','have','is'],1,'I have, she has.'],
['___ you live in London?',['Do','Does','Are'],0,'Do + you + base verbale.'],
['He ___ not have a car.',['do','does','is'],1,'He does not have / he doesn’t have.'],
['___ she a student?',['Do','Does','Is'],2,'Avec be : Is she a student?'],
['This is ___ mother.',['I','my','me'],1,'My est l’adjectif possessif.'],
['___ are my shoes.',['This','That','These'],2,'These désigne plusieurs objets proches.']]},
{title:'Lecture — Comprendre une identité',help:'Lis le texte, puis réponds sans regarder les solutions.',passage:'Hello! My name is Sofia. I am twenty-two years old. I am Spanish, but I live in Lyon, France. I am a student. I have a brother called Pablo. I have green eyes.',items:[
['How old is Sofia?',['20','22','12'],1,'Twenty-two = 22.'],
['Where does Sofia live?',['Lyon','Madrid','London'],0,'She lives in Lyon.'],
['What is her nationality?',['French','British','Spanish'],2,'She is Spanish.'],
['Who is Pablo?',['Her teacher','Her brother','Her father'],1,'She has a brother called Pablo.'],
['What colour are her eyes?',['Blue','Brown','Green'],2,'She has green eyes.']]},
{title:'Écoute — Comprendre sans lire',help:'Appuie sur Écouter, puis réponds. Tu peux réécouter.',audio:'Hello. My name is Daniel. I am thirty years old. I am Canadian. I live in Toronto. I am a doctor. I have brown eyes.',items:[
['What is his first name?',['David','Daniel','Samuel'],1,'His name is Daniel.'],
['How old is he?',['13','30','40'],1,'Thirty = 30.'],
['Where does he live?',['Toronto','London','Paris'],0,'He lives in Toronto.'],
['What is his job?',['Teacher','Student','Doctor'],2,'He is a doctor.'],
['What colour are his eyes?',['Blue','Green','Brown'],2,'He has brown eyes.']]},
{title:'Expression — Construire des phrases',help:'Sélectionne la phrase anglaise correcte.',items:[
['Je m’appelle Mia.',['My name is Mia.','I name Mia.','I am name Mia.'],0,'My name is…'],
['J’ai 19 ans.',['I have 19 years.','I am 19 years old.','I is 19.'],1,'En anglais, on utilise be pour l’âge.'],
['Je viens de France.',['I live France.','I am French from.','I am from France.'],2,'I am from + pays.'],
['Je ne suis pas médecin.',['I am not a doctor.','I do not a doctor.','I not doctor.'],0,'Négation de be : am not.'],
['Est-elle étudiante ?',['Does she a student?','Is she a student?','She is student?'],1,'Inversion de be : Is she…?'],
['C’est mon frère.',['This is my brother.','This is me brother.','This is I brother.'],0,'My + nom.']]}
];
let st={progress:{},history:[],unit:0,index:0,answers:{},finished:false};
try{const saved=JSON.parse(localStorage.getItem(KEY)||'{}');st={...st,...saved}}catch(e){}
const persist=()=>{try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}};
const esc=x=>String(x).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;':'&quot;'}[c]));
let root;
function speak(t){if(!('speechSynthesis'in window)){alert('Audio indisponible sur cet appareil.');return}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='en-GB';u.rate=.85;speechSynthesis.speak(u)}
function open(){root=document.getElementById('a11-drill-root');if(!root){root=document.createElement('main');root.id='a11-drill-root';document.body.appendChild(root)}document.getElementById('app').style.display='none';render()}
function close(){if(root)root.remove();document.getElementById('app').style.display='';window.scrollTo(0,0)}
function start(i){st.unit=i;st.index=0;st.answers={};st.finished=false;persist();render()}
function finish(){const unit=units[st.unit];const score=unit.items.reduce((n,q,i)=>n+(st.answers[i]===q[2]?1:0),0);const passed=score/unit.items.length>=.8;st.progress[st.unit]={score,total:unit.items.length,passed};st.history.push({unit:st.unit,score,total:unit.items.length,passed,date:new Date().toISOString()});st.finished=true;persist();render()}
function render(){
const u=units[st.unit];let h='<div class="panel"><button class="secondary" id="drill-close">‹ Retour au parcours</button><span class="pill">The Roots · A1.1</span><h1>Exercices interactifs</h1><p class="small">Réussite à 80 % minimum. En cas d’échec, recommence avec une nouvelle série et retravaille tes erreurs.</p></div>';
if(st.finished){const last=st.history[st.history.length-1];h+='<div class="panel"><h2>'+(last.passed?'🎉 Activité validée':'📘 Activité non validée')+'</h2><p class="result">'+last.score+'/'+last.total+'</p><p>'+(last.passed?'Bravo, tu peux continuer.':'Tu dois atteindre 80 %. Lis les corrections et recommence.')+'</p><h2>Correction</h2>'+u.items.map((q,i)=>'<div class="line">'+(st.answers[i]===q[2]?'✅':'❌')+' '+esc(q[0])+'<p><b>'+esc(q[1][q[2]])+'</b></p><p class="small">'+esc(q[3])+'</p></div>').join('')+'<button class="primary" id="drill-retry">Réessayer cette activité</button><button class="primary" id="drill-menu">Toutes les activités</button></div>'}
else if(st.index===-1){h+='<div class="panel"><h2>Choisis ton activité</h2>'+units.map((x,i)=>'<button class="option" data-unit="'+i+'">'+esc(x.title)+(st.progress[i]?' · '+st.progress[i].score+'/'+st.progress[i].total+(st.progress[i].passed?' ✓':' ↻'):'')+'</button>').join('')+'</div>'}
else{const q=u.items[st.index];h+='<div class="panel"><span class="pill">'+(st.index+1)+' / '+u.items.length+'</span><h2>'+esc(u.title)+'</h2><p>'+esc(u.help)+'</p><div class="progress"><div style="width:'+((st.index+1)*100/u.items.length)+'%"></div></div>'+(u.passage?'<p>'+esc(u.passage)+'</p>':'')+(u.audio?'<button class="secondary" id="drill-audio">▶ Écouter</button>':'')+'<h2>'+esc(q[0])+'</h2>'+q[1].map((v,i)=>'<button class="option '+(st.answers[st.index]===i?'selected':'')+'" data-answer="'+i+'">'+esc(v)+'</button>').join('')+'<nav><button class="secondary" id="drill-prev">Précédent</button><button class="primary" id="drill-next" '+(st.answers[st.index]===undefined?'disabled':'')+'>'+(st.index===u.items.length-1?'Corriger':'Suivant →')+'</button></nav></div>'}
root.innerHTML=h;
const bind=(id,fn)=>{const e=root.querySelector('#'+id);if(e)e.onclick=fn};
bind('drill-close',close);bind('drill-menu',()=>{st.index=-1;st.finished=false;render()});bind('drill-retry',()=>start(st.unit));bind('drill-audio',()=>speak(u.audio));
bind('drill-prev',()=>{st.index=Math.max(0,st.index-1);persist();render()});
bind('drill-next',()=>{if(st.answers[st.index]===undefined)return;if(st.index===u.items.length-1)finish();else{st.index++;persist();render()}});
root.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{st.answers[st.index]=Number(b.dataset.answer);persist();render()});
root.querySelectorAll('[data-unit]').forEach(b=>b.onclick=()=>start(Number(b.dataset.unit)));
}
window.openA11Drills=()=>{st.index=-1;st.finished=false;open()};
})();