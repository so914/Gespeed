import { useState, useEffect, useRef, useCallback } from "react";

const slides = [
  {
    src: "./photo2.jpg",
    alt: "Transport express GeSpeed",
    title: "Transport express",
    subtitle: "Livraison rapide partout au Congo",
  },
  {
    src: "/photo2.jpg",
    alt: "Emballage sécurisé",
    title: "Emballage sécurisé",
    subtitle: "Protection totale de vos biens",
  },
  {
    src: "/photo3.jpg",
    alt: "Déménagement complet",
    title: "Déménagement complet",
    subtitle: "De A à Z avec GeSpeed",
  },
  {
    src: "/photo4.jpg",
    alt: "Support 24/7",
    title: "Support 24/7",
    subtitle: "Toujours disponible pour vous",
  },
];

const INTERVAL = 3500;

export default function Carousel() {
  const [cur, setCur]       = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef            = useRef(null);

  const goTo = useCallback((n) => {
    setCur((n + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    clearInterval(timerRef.current);
    if (!paused) {
      timerRef.current = setInterval(() => {
        setCur((prev) => (prev + 1) % slides.length);
      }, INTERVAL);
    }
    return () => clearInterval(timerRef.current);
  }, [paused, cur]);

  return (
    <div className="w-full select-none">

      {/* Zone image — double-clic = pause/play */}
      <div
        className="relative overflow-hidden rounded-2xl bg-slate-100 cursor-pointer"
        onDoubleClick={() => setPaused((p) => !p)}
      >
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
          style={{ transform: `translateX(-${cur * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="relative min-w-full">
              <img
                src={s.src} alt={s.alt}

                className="w-full h-90 sm:h-72 md:h-100 object-cover"
                draggable={false}
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-4">
                <p className="text-white font-semibold text-base leading-tight">{s.title}</p>
                <p className="text-white/70 text-sm mt-0.5">{s.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Icône pause/play au centre au double-clic — feedback visuel */}
        {paused && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Flèches */}
        <button onClick={() => goTo(cur - 1)} aria-label="Précédent"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/35 border border-white/30 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button onClick={() => goTo(cur + 1)} aria-label="Suivant"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/35 border border-white/30 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>

      {/* Contrôles bas : barre de progression + dots */}
      <div className="flex items-center justify-between mt-3 px-1">

        {/* Dots cliquables */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="relative h-2 rounded-full transition-all duration-300 overflow-hidden"
              style={{ width: i === cur ? "28px" : "8px", background: i === cur ? "#e2e8f0" : "#cbd5e1" }}
            >
              {/* Barre de progression animée sur le dot actif */}
              {i === cur && !paused && (
                <span
                  className="absolute inset-y-0 left-0 rounded-full bg-blue-900"
                  style={{
                    animation: `progress ${INTERVAL}ms linear forwards`,
                  }}
                />
              )}
              {i === cur && paused && (
                <span className="absolute inset-y-0 left-0 w-full rounded-full bg-blue-900/60" />
              )}
            </button>
          ))}
        </div>

        {/* Compteur + hint double-clic */}
        <div className="flex items-center gap-3">
          <span className="text-[12px] text-slate-400 hidden sm:inline">
            {paused ? "double-clic pour reprendre" : "double-clic sur chaque image pour pause mettre pause"}
          </span>
        </div>
      </div>

      {/* Keyframe pour la barre de progression */}
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
