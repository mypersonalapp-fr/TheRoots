import asyncio, json, subprocess, time
from playwright.async_api import async_playwright
O="."
srv=subprocess.Popen(["python3","-m","http.server","8768","-d","/home/claude/theroots"],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL); time.sleep(1)
async def run(scheme,gender,idx):
  async with async_playwright() as p:
    b=await p.chromium.launch(); ctx=await b.new_context(viewport={"width":390,"height":844},device_scale_factor=1.5,color_scheme=scheme)
    pg=await ctx.new_page(); errs=[]; pg.on("pageerror",lambda e:errs.append(str(e)))
    await pg.route("**/fonts.g*/**",lambda r:r.abort())
    st={"session":{"email":"t@t.fr"},"settings":{"theme":scheme,"interfaceLang":"fr","primaryLearningLang":"en","avatarGender":gender,"avatarIndex":idx}}
    await pg.add_init_script("if(!localStorage.getItem('the_roots_store_v1')){localStorage.setItem('the_roots_store_v1',%s);localStorage.setItem('the_roots_onboarding_seen_v1','1');sessionStorage.setItem('the_roots_unlocked_session','1')}"%json.dumps(json.dumps(st)))
    await pg.goto("http://localhost:8768/index.html"); await pg.wait_for_timeout(1200)
    await pg.evaluate("import('/js/screens/lecon-a11.js?v=20261014b').then(m=>m.renderLessonA11(document.getElementById('app'),{}))"); await pg.wait_for_timeout(400)
    await pg.click("#lcStart")
    await pg.evaluate("window.__sp=[];speechSynthesis.speak=u=>{window.__sp.push(u.text)};0")
    res={}
    for act,n in (("grammar",2),("reading",3),("listening",4)):
      await pg.click(f".lc-row[data-act={act}]"); await pg.wait_for_timeout(250)
      pages=0
      while True:
        pages+=1
        d0=await pg.evaluate("document.querySelector('#lcNext').disabled")
        if pages==1: await pg.screenshot(path=f"{O}/{scheme}-{act}-1.png")
        # mauvaise réponse d'abord (index 2 sauf si bonne) puis résoudre
        nq=await pg.locator(".lc-qb").count()
        for qi in range(nq):
          for i in range(3):
            if await pg.locator(f".lc-qb[data-qi='{qi}'] .lc-choice:not([disabled])").count()==0: break
            await pg.locator(f".lc-qb[data-qi='{qi}'] .lc-choice[data-i='{i}']").click(); await pg.wait_for_timeout(50)
        d1=await pg.evaluate("document.querySelector('#lcNext').disabled")
        if pages==1 and act=="listening":
          await pg.click(".lc-play"); await pg.click("#lcTr"); await pg.click("#lcSpeed"); await pg.screenshot(path=f"{O}/{scheme}-{act}-2.png")
        if pages==1 and act=="reading":
          await pg.click("#lcTr"); await pg.screenshot(path=f"{O}/{scheme}-{act}-2.png")
        label=await pg.evaluate("document.querySelector('#lcNext').textContent")
        res[(act,pages)]=(d0,d1)
        await pg.click("#lcNext"); await pg.wait_for_timeout(150)
        if "Terminer" in label: break
      print(act,"pages:",pages)
    print(scheme,"bloqué avant:",all(v[0] for v in res.values()),"| débloqué après:",all(not v[1] for v in res.values()),"| audio:",len(await pg.evaluate("window.__sp")),"| done:",await pg.evaluate("localStorage.getItem('the_roots_a11_lesson_v1')"),"| overflowX:",await pg.evaluate("document.documentElement.scrollWidth>innerWidth"),"| erreurs:",errs)
    await pg.screenshot(path=f"{O}/{scheme}-menu-final.png")
    await b.close()
async def main():
  await run("light","girl",0); await run("dark","boy",1)
asyncio.run(main()); srv.terminate()
