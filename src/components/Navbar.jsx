import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="flex items-center justify-between bg-white shadow-sm px-4 md:px-8 h-[66px] fixed w-full z-20 top-0">
        <Link to="/" className="flex-shrink-0">
          <img
            src="./logo.png"
            className="w-[100px] md:w-[130px]"
            alt="logo"
          />
        </Link>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded hover:bg-gray-100 lg:hidden"
        >
          {menuOpen ? (
            <FaXmark className="text-2xl text-gray-700" />
          ) : (
            <FaBars className="text-2xl text-gray-700" />
          )}
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-1 text-[16px] text-gray-600">

            <li>
              <Link
                to="/"
                className="px-4 py-2 hover:text-blue-700 hover:underline underline-offset-4 decoration-blue-700 decoration-2"
              >
                Accueil
              </Link>
            </li>

            <li>
              <Link
                to="/devis" className="px-4 py-2 hover:text-blue-700 cursor-pointer">
                Demande de devis
              </Link>

            </li>

            <li>
              <Link to='/help' className="px-4 py-2 hover:text-blue-700 cursor-pointer">
                Aide
              </Link>
            </li>

            <li>
              <Link  to='/contact' className="px-4 py-2 hover:text-blue-700 cursor-pointer">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
          <FaGlobe className="text-red-700 text-lg cursor-pointer" />

          <Link
            to="/register"
            className="text-sm text-gray-600 font-bold hover:text-blue-700"
          >
            S'inscrire
          </Link>

          <Link
            to="/signIn"
            className="bg-blue-900 text-white text-sm px-4 py-2 rounded-lg font-bold hover:bg-blue-800"
          >
            Se connecter
          </Link>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed top-[66px] left-0 w-64 h-screen bg-white shadow-lg z-30 p-4 transition-transform duration-300 lg:hidden ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col text-sm text-gray-700">

            <li className="py-3 border-b">
              <Link to="/">Accueil</Link>
            </li>

            <li className="py-3 border-b">
              Demande de devis
            </li>

            <li className="py-3 border-b">Aide</li>
            <li className="py-3 border-b">Contacts</li>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/register"
                className="text-center border py-2 rounded-lg font-bold text-gray-600"
              >
                S'inscrire
              </Link>

              <Link
                to="/signin"
                className="text-center bg-blue-900 text-white py-2 rounded-lg font-bold"
              >
                Se connecter
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}
