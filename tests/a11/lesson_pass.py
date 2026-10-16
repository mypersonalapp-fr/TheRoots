import sys
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(); res=[]
    for n in range(1,13):
        pg=b.new_page(viewport={"width":390,"height":844}); errs=[]
        pg.on("pageerror",lambda e:errs.append(str(e)))
        pg.goto(f"http://localhost:8000/apercu-a1.html?n={n}&g=girl&i=0&t=light"); pg.wait_for_timeout(900)
        bank=pg.evaluate(f"""async()=>{{const m=await import('/js/data/lecons-a1.js');const B=await m.loadBundle({n});const out={{}};
          const add=q=>{{out[q[0]+'|'+q[1].join('§')]=q[2]}};
          B.testTexts.forEach(t=>t.q.forEach(q=>{{out[t.text+'¤'+q[0]+'|'+q[1].join('§')]=q[2]}})); B.testAudios.forEach(t=>t.q.forEach(q=>{{out[t.script+'¤'+q[0]+'|'+q[1].join('§')]=q[2]}})); B.testGrammar.forEach(q=>{{out['¤'+q[0]+'|'+q[1].join('§')]=q[2]}}); return out;}}""")
        pg.click("#lcStart"); pg.wait_for_timeout(150); pg.click(".lc-row[data-act=test]"); pg.wait_for_timeout(300)
        unknown=0
        for step in range(6):
            for qb in pg.locator(".lc-qb").all():
                q=qb.locator(".lc-q").inner_text().split(". ",1)[1].strip(); opts=[e.inner_text() for e in qb.locator(".lc-choice").all()]; ctx=(pg.locator(".lc-text").first.inner_text().strip() if pg.locator(".lc-text").count() else (pg.locator("[data-say]").first.get_attribute("data-say") if pg.locator("[data-say]").count() else "")); ans=bank.get(ctx+"¤"+q+"|"+"§".join(opts))
                if ans is None: unknown+=1; continue
                qb.locator(".lc-choice").nth(ans).click()
            if pg.locator("#lcTa").count(): pg.fill("#lcTa","My name is Ana and I am twenty. I live in Paris with my family. I like music and tea. I am going to school today.")
            for o in pg.locator("[data-o]").all(): o.check()
            if pg.locator("#lcNext").count(): pg.click("#lcNext"); pg.wait_for_timeout(200)
        h=pg.locator("h1").first.inner_text(); tot=pg.locator("table").inner_text().replace("\n"," ")[-12:] if pg.locator("table").count() else "?"
        res.append((n,h,tot.strip(),unknown,errs[:1]))
        pg.close()
    for r in res: print(*r)
