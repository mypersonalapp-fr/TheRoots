#!/bin/sh
# Passe les 3 drapeaux de développement à false (à lancer UNIQUEMENT au moment de la sortie, après feu vert d'Ashley).
set -e
F="$(dirname "$0")/../js/data/dev-config.js"
cp "$F" "$F.bak-avant-sortie"
sed -i 's/^export const \(CREATOR_MODE\|UNLOCK_COURSES_PREVIEW\|UNLOCK_ALL_PREVIEW\) = true/export const \1 = false/' "$F"
grep -n "^export const" "$F"
