from playwright.sync_api import sync_playwright
S="./"
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":390,"height":844}); errs=[]; pg.on("pageerror",lambda e:errs.append(str(e)))
    pg.goto("http://localhost:8000/apercu-a11.html?g=girl&i=0&t=light"); pg.wait_for_timeout(1200)
    pg.click("#lcStart"); pg.click(".lc-row[data-act=city]"); pg.click("[data-m='4']"); pg.wait_for_timeout(300)
    print("hauteur contenu/visible:", pg.evaluate("[document.querySelector('.lc-main').scrollHeight, document.querySelector('.lc-main').clientHeight]"))
    pg.evaluate("document.querySelector('.lc-main').scrollTop=400"); pg.wait_for_timeout(100)
    pg.locator("[data-g='3']").nth(1).click(); pg.wait_for_timeout(100)
    print("scroll après choix:", pg.evaluate("document.querySelector('.lc-main').scrollTop"))
    pg.evaluate("document.querySelector('.lc-main').scrollTop=0")
    for g in "0124": pg.locator(f"[data-g='{g}']").nth(1).click()
    print("Valider visible:", pg.locator("#rcGo").is_visible(), pg.evaluate("(()=>{const r=document.querySelector('#rcGo').getBoundingClientRect();return [r.top,r.bottom,innerHeight]})()"))
    pg.screenshot(path=S+"sc.png")
    # mission 3 : mots
    pg.click("#lcBack"); pg.click("[data-m='2']"); pg.wait_for_timeout(300)
    pg.evaluate("document.querySelector('.lc-main').scrollTop=60")
    pg.locator(".rc-bank .rc-tok:not(.used)").first.click(); print("M3 scroll:", pg.evaluate("document.querySelector('.lc-main').scrollTop"), errs)
