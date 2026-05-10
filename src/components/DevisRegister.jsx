import React, { useEffect, useState } from "react";

const Services = [
  "Transport",
  "Déménagement",
  "Déménagement + Manutention",
  "Déballage",
  "Emballage",
  "Nettoyage",
  "Montage des meubles",
  "Démontage des meubles",
];

const champServices = {
  Transport: [
    { name: "villeD", label: "Ville de départ", type: "select", options: ["Brazzaville", "Pointe-Noire"] },
    { name: "adresseD", label: "Adresse de départ", type: "text" },
    { name: "villeA", label: "Ville d'arrivée", type: "select", options: ["Brazzaville", "Pointe-Noire"] },
    { name: "adresseA", label: "Adresse d'arrivée", type: "text" },
  ],
  Déménagement: [
    { name: "villeD", label: "Ville de départ", type: "select", options: ["Brazzaville", "Pointe-Noire"] },
    { name: "adresseD", label: "Adresse de départ", type: "text" },
    { name: "villeA", label: "Ville d'arrivée", type: "select", options: ["Brazzaville", "Pointe-Noire"] },
    { name: "adresseA", label: "Adresse d'arrivée", type: "text" },
    { name: "typeLogement", label: "Type de logement", type: "select", options: ["Appartement", "Maison basse", "Duplex"] },
    { name: "niveau", label: "Niveau", type: "select", options: ["RDC", "R+1", "R+2", "R+3"] },
    { name: "pieces", label: "Nombre de pièces", type: "select", options: ["CHSDTC", "2 CHSDTC", "3 CHSDTC", "4 CHSDTC"] },
  ],
  "Déménagement + Manutention": [
    { name: "villeD", label: "Ville de départ", type: "select", options: ["Brazzaville", "Pointe-Noire"] },
    { name: "adresseD", label: "Adresse de départ", type: "text" },
    { name: "villeA", label: "Ville d'arrivée", type: "select", options: ["Brazzaville", "Pointe-Noire"] },
    { name: "adresseA", label: "Adresse d'arrivée", type: "text" },
    { name: "typeLogement", label: "Type de logement", type: "select", options: ["Appartement", "Maison basse", "Duplex"] },
    { name: "niveau", label: "Niveau", type: "select", options: ["RDC", "R+1", "R+2", "R+3"] },
    { name: "meuble", label: "Type de meuble", type: "select", options: ["Canapé 3 places", "Canapé 2 places", "Canapé 1 place", "Lit 2 places", "Lit 3 places", "Armoire 2 portes", "Grande armoire", "Bureau", "Table basse", "Petit meuble TV", "Grand meuble TV"] },
    { name: "quantite", label: "Quantité", type: "number" },
  ],
  Déballage: [
    { name: "pieces", label: "Nombre de pièces", type: "select", options: ["CHSDTC", "2 CHSDTC", "3 CHSDTC", "4 CHSDTC"] },
    { name: "cartons", label: "Nombre de cartons", type: "number" },
  ],
  Emballage: [
    { name: "pieces", label: "Nombre de pièces", type: "select", options: ["CHSDTC", "2 CHSDTC", "3 CHSDTC", "4 CHSDTC"] },
    { name: "cartons", label: "Nombre de cartons", type: "number" },
    { name: "fragile", label: "Emballage fragile", type: "select", options: ["Oui", "Non"] },
  ],
  Nettoyage: [
    { name: "typeLogement", label: "Type de logement", type: "select", options: ["Appartement", "Maison basse", "Duplex"] },
    { name: "pieces", label: "Nombre de pièces", type: "select", options: ["CHSDTC", "2 CHSDTC", "3 CHSDTC", "4 CHSDTC"] },
    { name: "moquette", label: "Présence de moquette", type: "select", options: ["Oui", "Non"] },
  ],
  "Montage des meubles": [
    { name: "meuble", label: "Type de meuble", type: "select", options: ["Lit 2 places", "Lit 3 places", "Armoire 2 portes", "Grande armoire", "Bureau", "Table à manger"] },
    { name: "quantite", label: "Quantité", type: "number" },
  ],
  "Démontage des meubles": [
    { name: "meuble", label: "Type de meuble", type: "select", options: ["Lit 2 places", "Lit 3 places", "Armoire 2 portes", "Grande armoire", "Bureau", "Table à manger"] },
    { name: "quantite", label: "Quantité", type: "number" },
  ],
};

