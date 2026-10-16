import sys
from playwright.sync_api import sync_playwright
urls=sys.argv[1:]
with sync_playwright() as p:
    b=p.chromium.launch(); bad=0
    for url in urls:
        pg=b.new_page(viewport={"width":390,"height":710}); errs=[]
        pg.on("pageerror",lambda e:errs.append(str(e)))
        pg.goto(url); pg.wait_for_timeout(800); pg.click("#lcStart"); pg.wait_for_timeout(150)
        for act in ["grammar","reading","listening","exercises"]:
            if not pg.locator(f".lc-row[data-act={act}]").count(): print(url,act,"absent"); continue
            pg.click(f".lc-row[data-act={act}]"); pg.wait_for_timeout(200)
            n=0; over=[]
            while True:
                n+=1
                m=pg.evaluate("(()=>{const e=document.querySelector('.lc-main');return [e.scrollHeight,e.clientHeight]})()")
                if m[0]>m[1]+2: over.append((n,m))
                t=pg.locator("#lcNext").inner_text()
                pg.click("#lcNext"); pg.wait_for_timeout(120)
                if "Terminer" in t: break
                if n>80: print("boucle"); break
            print(url.split("?")[1],act,"écrans",n,"débordements",over)
            bad+=len(over)
        if errs: print("ERR",errs); bad+=1
        pg.close()
    print("BAD",bad)
