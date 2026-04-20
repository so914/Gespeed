import React from "react";

const cars = [
  {
    img: "./car2.webp",
    badge: "Petit volume",
    title: "Véhicule utilitaire léger",
    desc: "Idéal pour les livraisons urbaines et les petits déménagements. Maniable et économique en carburant.",
    specs: [
      { val: "8 m³", label: "Volume" },
      { val: "800 kg", label: "Charge" },
      { val: "Urbain", label: "Usage" },
    ],
  },
  {
    img: "./car1.webp",
    badge: "Grand volume",
    title: "Camion grand déménagement",
    desc: "Pour les déménagements complets — studio ou maison entière. Capacité maximale, confort de chargement.",
    specs: [
      { val: "30 m³", label: "Volume" },
      { val: "3,5 T", label: "Charge" },
      { val: "Longue dist.", label: "Usage" },
    ],
  },
];

function CarCard({ car }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900  p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-blue-400/50">
      {/* Glow rings */}
      {[220, 300, 380].map((size, i) => (
        <div
          key={i}
          style={{ width: size, height: size }}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/30"
        />
      ))}

      {/* Spinning dashed ring */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-62 w-62 -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full border-2 border-dashed border-blue-500 [animation-duration:18s]" />

      {/* Bottom glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-16 w-52 -translate-x-1/2 rounded-full bg-blue-400/20 blur-xl" />

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 to-transparent" />

      {/* Badge */}
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/15 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-blue-300">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        {car.badge}
      </span>

      {/* Car image */}
      <div className="relative z-10 my-4 flex justify-center items-center translate-y-16">
        <img
          src={car.img}
          alt={car.title}
          className="w-full max-w-[280px] drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* Info */}
      <h3 className="mb-2 text-[17px] font-semibold text-white">{car.title}</h3>
      <p className="text-[13px] leading-relaxed text-gray-200">{car.desc}</p>

      {/* Specs */}
      <div className="mt-4 flex gap-3">
        {car.specs.map((s) => (
          <div
            key={s.label}
            className="flex-1 rounded-xl border border-white/8 bg-white/5 p-2.5 text-center"
          >
            <div className="text-[15px] font-semibold text-blue-300">{s.val}</div>
            <div className="mt-0.5 text-[10px] uppercase tracking-wider text-white ">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CarSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-10 py-16">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 mb-14 text-center">
        <h2 className="text-3xl font-semibold">
          Des véhicules adaptés à chaque besoin
        </h2>
        <div className="mx-auto mt-4 h-0.5 w-12 rounded-full bg-blue-400" />
        <p className="mx-auto mt-4 max-w-md text-[15px] text-gray-700">
          Choisissez la solution idéale selon le volume, la distance et le type de transport.
        </p>
      </div>

      {/* cartes */}
      <div className="relative z-10 grid grid-cols-2 gap-8">
        {cars.map((car) => (
          <CarCard key={car.title} car={car} />
        ))}
      </div>
    </section>
  );
}

export default CarSection;