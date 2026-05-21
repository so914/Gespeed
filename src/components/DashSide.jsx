import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiUsers, FiFileText, FiShoppingBag, FiGrid, FiHome, FiLogOut, FiBarChart2 } from 'react-icons/fi';

const navItems = [
  { icon: <FiGrid size={16} />,        label: 'Dashboard',    to: '/dashboard'              },
  { icon: <FiUsers size={16} />,       label: 'Utilisateurs', to: '/dashboard/utilisateurs' },
  { icon: <FiFileText size={16} />,    label: 'Devis',        to: '/dashboard/devis'        },
  { icon: <FiShoppingBag size={16} />, label: 'Commandes',    to: '/dashboard/commandes'    },
  { icon: <FiGrid size={16} />,        label: 'Services',     to: '/dashboard/services'     },
];
const activeClass  = 'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold bg-blue-900 text-white shadow-md shadow-blue-900/30';
const defaultClass = 'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-blue-50 hover:text-blue-900 transition-colors duration-150';

export default function DashSide() {
  return (
    <aside
      className="hidden md:flex flex-col border-r border-gray-100 min-h-screen w-60 px-4 py-6 bg-white mt-22"
      style={{ boxShadow: '2px 0 16px rgba(30,58,95,0.06)' }}
    >
      <div>
        <div className="flex items-center gap-2.5 px-1 mb-8">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900">
            <FiBarChart2 size={16} className="text-white" />
          </div>
          <span className="text-sm font-bold text-slate-800 tracking-wide">Administration</span>
        </div>

        <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Gestion
        </p>

        <nav className="flex flex-col gap-1">
          {navItems.map(({ icon, label, to }) => (
            <NavLink
              key={label}
              to={to}
		end={to === '/dashboard'}
              className={({ isActive }) => isActive ? activeClass : defaultClass}
            >
              <span className="shrink-0">{icon}</span>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div
        className="flex flex-col mt-32 gap-1 rounded-2xl border border-blue-900/10 bg-gradient-to-br from-blue-900 to-slate-800 p-3"
        style={{ boxShadow: '0 4px 20px rgba(30,58,95,0.18)' }}
      >
        <NavLink to="/" className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors">
          <FiHome size={15} /> Retour à l'accueil
        </NavLink>
        <div className="mx-2 h-px bg-white/10" />
        <NavLink to="/signIn" className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors">
          <FiLogOut size={15} /> Déconnexion
        </NavLink>
      </div>
    </aside>
  );
}
