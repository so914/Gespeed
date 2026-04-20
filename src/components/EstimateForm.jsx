import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

export default function EstimateForm() {
  const [city, setCity] = useState("Brazzaville");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/devis?ville=${city}`);
  };

  return (
    <section className="mt-16">
      <div className="py-16 px-6 flex flex-col items-center bg-gray-100">

        <h2 className="text-xl md:text-3xl font-semibold my-4 text-center">
          Prêt pour votre prochain départ ?
        </h2>

        <div className="w-full max-w-xl mt-6">
          <div className="border border-gray-200 rounded-2xl p-6 shadow-lg bg-white">

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 items-center"
            >

              <div className="flex items-center gap-3 w-full px-3 py-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-200">

                <FaLocationDot className="text-gray-500 text-lg" />

                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-transparent outline-none text-base md:text-sm"
                >
                  <option value="Brazzaville">Brazzaville</option>
                  <option value="Pointe-Noire">Pointe-Noire</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 transition text-white font-medium py-2 px-5 rounded-lg whitespace-nowrap"
              >
                Estimer mon projet
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}