import { FaShieldAlt, FaHeadset, FaTruck, FaSmile } from "react-icons/fa";

const stats = [
  {
    number:80,
    type:"Déménagements"
  },
  {
    number:25,
    type:"Transports"
  },
  {
    number:4,
    type:"Nettoyage d'habitat"
  },
  {
    number:'98%',
    type:"Satisfaction"
  }
];

const features = [
  {
    icon: FaShieldAlt,
    title: "Fiabilité",
    description:
      "Nos protocoles de sécurité rigoureux garantissent que vos biens arrivent intacts, à chaque fois. Nous traitons chaque colis avec soin et attention.",
  },
  {
    icon: FaHeadset,
    title: "Service client",
    titleExtra: "exceptionnel",
    description:
      "Notre équipe dédiée est toujours prête à vous aider en vous fournissant un support personnalisé et réactif.",
  },
];

export default function WhyUs() {

  return (
    <section className="mt-32 mb-12 md:mt-0">
      <div className="px-6 md:px-12 py-8">
        <h2 className="text-2xl font-bold mb-3 text-center mt-5">
          Pourquoi choisir GeSpeed ?
        </h2>
        <p className="text-gray-500 mb-12 text-center text-lg">
          L'excellence opérationnelle à chaque kilomètre.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-[60%] rounded-lg bg-white py-6 px-6 border border-gray-200 space-y-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;

              return (
                <div key={idx}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <Icon className="text-blue-900 text-2xl" />
                    </div>

                    <h3 className="text-xl font-bold">
                      {feature.title}
                      {feature.titleExtra && (
                        <span className="ml-2 text-xl font-bold hidden md:inline">
                          {feature.titleExtra}
                        </span>
                      )}
                    </h3>
                  </div>

                  <p className="text-gray-700 font-light mb-3">
                    {feature.description}
                  </p>

                  <p className="text-blue-700 font-semibold cursor-pointer">
                    En savoir plus <i className="fa-solid fa-chevron-right"></i>
                  </p>
                </div>
              );
            })}
          </div>

          <div className="w-full md:w-[40%]">
            <div className="bg-blue-900 rounded-lg py-6 px-6 text-white h-full">
              <h2 className="font-light mb-6 text-lg lg:text-xl">
                Plus de 2000 personnes au Congo Brazzaville nous font confiance,
                nos statistiques le prouvent.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 rounded-lg p-4"
                  >
                      <div className="grid justify-items-center content-center font-medium text-sm border-b border-white/10 pb-2 last:border-none md:h-16">
                        <h2 class="md:text-3xl text-white">{stat.number}</h2>
                        <p class="font-medium text-white">{stat.type}</p>
                      </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}