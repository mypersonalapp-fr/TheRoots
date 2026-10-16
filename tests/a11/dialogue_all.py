import sys
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":390,"height":844}); errs=[]
    pg.on("pageerror",lambda e:errs.append(str(e)))
    pg.goto("http://localhost:8000/apercu-a1.html?n=1&g=girl&i=0&t=light"); pg.wait_for_timeout(800)
    data=pg.evaluate("""async()=>{const a=(await import('/js/data/dialogues-a1.js')).DIALOGUES_A1,b=(await import('/js/data/dialogues-a1-rest.js')).DIALOGUES_A1_REST;return Object.assign({},b,a);}""")
    tot=0
    for n in range(1,13):
        pg.goto(f"http://localhost:8000/apercu-a1.html?n={n}&g=girl&i=0&t=light"); pg.wait_for_timeout(600)
        pg.click("#lcStart"); pg.wait_for_timeout(150); pg.click(".lc-row[data-act=dialogue]"); pg.wait_for_timeout(250)
        for di,d in enumerate(data[str(n)]):
            pg.click(f"[data-dlg='{di}']"); pg.wait_for_timeout(200)
            for t in d["turns"]:
                pg.fill("#dlgIn",t["model"]); pg.click("#dlgSend"); pg.wait_for_timeout(80); tot+=1
            ok=pg.locator("#dlgEnd").count()==1
            ov=pg.evaluate("document.documentElement.scrollWidth>innerWidth")
            if not ok or ov: print("PROBLÈME",n,d["title"],ok,ov)
            pg.click("#dlgEnd"); pg.wait_for_timeout(120)
    print("répliques jouées:",tot,"| erreurs JS:",errs[:3])
