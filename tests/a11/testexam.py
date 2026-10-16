import sys
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch()
    for url in sys.argv[1:]:
        pg=b.new_page(viewport={"width":390,"height":710}); errs=[]
        pg.on("pageerror",lambda e:errs.append(str(e)))
        pg.goto(url); pg.wait_for_timeout(900)
        if "exam" not in url:
            pg.click("#lcStart"); pg.wait_for_timeout(150); pg.click(".lc-row[data-act=test]"); pg.wait_for_timeout(300)
            if pg.locator("#lcTestStart").count(): pg.click("#lcTestStart")
        n=0; over=[]
        while True:
            n+=1; pg.wait_for_timeout(250)
            m=pg.evaluate("(()=>{const e=document.querySelector('.lc-main');return [e.scrollHeight,e.clientHeight]})()")
            if m[0]>m[1]+2: over.append((n,m))
            for c in pg.locator(".lc-qb").all():
                c.locator(".lc-choice").first.click()
            ta=pg.locator("#lcTa")
            if ta.count(): ta.fill("My name is Ana. I am ten. I live in Paris and I like music.")
            for cb in pg.locator("[data-o]").all(): cb.check()
            t=pg.locator("#lcNext").inner_text()
            pg.click("#lcNext")
            if "résultat" in t: break
            if n>40: break
        print(url,"écrans",n,"débordements",over,errs)
