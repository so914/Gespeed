import { Link } from "react-router-dom";
import { FiTruck, FiUsers, FiHeadphones, FiStar } from "react-icons/fi";

function TriangleGrid({ width = 600, height = 500 }) {
  const step = 36;
  const cols = Math.ceil(width / step) + 1;
  const rows = Math.ceil(height / step) + 1;
  const dots = [], hLines = [], vLines = [];
  const inside = (cx, cy) => cx / width + cy / height <= 1;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cx = c * step, cy = r * step;
      if (!inside(cx, cy)) continue;
      const dist = cx / width + cy / height;
      const opacity = Math.max(0, 0.55 - dist * 0.52);
      const isAccent = c < 3 && r < 3;
      const radius = isAccent ? 4 : c < 5 && r < 5 ? 2.5 : 1.8;
      dots.push(<circle key={`d-${r}-${c}`} cx={cx} cy={cy} r={radius} fill={isAccent ? "#1e3a8a" : "#64748b"} opacity={opacity} />);
    }
  }
  for (let r = 0; r < rows; r++) {
    const cy = r * step;
    if (cy > height) continue;
    const maxX = width * (1 - cy / height);
    if (maxX <= 0) continue;
    hLines.push(<line key={`h-${r}`} x1={0} y1={cy} x2={maxX} y2={cy} stroke="#94a3b8" strokeWidth="0.6" opacity={(1 - cy / height) * 0.35} />);
  }
  for (let c = 0; c < cols; c++) {
    const cx = c * step;
    if (cx > width) continue;
    const maxY = height * (1 - cx / width);
    if (maxY <= 0) continue;
    vLines.push(<line key={`v-${c}`} x1={cx} y1={0} x2={cx} y2={maxY} stroke="#94a3b8" strokeWidth="0.6" opacity={(1 - cx / width) * 0.35} />);
  }
  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width, height, position: "absolute", top: 0, left: 0 }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points={`0,0 ${width},0 0,${height}`} fill="rgba(30,58,138,0.012)" />
      {hLines}{vLines}{dots}
    </svg>
  );
}

const statsData = [
  { icon: <FiTruck size={22} />,      value: "100",   label: "Missions réussies"  },
  { icon: <FiUsers size={22} />,      value: "98%",   label: "Clients satisfaits" },
  { icon: <FiHeadphones size={22} />, value: "24/7",  label: "Support disponible" },
  { icon: <FiStar size={22} />,       value: "4.5/5", label: "Note moyenne"       },
];

