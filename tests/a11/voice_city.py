import sys
from playwright.sync_api import sync_playwright
S=sys.argv[1]
with sync_playwright() as p:
    b=p.chromium.launch(args=["--use-fake-device-for-media-stream","--use-fake-ui-for-media-stream"])
    ctx=b.new_context(viewport={"width":390,"height":844},permissions=["microphone"]); pg=ctx.new_page(); errs=[]
    pg.on("pageerror",lambda e:errs.append(str(e)))
    pg.goto("http://localhost:8000/apercu-a1.html?n=1&g=girl&i=0&t=light"); pg.wait_for_timeout(1000)
    pg.click("#lcStart"); pg.wait_for_timeout(200); pg.click(".lc-row[data-act=city]"); pg.wait_for_timeout(500)
    pg.click("[data-m='5']"); pg.wait_for_timeout(500)
    # première étape de construction : poser un mot puis valider
    pg.click("[data-k='0']"); pg.click("#rcGo"); pg.wait_for_timeout(300)
    print("micro visible:", pg.locator("#rcMic").count(), "said fallback:", pg.locator("#rcSaid").count())
    if pg.locator("#rcMic").count():
        pg.click("#rcMic"); pg.wait_for_timeout(1500)
        print("stop visible:", pg.locator("#rcStop").count())
        pg.screenshot(path=f"{S}/voice-listening.png")
        pg.click("#rcStop"); pg.wait_for_timeout(3500)
        print("après stop -> réessayer:", pg.locator("#rcMic").inner_text() if pg.locator("#rcMic").count() else None, "| réécouter:", pg.locator("#rcReplay").count(), "| msg:", pg.locator(".rc-vmsg").inner_text()[:80])
        pg.screenshot(path=f"{S}/voice-done.png")
    print("errs",errs[:3], "overflow", pg.evaluate("document.documentElement.scrollWidth>innerWidth"))
