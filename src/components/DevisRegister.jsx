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
    { name: "meubles", label: "Meubles & quantités", type: "checkbox-qty", options: ["Canapé 3 places", "Canapé 2 places", "Canapé 1 place", "Lit 2 places", "Lit 3 places", "Armoire 2 portes", "Grande armoire", "Bureau", "Table basse", "Petit meuble TV", "Grand meuble TV"] },
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
    { name: "meubles", label: "Meubles & quantités", type: "checkbox-qty", options: ["Lit 2 places", "Lit 3 places", "Armoire 2 portes", "Grande armoire", "Bureau", "Table à manger"] },
  ],
  "Démontage des meubles": [
    { name: "meubles", label: "Meubles & quantités", type: "checkbox-qty", options: ["Lit 2 places", "Lit 3 places", "Armoire 2 portes", "Grande armoire", "Bureau", "Table à manger"] },
  ],
};

const PROPOSE_APRES_DEMENAGEMENT = ["Déballage", "Emballage", "Nettoyage", "Montage des meubles", "Démontage des meubles"];
const SANS_PROPOSITION = ["Transport", "Déménagement + Manutention"];

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
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full border border-blue-400/10" />
      <div className="pointer-events-none absolute -top-28 -right-28 w-96 h-96 rounded-full border border-blue-400/[0.06]" />
      <div className="pointer-events-none absolute bottom-10 -left-12 w-44 h-44 rounded-full border border-blue-400/10" />

      <div className="relative z-10">
        <span className="inline-block mb-3 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300 tracking-widest uppercase">
          Gespeed Logistics
        </span>
        <h2 className="text-2xl font-bold leading-snug text-white flex">
          Demande de
          <br />
          <span className="ps-2 underline decoration-blue-600 underline-offset-8">devis gratuit</span>
        </h2>
        <p className="mt-3 text-sm text-white/50 leading-relaxed">
          Obtenez une estimation personnalisée pour votre service en quelques instants.
        </p>
      </div>

      <div className="relative z-10 space-y-3">
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

      <div>
        <p className="font-bold text-white">Abréviations</p>
        <ul className="px-2 text-white/50 leading-relaxed text-sm">
          <li>RDC: Rez-de-chaussée</li>
          <li>CHSDTC: Chambre Salon Douche Toilette Cuisine</li>
          <li>R: Niveau</li>
        </ul>
      </div>

      {service && (
        <div className="relative z-10 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
          <p className="text-[11px] uppercase tracking-widest text-white/40 mb-1">Service sélectionné</p>
          <p className="text-sm font-semibold text-white">{service}</p>
        </div>
      )}
    </div>
  );
}

