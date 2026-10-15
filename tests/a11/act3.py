import asyncio, json, subprocess, time
from playwright.async_api import async_playwright
O="."
srv=subprocess.Popen(["python3","-m","http.server","8770","-d","/home/claude/theroots"],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL); time.sleep(1)
JS="""async()=>{const m=await import('/js/data/lecon-a11-data.js?v=20261014i');const all=[...m.TEST_TEXTS.flatMap(t=>t.q),...m.TEST_AUDIOS.flatMap(t=>t.q),...m.TEST_GRAMMAR];const mp={};all.forEach(q=>mp[q[0]]=q[2]);
const out=[];document.querySelectorAll('.lc-qb').forEach(b=>{const t=b.querySelector('.lc-q').textContent.replace(/^\\d+\\.\\s*/,'');out.push(mp[t])});return out}"""
async def run(scheme,gender,idx):
  async with async_playwright() as p:
    b=await p.chromium.launch(); ctx=await b.new_context(viewport={"width":390,"height":844},device_scale_factor=1.5,color_scheme=scheme)
    pg=await ctx.new_page(); errs=[]; pg.on("pageerror",lambda e:errs.append(str(e)))
    await pg.route("**/fonts.g*/**",lambda r:r.abort())
    st={"session":{"email":"t@t.fr"},"settings":{"theme":scheme,"interfaceLang":"fr","primaryLearningLang":"en","avatarGender":gender,"avatarIndex":idx}}
    await pg.add_init_script("if(!localStorage.getItem('the_roots_store_v1')){localStorage.setItem('the_roots_store_v1',%s);localStorage.setItem('the_roots_onboarding_seen_v1','1');sessionStorage.setItem('the_roots_unlocked_session','1')}"%json.dumps(json.dumps(st)))
    await pg.goto("http://localhost:8770/index.html"); await pg.wait_for_timeout(1200)
    await pg.evaluate("import('/js/screens/lecon-a11.js?v=20261014i').then(m=>m.renderLessonA11(document.getElementById('app'),{}))"); await pg.wait_for_timeout(400)
    await pg.screenshot(path=f"{O}/{scheme}-intro-new.png")
    await pg.click("#lcStart")
    # --- Transversale : jour 1 puis jour 2
    await pg.click(".lc-row[data-act=transversal]"); await pg.wait_for_timeout(250)
    await pg.screenshot(path=f"{O}/{scheme}-tr-list.png")
    for day in (0,1):
      await pg.click(f"[data-day='{day}']"); await pg.wait_for_timeout(200)
      if day==0: await pg.screenshot(path=f"{O}/{scheme}-tr-1.png")
      await pg.click("#lcNext"); await pg.wait_for_timeout(150)            # mots -> entraînement
      blocked=await pg.evaluate("document.querySelector('#lcNext').disabled")
      for qi in range(await pg.locator(".lc-qb").count()):
        for i in (0,1,2):
          if await pg.locator(f".lc-qb[data-qi='{qi}'] .lc-choice:not([disabled])").count()==0: break
          await pg.locator(f".lc-qb[data-qi='{qi}'] .lc-choice[data-i='{i}']").click(); await pg.wait_for_timeout(40)
      await pg.click("#lcNext"); await pg.wait_for_timeout(150)            # -> écriture
      w0=await pg.evaluate("document.querySelector('#lcNext').disabled")
      await pg.fill("#lcTa","My name is Emma and I am from Paris."); w1=await pg.evaluate("document.querySelector('#lcNext').disabled")
      await pg.click("#lcNext"); await pg.wait_for_timeout(200)
      print(scheme,"jour",day+1,"pratique bloquée:",blocked,"écriture bloquée/débloquée:",w0,w1,"| retour liste:",await pg.locator("[data-day]").count())
    await pg.click("#lcBack"); await pg.wait_for_timeout(200)
    # --- Test (réponses parfaites + écrit/oral)
    await pg.click(".lc-row[data-act=test]"); await pg.wait_for_timeout(250)
    for step in range(6):
      if step<=3:
        ans=await pg.evaluate("("+JS+")()")
        for qi,a in enumerate(ans): await pg.locator(".lc-qb").nth(qi).locator(f".lc-choice[data-i='{a}']").click()
        if step==0: await pg.screenshot(path=f"{O}/{scheme}-test-1.png")
      elif step==4:
        d=await pg.evaluate("document.querySelector('#lcNext').disabled")
        await pg.fill("#lcTa","My name is Emma. I am ten years old. I am from France. I like music.")
      else:
        await pg.screenshot(path=f"{O}/{scheme}-test-oral.png")
        for i in range(4): await pg.check(f"[data-o='{i}']")
      await pg.click("#lcNext"); await pg.wait_for_timeout(200)
    await pg.screenshot(path=f"{O}/{scheme}-test-result.png")
    txt=await pg.evaluate("document.querySelector('.lc-intro').innerText.replace(/\\n/g,' | ').slice(0,260)")
    print(scheme,"RÉSULTAT:",txt)
    print(scheme,"progress:",await pg.evaluate("localStorage.getItem('the_roots_a11_lesson_v1')"),"| overflowX:",await pg.evaluate("document.documentElement.scrollWidth>innerWidth"),"| erreurs:",errs)
    await pg.click("#lcAgain"); await pg.wait_for_timeout(200)
    print(scheme,"nouvelle version → page",await pg.evaluate("document.querySelector('.lc-count').textContent"),await pg.evaluate("document.querySelector('.lc-q').textContent"))
    await b.close()
async def main():
  await run("light","girl",0); await run("dark","boy",0)
asyncio.run(main()); srv.terminate()