const STORAGE_KEY = "gespeed-devis";

const getInitialState = () => {
  const empty = { service: "", form: { name: "", email: "", phone: "", date: "" }, step: 0, isClicked: false };
  if (typeof window === "undefined") return empty;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return empty;
  try {
    const data = JSON.parse(saved);
    return { service: data.service || "", form: { ...empty.form, ...(data.form || {}) }, step: data.step || 0, isClicked: data.isClicked || false };
  } catch { return empty; }
};

//style de chqe input
const inputCls = `
  w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-slate-800
  outline-none transition-all duration-150
  focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10
  placeholder:text-slate-400
`.replace(/\s+/g, " ").trim();

const labelCls = "mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-slate-400";

/* ── Right decorative panel ── */
function RightPanel({ service }) {
  const badges = ["Simple", "Gratuit", "Rapide"];
  return (
    <div className="relative hidden md:flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 p-9">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      {/* Rings */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full border border-blue-400/10" />
      <div className="pointer-events-none absolute -top-28 -right-28 w-96 h-96 rounded-full border border-blue-400/[0.06]" />
      <div className="pointer-events-none absolute bottom-10 -left-12 w-44 h-44 rounded-full border border-blue-400/10" />

      <div className="relative z-10">
        <span className="inline-block mb-3 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300 tracking-widest uppercase">
          Gespeed Logistics
        </span>
        <h2 className="text-2xl font-bold leading-snug text-white">
          Demande de
          <br />
          <span className="underline decoration-blue-400 underline-offset-4">devis gratuit</span>
        </h2>
        <p className="mt-3 text-sm text-white/50 leading-relaxed">
          Obtenez une estimation personnalisée pour votre service en quelques instants.
        </p>
      </div>

      <div className="relative z-10 space-y-3 mt-4">
        {badges.map((b) => (
          <div key={b} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-400/20 border border-blue-400/20">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-blue-300 fill-none stroke-2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-sm font-medium text-white">{b}</span>
          </div>
        ))}
      </div>

        <div className="mt-4">
          <p className="font-bold text-white"> Abréviations</p>
          <ul className="px-2 text-white/50 leading-relaxed text-sm">
            <li>RDC: Rez-de-chaussée</li>
            <li>CHSDTC: Chambre Salon Douche Toilette Cuisine </li>
            <li>R: Niveau</li>
          </ul>
        </div>

      {service && (
        <div className="relative z-10 mt-6 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
          <p className="text-[11px] uppercase tracking-widest text-white/40 mb-1">Service sélectionné</p>
          <p className="text-sm font-semibold text-white">{service}</p>
        </div>
      )}
    </div>
  );
}


function ProgressBar({ current, total }) {
  const pct = total > 1 ? Math.round(((current) / (total - 1)) * 100) : 100;
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Progression</span>
        <span className="text-[11px] font-semibold text-blue-900">{pct}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-blue-900 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function DevisRegister() {
  const initialState = getInitialState();
  const [service, setService] = useState(initialState.service);
  const [form, setForm] = useState(initialState.form);
  const [step, setStep] = useState(initialState.step);
  const [isClicked, setClick] = useState(initialState.isClicked);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ service, form, step, isClicked }));
  }, [service, form, step, isClicked]);

  const questions = champServices[service] || [];
  const questionsParEtape = 4;
  const start = step * questionsParEtape;
  const currentQuestions = questions.slice(start, start + questionsParEtape);
  const isLastStep = start + questionsParEtape >= questions.length;
  const totalSteps = Math.ceil(questions.length / questionsParEtape);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleServiceChange = (e) => { setService(e.target.value); setStep(0); };
  const handleNextIntro = () => { if (!service) return; setStep(0); setClick(true); };
  const handleBack = () => { setStep(0); setClick(false); };
  const handleSubmit = (e) => { e.preventDefault(); console.log(form); };

  return (
    <section className="w-full px-4 py-8 md:py-16 md:px-8">
      <div className="mx-auto w-full max-w-5xl overflow-hidden mt-16 md:mt-8 rounded-2xl border border-gray-200 shadow-xl md:grid md:grid-cols-2">

        <div className="bg-white">
          {/* Mobile header*/}
          <div className="flex items-center justify-between px-5 pt-4 md:hidden">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900">Gespeed</span>
            <span className="rounded-full bg-blue-900/10 px-3 py-1 text-[11px] font-semibold text-blue-900">
              Devis gratuit
            </span>
          </div>

          <form onSubmit={handleSubmit} className="px-5 py-6 md:px-8 md:py-9">

            {/* ── Step 0: Coordonnées + service ── */}
            {!isClicked && (
              <div>
                <h1 className="text-xl font-bold text-slate-800">Vos informations</h1>
                <p className="mb-5 mt-1 text-xs text-slate-400">Remplissez vos coordonnées pour commencer</p>

                <div className="space-y-4">
                  <div>
                    <label className={labelCls}>Nom complet</label>
                    <input
                      name="name" type="text" value={form.name} onChange={handleChange}
                      placeholder="Jean Mouanda" className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Email</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="exemple@email.com" className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Téléphone</label>
                    <input
                      name="phone" type="text" value={form.phone} onChange={handleChange}
                      placeholder="+242 06 ..." className={inputCls}
                    />
                  </div>

                  {/* Divider */}
                  <div className="pt-1 pb-1">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-gray-100" />
                      <span className="text-[11px] uppercase tracking-widest text-slate-400">Service & date</span>
                      <div className="flex-1 h-px bg-gray-100" />
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Date souhaitée</label>
                    <input
                      type="date" name="date" value={form.date} onChange={handleChange}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Type de service</label>
                    <select name="services" value={service} onChange={handleServiceChange} className={inputCls}>
                      <option value="">Choisir un service</option>
                      {Services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={handleNextIntro}
                    disabled={!service}
                    className="mt-2 w-full rounded-xl bg-blue-900 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continuer →
                  </button>
                </div>
              </div>
            )}

            {/* step1*/}
            {isClicked && (
              <div>

                <button
                  type="button"
                  onClick={step > 0 ? () => setStep((p) => p - 1) : handleBack}
                  className="mb-4 flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-blue-900 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                  Retour
                </button>

                <div className="mb-1 flex items-center justify-between">
                  <h1 className="text-xl font-bold text-slate-800">Détails du service</h1>
                  {totalSteps > 1 && (
                    <span className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
                      {step + 1}/{totalSteps}
                    </span>
                  )}
                </div>

                {/* Service badge */}
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-blue-900/20 bg-blue-900/5 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-900" />
                  <span className="text-xs font-semibold text-blue-900">{service}</span>
                </div>

                {totalSteps > 1 && <ProgressBar current={step} total={totalSteps} />}

                <div className="space-y-4">
                  {currentQuestions.map((c) => (
                    <div key={c.name}>
                      <label htmlFor={c.name} className={labelCls}>{c.label}</label>
                      {c.type === "select" ? (
                        <select id={c.name} name={c.name} value={form[c.name] || ""} onChange={handleChange} className={inputCls}>
                          <option value="">Choisir</option>
                          {c.options.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      ) : (
                        <input
                          type={c.type} id={c.name} name={c.name}
                          value={form[c.name] || ""} onChange={handleChange}
                          className={inputCls}
                          placeholder={c.type === "number" ? "0" : ""}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  {!isLastStep ? (
                    <button
                      type="button"
                      onClick={() => setStep((p) => p + 1)}
                      className="w-full rounded-xl bg-blue-900 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 active:scale-[0.98]"
                    >
                      Suivant →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-blue-900 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 active:scale-[0.98]"
                    >
                      Demander un devis
                    </button>
                  )}
                </div>
              </div>
            )}
          </form>
        </div>

        {/* ── Right: Decorative panel (desktop only) ── */}
        <RightPanel service={service} />
      </div>
    </section>
  );
}