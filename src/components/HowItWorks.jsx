import { FaRegClipboard, FaList, FaTruck } from "react-icons/fa6";

const steps = [
  {
    number: 1,
    icon: <FaRegClipboard />,
    title: "Demandez un devis",
    description:
      "Remplissez un formulaire simple avec les détails de votre besoin (adresse de départ et d'arrivée, type de service, date et volume).",
  },
  {
    number: 2,
    icon: <FaList />,
    title: "Choisissez votre offre",
    description:
      "Consultez les options proposées et sélectionnez celle qui vous convient (véhicule adapté, prix selon votre budget).",
  },
  {
    number: 3,
    icon: <FaTruck />,
    title: "Réservez & suivez",
    description:
      "Validez votre réservation et suivez votre service en temps réel avec paiement sécurisé, confirmation immédiate et tracking.",
  },
];

export default function HowItWorks() {
  return (
    <section>
      <div className="px-6 md:px-12 pt-8 mb-14 pb-12">
        <h2 className="text-2xl font-bold lg:mt-6 text-center">
          Comment ça marche
        </h2>
        <p className="text-gray-500 mb-12 text-center mt-3 text-lg">
          Déménager n'a jamais été aussi simple et transparent.
        </p>

        <div className="flex flex-col md:flex-row justify-around gap-6 md:gap-0 px-0 md:px-6 text-lg">
          {steps.map((step) => (
            <div key={step.number}>

              <div className="w-full md:size-64 md:[clip-path:polygon(0_25%,100%_35%,100%_86%,0%_100%)]  h-16 bg-gray-200 relative flex md:gap-0 md:justify-center items-center rounded-lg md:divide-x-0 px-4 md:ps-0">
                {/* mobile number badge */}
                <div className="md:hidden size-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {step.number}
                </div>
                <div className="flex items-center justify-around w-full">
                  <h3 className="font-bold text-center md:hidden">
                    {step.title}
                  </h3>
                  <p className="md:text-5xl text-3xl text-blue-900 md:mt-12">
                    {step.icon}
                  </p>
                </div>
              </div>

              {/* mobile etape description  */}
              <div className="w-full md:hidden mt-2">
                <p className="text-justify text-[18px]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

{/* Desktop */}
        <div className="hidden md:block w-full px-6 bg-gray-300 h-2 mt-8 relative"></div>


        <div className="hidden md:flex justify-around -translate-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="size-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold"
            >
              {step.number}
            </div>
          ))}
        </div>

        {/* Desktop: text descriptions */}
        <div className="hidden md:flex justify-around gap-12 mt-0">
          {steps.map((step) => (
            <div key={step.number} className="w-96">
              <h3 className="font-bold text-center mb-3">{step.title}</h3>
              <p className="text-justify text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