export default function Hero() {
  return (
    <section className="mb-6 md:mb-12 relative">

      {/* desktop */}
      <div className="hidden md:grid md:grid-cols-2 min-h-[540px] mt-17 overflow-hidden relative bg-white h-full">
	 <img src="./car2.webp" alt="Voiture de service " className="absolute w-90" className="w-90 absolute z-10 hidden md:inline right-[30%] top-20" />
      
        <div className="relative flex items-center px-12 py-10 bg-white overflow-hidden">
          <TriangleGrid width={608} height={700} />
          <div className="relative z-10 w-full">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700 mb-5 tracking-widest uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Service disponible au Congo
            </span>
            <h1 className="text-3xl xl:text-4xl font-bold mb-5 text-slate-900 leading-tight">
              Déménagez en{" "}
              <span className="text-blue-600">toute sécurité</span>{" "}
              <span className="relative inline-block">
                au Congo
                <span className="absolute left-0 h-[3px] w-full rounded-full bg-blue-600" style={{ bottom: "-6px" }} />
              </span>
            </h1>
            <p className="mb-8 text-slate-500 text-base leading-relaxed text-justify hyphens-auto me-8">
              Emballage, transport, déballage, manutention, montage et démontage
              de meubles&nbsp;: GeSpeed vous propose une solution complète pour
              gagner du temps et avancer en toute confiance.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link to="/devis" className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 rounded-xl py-3 px-7 text-white font-semibold text-sm transition active:scale-[0.98] shadow-lg shadow-blue-900/20">
                Demandez un devis
                <span className="font-normal opacity-90">gratuitement</span>
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2 shrink-0"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <span className="text-xs text-slate-400">Réponse sous 24h</span>
            </div>
            <div className="mt-8 flex items-center gap-6">
              {[
                { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", label: "Express" },
                { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "Sécurisé" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Suivi GPS" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-1.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-blue-100 bg-blue-50">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-blue-600 fill-none stroke-2"><path d={t.icon} /></svg>
                  </div>
                  <span className="text-xs font-medium text-slate-500">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Col droite — depuis le document 9 (voiture + blob + GPS) */}
        <div className="relative flex items-end justify-center overflow-hidden">
          
          <div className="pointer-events-none absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, rgba(30,58,138,0.055) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }} />

          {/* Cercle blob bleu nuit parfait */}
          <div className="absolute" style={{
            width: "280px", height: "450px",
            background: "linear-gradient(145deg, #1d4ed8 0%, #1e3a8a 100%)",
            borderRadius: "50%",
            top: "50%", left: "50%",
            transform: "translate(-50%, -54%)",
            zIndex: 13,
            boxShadow: "0 8px 48px rgba(30,58,138,0.25)",
          }} />

          {/* Dot grid clippé sur le cercle via SVG */}
          <svg className="absolute" viewBox="0 0 340 340"
            style={{ width: "340px", height: "340px", top: "50%", left: "50%", transform: "translate(-50%, -54%)", zIndex: 14 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="blobClipD">
                <ellipse cx="170" cy="170" rx="140" ry="225" />
              </clipPath>
            </defs>
            <g clipPath="url(#blobClipD)">
              {Array.from({ length: 18 }).map((_, r) =>
                Array.from({ length: 18 }).map((_, c) => (
                  <circle key={`${r}-${c}`} cx={c * 20} cy={r * 20} r="1.3" fill="white" opacity="0.09" />
                ))
              )}
            </g>
            {/* Contour pointillé */}
            <ellipse cx="170" cy="170" rx="152" ry="237"
              fill="none" stroke="rgba(147,197,253,0.45)" strokeWidth="1.5" strokeDasharray="6 5" />
          </svg>

          {/* GPS + ligne pointillée */}
          <svg className="absolute" viewBox="0 0 300 300"
            style={{ width: "300px", height: "300px", top: "50%", left: "50%", transform: "translate(-50%, -54%)", zIndex: 14 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 150 50 C 170 90, 120 120, 150 160 C 175 195, 130 220, 150 250"
              fill="none" stroke="white" strokeWidth="2" strokeDasharray="6 5" opacity="0.7" />
            <circle cx="150" cy="50" r="5" fill="white" opacity="0.9"/>
            <circle cx="150" cy="50" r="10" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4"/>
            <g transform="translate(134, 28)">
              <path d="M16 2C10.48 2 6 6.48 6 12c0 7.5 10 18 10 18s10-10.5 10-18c0-5.52-4.48-10-10-10z" fill="white" opacity="0.95"/>
              <circle cx="16" cy="12" r="3.5" fill="#1e3a8a"/>
            </g>
            <circle cx="150" cy="250" r="5" fill="white" opacity="0.9"/>
            <circle cx="150" cy="250" r="10" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4"/>
          </svg>

          {/* Image */}
          <img src="hero.webp" alt="livreur GeSpeed"
            style={{
              position: "absolute",
              zIndex: 15, objectFit: "contain", objectPosition: "bottom",
              transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              filter: "drop-shadow(0 20px 40px rgba(30,58,138,0.22))",
              height: "100%", maxHeight: "500px",
            }}
            className="hover:scale-[1.03] cursor-pointer"
          />
        </div>
      </div>

      {/* mobile */}
      <div className="md:hidden flex flex-col">
        <div className="relative overflow-hidden flex items-end justify-center"
          style={{ minHeight: "320px"}}
        >
          <div className="pointer-events-none absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, rgba(30,58,138,0.055) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }} />
          
	{/*Cercle blob bleu nuit parfait */}
          <div className="absolute" style={{
            width: "160px", height: "260px",
            background: "linear-gradient(145deg, #1d4ed8 0%, #1e3a8a 100%)",
            borderRadius: "50%",
            top: "50%", left: "50%",
            transform: "translate(-50%, -54%)",
            zIndex: 13,
            boxShadow: "0 8px 48px rgba(30,58,138,0.25)",
          }} />
              

         {/* Dot grid sur le cercle */}
          <div className="absolute" style={{
            width: "280px", height: "300px",
            borderRadius: "50%",
            top: "50%", left: "50%",
            transform: "translate(-50%, -54%)",
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            zIndex: 14,
          }} />
 

          {/* GPS mobile */}
          <svg className="absolute" viewBox="0 0 260 260"
            style={{ width: "260px", height: "260px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 15 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 130 44 C 148 78, 110 104, 130 140 C 150 172, 116 196, 130 228"
              fill="none" stroke="white" strokeWidth="1.8" strokeDasharray="5 5" opacity="0.75" />
            <circle cx="130" cy="44" r="4" fill="white" opacity="0.9"/>
            <circle cx="130" cy="44" r="9" fill="none" stroke="white" strokeWidth="1.2" opacity="0.35"/>
            <g transform="translate(116, 22)">
              <path d="M14 1C9.03 1 5 5.03 5 10c0 6.5 9 16 9 16s9-9.5 9-16c0-4.97-4.03-9-9-9z" fill="white" opacity="0.95"/>
              <circle cx="14" cy="10" r="3" fill="#1e3a8a"/>
            </g>
            <circle cx="130" cy="228" r="4" fill="white" opacity="0.9"/>
            <circle cx="130" cy="228" r="9" fill="none" stroke="white" strokeWidth="1.2" opacity="0.35"/>
          </svg>
          <img src="hero.webp" alt="livreurs GeSpeed"
            style={{
              position: "relative", zIndex: 14, objectFit: "contain", objectPosition: "bottom",
              width: "100%", maxHeight: "310px",
              filter: "drop-shadow(0 12px 28px rgba(30,58,138,0.20))",
            }}
          />
        </div>
	        {/* Stats mobile 4 colonnes */}
        <div className="grid grid-cols-4 bg-white rounded-2xl shadow-lg border border-slate-100 mx-3 mb-4 divide-x divide-slate-100 overflow-hidden">
          {statsData.map(({ icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 px-1 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-900 mb-1">{icon}</div>
              <p className="text-sm font-black text-slate-900 leading-none">{value}</p>
              <p className="text-[9px] text-slate-500 text-center leading-tight mt-0.5">{label}</p>
            </div>
          ))}
        </div>


        {/* Texte en bas */}
        <div className="bg-white px-5 py-7">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700 mb-4 tracking-wide uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Service disponible au Congo
          </span>
          <h1 className="text-2xl font-bold mb-3 text-slate-900 leading-tight">
            Déménagez en{" "}
            <span className="text-blue-600">toute sécurité</span>{" "}
            <span className="underline decoration-blue-600 decoration-[3px] underline-offset-[6px]">au Congo</span>
          </h1>
          <p className="mb-6 text-gray-500 text-sm leading-relaxed">
            Emballage, transport, déballage, manutention, montage et démontage
            de meubles&nbsp;: GeSpeed vous propose une solution complète pour
            gagner du temps et avancer en toute confiance.
          </p>
          <Link to="/devis"
            className="flex items-center justify-center gap-2 w-full bg-blue-900 rounded-xl py-3.5 px-6 text-white font-semibold text-sm transition active:scale-[0.98] shadow-md shadow-blue-900/20"
          >
            Demandez un devis gratuitement
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2 shrink-0"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>

      {/* Stats desktop superposées */}
      <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 z-20 w-[calc(100%-3rem)] max-w-[1200px] hidden md:flex">
        <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-100 flex divide-x divide-slate-200 overflow-hidden">
          {statsData.map(({ icon, value, label }) => (
            <div key={label} className="flex flex-1 items-center gap-3 px-6 py-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-900">{icon}</div>
              <div>
                <p className="text-lg font-black text-slate-900 leading-none">{value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
