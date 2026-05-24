import {
  ShieldCheck,
  Lock,
  FileText,
  User,
  Truck,
  Mail,
  Database,
  MapPin,
} from "lucide-react";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


export default function PolitiqueConf() {
  const sections = [
    {
      title: "Informations collectées",
      content: (
        <>
          <p className="text-slate-600 leading-8">
            Lors de votre inscription sur GeSpeed Delivery, nous collectons
            certaines informations nécessaires au fonctionnement du service.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-5">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                Création de compte
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Nom</li>
                <li>• Prénom</li>
                <li>• Adresse email</li>
                <li>• Numéro de téléphone</li>
                <li>• Ville</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <h4 className="font-semibold text-slate-900 mb-2">
                Demande de devis
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Adresse de départ</li>
                <li>• Adresse d’arrivée</li>
                <li>• Ville de départ</li>
                <li>• Ville d’arrivée</li>
                <li>• Informations liées au déménagement</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Utilisation des données",
      content: (
        <ul className="space-y-3 text-slate-600 leading-7 md:grid md:grid-cols-2">
          <li>• Création et gestion de votre compte</li>
          <li>• Réponse à vos demandes de devis</li>
          <li>• Organisation des services de déménagement</li>
          <li>• Communication concernant votre demande</li>
          <li>• Sécurisation de notre plateforme</li>
          <li>• Prévention des abus et fraudes</li>
        </ul>
      ),
    },
    {
      title: "Paiement des services",
      content: (
        <p className="text-slate-600 leading-8">
          Les prestations GeSpeed Delivery sont actuellement payées{" "}
          <span className="font-semibold text-blue-700">
            en espèces (cash)
          </span>
          . Aucune donnée bancaire ou de carte de paiement n’est collectée via
          notre plateforme.
        </p>
      ),
    },
    {
      title: "Protection et sécurité",
      content: (
        <p className="text-slate-600 leading-8">
          Nous mettons en place des mesures raisonnables afin de protéger vos
          informations personnelles contre tout accès non autorisé,
          modification, perte ou divulgation.
        </p>
      ),
    },
    {
      title: "Géolocalisation",
      content: (
        <p className="text-slate-600 leading-8">
          GeSpeed Delivery n’utilise actuellement aucun système GPS ou
          géolocalisation pour le suivi des utilisateurs.
        </p>
      ),
    },
    {
      title: "Cookies",
      content: (
        <p className="text-slate-600 leading-8">
          À ce jour, GeSpeed Delivery n’utilise pas de cookies de suivi ou
          d’analyse. Toute évolution future sera ajoutée dans cette politique
          de confidentialité.
        </p>
      ),
    },
    {
      title: "Vos droits",
      content: (
        <ul className="space-y-3 text-slate-600 leading-7">
          <li>• Accéder à vos données personnelles</li>
          <li>• Corriger des informations inexactes</li>
          <li>• Demander la suppression de certaines données</li>
          <li>• Limiter l’utilisation de vos données</li>
        </ul>
      ),
    },
  ];

  return (
<>
  <Navbar />
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(#1d4ed8 1px, transparent 1px),
              linear-gradient(to right, #1d4ed8 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Blob */}
        <div className="absolute right-[-120px] top-[-80px] w-[380px] h-[380px] rounded-full bg-gradient-to-br from-blue-600 to-blue-900 blur-[100px] opacity-20" />

        <div className="md:px-12 px-6 pt-28 pb-10 relative z-10">
          <h1 className="text-xl md:text-4xl font-bold text-slate-900 leading-tight max-w-4xl">
            Politique de{" "}
            <span className="text-blue-600">confidentialité</span>
          </h1>

          <p className="mt-6 text-slate-600 text-lg leading-8 max-w-3xl">
            Chez <span className="font-semibold">GeSpeed Delivery</span>,
            nous accordons une grande importance à la sécurité et à la
            protection de vos données personnelles.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-slate-600 text-sm">
              Dernière mise à jour : 24 Mai 2026
            </span>
          </div>
        </div>
      </section>

      {/* contenu */}
      <section className="md:px-12 px-6 mb-12">
        <div className="grid gap-6">
          {sections.map((section, index) => {

            return (
              <div
                key={index}
              >
                <div className="flex items-start gap-5">

                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-slate-900 mb-4">
                      {section.title}
                    </h2>

                    {section.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* contact */}
      <section className="pb-20 px-6">
        <div>
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-800 to-blue-900 p-10 text-white">
            <div className="absolute right-0 top-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex md:items-center gap-3 mb-4">
                <Mail className="w-6 h-6" />
                <h3 className="md:text-xl text-md font-bold">
                  Contact GeSpeed Delivery
                </h3>
              </div>

              <p className="text-blue-100 max-w-2xl leading-8">
                Pour toute question concernant vos données personnelles,
                veuillez contacter GeSpeed Delivery via les moyens de contact
                disponibles sur la plateforme.
              </p>

              <div className="mt-6 bg-white/10 border border-white/10 rounded-2xl p-4 inline-flex">
                Adresse email : À renseigner ultérieurement
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
<Footer />
</>
  );
}
