import { FaShieldAlt, FaHeadset, FaTruck, FaSmile } from "react-icons/fa";

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
    <section className="mb-12 md:mt-0">
      <div className="px-6 md:px-12 py-8">
        <h2 className="md:text-2xl text-xl font-bold mb-3 text-center mt-5">
          Pourquoi choisir GeSpeed ?
        </h2>
        <p className="text-gray-500 mb-12 text-center text-md md:text-lg">
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
                      <Icon className="text-blue-900 text-xl md:text-2xl" />
                    </div>

                    <h3 className="text-md md:text-xl font-bold">
                      {feature.title}
                      {feature.titleExtra && (
                        <span className="ml-2 text-xl font-bold hidden md:inline">
                          {feature.titleExtra}
                        </span>
                      )}
                    </h3>
                  </div>

                  <p className="text-gray-700 font-light mb-3 md:text-lg text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  <p className="text-blue-700 font-semibold cursor-pointer md:text-md text-sm">
                    En savoir plus <i className="fa-solid fa-chevron-right"></i>
                  </p>
                </div>
              );
            })}
          </div>

          <div className="w-full md:w-[40%]">
            <div className="bg-blue-900 rounded-lg pt-6 pb-3 md:pb-0 px-6 text-white h-full">
              <h2 className="font-light mb-6 text-md md:text-lg leading-8 ">
                Choisir GeSpeed Delivery pour votre déménagement, c'est s'assurer d'un service de qualité supérieure avec une expertise de plus 2 ans dans le secteur. Nous comprenons que chaque déménagement est unique, c'est pourquoi nous proposons des solutions sur mesure adaptées à vos besoins spécifiques. De la planification minutieuse à l'installation finale, nos équipes professionnelles et dévouées vous accompagnent à chaque étape pour garantir une expérience sans stress et parfaiement orchestréé.
              </h2> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
