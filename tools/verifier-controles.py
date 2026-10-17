#!/usr/bin/env python3
"""Règle permanente : un contrôle change entièrement à chaque passage (texte, audio, grammaire, expression écrite et orale).
Vérifie que chaque leçon construite a assez de matière pour 3 passages différents. À lancer après CHAQUE nouvelle leçon (serveur local sur :8007)."""
import sys
from playwright.sync_api import sync_playwright
MIN = dict(texts=3, audios=3, grammar=30, expression=6)  # 3 passages : 3 textes, 3 audios, 3×10 questions, 3×2 sujets
with sync_playwright() as p:
    pg = p.chromium.launch().new_page(); pg.goto("http://localhost:8007/index.html"); pg.wait_for_timeout(500)
    rows = pg.evaluate("""async()=>{const a=await import('/js/data/lecons-a1.js'),c=await import('/js/data/lecons-a2.js');const o=[];
      const add=(code,B)=>o.push([code,B.testTexts.length,B.testAudios.length,B.testGrammar.length,(B.testPool||B.expression).length]);
      for(let n=1;n<=12;n++)add('A1.'+n,await a.loadBundle(n));
      for(const n of c.A2_BUILT)add('A2.'+n,await c.loadBundleA2(n));
      add('EXAM A1',await a.loadExamBundle());return o}""")
bad = 0
for code, t, a, g, e in rows:
    pb = [k for k, v, m in (("textes", t, MIN["texts"]), ("audios", a, MIN["audios"]), ("grammaire", g, MIN["grammar"]), ("sujets d'expression", e, MIN["expression"])) if v < m]
    print(("OK  " if not pb else "KO  ") + f"{code}: {t} textes, {a} audios, {g} questions, {e} sujets" + (" → manque : " + ", ".join(pb) if pb else ""))
    bad += bool(pb)
sys.exit(1 if bad else 0)
