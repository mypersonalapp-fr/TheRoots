from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":390,"height":844}); errs=[]
    pg.on("pageerror",lambda e:errs.append(str(e))); pg.on("console",lambda m: errs.append(m.text) if m.type=="error" and "404" not in m.text else None)
    pg.goto("http://localhost:8000/apercu-a1.html?n=exam&g=girl&i=0&t=light"); pg.wait_for_timeout(3000)
    for step in range(6):
        t=pg.locator("h1").first.inner_text()
        for k in sorted({e.get_attribute("data-k") for e in pg.locator(".lc-choice").all()}):
            pg.locator(f".lc-choice[data-k='{k}']").first.click()
        if pg.locator("#lcTa").count(): pg.fill("#lcTa","My name is Ana and I am twenty. I live in Paris with my family. I like music and tea. I am going to school today.")
        if pg.locator("[data-o]").count(): pg.locator("[data-o]").first.check()
        print(step,t); pg.click("#lcNext"); pg.wait_for_timeout(250)
    print(pg.locator("h1").first.inner_text(), pg.locator("table").inner_text().replace("\n"," | ")[:200])
    pg.screenshot(path="/tmp/claude-0/-home-claude-theroots/ad6a56fd-45a5-5cd7-ae8e-fb68088ab568/scratchpad/shots/exam.png")
    print("overflow",pg.evaluate("document.documentElement.scrollWidth>innerWidth"),errs)
