from playwright.sync_api import sync_playwright
S="./"
MOCK="""
window.SpeechRecognition=function(){this.start=()=>{setTimeout(()=>{this.onresult({results:[[{transcript:'this is lucas he is french he has brown eyes'}]]});this.onend()},100)}};
"""
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":390,"height":1300}); errs=[]; pg.on("pageerror",lambda e:errs.append(str(e)))
    pg.add_init_script(MOCK)
    pg.goto("http://localhost:8000/apercu-a11.html?g=girl&i=0&t=light"); pg.wait_for_timeout(1200)
    pg.click("#lcStart"); pg.click(".lc-row[data-act=city]"); pg.click("[data-m='5']"); pg.wait_for_timeout(300)
    for w in ["This is","Lucas.","He is","French.","He has","brown eyes."]: pg.locator(f".rc-bank .rc-tok:not(.used):text-is('{w}')").first.click()
    pg.click("#rcGo"); pg.wait_for_timeout(200); print("mic?", pg.locator("#rcMic").count())
    pg.click("#rcMic"); pg.wait_for_timeout(500); print(pg.inner_text(".rc-vmsg")); pg.screenshot(path=S+"voice.png"); print(errs)
