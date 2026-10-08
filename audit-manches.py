#!/usr/bin/env python3
"""Vérifie que chaque manche « Remets les mots dans l'ordre » est gagnable :
les mots de la banque (en minuscules) doivent être EXACTEMENT ceux de la réponse.
Usage : python3 tools/audit-manches.py   (depuis la racine du dépôt) — code de sortie 1 si erreur."""
import re, glob, sys
bad = n = 0
for f in ['lessons.html'] + glob.glob('js/**/*.js', recursive=True):
    t = open(f, encoding='utf-8').read()
    for m in re.finditer(r'bank:\s*\[(.*?)\]\s*,\s*answer:\s*"(.*?)"', t):
        n += 1
        toks = [x[1:-1].replace("\\'", "'") for x in re.findall(r'"(?:[^"\\]|\\.)*"', m.group(1))]
        # un token à espace (ex. « an hour ») compte pour plusieurs mots
        words = sorted(w for x in toks for w in x.lower().split(' '))
        if words != sorted(m.group(2).split(' ')):
            bad += 1; print('IMPOSSIBLE :', f, '|', m.group(2), '|', toks)
print(n, 'manches vérifiées,', bad, 'impossible(s)')
sys.exit(1 if bad else 0)
