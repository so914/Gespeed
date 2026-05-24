
import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";

const navigation = [
  {
    label: "Accueil",
    path: "/",
  },
{
    label: "Demande de devis",
    path: "/devis",
  },
{
    label: "Profil",
    path: "/profil",
  },
{
    label: "Dashboard",
    path: "/dashboard",
  },

];

const footerCompany = [
  {
    label: "A propos",
    path: "/about",
  },
{
    label: "Aide",
    path: "/help",
  },

  {
    label: "Contacts",
    path: "/contact",
  },
{
    label: "FAQ",
    path: "/FAQ",
  },

];

const footerLegal = [
  {
    label: "Conditions d'utilisation",
    path: "/conditions-utilisation",
  },
  {
    label: "Politique de confidentialité",
    path: "/privacy-policy",
  },
  {
    label: "Politique de cookie",
    path: "/politique-cookie",
  },
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

      {/* nav*/}
      <nav className="flex flex-col gap-2">
        <h6 className="font-bold text-sm md:text-[18px] uppercase tracking-wide mb-1">
           Navigation
        </h6>

        {navigation.map((s) => (
          <Link
            key={s.label}
	    to={s.path}
            className="hover:underline decoration-blue-700 decoration-2 hover:text-blue-700 cursor-pointer text-sm md:text-[15px]"
          >
            {s.label}
          </Link>
        ))}
      </nav>

      {/* Company */}
      <nav className="flex flex-col gap-2">
        <h6 className="font-bold text-sm md:text-[18px] uppercase tracking-wide mb-1">
          Compagnie
        </h6>

        {footerCompany.map((s) => (
          <Link
            key={s.label}
            to={s.path}
            className="hover:underline decoration-blue-700 decoration-2 hover:text-blue-700 cursor-pointer text-sm md:text-[15px]"
          >
            {s.label}
          </Link>
        ))}
      </nav>

      {/* Legal */}
      <nav className="flex flex-col gap-2">
        <h6 className="font-bold text-sm md:text-[18px] uppercase tracking-wide mb-1">
          Legal
        </h6>

        {footerLegal.map((s) => (
          <Link
            key={s.label}
            to={s.path}
            className="hover:underline decoration-blue-700 decoration-2 hover:text-blue-700 cursor-pointer text-sm md:text-[15px]"
          >
            {s.label}
          </Link>
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
        <p className="text-sm">
          © 2026 GeSpeed Delivery. Tous droits réservés.
        </p>

        <div className="hidden md:flex gap-4 text-xl md:text-2xl">
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
      </div>
    </footer>
  );
}
