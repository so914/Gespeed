import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="mb-6 md:mb-12">

      {/* ── DESKTOP ── */}
      <div
        className="hidden md:grid md:grid-cols-2 min-h-[500px] mt-28 overflow-hidden rounded-2xl mx-10 shadow-xl relative"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
        }}
      >
        {/* Dot grid global */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* ── Col gauche : Texte ── */}
        <div className="relative z-10 flex items-center px-12  pt-16">
          <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full border-2 border-blue-400/10" />
          <div className="pointer-events-none absolute bottom-0 left-10 w-48 h-48 rounded-full border-2 border-blue-400/[0.06]" />

          <div className="w-full">

            <h1 className="text-3xl xl:text-4xl font-bold mb-5 text-white leading-tight">
              Déménagez en{" "}
              <span className="text-blue-600">toute sécurité</span>{" "}
              <span className="relative inline-block">
                au Congo
                <span
                  className="absolute left-0 h-[3px] w-full rounded-full bg-blue-600"
                  style={{ bottom: "-6px" }}
                />
              </span>
            </h1>

            <p className="mb-8 text-white/50 text-base leading-relaxed text-justify hyphens-auto">
              Emballage, transport, déballage, manutention, montage et démontage
              de meubles&nbsp;: GeSpeed vous propose une solution complète pour
              gagner du temps et avancer en toute confiance.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Link
                to="/devis"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-800 rounded-xl py-3 px-7 text-white font-semibold text-sm transition active:scale-[0.98] shadow-lg shadow-blue-500/30"
              >
                Demandez un devis
                <span className="font-semibold">gratuitement</span>
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-6">
              {[
                { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", label: "Express" },
                { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "Sécurisé" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Suivi GPS" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-1.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-400/10">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-blue-300 fill-none stroke-2 text-md">
                      <path d={t.icon} />
                    </svg>
                  </div>
                  <span className="text-md font-medium text-white/40">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Col droite : Blob + Image ── */}
        <div className="relative z-10 flex items-center justify-center overflow-hidden">
          {/* Anneaux */}
          <div className="pointer-events-none absolute -top-10 -right-10 w-56 h-56 rounded-full border-2 border-blue-400/20" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 w-80 h-80 rounded-full border-2 border-blue-400/[0.9]" />

          {/* Blob lumière douce */}
          <div
            className="absolute"
            style={{
              width: "360px",
              height: "400px",
              background:
                "radial-gradient(ellipse at 45% 55%, rgba(60, 129, 240, 0.22) 0%, rgba(99,102,241,0.12) 45%, transparent 72%)",
              borderRadius: "62% 38% 46% 54% /60",
              transform: "rotate(-8deg)",
            }}
          />
          {/* Second blob pour profondeur */}
          <div
            className="absolute"
            style={{
              width: "280px",
              height: "310px",
              background:
                "radial-gradient(ellipse at 60% 38%, rgba(147,197,253,0.12) 0%, transparent 68%)",
              borderRadius: "38% 62% 54% 46% / 44% 60% 40% 56%",
              filter: "blur(1.5px)",
              transform: "rotate(14deg) translateX(25px) translateY(-10px)",
            }}
          />

          {/* Contour SVG blob artistique */}
          <svg
            className="absolute"
            viewBox="0 0 400 440"
            style={{ width: "380px", height: "420px", opacity: 0.18 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200,28 C296,6 374,82 382,174 C393,284 326,392 216,422 C106,452 26,368 18,256 C6,136 104,50 200,28Z"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
            <path
              d="M200,60 C272,44 338,104 346,184 C356,278 300,366 204,390 C108,414 48,342 42,248 C34,144 128,76 200,60Z"
              fill="rgba(59,130,246,0.06)"
              stroke="none"
            />
          </svg>

     
          <img
            src="hero.webp"
            alt="livreur GeSpeed"
            style={{
              zIndex: 3,
              objectFit: "contain",
              transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
            className="hover:scale-[1.04]  translate-y-10 h-full cursor-pointer min-w-2xl"
          />
        </div>
      </div>


      {/* ── MOBILE ── */}
      <div className="md:hidden flex flex-col">

        <div
          className="relative w-auto overflow-hidden rounded-xl mt-6 mx-3"
          style={{
            maxHeight: "250px",
            background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 rounded-full border border-white/20" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 w-40 h-40 rounded-full border-2 border-white/10" />

          {/* Blob mobile */}
          <div
            className="absolute"
            style={{
              top: "50%", left: "50%",
              transform: "translate(-50%, -40%)",
              width: "240px", height: "260px",
              background: "radial-gradient(ellipse at 40% 60%, rgba(59,130,246,0.22) 0%, transparent 70%)",
              borderRadius: "62% 38% 46% 54% / 60% 44% 56% 40%",
              filter: "blur(2px)",
            }}
          />

          <div className="relative z-10 flex items-end justify-center" style={{ minHeight: "300px" }}>
            <img
              src="hero.webp"
              alt="livreur GeSpeed"
              className=""
              style={{
                minHeight: "300px",
                objectFit: "contain",
                filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.30))",
                transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Texte bas */}
        <div className="bg-white px-5 py-7">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700 mb-4 tracking-wide uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Service disponible au Congo
          </span>

          <h1 className="text-2xl font-bold mb-3 text-slate-900 leading-tight">
            Déménagez en{" "}
            <span className="text-blue-600">toute sécurité</span>{" "}
            <span className="underline decoration-blue-600 decoration-[3px] underline-offset-[6px]">
              au Congo
            </span>
          </h1>

          <p className="mb-6 text-gray-500 text-sm leading-relaxed text-justify hyphens-auto">
            Emballage, transport, déballage, manutention, montage et démontage
            de meubles&nbsp;: GeSpeed vous propose une solution complète pour
            gagner du temps et avancer en toute confiance.
          </p>

          <Link
            to="/devis"
            className="flex items-center justify-center gap-2 w-full bg-blue-900 rounded-xl py-3.5 px-6 text-white font-semibold text-sm transition active:scale-[0.98] shadow-md shadow-blue-900/20"
          >
            Demandez un devis gratuitement
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2 shrink-0">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <div className="mt-5 flex items-center justify-around border-t border-gray-100 pt-5">
            {["Express", "Sécurisé", "Suivi GPS"].map((label) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-50">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-blue-600 fill-none stroke-2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[12px] font-medium text-gray-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}