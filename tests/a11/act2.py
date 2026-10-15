import asyncio, json, subprocess, time
from playwright.async_api import async_playwright
O="."
srv=subprocess.Popen(["python3","-m","http.server","8769","-d","/home/claude/theroots"],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL); time.sleep(1)
async def run(scheme,gender,idx):
  async with async_playwright() as p:
    b=await p.chromium.launch(); ctx=await b.new_context(viewport={"width":390,"height":844},device_scale_factor=1.5,color_scheme=scheme)
    pg=await ctx.new_page(); errs=[]; pg.on("pageerror",lambda e:errs.append(str(e)))
    await pg.route("**/fonts.g*/**",lambda r:r.abort())
    st={"session":{"email":"t@t.fr"},"settings":{"theme":scheme,"interfaceLang":"fr","primaryLearningLang":"en","avatarGender":gender,"avatarIndex":idx}}
    await pg.add_init_script("if(!localStorage.getItem('the_roots_store_v1')){localStorage.setItem('the_roots_store_v1',%s);localStorage.setItem('the_roots_onboarding_seen_v1','1');sessionStorage.setItem('the_roots_unlocked_session','1')}"%json.dumps(json.dumps(st)))
    await pg.goto("http://localhost:8769/index.html"); await pg.wait_for_timeout(1200)
    await pg.evaluate("import('/js/screens/lecon-a11.js?v=20261014c').then(m=>m.renderLessonA11(document.getElementById('app'),{}))"); await pg.wait_for_timeout(400)
    await pg.click("#lcStart")
    # --- Expression
    await pg.click(".lc-row[data-act=speaking]"); await pg.wait_for_timeout(250)
    d0=await pg.evaluate("document.querySelector('#lcNext').disabled")
    await pg.fill("#lcTa","hello"); d1=await pg.evaluate("document.querySelector('#lcNext').disabled")
    await pg.fill("#lcTa","My name is Emma. I am ten years old. I am from France.")
    d2=await pg.evaluate("document.querySelector('#lcNext').disabled"); await pg.screenshot(path=f"{O}/{scheme}-expr-1.png")
    await pg.click("#lcNext"); await pg.wait_for_timeout(200)
    await pg.click("[data-tab=speak]"); await pg.wait_for_timeout(200)
    e0=await pg.evaluate("document.querySelector('#lcNext').disabled"); await pg.screenshot(path=f"{O}/{scheme}-expr-2.png")
    await pg.check("#lcSaid"); e1=await pg.evaluate("document.querySelector('#lcNext').disabled")
    await pg.click("#lcNext"); await pg.wait_for_timeout(250)
    print(scheme,"expr: bloqué début/hello/ok:",d0,d1,d2,"| p2 bloqué/débloqué:",e0,e1)
    # --- Exercices
    await pg.click(".lc-row[data-act=exercises]"); await pg.wait_for_timeout(250)
    pages=0; first=True
    while True:
      pages+=1
      nq=await pg.locator(".lc-qb").count()
      for qi in range(nq):
        for i in (0,1,2):
          if await pg.locator(f".lc-qb[data-qi='{qi}'] .lc-choice:not([disabled])").count()==0: break
          await pg.locator(f".lc-qb[data-qi='{qi}'] .lc-choice[data-i='{i}']").click(); await pg.wait_for_timeout(40)
          if first and i==0 and qi==0: await pg.screenshot(path=f"{O}/{scheme}-exo-1.png"); first=False
      lab=await pg.evaluate("document.querySelector('#lcNext').textContent")
      await pg.click("#lcNext"); await pg.wait_for_timeout(120)
      if "Terminer" in lab: break
    print(scheme,"exercices pages:",pages,"| progress:",await pg.evaluate("localStorage.getItem('the_roots_a11_lesson_v1')"),"| overflowX:",await pg.evaluate("document.documentElement.scrollWidth>innerWidth"),"| erreurs:",errs)
    await pg.screenshot(path=f"{O}/{scheme}-menu-final2.png")
    await b.close()
async def main():
  await run("light","girl",2); await run("dark","boy",3)
asyncio.run(main()); srv.terminate()
