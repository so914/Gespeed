import { FaBox, FaFileInvoiceDollar, FaLock, FaBroom } from "react-icons/fa6";

const services = [
  {
    icon: <FaBox />,
    title: "Déménagement complet",
    description: "Déplacez vos biens en toute sécurité, sans stress.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Devis instantané",
    description: "Obtenez une estimation claire en quelques clics.",
  },
  {
    icon: <FaLock />,
    title: "Réservation sécurisée",
    description: "Réservez en toute confiance avec paiement sécurisé.",
  },
  {
    icon: <FaBroom />,
    title: "Nettoyage & réhabilitation",
    description:
      "Remettez votre habitat en état avec nos services de nettoyage.",
  },
];

export default function Services() {
  return (
    <>
      {/* Mobile header */}
      <section>
        <div className="md:hidden px-6 mb-12 -translate-y-36 my-32 pb-8">
          <h2 className="text-2xl font-bold mb-4 my-[2rem] text-center text-blue-800">
            Nos Services
          </h2>
          <p className="text-gray-900 text-lg text-justify">
            Des solutions simples, rapides et fiables pour tous vos besoins de
            transport et déménagement.
          </p>
        </div>
      </section>

      {/* Desktop section */}
      <section className="relative mt-64 md:mt-0">
        <div className="px-6 md:px-12 pt-[8rem] pb-56 bg-blue-950 -translate-y-[200px] md:-translate-y-8" style={{
    clipPath: "polygon(0 0, 100% 36%, 100% 99%, 0 66%)"
  }}>
          <h2 className="text-xl text-center md:text-3xl text-white font-bold mb-4 md:mt-[2rem] my-[2rem] hidden md:block">
            Nos Services
          </h2>
          <p className="text-gray-300 mb-12 text-center hidden md:block">
            Des solutions simples, rapides et fiables pour tous vos besoins de
            transport et déménagement.
          </p>
        </div>


        <div className="w-full flex items-center justify-center absolute bottom-0 gap-8 md:-translate-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-6xl">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-md px-3 shadow-md hover:shadow-xl transition py-10"
              >
                <div className="grid content-center text-center">
                  <p className="size-12 rounded-full text-white bg-gray-700 flex justify-center items-center mx-auto">
                    {service.icon}
                  </p>
                  <h3 className="mt-3 font-bold mb-2 text-lg md:text-[17px]">
                    {service.title}
                  </h3>
                  <p className="text-lg md:text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