function ProgressBar({ current, total }) {
  const pct = total > 1 ? Math.round((current / (total - 1)) * 100) : 100;
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

/* ── Checkbox + quantité par item ── */
// value = { "Lit 2 places": 2, "Bureau": 1, ... }  (absent = non coché)
function CheckboxQty({ champ, value = {}, onChange }) {
  const toggle = (opt) => {
    const next = { ...value };
    if (next[opt] !== undefined) {
      delete next[opt];
    } else {
      next[opt] = 1;
    }
    onChange(next);
  };

  const setQty = (opt, qty) => {
    const num = Math.max(1, parseInt(qty) || 1);
    onChange({ ...value, [opt]: num });
  };

  return (
    <div>
      <label className={labelCls}>{champ.label}</label>
      <div className="grid grid-cols-2 gap-2 mt-1">
        {champ.options.map((opt) => {
          const checked = value[opt] !== undefined;
          return (
            <div
              key={opt}
              className={`rounded-xl border transition-all duration-150 overflow-hidden ${
                checked ? "border-blue-900 bg-blue-900/5" : "border-gray-200 bg-white"
              }`}
            >
              {/* Row: checkbox + label */}
              <label className="flex items-center gap-2 px-3 pt-2.5 pb-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(opt)}
                  className="accent-blue-900 w-4 h-4 shrink-0"
                />
                <span className={`text-xs font-medium leading-tight ${checked ? "text-blue-900" : "text-slate-700"}`}>
                  {opt}
                </span>
              </label>
              {/* Qty row — visible only when checked */}
              {checked && (
                <div className="flex items-center gap-1.5 px-3 pb-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 shrink-0">Qté</span>
                  <div className="flex items-center border border-blue-900/30 rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQty(opt, (value[opt] || 1) - 1)}
                      className="w-6 h-6 flex items-center justify-center text-blue-900 font-bold text-sm hover:bg-blue-900/10 transition-colors"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={value[opt] || 1}
                      onChange={(e) => setQty(opt, e.target.value)}
                      className="w-8 text-center text-xs font-bold text-blue-900 bg-transparent border-none outline-none py-1"
                    />
                    <button
                      type="button"
                      onClick={() => setQty(opt, (value[opt] || 1) + 1)}
                      className="w-6 h-6 flex items-center justify-center text-blue-900 font-bold text-sm hover:bg-blue-900/10 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Champ générique ── */
function ChampFormulaire({ champ, value, onChange }) {
  if (champ.type === "checkbox-qty") {
    return <CheckboxQty champ={champ} value={value || {}} onChange={onChange} />;
  }

  if (champ.type === "select") {
    return (
      <div>
        <label className={labelCls}>{champ.label}</label>
        <select
          name={champ.name}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          className={inputCls}
        >
          <option value="">Choisir</option>
          {champ.options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
    );
  }

  return (
    <div>
      <label className={labelCls}>{champ.label}</label>
      <input
        type={champ.type}
        name={champ.name}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className={inputCls}
        placeholder={champ.type === "number" ? "0" : ""}
      />
    </div>
  );
}

/* ── Proposition de services supplémentaires ── */
function ProposeServices({ optionsDisponibles, onConfirm, onSkip }) {
  const [selectionnes, setSelectionnes] = useState([]);

  const toggle = (svc) => {
    setSelectionnes((prev) =>
      prev.includes(svc) ? prev.filter((x) => x !== svc) : [...prev, svc]
    );
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-slate-800">Ajouter un service ?</h1>
      <p className="mb-5 mt-1 text-xs md:text-sm text-slate-400">
        Souhaitez-vous compléter votre demande avec un service supplémentaire ?
      </p>

      <div className="space-y-2">
        {optionsDisponibles.map((svc) => {
          const checked = selectionnes.includes(svc);
          return (
            <label
              key={svc}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all duration-150 ${
                checked
                  ? "border-blue-900 bg-blue-900/5"
                  : "border-gray-200 bg-white hover:border-blue-900/30"
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggle(svc)}
                className="accent-blue-900 w-4 h-4 shrink-0"
              />
              <span className={`text-sm font-medium ${checked ? "text-blue-900" : "text-slate-700"}`}>
                {svc}
              </span>
            </label>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => onConfirm(selectionnes)}
        disabled={selectionnes.length === 0}
        className="mt-4 w-full rounded-xl bg-blue-900 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Continuer avec les services sélectionnés →
      </button>

      <button
        type="button"
        onClick={onSkip}
        className="mt-3 w-full rounded-xl border border-gray-200 py-3 text-sm font-semibold text-slate-500 transition hover:border-blue-900/30 hover:text-blue-900"
      >
        Non merci, envoyer ma demande
      </button>
    </div>
  );
}

/* ── Formulaire d'un service ── */
function FormulaireService({ serviceName, serviceQueue, serviceIndex, allData, onNext, onBack }) {
  const champs = champServices[serviceName] || [];
  const [data, setData] = useState(allData[serviceName] || {});

  const totalServices = serviceQueue.length;
  const isLastService = serviceIndex === totalServices - 1;

  const questionsParEtape = 4;
  const totalSteps = Math.ceil(champs.length / questionsParEtape);
  const [step, setStep] = useState(0);
  const start = step * questionsParEtape;
  const currentChamps = champs.slice(start, start + questionsParEtape);
  const isLastStep = start + questionsParEtape >= champs.length;

  const handleChange = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          if (step > 0) setStep((p) => p - 1);
          else onBack();
        }}
        className="mb-4 flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-blue-900 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Retour
      </button>

      <div className="mb-1 flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-800">Détails du service</h1>
        {totalServices > 1 && (
          <span className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
            {serviceIndex + 1}/{totalServices}
          </span>
        )}
      </div>

      <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-blue-900/20 bg-blue-900/5 px-3 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-900" />
        <span className="text-xs font-semibold text-blue-900">{serviceName}</span>
      </div>

      {totalSteps > 1 && <ProgressBar current={step} total={totalSteps} />}

      <div className="space-y-4">
        {currentChamps.map((c) => (
          <ChampFormulaire
            key={c.name}
            champ={c}
            value={data[c.name]}
            onChange={(val) => handleChange(c.name, val)}
          />
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
            type="button"
            onClick={() => onNext(serviceName, data)}
            className="w-full rounded-xl bg-blue-900 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 active:scale-[0.98]"
          >
            {isLastService ? "Demander un devis" : "Service suivant →"}
          </button>
        )}
      </div>
    </div>
  );
}

/* ── Composant principal ── */
export default function DevisRegister() {
  const [phase, setPhase] = useState("intro");
  const [info, setInfo] = useState({ name: "", email: "", phone: "", date: "", service: "" });
  const [serviceQueue, setServiceQueue] = useState([]);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [allData, setAllData] = useState({});
  const [proposeOptions, setProposeOptions] = useState([]);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleStartService = () => {
    if (!info.service) return;
    setServiceQueue([info.service]);
    setServiceIndex(0);
    setAllData({});
    setPhase("service");
  };

  const handleServiceDone = (serviceName, data) => {
    const newAllData = { ...allData, [serviceName]: data };
    setAllData(newAllData);

    const isLastInQueue = serviceIndex === serviceQueue.length - 1;

    if (!isLastInQueue) {
      setServiceIndex((i) => i + 1);
      setPhase("service");
      return;
    }

    const isDem = serviceName === "Déménagement";
    const isSansProposition = SANS_PROPOSITION.includes(serviceName);

    let opts = [];
    if (isDem) {
      opts = PROPOSE_APRES_DEMENAGEMENT;
    } else if (!isSansProposition) {
      opts = Services.filter(
        (s) =>
          !SANS_PROPOSITION.includes(s) &&
          s !== "Déménagement" &&
          !serviceQueue.includes(s)
      );
    }

    if (opts.length > 0) {
      setProposeOptions(opts);
      setPhase("propose");
    } else {
      setPhase("done");
    }
  };

  const handleProposeConfirm = (choisis) => {
    if (choisis.length === 0) { setPhase("done"); return; }
    const newQueue = [...serviceQueue, ...choisis];
    setServiceQueue(newQueue);
    setServiceIndex(serviceQueue.length);
    setPhase("service");
  };

  const handleProposeSkip = () => setPhase("done");

  const handleBack = () => {
    if (serviceIndex > 0) setServiceIndex((i) => i - 1);
    else setPhase("intro");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ info, allData });
  };

  const currentService = serviceQueue[serviceIndex];

  return (
    <section className="w-full px-4 py-8 md:py-16 md:px-8">
      <div className="mx-auto w-full max-w-5xl overflow-hidden mt-16 md:mt-8 rounded-2xl border border-gray-200 shadow-xl md:grid md:grid-cols-2">

        <div className="bg-white">
          <div className="flex items-center justify-between px-5 pt-4 md:hidden">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900">Gespeed</span>
            <span className="rounded-full bg-blue-900/10 px-3 py-1 text-[11px] font-semibold text-blue-900">
              Devis gratuit
            </span>
          </div>

          <form onSubmit={handleSubmit} className="px-5 py-6 md:px-8 md:py-9">

            {/* ── Intro ── */}
            {phase === "intro" && (
              <div>
                <h1 className="text-xl font-bold text-slate-800">Vos informations</h1>
                <p className="mb-5 mt-1 text-xs md:text-sm text-slate-400">Remplissez vos coordonnées pour commencer</p>
                <div className="space-y-4">
                  <div>
                    <label className={labelCls}>Nom complet</label>
                    <input name="name" type="text" value={info.name} onChange={handleInfoChange} placeholder="Jean Mouanda" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Email</label>
                    <input name="email" type="email" value={info.email} onChange={handleInfoChange} placeholder="exemple@email.com" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Téléphone</label>
                    <input name="phone" type="text" value={info.phone} onChange={handleInfoChange} placeholder="+242 06 ..." className={inputCls} />
                  </div>
                  <div className="pt-1 pb-1">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-gray-300" />
                      <span className="text-[11px] md:text-sm uppercase tracking-widest text-slate-900 font-bold">Service & date</span>
                      <div className="flex-1 h-px bg-gray-300" />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Date souhaitée</label>
                    <input type="date" name="date" value={info.date} onChange={handleInfoChange} className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Type de service</label>
                    <select name="service" value={info.service} onChange={handleInfoChange} className={inputCls}>
                      <option value="">Choisir un service</option>
                      {Services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <button
                    type="button"
                    onClick={handleStartService}
                    disabled={!info.service}
                    className="mt-2 w-full rounded-xl bg-blue-900 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continuer →
                  </button>
                </div>
              </div>
            )}

            {/* ── Service ── */}
            {phase === "service" && currentService && (
              <FormulaireService
                key={currentService + serviceIndex}
                serviceName={currentService}
                serviceQueue={serviceQueue}
                serviceIndex={serviceIndex}
                allData={allData}
                onNext={handleServiceDone}
                onBack={handleBack}
              />
            )}

            {/* ── Proposition ── */}
            {phase === "propose" && (
              <ProposeServices
                optionsDisponibles={proposeOptions}
                onConfirm={handleProposeConfirm}
                onSkip={handleProposeSkip}
              />
            )}

            {/* ── Done ── */}
            {phase === "done" && (
              <div className="text-center py-8">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mx-auto mb-4">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-green-600 fill-none stroke-2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-2">Demande envoyée !</h2>
                <p className="text-sm text-slate-400 mb-6">
                  Notre équipe vous contactera rapidement pour confirmer votre devis.
                </p>
                <div className="text-left bg-blue-900/5 border border-blue-900/10 rounded-xl p-4 mb-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 mb-2">Services demandés</p>
                  <div className="flex flex-wrap gap-2">
                    {serviceQueue.map((s) => (
                      <span key={s} className="inline-flex items-center gap-1.5 rounded-full border border-blue-900/20 bg-blue-900/5 px-3 py-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-900" />
                        <span className="text-xs font-semibold text-blue-900">{s}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setPhase("intro");
                    setInfo({ name: "", email: "", phone: "", date: "", service: "" });
                    setServiceQueue([]);
                    setServiceIndex(0);
                    setAllData({});
                  }}
                  className="w-full rounded-xl border border-gray-200 py-3 text-sm font-semibold text-slate-500 hover:border-blue-900/30 hover:text-blue-900 transition"
                >
                  Nouvelle demande
                </button>
              </div>
            )}

          </form>
        </div>

        <RightPanel service={currentService || info.service} />
      </div>
    </section>
  );
}
