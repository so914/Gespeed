import { useState, useRef, useEffect } from "react";

// ============================================================
// DONNÉES : icônes et textes des cartes du panneau gauche
// ============================================================
const features = [
  {
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
    title: "Rapidité",
    desc: "Livraison express garantie",
  },
  {
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    title: "Sécurité",
    desc: "Traçabilité complète",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    title: "Temps réel",
    desc: "Suivi de vos colis live",
  },
  {
    icon: (
      <>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </>
    ),
    title: "OTP sécurisé",
    desc: "Double authentification",
  },
];

// Classes Tailwind réutilisables
const inputClass =
  "w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10";
const labelClass = "block mb-1.5 text-xs font-semibold text-slate-500";

// ============================================================
// COMPOSANT : Barre de progression (étape 1 → 2 → 3)
// ============================================================
function StepBar({ step }) {
  const active =
    "flex h-6 w-6 items-center justify-center rounded-full bg-blue-900 text-[11px] font-bold text-white";
  const idle =
    "flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-[11px] font-bold text-gray-400";
  const lineOn = "flex-1 h-px bg-blue-900";
  const lineOff = "flex-1 h-px bg-gray-200";

  return (
    <div className="flex items-center gap-2 mb-5">
      <div className={step >= 1 ? active : idle}>1</div>
      <div className={step >= 2 ? lineOn : lineOff} />
      <div className={step >= 2 ? active : idle}>2</div>
      <div className={step >= 3 ? lineOn : lineOff} />
      <div className={step >= 3 ? active : idle}>3</div>
    </div>
  );
}

// ============================================================
// COMPOSANT OTP : Les 6 cases de saisie du code secret
// ============================================================
function OtpInput({ onComplete }) {
  /*
   * On déclare 6 refs individuelles (une par case).
   * Une ref = un lien direct vers un champ HTML dans le DOM.
   * Ça permet de déplacer le curseur (focus) entre les cases
   * sans avoir besoin de state React.
   *
   * RÈGLE REACT : les hooks (useRef, useState…) ne peuvent JAMAIS
   * être appelés dans une boucle ou un if — donc on les écrit
   * ligne par ligne ici.
   */
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  // On regroupe les 6 refs dans un tableau pour les manipuler facilement
  const refs = [ref0, ref1, ref2, ref3, ref4, ref5];

  /*
   * Appelée à chaque frappe dans une case.
   *   i = index de la case touchée (0 à 5)
   *   e = événement DOM (contient la valeur saisie)
   */
  const handleInput = (i, e) => {
    // On garde uniquement les chiffres, on rejette tout le reste
    const val = e.target.value.replace(/\D/, "");

    // On écrit la valeur nettoyée directement dans le champ via la ref
    refs[i].current.value = val;

    // Si un chiffre a été saisi ET qu'il y a une case suivante,
    // on déplace automatiquement le curseur vers cette case suivante
    if (val && i < 5) {
      refs[i + 1].current.focus();
    }

    // On lit toutes les cases pour reconstituer le code entier
    // Exemple : ["4","8","3","1","0","2"] → "483102"
    const codeComplet = refs.map((r) => r.current.value).join("");

    // Si les 6 cases sont remplies, on remonte le code au composant parent
    if (codeComplet.length === 6) {
      onComplete(codeComplet);
    }
  };

  /*
   * Appelée quand l'utilisateur appuie sur une touche clavier.
   * On s'intéresse uniquement à "Backspace" (touche effacer).
   * Si la case est déjà vide et qu'on appuie sur Backspace,
   * on revient automatiquement à la case précédente.
   */
  const handleKey = (i, e) => {
    if (e.key === "Backspace" && !refs[i].current.value && i > 0) {
      refs[i - 1].current.focus();
    }
  };

  return (
    <div className="flex gap-2 mb-5">
      {refs.map((ref, i) => (
        <input
          key={i}
          ref={ref}           // Relie ce champ à sa ref
          maxLength={1}       // 1 seul caractère autorisé par case
          inputMode="numeric" // Clavier numérique sur mobile
          onChange={(e) => handleInput(i, e)}
          onKeyDown={(e) => handleKey(i, e)}
          className="h-12 w-10 rounded-xl border border-gray-200 text-center text-xl font-bold text-slate-800 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10"
        />
      ))}
    </div>
  );
}

