import sys
from playwright.sync_api import sync_playwright
url=sys.argv[1] if len(sys.argv)>1 else "http://localhost:8000/apercu-a1.html?n=2&g=girl&i=0&t=light"
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":390,"height":844}); errs=[]
    pg.on("pageerror",lambda e:errs.append(str(e))); pg.on("console",lambda m: m.type=="error" and "404" not in m.text and errs.append(m.text))
    pg.goto(url); pg.wait_for_timeout(900)
    pg.click("#lcStart"); pg.wait_for_timeout(150); pg.click(".lc-row[data-act=vocab]"); pg.wait_for_timeout(300)
    for pagen in range(3):
        while not pg.locator('#lcPrac').count():
            pg.click('#lcNext'); pg.wait_for_timeout(150)
        # 1 associer : lire les paires via bundle
        txt=pg.locator("#lcPrac").inner_text()
        assert "Relie" in txt, txt[:80]
        cells=pg.locator(".pr-cell")
        n=cells.count()//2
        en=[cells.nth(i).inner_text() for i in range(n)]
        # on trouve la traduction en testant chaque cellule fr
        while pg.locator(".pr-cell[data-s=en]:not([disabled])").count():
            e=pg.locator(".pr-cell[data-s=en]:not([disabled])").first.element_handle()
            m=pg.locator(".pr-cell[data-s=fr]:not([disabled])").count()
            for j in range(m):
                e.click(); pg.locator(".pr-cell[data-s=fr]:not([disabled])").nth(j).click(); pg.wait_for_timeout(560)
                if e.is_disabled(): break
        assert pg.locator("#prGo").is_enabled(), "match non fini"
        pg.click("#prGo"); pg.wait_for_timeout(100)
        # 2 compléter : 3 items, on tape faux 3 fois puis lit la réponse
        for k in range(3):
            if not pg.locator("#prIn").count(): break
            for t in range(3):
                pg.fill("#prIn","zzz"); pg.click("#prGo"); pg.wait_for_timeout(60)
            assert pg.locator("#prIn").is_disabled()
            pg.click("#prGo"); pg.wait_for_timeout(60)
        # 3 ordre
        for k in range(2):
            if not pg.locator("#prLine").count(): break
            for t in range(3):
                while pg.locator("#prPool .pr-chip:not([disabled])").count(): pg.locator("#prPool .pr-chip:not([disabled])").first.click()
                pg.click("#prGo"); pg.wait_for_timeout(60)
                if pg.locator("#prClr").count()==0: break
                if "bonne phrase" in pg.locator("#prFb").inner_text() or "correcte" in pg.locator("#prFb").inner_text(): break
                pg.click("#prClr")
            pg.click("#prGo"); pg.wait_for_timeout(60)
        # 4 produire
        assert pg.locator("#prTa").count(), pg.locator("#lcPrac").inner_text()[:100]
        need=pg.locator(".pr-hint b").all_inner_texts()
        pg.fill("#prTa","I say "+" and ".join(need)+" every day now"); pg.click("#prGo"); pg.wait_for_timeout(60)
        assert "acceptée" in pg.locator("#prFb").inner_text(), pg.locator("#prFb").inner_text()
        pg.click("#prGo"); pg.wait_for_timeout(100)
        # 5 défi
        for k in range(4):
            if not pg.locator(".lc-choice").count(): break
            for c in pg.locator(".lc-choice").all():
                if not c.is_disabled(): c.click(); pg.wait_for_timeout(40)
                if pg.locator("#prGo").is_enabled(): break
            pg.click("#prGo"); pg.wait_for_timeout(60)
        assert "terminée" in pg.locator("#lcPrac").inner_text(), pg.locator("#lcPrac").inner_text()[:100]
        assert pg.locator("#lcNext").is_enabled()
        print("page",pagen,"ok", pg.locator("#lcPrac .pr-done p").inner_text())
        pg.screenshot(path=f"/tmp/p{pagen}.png")
        pg.click("#lcNext"); pg.wait_for_timeout(200)
    print("errs",errs[:3])
