import sys
from playwright.sync_api import sync_playwright
urls=sys.argv[1:]
with sync_playwright() as p:
    b=p.chromium.launch()
    for url in urls:
        pg=b.new_page(viewport={"width":390,"height":710}); errs=[]
        pg.on("pageerror",lambda e:errs.append(str(e)))
        pg.goto(url); pg.wait_for_timeout(800); pg.click("#lcStart"); pg.wait_for_timeout(150)
        pg.click(".lc-row[data-act=city]"); pg.wait_for_timeout(300)
        nm=pg.locator(".lc-row[data-m]").count(); rep=[]
        for mi in range(nm):
            pg.locator(".lc-row[data-m]").nth(mi).click(); pg.wait_for_timeout(250); screens=0; over=0
            while True:
                screens+=1
                m=pg.evaluate("(()=>{const e=document.querySelector('.lc-main');return e.scrollHeight-e.clientHeight})()")
                if m>2: over+=1
                # répondre à toutes les questions non corrigées
                for _ in range(8):
                    opts=pg.locator(".rc-item:not(.good):not(.bad) .rc-opt:not([disabled])")
                    if opts.count()==0: break
                    opts.first.click(); pg.wait_for_timeout(60)
                # mission de construction : placer les mots
                if pg.locator(".rc-bank").count():
                    while pg.locator(".rc-bank .rc-tok:not([disabled])").count(): pg.locator(".rc-bank .rc-tok:not([disabled])").first.click()
                    pg.click("#rcGo"); pg.wait_for_timeout(80)
                g=pg.locator("#rcGo")
                if g.count()==0: break
                t=g.inner_text()
                pg.evaluate("document.querySelector('#rcGo').disabled=false"); g.click(); pg.wait_for_timeout(700)
                if "Terminer" in t and pg.locator(".rc-end").count(): break
                if pg.locator(".rc-end").count(): break
                if screens>30: break
            rep.append((mi+1,screens,over))
            pg.click("#rcMap") if pg.locator("#rcMap").count() else None; pg.wait_for_timeout(150)
        print(url.split("?")[1],rep,errs)
