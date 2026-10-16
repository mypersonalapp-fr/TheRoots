import sys
from playwright.sync_api import sync_playwright
S=sys.argv[1] if len(sys.argv)>1 else "."
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":390,"height":844}); errs=[]
    pg.on("pageerror",lambda e:errs.append(str(e)))
    pg.goto("http://localhost:8000/apercu-a1.html?n=1&g=girl&i=0&t=light"); pg.wait_for_timeout(800)
    sit=pg.evaluate("""async()=>(await import('/js/data/situations-a1.js')).SITUATIONS_A1""")
    nd=ns=0
    for n in range(1,13):
        pg.goto(f"http://localhost:8000/apercu-a1.html?n={n}&g=girl&i=0&t=light"); pg.wait_for_timeout(600)
        pg.click("#lcStart"); pg.wait_for_timeout(150); pg.click(".lc-row[data-act=write]"); pg.wait_for_timeout(250)
        # dictée
        pg.click("[data-wr=dict]"); pg.wait_for_timeout(200); sents=[]
        while pg.locator("#wrIn").count():
            sent=pg.locator("[data-say]").first.get_attribute("data-say"); sents.append(sent)
            pg.fill("#wrIn","banana"); pg.click("#wrSend"); pg.wait_for_timeout(60)   # faux d'abord
            assert pg.locator("#wrNext").count()==0, ("faux accepté",n,sent)
            pg.fill("#wrIn",sent.lower().rstrip(".!?")); pg.click("#wrSend"); pg.wait_for_timeout(60)
            assert pg.locator("#wrNext").count()==1, ("juste refusé",n,sent)
            pg.click("#wrNext"); pg.wait_for_timeout(60); nd+=1
        pg.click("#wrEnd"); pg.wait_for_timeout(100)
        # situations
        pg.click("[data-wr=sit]"); pg.wait_for_timeout(200)
        for t in sit[str(n)]:
            pg.fill("#wrIn","banana banana"); pg.click("#wrSend"); pg.wait_for_timeout(60)
            assert pg.locator("#wrNext").count()==0, ("absurde accepté",n)
            pg.fill("#wrIn",t["model"]); pg.click("#wrSend"); pg.wait_for_timeout(60)
            assert pg.locator("#wrNext").count()==1, ("modèle refusé",n,t["model"])
            pg.click("#wrNext"); pg.wait_for_timeout(60); ns+=1
        pg.click("#wrEnd"); pg.wait_for_timeout(100)
        if pg.evaluate("document.documentElement.scrollWidth>innerWidth"): print("débordement",n)
        if n in (3,): print("exemples dictée A1.%d:"%n,sents)
    print("dictées:",nd,"situations:",ns,"erreurs JS:",errs[:3])
