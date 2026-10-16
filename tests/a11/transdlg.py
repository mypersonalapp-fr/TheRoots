import sys
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch()
    for url in sys.argv[1:]:
        pg=b.new_page(viewport={"width":390,"height":710}); errs=[]
        pg.on("pageerror",lambda e:errs.append(str(e)))
        pg.goto(url); pg.wait_for_timeout(900); pg.click("#lcStart"); pg.wait_for_timeout(150)
        # Transversale
        res=[]
        if pg.locator(".lc-row[data-act=transversal]").count():
            pg.click(".lc-row[data-act=transversal]"); pg.wait_for_timeout(250)
            nd=pg.locator("[data-day]").count()
            for d in range(nd):
                pg.locator("[data-day]").nth(d).click(); pg.wait_for_timeout(250); n=0; over=[]
                while True:
                    n+=1
                    m=pg.evaluate("(()=>{const e=document.querySelector('.lc-main');return [e.scrollHeight,e.clientHeight]})()")
                    if m[0]>m[1]+2: over.append((n,m[0]-m[1]))
                    t=pg.locator("#lcNext").inner_text(); pg.click("#lcNext"); pg.wait_for_timeout(150)
                    if "Terminer" in t or n>30: break
                res.append((d+1,n,over))
                if pg.locator("[data-day]").count()==0: pg.click("#lcBack"); pg.wait_for_timeout(200)
            print(url,"transv",res)
        pg.goto(url); pg.wait_for_timeout(900); pg.click("#lcStart"); pg.wait_for_timeout(150)
        if pg.locator(".lc-row[data-act=dialogue]").count():
            pg.click(".lc-row[data-act=dialogue]"); pg.wait_for_timeout(250)
            nd=pg.locator("[data-dlg]").count(); res=[]
            for d in range(nd):
                pg.locator("[data-dlg]").nth(d).click(); pg.wait_for_timeout(250); n=0; over=[]
                while pg.locator("#dlgHelp").count() and n<20:
                    n+=1
                    m=pg.evaluate("(()=>{const e=document.querySelector('.lc-main');return [e.scrollHeight,e.clientHeight]})()")
                    if m[0]>m[1]+2: over.append((n,m[0]-m[1]))
                    pg.click("#dlgHelp"); pg.wait_for_timeout(100)
                    txt=pg.locator("#dlgMsg").inner_text()
                    import re
                    mm=re.search(r"« (.*?) »",txt)
                    pg.fill("#dlgIn",mm.group(1) if mm else "yes"); pg.click("#dlgSend"); pg.wait_for_timeout(120)
                endover=[]; k=0
                while True:
                    k+=1
                    m=pg.evaluate("(()=>{const e=document.querySelector('.lc-main');return [e.scrollHeight,e.clientHeight]})()")
                    if m[0]>m[1]+2: endover.append((k,m[0]-m[1]))
                    if pg.locator("#dlgNextP").count(): pg.click("#dlgNextP"); pg.wait_for_timeout(150)
                    else: break
                res.append((d+1,n,over,k,endover))
                if pg.locator("#dlgEnd").count(): pg.click("#dlgEnd"); pg.wait_for_timeout(200)
            print(url,"dlg",res)
        print(errs)
