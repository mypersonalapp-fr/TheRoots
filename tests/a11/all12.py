import sys
from playwright.sync_api import sync_playwright
S=sys.argv[1] if len(sys.argv)>1 else "./"
with sync_playwright() as p:
    b=p.chromium.launch()
    for n in ([int(x) for x in sys.argv[2].split(",")] if len(sys.argv)>2 else range(1,13)):
        pg=b.new_page(viewport={"width":390,"height":844}); errs=[]
        pg.on("pageerror",lambda e:errs.append("PE "+str(e)))
        pg.on("console",lambda m: errs.append(m.text) if m.type=="error" and "404" not in m.text else None)
        miss=[]; pg.on("response",lambda r: miss.append(r.url.split("/")[-1].split("?")[0]) if r.status>=400 else None)
        pg.goto(f"http://localhost:8000/apercu-a1.html?n={n}&g=girl&i=0&t=light"); pg.wait_for_timeout(1500)
        rows=[]
        try:
            pg.click("#lcStart",timeout=3000); pg.wait_for_timeout(300)
            acts=[e.get_attribute("data-act") for e in pg.locator(".lc-row[data-act]").all()]
            for a in acts:
                pg.goto(f"http://localhost:8000/apercu-a1.html?n={n}&g=girl&i=0&t=light"); pg.wait_for_timeout(700); pg.click("#lcStart"); pg.wait_for_timeout(200)
                pg.click(f".lc-row[data-act={a}]"); pg.wait_for_timeout(350)
                txt=pg.locator("body").inner_text()
                rows.append((a,len(txt)))
                if a=="city":
                    pg.click("[data-m='0']"); pg.wait_for_timeout(300); pg.screenshot(path=S+f"a1{n}-city.png")
                    pass
                if pg.evaluate("document.documentElement.scrollWidth>innerWidth"): errs.append("overflow in "+a)
            pg.screenshot(path=S+f"a1{n}.png")
        except Exception as e: errs.append("EXC "+str(e)[:160])
        ov=pg.evaluate("document.documentElement.scrollWidth>innerWidth")
        print(n,"acts",len(rows),"overflow",ov,"missing",sorted(set(miss)),"errs",errs[:3])
        pg.close()
