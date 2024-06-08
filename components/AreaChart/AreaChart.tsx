import { AreaChart } from "@tremor/react";
import customTooltip from "./Tooltip";

const chartdata = [
  {
    date: "Jan 23",
    BPM: 167,
  },
  {
    date: "Feb 23",
    BPM: 125,
  },
  {
    date: "Mar 23",
    BPM: 156,
  },
  {
    date: "Apr 23",
    BPM: 165,
  },
  {
    date: "May 23",
    BPM: 153,
  },
  {
    date: "Jun 23",
    BPM: 124,
  },
  {
    date: "Jun 24",
    BPM: 14,
  },
  {
    date: "Jun 25",
    BPM: 75,
  },
  {
    date: "Jun 26",
    BPM: 124,
  },
];

export default function AreaChartComponent() {
  return (
    <>
      <AreaChart
        className="h-72"
        data={chartdata}
        index="date"
        categories={["BPM"]}
        colors={["green"]}
        yAxisWidth={30}
        customTooltip={customTooltip}
        showGradient={false}
        curveType="natural"
      />
    </>
  );
}
