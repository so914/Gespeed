"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import "./chart-theme.css"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart"

export const description = "Statistique des visiteurs en fonction des navigateurs"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "#1e3a5f" },
  { browser: "safari", visitors: 200, fill: "#1e3a5f" },
  { browser: "firefox", visitors: 287, fill:"#1e3a5f" },
  { browser: "edge", visitors: 173, fill: "#1e3a5f" },
  { browser: "other", visitors: 190, fill: "#1e3a5f" },
]

const chartConfig = {
  visitors: {
    label: "Visiteurs",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-1)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-1)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-1)",
  },
  other: {
    label: "Other",
    color: "var(--chart-1)",
  },
} 

export default function UserNumber() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Visiteurs par navigateur</CardTitle>
        <CardDescription>Statistique des visiteurs en fonction des différents navigateurs</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
