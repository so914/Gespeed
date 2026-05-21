import React from 'react'
import StatCard from './StatCard';

export default function DashboardRecap({stats}) {
    
  return (
    <div style={{ padding: "1rem 0 0.5rem" }}>

      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.2rem" }}>
        <div style={{
          width: "4px", height: "20px",
          background: "linear-gradient(180deg, #1e3a5f, #60a5fa)",
          borderRadius: "4px",
        }} />
        <span style={{ fontSize: "15px", fontWeight: 500, color: "#1e293b" }}>Vue d'ensemble</span>
        <span style={{ fontSize: "12px", color: "#94a3b8", marginLeft: "4px" }}>Aujourd'hui</span>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "14px",
      }}>
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
    </div>
  );
}
