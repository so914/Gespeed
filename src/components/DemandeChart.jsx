"use client"

import { Pie, PieChart } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import "./chart-theme.css"

const chartData = [
  { service: "Transport",             count: 275, fill: "var(--color-transport)"   },
  { service: "Déménagement",          count: 200, fill: "var(--color-demenagement)" },
  { service: "Emballage",             count: 187, fill: "var(--color-emballage)"   },
  { service: "Nettoyage",             count: 173, fill: "var(--color-nettoyage)"   },
  { service: "Montage meubles",       count: 90,  fill: "var(--color-montage)"     },
]

const chartConfig = {
  count:        { label: "Demandes" },
  transport:    { label: "Transport",       color: "#1e3a8a" },
  demenagement: { label: "Déménagement",    color: "var(--chart-2)" },
  emballage:    { label: "Emballage",       color: "var(--chart-3)" },
  nettoyage:    { label: "Nettoyage",       color: "var(--chart-4)" },
  montage:      { label: "Montage meubles", color: "var(--chart-5)" },
}

export default function DemandeChart() {
  return (
    <div className="gespeed-charts">
      <Card className="flex flex-col bg-white">
        <CardHeader className="items-center pb-0">
          <CardTitle>Services demandés</CardTitle>
          <CardDescription>Répartition des demandes de service</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[280px]">
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={chartData}
                dataKey="count"
                nameKey="service"
                innerRadius={60}
                strokeWidth={2}
                stroke="#ffffff"
              />
              <ChartLegend content={<ChartLegendContent nameKey="service" />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
