// The Roots — verrouillage Face ID / Touch ID de l'appli, 100% local :
// aucun serveur n'est impliqué, c'est le téléphone lui-même qui vérifie le
// visage ou l'empreinte via son "authentificateur de plateforme" (Face ID /
// Touch ID sur iPhone/iPad, empreinte sur Android). Ça sert uniquement à
// reverrouiller l'accès à l'appli sur CET appareil, pas à créer un vrai
// compte sécurisé en ligne — cohérent avec le reste de l'appli (pas de
// backend pour l'instant, voir js/data/store.js).

function b64urlToBuffer(b64url) {
  const b64 = b64url.replace(/-/g, "+").replace(/_/g, "/");
  const pad = b64.length % 4 ? "=".repeat(4 - (b64.length % 4)) : "";
  const bin = atob(b64 + pad);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes.buffer;
}

function bufferToB64url(buf) {
  const bytes = new Uint8Array(buf);
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function randomChallenge() {
  const arr = new Uint8Array(32);
  crypto.getRandomValues(arr);
  return arr;
}

export const webauthn = {
  // Le téléphone (ou l'ordinateur) a-t-il Face ID / Touch ID / une empreinte
  // configurée ? Si non (ou navigateur trop ancien), on ne propose rien.
  async isAvailable() {
    if (!window.PublicKeyCredential || !navigator.credentials) return false;
    try {
      return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
    } catch (e) {
      return false;
    }
  },

  // Enregistre Face ID / Touch ID pour cet appareil (déclenche la demande
  // native du téléphone). Retourne l'identifiant à garder pour vérifier
  // ensuite, ou null si l'utilisateur a annulé.
  async register(email) {
    const userId = new Uint8Array(16);
    crypto.getRandomValues(userId);
    try {
      const cred = await navigator.credentials.create({
        publicKey: {
          challenge: randomChallenge(),
          rp: { name: "The Roots" },
          user: { id: userId, name: email || "utilisateur", displayName: email || "Utilisateur The Roots" },
          pubKeyCredParams: [
            { type: "public-key", alg: -7 },   // ES256
            { type: "public-key", alg: -257 }, // RS256
          ],
          authenticatorSelection: { authenticatorAttachment: "platform", userVerification: "required" },
          timeout: 60000,
        },
      });
      if (!cred) return null;
      return bufferToB64url(cred.rawId);
    } catch (e) {
      return null; // annulé par l'utilisateur, ou indisponible
    }
  },

  // Redemande Face ID / Touch ID pour déverrouiller. Retourne true/false.
  async verify(credentialId) {
    if (!credentialId) return false;
    try {
      const assertion = await navigator.credentials.get({
        publicKey: {
          challenge: randomChallenge(),
          allowCredentials: [{ id: b64urlToBuffer(credentialId), type: "public-key" }],
          userVerification: "required",
          timeout: 60000,
        },
      });
      return !!assertion;
    } catch (e) {
      return false; // annulé, refusé, ou non reconnu
    }
  },
};
