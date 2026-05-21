import React from "react"
import RevenueChart from "./RevenueChart"
import NumberCommande from "./NumberCommande"
import FailedCommande from "./FailedCommande"
import CommandeLine from "./CommandeLine"
import FinishCommandes from "./FinishCommandes"
import PendingCommande from "./PendingCommande"
import { GoSearch } from "react-icons/go";
import CommandeTable from "./CommandeTable";


export default function CommandeDashboard() {
  return (
        <div className="mt-28 px-6">
	<div className="md:flex grid justify-between">
	  <h2 className="font-thin md:text-2xl text-xl text-gray-400 mb-6">Gestion des commandes</h2>
	 <div className="py-[6px] mb-8  ps-4 shadow-sm pe-2 flex gap-4 rounded-2xl border-1 border-gray-100">
            <input type="text"
            className="focus:outline-none focus:ring-0 text-gray-400 focus:border-transparent "
          />
          <GoSearch size={24} className="text-gray-400" />
        </div>
	</div>
	
        <div className="md:flex grid justify-between" >
	 <div className="flex gap-2 order-2 md:order-1">
        <div style={{
          width: "4px", height: "20px",
          background: "linear-gradient(180deg, #1e3a5f, #60a5fa)",
          borderRadius: "4px"
        }} />
        <span className="text-[#1e293b] " >Vue d'ensemble</span>
      </div>
       <div className="flex gap-2 order-1 md:order-2 ">
	 <p className="text-gray-400 mt-1">Revenue:</p>
	 <span className="font-bold text-3xl drop-shadow-md "
	  style={{
  background: "linear-gradient(180deg, #1e3a5f, #60a5fa)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}} 
	 >765 000 <span className="font-thin">FCFA </span> </span>
      </div>
</div>
	 <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 mb-6">
	      <NumberCommande />
	       <FinishCommandes />
		<PendingCommande />
	      <FailedCommande />
	  </div>
	<CommandeTable />


	 <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
		<RevenueChart />
		<CommandeLine />
	</div>	
        </div>
        )
}

