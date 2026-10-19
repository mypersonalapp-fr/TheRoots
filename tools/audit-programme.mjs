import fs from "fs";
const files=fs.readdirSync("js/data").filter(f=>/^lecon-a\d+-data\.js$/.test(f)).sort((a,b)=>parseInt(a.match(/\d+/)[0])-parseInt(b.match(/\d+/)[0]));
const t=x=>(Array.isArray(x)?x:[]).map(o=>o.title||o.who||o.name||"?");
for(const f of files){const code=f.match(/lecon-(a\d+)-data/)[1].toUpperCase();const m=await import("/home/claude/theroots/js/data/"+f);
 const g=p=>m[`${p}_${code}`]??m[p+"_PAGES"]??m[p];
 console.log("##",code,"\n G:",t(g("GRAMMAR")).join(" | "),"\n V:",t(g("VOCAB")).join(" | "),"\n X:",t(g("EXPRESSION")).join(" | "))}
