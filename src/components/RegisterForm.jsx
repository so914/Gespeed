

import { useState } from "react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-blue-400 fill-none stroke-2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Rapidité",
    desc: "Livraison express garantie sur Brazzaville",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-blue-400 fill-none stroke-2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Sécurité",
    desc: "Traçabilité complète de vos biens à chaque étape",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-blue-400 fill-none stroke-2">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Suivi en direct",
    desc: "Suivez vos colis en temps réel",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-blue-400 fill-none stroke-2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Support 24/7",
    desc: "Une équipe disponible pour vous aider",
  },
];

function LeftPanel() {
  return (
    <div className="relative hidden md:flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 p-9">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Rings */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full border border-blue-400/10" />
      <div className="pointer-events-none absolute -top-28 -right-28 w-96 h-96 rounded-full border border-blue-400/[0.06]" />
      <div className="pointer-events-none absolute bottom-10 -left-12 w-44 h-44 rounded-full border border-blue-400/10" />

      <div className="relative z-10">
        <h2 className="text-2xl font-bold leading-snug text-white">
          <span className="underline decoration-blue-400 underline-offset-4">Bienvenue</span> sur
          <br />notre plateforme
        </h2>
        <h3 className="mt-3 md:text-lg font-normal text-white/70 leading-relaxed">
          La logistique redéfinie pour vous
        </h3>
        <p className="mt-2 md:text-sm text-white/35 leading-relaxed">
          Connectez-vous à la plateforme de référence pour le transport au Congo-Brazzaville.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-3 mt-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-white/10 bg-white/[0.06] p-3"
          >
            <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-400/10">
              {f.icon}
            </div>
            <h4 className="text-xs font-semibold text-white mb-1">{f.title}</h4>
            <p className="text-[13px] text-white/40 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepIndicator({ step }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${step >= 1 ? "bg-blue-900 text-white" : "border border-gray-200 bg-gray-100 text-gray-400"}`}>1</div>
      <div className={`flex-1 h-px ${step >= 2 ? "bg-blue-900" : "bg-gray-200"}`} />
      <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${step >= 2 ? "bg-blue-900 text-white" : "border border-gray-200 bg-gray-100 text-gray-400"}`}>2</div>
    </div>
  );
}

const inputClass = "w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10";
const labelClass = "mb-1.5 block text-xs font-semibold text-slate-500";

export default function RegisterForm() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6 mt-6">
      {/* Mobile step indicator */}
      <div className="mb-4 flex justify-between md:hidden w-full max-w-sm">
        <button className="text-blue-900">← Retour</button>
        <div className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold text-slate-600">
          Étape {step}/2
        </div>
      </div>

      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-200 shadow-xl md:grid-cols-2">
        <LeftPanel />

        {/* Right — form */}
        <div className="bg-white px-8 py-9">
          {/* Tabs */}
          <nav className="mb-6 flex gap-5 border-b border-gray-100 pb-3">
            <Link to="/signIn" className="mb-[-13px] border-b-2 border-transparent pb-3 text-sm text-gray-400 hover:text-slate-600">
              Connexion
            </Link>
            <span className="mb-[-13px] border-b-2 border-blue-900 pb-3 text-sm font-semibold text-blue-900">
              Inscription
            </span>
          </nav>

          <h1 className="text-xl font-bold text-slate-800">Bienvenue parmi nous</h1>
          <p className="mb-5 mt-1 text-xs text-slate-400">Créez votre compte en 2 étapes rapides</p>

          <StepIndicator step={step} />

          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Nom</label>
                <input type="text" placeholder="Votre nom" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Prénom</label>
                <input type="text" placeholder="Votre prénom" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input type="email" placeholder="exemple@email.com" className={inputClass} />
              </div>
              <button
                onClick={() => setStep(2)}
                className="mt-2 w-full rounded-xl bg-blue-900 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 active:scale-[0.98]"
              >
                Suivant →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Ville</label>
                <select className={inputClass}>
                  <option value="Brazzaville">BRAZZAVILLE</option>
                  <option value="Pointe-Noire">POINTE-NOIRE</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Numéro de téléphone</label>
                <input type="text" placeholder="+242 06 ..." className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Mot de passe</label>
                <input type="password" placeholder="••••••••" className={inputClass} />
              </div>
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => setStep(1)}
                  className="rounded-xl border border-gray-200 px-5 py-3 text-sm text-slate-500 hover:bg-gray-50"
                >
                  ← Retour
                </button>
                <button className="flex-1 rounded-xl bg-blue-900 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 active:scale-[0.98]">
                  S'inscrire
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
