import fs from "fs";
const out=[];
const len=x=>Array.isArray(x)?x.length:(x&&typeof x==="object"?Object.keys(x).length:0);
const qn=(a)=>{let n=0;const w=o=>{if(!o||typeof o!=="object")return;if(Array.isArray(o)){if(typeof o[0]==="string"&&Array.isArray(o[1])&&typeof o[2]==="number"){n++;return}o.forEach(w);return}for(const k in o)w(o[k])};w(a);return n};
const files=fs.readdirSync("js/data").filter(f=>/^lecon-a\d+-data\.js$/.test(f)).sort((a,b)=>parseInt(a.match(/\d+/)[0])-parseInt(b.match(/\d+/)[0]));
for(const f of files){
 const code=f.match(/lecon-(a\d+)-data/)[1].toUpperCase();
 try{
  const m=await import("/home/claude/theroots/js/data/"+f);
  const g=(p)=>m[`${p}_${code}`]??m[p]??m[p+"_PAGES"];
  const row={code, vocab:len(g("VOCAB")), gram:len(g("GRAMMAR")), read:len(g("READING")), listen:len(g("LISTENING")), ex:len(g("EXERCISES")), expr:len(g("EXPRESSION")), tT:len(g("TEST_TEXTS")), tA:len(g("TEST_AUDIOS")), tG:len(g("TEST_GRAMMAR")), mis:len(g("MISSIONS")), data:len(g("DATA")), exq:qn(g("EXERCISES"||"EXERCISE")),rq:qn(g("READING")),lq:qn(g("LISTENING")),tq:qn(g("TEST_TEXTS"))+qn(g("TEST_AUDIOS"))+qn(g("TEST_GRAMMAR"))};
  out.push(row);
 }catch(e){out.push({code,err:String(e).slice(0,80)})}
}
console.table(out);
