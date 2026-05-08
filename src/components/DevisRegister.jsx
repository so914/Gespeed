import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function DevisRegister() {
  const STORAGE_KEY = "gespeed-devis";

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
      {
        name: "villeD",
        label: "Ville de départ",
        type: "select",
        options: ["Brazzaville", "Pointe-Noire"],
      },
      {
        name: "adresseD",
        label: "Adresse de départ",
        type: "text",
      },
      {
        name: "villeA",
        label: "Ville d'arrivée",
        type: "select",
        options: ["Brazzaville", "Pointe-Noire"],
      },
      {
        name: "adresseA",
        label: "Adresse d'arrivée",
        type: "text",
      },
    ],

    Déménagement: [
      {
        name: "villeD",
        label: "Ville de départ",
        type: "select",
        options: ["Brazzaville", "Pointe-Noire"],
      },
      {
        name: "adresseD",
        label: "Adresse de départ",
        type: "text",
      },
      {
        name: "villeA",
        label: "Ville d'arrivée",
        type: "select",
        options: ["Brazzaville", "Pointe-Noire"],
      },
      {
        name: "adresseA",
        label: "Adresse d'arrivée",
        type: "text",
      },
      {
        name: "typeLogement",
        label: "Type de logement",
        type: "select",
        options: ["Appartement", "Maison basse", "Duplex"],
      },
      {
        name: "niveau",
        label: "Niveau",
        type: "select",
        options: ["RDC", "R+1", "R+2", "R+3"],
      },
      {
        name: "pieces",
        label: "Nombre de pièces",
        type: "select",
        options: ["CHSDTC", "2 CHSDTC", "3 CHSDTC", "4 CHSDTC"],
      },
    ],

    "Déménagement + Manutention": [
      {
        name: "villeD",
        label: "Ville de départ",
        type: "select",
        options: ["Brazzaville", "Pointe-Noire"],
      },
      {
        name: "adresseD",
        label: "Adresse de départ",
        type: "text",
      },
      {
        name: "villeA",
        label: "Ville d'arrivée",
        type: "select",
        options: ["Brazzaville", "Pointe-Noire"],
      },
      {
        name: "adresseA",
        label: "Adresse d'arrivée",
        type: "text",
      },
      {
        name: "typeLogement",
        label: "Type de logement",
        type: "select",
        options: ["Appartement", "Maison basse", "Duplex"],
      },
      {
        name: "niveau",
        label: "Niveau",
        type: "select",
        options: ["RDC", "R+1", "R+2", "R+3"],
      },
      {
        name: "meuble",
        label: "Type de meuble",
        type: "select",
        options: [
          "Canapé 3 places",
          "Canapé 2 places",
          "Canapé 1 place",
          "Lit 2 places",
          "Lit 3 places",
          "Armoire 2 portes",
          "Grande armoire",
          "Bureau",
          "Table basse",
          "Petit meuble TV",
          "Grand meuble TV",
        ],
      },
      {
        name: "quantite",
        label: "Quantité",
        type: "number",
      },
    ],

    Déballage: [
      {
        name: "pieces",
        label: "Nombre de pièces",
        type: "select",
        options: ["CHSDTC", "2 CHSDTC", "3 CHSDTC", "4 CHSDTC"],
      },
      {
        name: "cartons",
        label: "Nombre de cartons",
        type: "number",
      },
    ],

    Emballage: [
      {
        name: "pieces",
        label: "Nombre de pièces",
        type: "select",
        options: ["CHSDTC", "2 CHSDTC", "3 CHSDTC", "4 CHSDTC"],
      },
      {
        name: "cartons",
        label: "Nombre de cartons",
        type: "number",
      },
      {
        name: "fragile",
        label: "Emballage fragile",
        type: "select",
        options: ["Oui", "Non"],
      },
    ],

    Nettoyage: [
      {
        name: "typeLogement",
        label: "Type de logement",
        type: "select",
        options: ["Appartement", "Maison basse", "Duplex"],
      },
      {
        name: "pieces",
        label: "Nombre de pièces",
        type: "select",
        options: ["CHSDTC", "2 CHSDTC", "3 CHSDTC", "4 CHSDTC"],
      },
      {
        name: "moquette",
        label: "Présence de moquette",
        type: "select",
        options: ["Oui", "Non"],
      },
    ],

    "Montage des meubles": [
      {
        name: "meuble",
        label: "Type de meuble",
        type: "select",
        options: [
          "Lit 2 places",
          "Lit 3 places",
          "Armoire 2 portes",
          "Grande armoire",
          "Bureau",
          "Table à manger",
        ],
      },
      {
        name: "quantite",
        label: "Quantité",
        type: "number",
      },
    ],

    "Démontage des meubles": [
      {
        name: "meuble",
        label: "Type de meuble",
        type: "select",
        options: [
          "Lit 2 places",
          "Lit 3 places",
          "Armoire 2 portes",
          "Grande armoire",
          "Bureau",
          "Table à manger",
        ],
      },
      {
        name: "quantite",
        label: "Quantité",
        type: "number",
      },
    ],
  };

  const getInitialState = () => {
    const empty = {
      service: "",
      form: {
        name: "",
        surname: "",
        email: "",
        phone: "",
        date: "",
      },
      step: 0,
      isClicked: false,
    };

    if (typeof window === "undefined") return empty;

    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return empty;

    try {
      const data = JSON.parse(saved);

      return {
        service: data.service || "",
        form: {
          ...empty.form,
          ...(data.form || {}),
        },
        step: data.step || 0,
        isClicked: data.isClicked || false,
      };
    } catch {
      return empty;
    }
  };

  const initialState = getInitialState();

  const [service, setService] = useState(initialState.service);
  const [form, setForm] = useState(initialState.form);
  const [step, setStep] = useState(initialState.step);
  const [isClicked, setClick] = useState(initialState.isClicked);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        service,
        form,
        step,
        isClicked,
      })
    );
  }, [service, form, step, isClicked]);

  const questions = champServices[service] || [];
  const questionsParEtape = 4;

  const start = step * questionsParEtape;
  const currentQuestions = questions.slice(start, start + questionsParEtape);
  const isLastStep = start + questionsParEtape >= questions.length;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (e) => {
    setService(e.target.value);
    setStep(0);
  };

  const handleNextIntro = () => {
    if (!service) return;
    setStep(0);
    setClick(true);
  };

  const handleBack = () => {
    setStep(0);
    setClick(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="shadow-xl rounded-lg md:min-w-5xl md:mx-12 w-full mx-2 h-[480px] md:h-[580px] md:mb-16 mt-18 overflow-hidden">
      <div className="grid md:grid-cols-2 h-full">
        <form
          onSubmit={handleSubmit}
          className="h-full overflow-y-auto flex flex-col"
        >
          {!isClicked && (
            <div className="md:px-7 px-4 flex flex-col h-full">
              <div>
                <h3 className="md:mb-3 mt-12 mb-0 md:mt-4 font-bold text-gray-600 text-sm md:text-md">
                  Vos coordonnées
                </h3>

                <label htmlFor="name" className="text-gray-400 text-sm md:text-md">
                  Nom complet
                </label>
                <br />
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="my-1 rounded-md md:rounded-lg border border-[lightgray] pt-1 md:p-2 w-full"
                />

                <label htmlFor="email" className="text-gray-400 text-sm md:text-md">
                  Email
                </label>
                <br />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="my-1 rounded-md md:rounded-lg border border-[lightgray] pt-1 md:p-2 w-full"
                />

                <label htmlFor="phone" className="text-gray-400 text-sm md:text-md">
                  Phone
                </label>
                <br />
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={form.phone}
                  onChange={handleChange}
                  className="my-1 rounded-md md:rounded-lg border border-[lightgray] pt-1 md:p-2 w-full"
                />

                <div className="md:mt-6 mt-3">
                  <h3 className="font-bold md:mb-4 mb-2 text-gray-600 text-sm md:text-md">
                    Date souhaitée pour le service
                  </h3>

                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="rounded-md md:rounded-lg border border-[lightgray] text-sm md:text-md p-1 md:p-2 w-full text-gray-400"
                  />
                </div>

                <div className="md:mt-6 mt-3">
                  <h3 className="font-bold md:mb-4 mb-2 text-gray-600 text-sm md:text-md">
                    Type de service
                  </h3>

                  <select
                    name="services"
                    value={service}
                    onChange={handleServiceChange}
                    className="border rounded-md md:rounded-lg border-[lightgray] text-sm md:text-md py-1 px-2 md:p-2 w-full text-gray-400"
                  >
                    <option value="">Choisir un service</option>

                    {Services.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  className="bg-blue-900 rounded-lg px-4 py-2 text-white w-full"
                  onClick={handleNextIntro}
                >
                  Suivant
                </button>
              </div>
            </div>
          )}

          {isClicked && (
            <div className="ps-7 pe-7 py-6 flex flex-col h-full">
              <div>
                <h2
                  onClick={handleBack}
                  className="mb-4 cursor-pointer text-gray-600 flex"
                >
                  <IoIosArrowRoundBack size={26}/> Retour
                </h2>

                <h3 className="font-bold text-sm md:text-md md:mb-4 mb-2 text-gray-600">
                  Détails service {service}
                </h3>

                {currentQuestions.map((c) => (
                  <div key={c.name} className="mb-3">
                    <label htmlFor={c.name} className="text-gray-400 text-sm md:text-md">
                      {c.label}
                    </label>
                    <br />

                    {c.type === "select" ? (
                      <select
                        name={c.name}
                        id={c.name}
                        value={form[c.name] || ""}
                        onChange={handleChange}
                        className="border my-1 rounded-md md:rounded-lg border-[lightgray] text-sm md:text-md py-1 px-2 md:p-2 w-full text-gray-400"
                      >
                        <option value="">Choisir</option>

                        {c.options.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={c.type}
                        name={c.name}
                        id={c.name}
                        value={form[c.name] || ""}
                        onChange={handleChange}
                        className="border my-1 rounded-md md:rounded-lg border-[lightgray] text-sm md:text-md p-1 md:p-2 w-full"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-4 flex gap-3">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep((prev) => prev - 1)}
                    className="border rounded-lg px-4 py-2 border-[lightgray]"
                  >
                    Précédent
                  </button>
                )}

                {!isLastStep ? (
                  <button
                    type="button"
                    onClick={() => setStep((prev) => prev + 1)}
                    className="bg-blue-900 rounded-lg px-4 py-2 text-white w-full"
                  >
                    Suivant
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-blue-900 rounded-lg px-4 py-2 text-white w-full"
                  >
                    Demander un devis
                  </button>
                )}
              </div>
            </div>
          )}
        </form>

        <div className="bg-blue-900 rounded-l-full relative justify-items-center md:grid hidden h-full">
          <img
            src="./phone.png"
            alt="service client"
            className="w-95 bottom-0 absolute"
          />

          <div className="text-white absolute top-9 right-6">
            <h2 className="text-center text-xl uppercase font-semibold">
              Demande de devis
            </h2>

            <div className="text-center">
              <ul>
                <li>Simple</li>
                <li>Gratuit</li>
                <li>Rapide</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}