import React from "react"
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";

const footerServices = [
  "Déménagement",
  "Transport des matériaux de constructions",
  "Transport des matériaux événementiels",
  "Transport des débris",
];

const footerCompany = ["A propos", "Contacts"];

const footerLegal = [
  "Conditions d'utilisation",
  "Politique de confidentialité",
  "Politique de cookie",
];

export default function Footer() {
  return (
    <footer className="bg-white mt-6 text-gray-700 p-8 md:p-10 flex flex-wrap gap-8 md:gap-10 flex-col sm:flex-row md:justify-between">
      <aside>
        <img
          src="./logo.png"
          alt="Logo"
          className="md:w-[120px] w-[100px]"
        />
        <p className="mt-2 md:text-md text-sm">
          GeSpeed Delivery entreprise.
          <br />
          Créé en 2024.
        </p>
      </aside>

      {/* Services */}
      <nav className="flex flex-col gap-2">
        <h6 className="font-bold text-sm md:text-[18px] uppercase  tracking-wide mb-1">
          Services
        </h6>
        {footerServices.map((s) => (
          <a
            key={s}
            className="hover:underline decoration-blue-700 decoration-2 hover:text-blue-700 cursor-pointer text-sm md:text-[15px]"
          >
            {s}
          </a>
        ))}
      </nav>

      {/* Company */}
      <nav className="flex flex-col gap-2">
        <h6 className="font-bold text-sm md:text-[18px] uppercase tracking-wide mb-1">
          Compagnie
        </h6>
        {footerCompany.map((s) => (
          <a
            key={s}
            className="hover:underline decoration-blue-700 decoration-2 hover:text-blue-700 cursor-pointer text-sm md:text-[15px]"
          >
            {s}
          </a>
        ))}
      </nav>

      {/* Legal */}
      <nav className="flex flex-col gap-2">
        <h6 className="font-bold text-sm md:text-[18px] uppercase tracking-wide mb-1">
          Legal
        </h6>
        {footerLegal.map((s) => (
          <a
            key={s}
            className="hover:underline decoration-blue-700 decoration-2 hover:text-blue-700 cursor-pointer text-sm md:text-[15px]"
          >
            {s}
          </a>
        ))}
      </nav>

      {/* Mobile social */}
      <nav className="flex flex-col gap-x-4 md:hidden">
        <h6 className="font-bold text-sm md:text-[18px] uppercase tracking-wide mb-1">
          Contacts
        </h6>
        <div className="flex gap-2">
          <a href="#">
            <FaWhatsapp className="text-green-400" size={18} />
          </a>
          <a href="#">
            <FaFacebook className="text-blue-900" size={18} />
          </a>
          <a href="#">
            <MdPhoneInTalk className="text-gray-700" size={18} />
          </a>
	  <a href="#">
            <AiFillTikTok className="text-black" size={22} />
          </a>

        </div>
      </nav>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm">© 2026 GeSpeed Delivery. Tous droits réservés.</p>
        <div className="hidden md:flex gap-4 text-xl md:text-2xl">
          <a href="#">
            <i className="fa-brands fa-facebook text-blue-600"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-whatsapp text-green-400"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-phone text-black"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
