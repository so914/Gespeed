import { Link } from "react-router-dom";
import '../App.css'

export default function Hero() {
  return (
    <section className="relative min-h-[420px] md:min-h-[600px] flex items-center mb-12">
      <div className="absolute inset-0 bg-contain md:left-100 fond-hero md:ms-auto flex bg-no-repeat"></div>
      <div className="relative z-10 px-6 w-full top-8 md:px-12 py-10 md:py-0 md:w-[540px] text-justify">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-black">
          Déménagez en{" "}
          <span className="text-blue-600">toute sécurité</span>{" "}
          <span className="underline decoration-blue-600 decoration-4 underline-offset-[12px]">
            au Congo
          </span>
        </h1>
        <p className="mb-5 mt-6 text-gray-700 text-lg md:text-base">
          Que ce soit à Brazzaville ou Pointe-Noire, GeSpeed redéfinit le
          transport et le déménagement avec une précision architecturale et une
          fiabilité absolue.
        </p>
        <Link
          to="/devis"
          className="bg-blue-900 border-none font-semibold rounded-lg py-3 px-6 text-white inline-block text-lg md:text-base"
        >
          Demandez un devis gratuitement
        </Link>
      </div>
    </section>
  );
}