// ============================================================
// COMPOSANT : Compte à rebours (02:00 → 00:00)
// ============================================================
function Timer({ run, onExpire }) {
  const [secs, setSecs] = useState(120); // Démarre à 120 secondes = 2 minutes

  useEffect(() => {
    if (!run) return; // Si le timer n'est pas activé, on ne fait rien

    setSecs(120); // Remise à zéro à chaque nouveau lancement

    // Intervalle qui décrémente d'une seconde toutes les 1000ms
    const id = setInterval(() => {
      setSecs((s) => {
        if (s <= 1) {
          clearInterval(id); // On arrête l'intervalle
          onExpire();        // On prévient le parent que le code a expiré
          return 0;
        }
        return s - 1; // On enlève une seconde
      });
    }, 1000);

    // Nettoyage : si le composant est démonté, on stoppe l'intervalle
    return () => clearInterval(id);
  }, [run]); // Se relance uniquement quand "run" change

  // Formatage de l'affichage : 90s → "01:30"
  const m = Math.floor(secs / 60);
  const s = secs % 60;

  return (
    <span className={secs === 0 ? "text-red-500 font-semibold" : "font-semibold text-slate-700"}>
      {secs === 0 ? "Expiré" : `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`}
    </span>
  );
}

// ============================================================
// COMPOSANT : Panneau gauche décoratif (visible desktop seulement)
// ============================================================
function LeftPanel() {
  return (
    <div
      className="relative hidden md:flex flex-col justify-between overflow-hidden p-9"
      style={{ background: "linear-gradient(160deg,#1e3a8a 0%,#0f172a 60%,#1e3a8a 100%)" }}
    >
      {/* Grille de points en arrière-plan */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle,rgba(255,255,255,.04) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Anneaux décoratifs en coin supérieur droit */}
      {[200, 320].map((taille, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full border border-blue-400/10"
          style={{ width: taille, height: taille, top: -taille / 3, right: -taille / 3 }}
        />
      ))}

      {/* Anneau décoratif en bas à gauche */}
      <div className="pointer-events-none absolute bottom-10 -left-12 w-40 h-40 rounded-full border border-blue-400/10" />

      {/* Titre et sous-titre */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold leading-snug text-white">
          <span className="underline decoration-blue-400 underline-offset-4">Connexion</span> à
          <br />votre espace
        </h2>
        <p className="mt-3 text-sm text-white/60 leading-relaxed">
          La logistique redéfinie pour le Congo-Brazzaville
        </p>
      </div>

      {/* Grille des 4 cartes de fonctionnalités */}
      <div className="relative z-10 grid grid-cols-2 gap-3 mt-8">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
            <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-400/10">
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 stroke-blue-400 fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
              >
                {f.icon}
              </svg>
            </div>
            <h4 className="text-xs font-semibold text-white mb-1">{f.title}</h4>
            <p className="text-[11px] text-white/40 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// COMPOSANT PRINCIPAL : Formulaire de connexion (3 étapes)
// ============================================================
export default function LoginForm() {
  const [step, setStep] = useState(1);          // Étape actuelle : 1, 2 ou 3
  const [email, setEmail] = useState("");        // Email saisi à l'étape 1
  const [showPwd, setShowPwd] = useState(false); // Afficher/masquer le mot de passe
  const [timerKey, setTimerKey] = useState(0);   // Changer cette valeur recrée le Timer
  const [expired, setExpired] = useState(false); // True si le code OTP a expiré

  // Renvoyer le code : on recrée le Timer et on débloque le bouton Vérifier
  const renvoyerCode = () => {
    setTimerKey((k) => k + 1);
    setExpired(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-200 shadow-xl md:grid-cols-2">

        {/* Panneau gauche décoratif */}
        <LeftPanel />

        {/* Panneau droit : le formulaire */}
        <div className="bg-white px-8 py-9 flex flex-col justify-center">

          {/* -------- ÉTAPE 1 : Email + Mot de passe -------- */}
          {step === 1 && (
            <div>
              <h1 className="text-xl font-bold text-slate-800">Bon retour </h1>
              <p className="text-xs text-slate-400 mt-1 mb-5">
                Connectez-vous à votre compte
              </p>
              <StepBar step={1} />

              {/* Champ Email */}
              <div className="mb-3">
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemple@email.com"
                  className={inputClass}
                />
              </div>

              {/* Champ Mot de passe avec bouton afficher/masquer */}
              <div className="mb-1">
                <label className={labelClass}>Mot de passe</label>
                <div className="relative">
                  <input
                    type={showPwd ? "text" : "password"}
                    placeholder="••••••••"
                    className={inputClass + " pr-10"}
                  />
                  {/* Bouton œil : bascule entre texte visible et masqué */}
                  <button
                    onClick={() => setShowPwd((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
                    >
                      {showPwd ? (
                        // Œil barré = mot de passe actuellement visible
                        <>
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </>
                      ) : (
                        // Œil normal = mot de passe actuellement masqué
                        <>
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              {/* Lien mot de passe oublié */}
              <div className="text-right mb-4">
                <a className="text-xs text-blue-900 cursor-pointer hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>

              {/* Bouton qui passe à l'étape 2 (envoi du code OTP) */}
              <button
                onClick={() => setStep(2)}
                className="w-full rounded-xl bg-blue-900 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 active:scale-[.98]"
              >
                Continuer →
              </button>
            </div>
          )}

          {/* -------- ÉTAPE 2 : Saisie du code OTP -------- */}
          {step === 2 && (
            <div>
              <h1 className="text-xl font-bold text-slate-800">Code OTP</h1>
              <p className="text-xs text-slate-400 mt-1 mb-5">
                Vérification en 3 étapes
              </p>
              <StepBar step={2} />

              {/* Message + compte à rebours + bouton renvoyer */}
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Code à 6 chiffres envoyé à{" "}
                <span className="font-semibold text-slate-700">
                  {email || "votre email"}
                </span>
                <br />
                Expire dans{" "}
                {/*
                 * La prop "key={timerKey}" est le truc clé ici :
                 * quand timerKey change (via renvoyerCode),
                 * React détruit l'ancien Timer et en crée un tout neuf,
                 * ce qui remet le compte à rebours à 02:00 proprement.
                 */}
                <Timer
                  key={timerKey}
                  run={step === 2}
                  onExpire={() => setExpired(true)}
                />
                {" · "}
                <button
                  onClick={renvoyerCode}
                  className="text-blue-900 font-semibold hover:underline"
                >
                  Renvoyer
                </button>
              </p>

              {/* Les 6 cases OTP avec navigation clavier automatique */}
              <OtpInput onComplete={() => {}} />

              {/* Boutons navigation */}
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="rounded-xl border border-gray-200 px-5 py-3 text-sm text-slate-500 hover:bg-gray-50"
                >
                  ← Retour
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={expired}
                  className="flex-1 rounded-xl bg-blue-900 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 active:scale-[.98] disabled:opacity-50"
                >
                  Vérifier →
                </button>
              </div>
            </div>
          )}

          {/* -------- ÉTAPE 3 : Connexion réussie -------- */}
          {step === 3 && (
            <div className="text-center py-6">
              <StepBar step={3} />

              {/* Icône de succès verte */}
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-green-300 bg-green-100">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 stroke-green-600 fill-none [stroke-width:2.5] [stroke-linecap:round] [stroke-linejoin:round]"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <h2 className="text-lg font-bold text-slate-800">Connexion réussie !</h2>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Votre identité a été vérifiée avec succès.
                <br />
                Redirection vers votre tableau de bord…
              </p>

              <button className="mx-auto mt-6 block rounded-xl bg-blue-900 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-800">
                Accéder →
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
