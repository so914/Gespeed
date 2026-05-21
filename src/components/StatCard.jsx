import React from 'react'

export default function StatCard({ icon, label, value, suffix, badge, delay }) {
    const badgeStyles = {
  blue:  { color: "#185fa5", background: "#e6f1fb" },
  green: { color: "#0f6e56", background: "#e1f5ee" },
};
    return (
    <div
      style={{
        animationName: "fadeUp",
        animationDuration: "0.5s",
        animationTimingFunction: "cubic-bezier(.22,.68,0,1.2)",
        animationFillMode: "both",
        animationDelay: delay,
        background: "#fff",
        borderRadius: "16px",
        border: "0.5px solid rgba(30,58,95,0.13)",
        padding: "1.1rem 1.3rem 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        boxShadow: "0 2px 8px rgba(30,58,95,0.07), 0 8px 32px rgba(30,58,95,0.09)",
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow 0.22s, transform 0.22s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(30,58,95,0.14), 0 16px 40px rgba(30,58,95,0.14)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(30,58,95,0.07), 0 8px 32px rgba(30,58,95,0.09)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Barre d�grad� haut */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px",
        background: "linear-gradient(90deg, #1e3a5f 0%, #2563eb 60%, #60a5fa 100%)",
        borderRadius: "16px 16px 0 0",
      }} />

      {/* Ic�ne */}
      <div style={{
        width: "36px", height: "36px", borderRadius: "10px",
        background: "rgba(30,58,95,0.08)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#1e3a5f",
      }}>
        {icon}
      </div>

      {/* Label + valeur */}
      <div>
        <div style={{
          fontSize: "11px", fontWeight: 500, color: "#64748b",
          letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "4px",
        }}>
          {label}
        </div>
        <div style={{
          fontSize: suffix ? "20px" : "26px",
          fontWeight: 500, color: "#1e3a5f", lineHeight: 1,
        }}>
          {value}
          {suffix && (
            <span style={{ fontSize: "13px", color: "#94a3b8", fontWeight: 400, marginLeft: "4px" }}>
              {suffix}
            </span>
          )}
        </div>
      </div>

      {/* Badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "4px",
        fontSize: "11px", fontWeight: 500,
        borderRadius: "20px", padding: "2px 8px",
        width: "fit-content",
        ...badgeStyles[badge.color],
      }}>
        {badge.icon}
        {badge.text}
      </div>
    </div>

  )}