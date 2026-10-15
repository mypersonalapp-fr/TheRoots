from playwright.sync_api import sync_playwright
S="./"
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":390,"height":844})
    errs=[]; pg.on("pageerror",lambda e:errs.append(str(e))); pg.on("console",lambda m: errs.append(m.text) if m.type=="error" else None)
    pg.goto("http://localhost:8000/apercu-a11.html?g=girl&i=0&t=light"); pg.wait_for_timeout(1200)
    pg.click("#lcStart"); pg.click(".lc-row[data-act=city]"); pg.wait_for_timeout(300)
    pg.screenshot(path=S+"c0.png")
    # perfect run helper reading answers from DOM is impossible: click first option & validate to exercise flow
    for mi in range(6):
        pg.click(f"[data-m='{mi}']"); pg.wait_for_timeout(300)
        steps=0
        while steps<8:
            steps+=1
            if pg.locator(".rc-end").count(): break
            if pg.locator("[data-g]").count():
                for g in sorted({e.get_attribute("data-g") for e in pg.locator("[data-g]").all()}):
                    pg.locator(f"[data-g='{g}']").first.click()
            else:
                for _ in range(pg.locator(".rc-bank .rc-tok").count()):
                    pg.locator(".rc-bank .rc-tok:not(.used)").first.click()
            if steps==1: pg.screenshot(path=S+f"c{mi+1}.png")
            pg.click("#rcGo"); pg.wait_for_timeout(120); pg.click("#rcGo"); pg.wait_for_timeout(150)
        print(mi+1, "fin:", pg.locator(".rc-end").count(), pg.locator(".rc-stars").inner_text() if pg.locator(".rc-stars").count() else "-")
        pg.click("#rcMap"); pg.wait_for_timeout(150)
    print("overflowX:", pg.evaluate("document.documentElement.scrollWidth>innerWidth"), errs)
    print(pg.evaluate("localStorage.getItem('the_roots_a11_lesson_v1')")[:200])
