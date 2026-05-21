import React from "react";

const users = [
  { id: 1, nom: "Dupont",   prenom: "Jean",    email: "jean.dupont@email.com",    tel: "+242 06 123 4567" },
  { id: 2, nom: "Mbemba",   prenom: "Clarisse", email: "clarisse.mbemba@email.com", tel: "+242 05 234 5678" },
  { id: 3, nom: "Koubemba", prenom: "Patrick",  email: "patrick.k@email.com",       tel: "+242 06 345 6789" },
  { id: 4, nom: "Louzolo",  prenom: "Grace",    email: "grace.louzolo@email.com",   tel: "+242 05 456 7890" },
];

export default function UserTable() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm h-full">
      <table className="w-full text-sm">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Id</th>
            <th className="px-4 py-3 text-left font-medium">Nom</th>
            <th className="px-4 py-3 text-left font-medium">Prénom</th>
            <th className="px-4 py-3 text-left font-medium">Email</th>
            <th className="px-4 py-3 text-left font-medium">Tél</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
              <td className="px-4 py-3 text-slate-500">{user.id}</td>
              <td className="px-4 py-3 text-slate-700 font-medium">{user.nom}</td>
              <td className="px-4 py-3 text-slate-700">{user.prenom}</td>
              <td className="px-4 py-3 text-slate-500">{user.email}</td>
              <td className="px-4 py-3 text-slate-500">{user.tel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
