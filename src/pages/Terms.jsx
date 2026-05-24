import {
  FileText,
  ShieldCheck,
  Truck,
  CreditCard,
  AlertTriangle,
  Scale,
  Ban,
  Mail,
} from "lucide-react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"



export default function TermsPage() {
  const sections = [
    {
      icon: FileText,
      title: "Objet des conditions d’utilisation",
      content: (
        <p className="text-slate-600 leading-8">
          Les présentes Conditions d’utilisation définissent les règles
          applicables à l’accès et à l’utilisation de la plateforme
          GeSpeed Delivery, spécialisée dans les services de déménagement,
          transport et logistique.
        </p>
      ),
    },
    {
      icon: ShieldCheck,
      title: "Création de compte",
      content: (
        <p className="text-slate-600 leading-8">
          L’utilisateur peut créer un compte afin d’accéder aux services
          proposés par GeSpeed Delivery. Les informations fournies lors de
          l’inscription doivent être exactes, complètes et à jour.
        </p>
      ),
    },
    {
      icon: Truck,
      title: "Demandes de devis",
      content: (
        <div className="space-y-4 text-slate-600 leading-8">
          <p>
            Les utilisateurs peuvent effectuer une demande de devis via la
            plateforme en renseignant :
          </p>

          <ul className="space-y-2">
            <li>• Adresse de départ</li>
            <li>• Adresse d’arrivée</li>
            <li>• Ville de départ</li>
            <li>• Ville d’arrivée</li>
          </ul>

          <p>
            GeSpeed Delivery se réserve le droit de refuser toute demande
            incomplète, frauduleuse ou non conforme.
          </p>
        </div>
      ),
    },
    {
      icon: CreditCard,
      title: "Paiement des prestations",
      content: (
        <p className="text-slate-600 leading-8">
          Les paiements des services proposés par GeSpeed Delivery sont
          actuellement effectués exclusivement{" "}
          <span className="font-semibold text-blue-700">
            en espèces (cash)
          </span>
          . Aucun paiement en ligne n’est actuellement disponible sur la
          plateforme.
        </p>
      ),
    },
    {
      icon: AlertTriangle,
      title: "Responsabilités de l’utilisateur",
      content: (
        <ul className="space-y-3 text-slate-600 leading-7">
          <li>
            • Fournir des informations exactes lors de l’inscription et des
            demandes de devis
          </li>
          <li>
            • Respecter les règles d’utilisation de la plateforme
          </li>
          <li>
            • Ne pas utiliser GeSpeed Delivery à des fins frauduleuses ou
            illégales
          </li>
          <li>
            • Fournir des informations exactes sur les biens à transporter
          </li>
        </ul>
      ),
    },
    {
      icon: Scale,
      title: "Limitation de responsabilité",
      content: (
        <p className="text-slate-600 leading-8">
          GeSpeed Delivery s’efforce d’assurer un service fiable et
          professionnel. Toutefois, l’entreprise ne pourra être tenue
          responsable des retards, interruptions ou difficultés causées par
          des événements indépendants de sa volonté.
        </p>
      ),
    },
    {
      icon: Ban,
      title: "Suspension ou suppression de compte",
      content: (
        <p className="text-slate-600 leading-8">
          GeSpeed Delivery se réserve le droit de suspendre ou supprimer un
          compte utilisateur en cas de comportement abusif, tentative de
          fraude ou violation des présentes conditions d’utilisation.
        </p>
      ),
    },
  ];

  return (
<>
<Navbar />
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
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

        <div className="absolute right-[-120px] top-[-80px] w-[380px] h-[380px] rounded-full bg-gradient-to-br from-blue-600 to-blue-900 blur-[100px] opacity-20" />

        <div className="px-6 md:px-12 pt-28  pb-8 relative z-10">
          <h1 className="text-xl md:text-3xl font-bold text-slate-900 leading-tight max-w-4xl">
            Conditions{" "}
            <span className="text-blue-600">d’utilisation</span>
          </h1>

          <p className="mt-6 text-slate-600 text-lg leading-8 max-w-3xl">
            En utilisant GeSpeed Delivery, vous acceptez les règles et
            conditions encadrant l’accès à nos services de déménagement,
            transport et logistique.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-slate-600 text-sm">
              Dernière mise à jour : 24 Mai 2026
            </span>
          </div>
        </div>
      </section>

      {/* contznu */}
      <section className="px-6 md:px-12 ">
        <div className="grid gap-6 mb-8">
          {sections.map((section, index) => {
       

            return (
              <div
                key={index}
                className="bg-white"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
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
      <section className="pb-20 px-6 md:px-12">
        <div>
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-800 to-blue-900 p-10 text-white">
            <div className="absolute right-0 top-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6" />
                <h3 className="md:text-xl text-md font-bold">
                  Contact GeSpeed Delivery
                </h3>
              </div>

              <p className="text-blue-100 max-w-2xl leading-8">
                Pour toute question concernant les présentes conditions
                d’utilisation, veuillez contacter GeSpeed Delivery via les
                moyens de contact disponibles sur la plateforme.
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
