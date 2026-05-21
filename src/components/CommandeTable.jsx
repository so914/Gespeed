import React from "react";

const users = [
  { id: 1, nom: "Dupont",   prenom: "Jean",    email: "jean.dupont@email.com",    tel: "+242 06 123 4567",service:"Déménagement",date:"11/05/2026",add1:"Poto-poto",add2:"Talangai",montant:"165 000 FCFA",statut:"Annulée"  },
  { id: 2, nom: "Mbemba",   prenom: "Clarisse", email: "clarisse.mbemba@email.com", tel: "+242 05 234 5678", add1:"Poto-poto",add2:"Talangai",service:"Déménagement",date:"11/05/2026" ,montant:"90 000 FCFA",statut:"Terminée"  },
  { id: 3, nom: "Koubemba", prenom: "Patrick",  email: "patrick.k@email.com",       tel: "+242 06 345 6789",add1:"Poto-poto",add2:"Talangai",service:"Déménagement",date:"11/05/2026" ,montant:"58 000 FCFA",statut:"En attente"  },
  { id: 4, nom: "Louzolo",  prenom: "Grace",    email: "grace.louzolo@email.com",   tel: "+242 05 456 7890",add1:"Poto-poto",add2:"Talangai",service:"Déménagement",date:"11/05/2026",montant:"65 000 FCFA" ,statut:"En cours" },
];

export default function UserTable() {
  return (
<div>
  <div className="flex justify-between">
    <h2 className="md:text-xl text-gray-400 mb-4 font-semibold" >Tableau des commandes récentes</h2>
   <div>
   </div>
 </div>

    <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm h-full">
      <table className="w-full text-sm">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Id</th>
            <th className="px-4 py-3 text-left font-medium">Nom</th>
            <th className="px-4 py-3 text-left font-medium">Prénom</th>
            <th className="px-4 py-3 text-left font-medium">Tél</th>
	  <th className="px-4 py-3 text-left font-medium">Service</th>
	   <th className="px-4 py-3 text-left font-medium">Date</th>
           <th className="px-4 py-3 text-left font-medium">Adresse de départ</th>
	   <th className="px-4 py-3 text-left font-medium">Adrese d'arrivée</th>
	  <th className="px-4 py-3 text-left font-medium">Montant</th>
	   <th className="px-4 py-3 text-left font-medium">Statut</th>

          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
              <td className="px-4 py-3 text-slate-500">{user.id}</td>
              <td className="px-4 py-3 text-slate-700 font-medium">{user.nom}</td>
              <td className="px-4 py-3 text-slate-700">{user.prenom}</td>
              <td className="px-4 py-3 text-slate-500">{user.tel}</td>
              <td className="px-4 py-3 text-slate-500">{user.service}</td>
	     <td className="px-4 py-3 text-slate-500">{user.date}</td>
	     <td className="px-4 py-3 text-slate-500">{user.add1}</td>
	     <td className="px-4 py-3 text-slate-500">{user.add2}</td>
	    <td className="px-4 py-3 text-slate-500">{user.montant}</td>
	    <td className="px-4 py-3 text-slate-500">{user.statut}</td>



	     
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div> 
 );
}
