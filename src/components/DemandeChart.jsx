import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Lun", value: 8 },
  { day: "Mar", value: 12 },
  { day: "Mer", value: 10 },
  { day: "Jeu", value: 15 },
  { day: "Ven", value: 9 },
  { day: "Sam", value: 18 },
  { day: "Dim", value: 11 },
];

export default function DemandesChart() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="mb-4 text-sm text-white/80">Demandes de devis</h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="fillDemandes" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffffff" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#ffffff" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} strokeOpacity={0.08} />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#ffffff"
              strokeWidth={2}
              fill="url(#fillDemandes)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}