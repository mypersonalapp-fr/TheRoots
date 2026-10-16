from playwright.sync_api import sync_playwright
import json
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":390,"height":844}); errs=[]
    pg.on("pageerror",lambda e:errs.append(str(e)))
    pg.goto("http://localhost:8000/apercu-a1.html?n=exam&g=girl&i=0&t=light"); pg.wait_for_timeout(2500)
    bank=pg.evaluate("""async()=>{const m=await import('/js/data/lecons-a1.js');const B=await m.loadExamBundle();const out={};
      const add=q=>{out[q[0]+'|'+q[1].join('§')]=q[2]};
      B.testTexts.forEach(t=>t.q.forEach(q=>{out[t.text+'¤'+q[0]+'|'+q[1].join('§')]=q[2]})); B.testAudios.forEach(t=>t.q.forEach(q=>{out[t.script+'¤'+q[0]+'|'+q[1].join('§')]=q[2]})); B.testGrammar.forEach(q=>{out['¤'+q[0]+'|'+q[1].join('§')]=q[2]}); return out;}""")
    for step in range(6):
        for qb in pg.locator(".lc-qb").all():
            q=qb.locator(".lc-q").inner_text().split(". ",1)[1].strip()
            opts=[e.inner_text() for e in qb.locator(".lc-choice").all()]; ctx=(pg.locator(".lc-text").first.inner_text().strip() if pg.locator(".lc-text").count() else (pg.locator("[data-say]").first.get_attribute("data-say") if pg.locator("[data-say]").count() else "")); ans=bank.get(ctx+"¤"+q+"|"+"§".join(opts))
            if ans is None: print("question inconnue:",q); continue
            qb.locator(".lc-choice").nth(ans).click()
        if pg.locator("#lcTa").count(): pg.fill("#lcTa","My name is Ana and I am twenty. I live in Paris with my family. I like music and tea. I am going to school today.")
        for o in pg.locator("[data-o]").all(): o.check()
        pg.click("#lcNext"); pg.wait_for_timeout(250)
    print(pg.locator("h1").first.inner_text(),"|",pg.locator("table").inner_text().replace("\n"," | ")[:230])
    print("exam storage:",pg.evaluate("localStorage.getItem('the_roots_a1_exam_v1')")[:160])
    print("erreurs",errs[:3])
