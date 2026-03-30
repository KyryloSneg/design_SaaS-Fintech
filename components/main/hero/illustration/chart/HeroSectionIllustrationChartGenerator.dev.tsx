"use client";

import { ChartConfig, ChartContainer } from "@/components/ui/shadcn/chart";
import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";

interface CellData {
  day: string;
  value: number;
  active: boolean;
}

// we show values up to 10K while the real values going only up to 6K in order to match design
const lastRealValue = 4000;
const visual10KValue = 6000;

const сhartData: CellData[] = [
  { day: "S", value: 1170, active: false },
  { day: "M", value: 1750, active: false },
  { day: "T", value: 4080, active: false },
  { day: "W", value: 3000, active: true },
  { day: "T", value: 5730, active: true },
  { day: "F", value: 1170, active: false },
  { day: "S", value: 3000, active: true },
  { day: "S", value: 4470, active: true },
];

const chartConfig = {
  value: {
    label: "Balance",
  },
} satisfies ChartConfig;

interface TickStyles {
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  fill: string;
}

const tickStyles: TickStyles = {
  fontSize: "0.375rem",
  fontWeight: "600",
  fontFamily: "var(--font-montserrat)",
  fill: "var(--chart-axis-foreground) !important",
};

// dev-only generator of chart
const HeroSectionIllustrationChartGenerator = () => {
  return (
    // NOTE: sync this width value with the left margin's one */}
    <ChartContainer
      config={chartConfig}
      className="h-15.5 w-[calc(100%+2.4375rem)]"
    >
      <BarChart
        data={сhartData}
        className="-ml-9.75"
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={tickStyles}
          height={9}
          dy={-4}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={tickStyles}
          ticks={[0, 2000, lastRealValue, visual10KValue]}
          tickFormatter={value =>
            value === 0
              ? "0"
              : `${(value === visual10KValue ? 10000 : value) / 1000}k`
          }
          interval={0}
          padding={{ top: 3 }}
        />
        <Bar dataKey="value" barSize={22} radius={[2, 2, 0, 0]}>
          {сhartData.map((entry, index) => (
            <Cell
              key={`${entry.day}-${entry.value}-${index}`}
              fill={`${entry.active ? "var(--primary)" : "var(--tertiary)"}`}
            />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  );
};

export default HeroSectionIllustrationChartGenerator;
