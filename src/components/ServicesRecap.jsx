import React from 'react';
import {
  FiTruck, FiHome, FiTool, FiBox, FiPackage,
  FiDroplet, FiArrowUp, FiArrowDown, FiMinus
} from 'react-icons/fi';
import { MdOutlineChair } from 'react-icons/md';

const services = [
  { icon: <FiTruck size={16} />,        nom: 'Transport',                  demandes: 275, evolution: 'hausse',  pct: '+18%' },
  { icon: <FiHome size={16} />,         nom: 'Déménagement',               demandes: 200, evolution: 'hausse',  pct: '+9%'  },
  { icon: <FiTool size={16} />,         nom: 'Déménagement + Manutention', demandes: 143, evolution: 'stable',  pct: '0%'   },
  { icon: <FiBox size={16} />,          nom: 'Déballage',                  demandes: 98,  evolution: 'baisse',  pct: '-4%'  },
  { icon: <FiPackage size={16} />,      nom: 'Emballage',                  demandes: 112, evolution: 'hausse',  pct: '+7%'  },
  { icon: <FiDroplet size={16} />,      nom: 'Nettoyage',                  demandes: 87,  evolution: 'baisse',  pct: '-11%' },
  { icon: <MdOutlineChair size={16} />, nom: 'Montage des meubles',        demandes: 64,  evolution: 'hausse',  pct: '+3%'  },
  { icon: <MdOutlineChair size={16} />, nom: 'Démontage des meubles',      demandes: 41,  evolution: 'stable',  pct: '+1%'  },
];

const total = services.reduce((acc, s) => acc + s.demandes, 0);

const badge = {
  hausse: {
    bg: '#e1f5ee', color: '#0f6e56',
    icon: <FiArrowUp size={11} />,
  },
  baisse: {
    bg: '#fdecea', color: '#b91c1c',
    icon: <FiArrowDown size={11} />,
  },
  stable: {
    bg: '#f1f5f9', color: '#475569',
    icon: <FiMinus size={11} />,
  },
};

export default function ServicesRecap() {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '18px',
      border: '0.5px solid rgba(30,58,95,0.12)',
      boxShadow: '0 2px 10px rgba(30,58,95,0.07), 0 8px 32px rgba(30,58,95,0.08)',
      overflow: 'hidden',
    }}>

      {/* En-tête */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.1rem 1.4rem',
        borderBottom: '1px solid #f1f5f9',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '4px', height: '20px',
            background: 'linear-gradient(180deg, #1e3a5f, #60a5fa)',
            borderRadius: '4px',
          }} />
          <span style={{ fontSize: '15px', fontWeight: 600, color: '#1e293b' }}>
            Demandes par service
          </span>
        </div>
        <span style={{
          fontSize: '12px', fontWeight: 500, color: '#64748b',
          background: '#f8fafc', border: '1px solid #e2e8f0',
          borderRadius: '20px', padding: '3px 10px',
        }}>
          {total} demandes au total
        </span>
      </div>

      {/* Tableau */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              {['Service', 'Demandes', 'Part', 'Évolution'].map((h) => (
                <th key={h} style={{
                  padding: '10px 16px', textAlign: 'left',
                  fontSize: '11px', fontWeight: 600,
                  color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em',
                  borderBottom: '1px solid #f1f5f9',
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {services.map((s, i) => {
              const b = badge[s.evolution];
              const pct = Math.round((s.demandes / total) * 100);
              return (
                <tr
                  key={s.nom}
                  style={{
                    borderBottom: i < services.length - 1 ? '1px solid #f8fafc' : 'none',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '32px', height: '32px', borderRadius: '9px',
                        background: 'rgba(30,58,95,0.07)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#1e3a5f', flexShrink: 0,
                      }}>
                        {s.icon}
                      </div>
                      <span style={{ fontWeight: 500, color: '#1e293b' }}>{s.nom}</span>
                    </div>
                  </td>

                  {/* Nombre */}
                  <td style={{ padding: '12px 16px', fontWeight: 600, color: '#1e3a5f' }}>
                    {s.demandes}
                  </td>

                  {/* Barre de part */}
                  <td style={{ padding: '12px 16px', minWidth: '120px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        flex: 1, height: '6px', borderRadius: '99px',
                        background: '#e2e8f0', overflow: 'hidden',
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${pct}%`,
                          borderRadius: '99px',
                          background: 'linear-gradient(90deg, #1e3a5f, #2563eb)',
                          transition: 'width 0.6s cubic-bezier(.22,.68,0,1.2)',
                        }} />
                      </div>
                      <span style={{ fontSize: '12px', color: '#64748b', minWidth: '30px' }}>
                        {pct}%
                      </span>
                    </div>
                  </td>

                  {/* Badge évolution */}
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      fontSize: '12px', fontWeight: 600,
                      background: b.bg, color: b.color,
                      borderRadius: '20px', padding: '3px 9px',
                    }}>
                      {b.icon}
                      {s.pct}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
