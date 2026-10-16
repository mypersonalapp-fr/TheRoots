import sys
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch()
    for url in sys.argv[1:]:
        pg=b.new_page(viewport={"width":390,"height":844}); pg.goto(url); pg.wait_for_timeout(800); pg.click("#lcStart"); pg.wait_for_timeout(150)
        for act in ["vocab","grammar","reading","listening","exercises"]:
            pg.click(f".lc-row[data-act={act}]"); pg.wait_for_timeout(200); sp=[]
            while True:
                if pg.locator("#lcPrac").count(): pass
                v=pg.evaluate("(()=>{const m=document.querySelector('.lc-main'),f=document.querySelector('.lc-foot');return Math.round(f.getBoundingClientRect().top-m.lastElementChild.getBoundingClientRect().bottom)})()")
                sp.append(v); t=pg.locator("#lcNext").inner_text(); pg.click("#lcNext"); pg.wait_for_timeout(120)
                if "Terminer" in t: break
            print(url.split("?")[1],act,sp)
        pg.close()
