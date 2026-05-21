import React from "react";
import DemandeChart from "./DemandeChart";
import StatutChart from "./StatutChart";
import RevenueChart from "./RevenueChart";
import { GoSearch } from "react-icons/go";
import { FiUsers, FiPackage, FiCheckCircle, FiDollarSign, FiArrowUp, FiTrendingUp, FiCheck } from "react-icons/fi";
import DashboardRecap from './DashboardRecap'


export default function Dashcomponent() {
  const stats = [
  {
    icon: <FiUsers size={18} />,
    label: "Utilisateurs",
    value: "320",
    badge: { icon: <FiArrowUp size={10} />, text: "+12%", color: "blue" },
    delay: "0.05s",
  },
  {
    icon: <FiPackage size={18} />,
    label: "Commandes reçues",
    value: "40",
    badge: { icon: <FiArrowUp size={10} />, text: "+5%", color: "blue" },
    delay: "0.13s",
  },
  {
    icon: <FiCheckCircle size={18} />,
    label: "Commandes traitées",
    value: "32",
    badge: { icon: <FiCheck size={10} />, text: "80% taux", color: "green" },
    delay: "0.21s",
  },
  {
    icon: <FiDollarSign size={18} />,
    label: "Chiffre d'affaires",
    value: "950 000",
    suffix: "FCFA",
    badge: { icon: <FiTrendingUp size={10} />, text: "Ce mois", color: "blue" },
    delay: "0.29s",
  },
];






  return (
    <div className="px-6 mt-26">
          <h2 className="font-thin text-gray-400 text-2xl ">
            Bienvenue, Ronnie Ray
          </h2>
            <DashboardRecap stats={stats}/>
        <div className="grid grid-cols-1 md:flex gap-4 mb-4 mt-6 w-full">
          <div className="md:w-120">
	    <StatutChart />
	</div>
	<div className="md:w-full">
          <DemandeChart />
        </div>
        </div>
    </div>
  );
}
