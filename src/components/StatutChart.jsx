import { Bar, BarChart, CartesianGrid, XAxis, Cell } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import "./chart-theme.css"

const chartData = [
  { status: "En attente", count: 186, fill: "#1e3a8a" },
  { status: "En cours",   count: 305, fill: "#1e3a8a" },
  { status: "Annulée",    count: 209, fill: "#1e3a8a" },
  { status: "Terminée",   count: 237, fill: "#1e3a8a" }
]
const chartConfig = {
  count: { label: "Commandes", color: "var(--chart-1)" },
}
export default function StatutChart() {
  return (
    <div className="gespeed-charts">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Statut des commandes récentes</CardTitle>
          <CardDescription>Suivi des commandes logistiques en temps réel</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[280px]" >
            <BarChart data={chartData} barSize={50} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="#f1f5f9" />
              <XAxis
                dataKey="status"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tick={{ fontSize: 12, fill: "#64748b" }}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
              <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

