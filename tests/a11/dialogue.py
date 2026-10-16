import sys, json
from playwright.sync_api import sync_playwright
S=sys.argv[1]
ANS={1:[["hello","My name is Lucas."],["I am ten","I'm ten years old."],["France","I'm from France."],["yes","Yes, I have a sister."],["ok","Goodbye! See you tomorrow!"]],
     6:[["bread","I eat bread for breakfast."],["x","I drink milk."],["maybe","No, I don't like fish."],["x","My favourite meal is dinner."],["x","Thank you!"]]}
with sync_playwright() as p:
    b=p.chromium.launch()
    for n in (1,6,2):
        pg=b.new_page(viewport={"width":390,"height":844}); errs=[]
        pg.on("pageerror",lambda e:errs.append(str(e)))
        pg.goto(f"http://localhost:8000/apercu-a1.html?n={n}&g=girl&i=0&t=light"); pg.wait_for_timeout(1000)
        pg.click("#lcStart"); pg.wait_for_timeout(200)
        has=pg.locator(".lc-row[data-act=dialogue]").count()
        print(n,"row dialogue:",has)
        if not has: continue
        pg.click(".lc-row[data-act=dialogue]"); pg.wait_for_timeout(300)
        pg.screenshot(path=f"{S}/dlg{n}-list.png")
        pg.click("[data-dlg='0']"); pg.wait_for_timeout(300)
        for i,(bad,good) in enumerate(ANS[n]):
            pg.fill("#dlgIn",bad); pg.click("#dlgSend"); pg.wait_for_timeout(150)
            msg=pg.locator("#dlgMsg").inner_text() if pg.locator("#dlgMsg").count() else "(accepté)"
            if i==1: pg.screenshot(path=f"{S}/dlg{n}-bad.png")
            if "(accepté)"!=msg:
                pg.fill("#dlgIn",good); pg.click("#dlgSend"); pg.wait_for_timeout(150)
            print("  turn",i,"mauvaise:",bad,"->",msg[:60])
        pg.screenshot(path=f"{S}/dlg{n}-end.png")
        print("  fin:", pg.locator("#dlgEnd").count(), "overflow", pg.evaluate("document.documentElement.scrollWidth>innerWidth"))
        pg.click("#dlgEnd"); pg.wait_for_timeout(200)
        print("  liste ✓:", pg.locator("[data-dlg='0'] .lc-go").inner_text(), "errs", errs[:2])
