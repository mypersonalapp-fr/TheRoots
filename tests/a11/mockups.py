from playwright.sync_api import sync_playwright
S="./"
CSS=".rc-opt,.rc-tok,.rc-listen,.rc-go,.lc-back{outline:3px dashed #ff2d55 !important;outline-offset:-3px}.rc-slots{outline:3px dashed #ff9500 !important;outline-offset:-3px}"
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":390,"height":1900})
    pg.goto("http://localhost:8000/apercu-a11.html?g=girl&i=0&t=light"); pg.wait_for_timeout(1200)
    pg.click("#lcStart"); pg.click(".lc-row[data-act=city]")
    for mi in range(6):
        pg.click(f"[data-m='{mi}']"); pg.wait_for_timeout(400); pg.add_style_tag(content=CSS); pg.screenshot(path=S+f"a{mi}.png")
        if pg.locator("[data-g]").count():
            for g in sorted({e.get_attribute("data-g") for e in pg.locator("[data-g]").all()}): pg.locator(f"[data-g='{g}']").nth(1).click()
        else:
            for k in range(pg.locator(".rc-bank .rc-tok").count()): pg.locator(".rc-bank .rc-tok:not(.used)").first.click()
        pg.wait_for_timeout(100); pg.add_style_tag(content=CSS); pg.screenshot(path=S+f"b{mi}.png")
        pg.click("#rcGo"); pg.wait_for_timeout(300); pg.screenshot(path=S+f"c{mi}.png")
        pg.click("#lcBack"); pg.wait_for_timeout(200)
