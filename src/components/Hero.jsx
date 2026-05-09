import { Link } from "react-router-dom";
import '../App.css'

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row min-h-[420px] md:min-h-[560px] mb-12 overflow-hidden">
      
      {/* Image — en haut sur mobile, à droite sur desktop (order-last) */}
      <div className="w-full h-56 sm:h-72 md:h-auto md:flex-1 md:order-last overflow-hidden flex-shrink-0">
        <img
          src="image.webp"
          alt="homme en plein transport de colis"
          className="w-full h-full object-cover object-top md:object-center"
        />
      </div>

      {/* Contenu texte */}
      <div className="flex-1 flex items-center bg-white px-6 py-8 md:px-12 md:py-0">
        <div className="w-full max-w-lg">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-black leading-snug">
            Déménagez en{" "}
            <span className="text-blue-600">toute sécurité</span>{" "}
            <span className="underline decoration-blue-600 decoration-[3px] underline-offset-[10px]">
              au Congo
            </span>
          </h1>

          <p className="mb-6 text-gray-600 text-base leading-relaxed">
            Emballage, transport, déballage, manutention, montage et démontage
            de meubles : GeSpeed vous propose une solution complète pour gagner
            du temps et avancer en toute confiance.
          </p>

          <Link
            to="/devis"
            className="inline-flex items-center gap-2 bg-blue-900 rounded-lg py-3 px-6 text-white font-semibold text-base"
          >
            Demandez un devis
            <span className="hidden md:inline font-normal opacity-90">gratuitement</span>
          </Link>
        </div>
      </div>

    </section>
  );
}