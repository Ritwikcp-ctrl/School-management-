"use client";

import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";

// #region Sample data
const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknown",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

// #endregion
const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CountChart = () => {
  return (
    // MAIN
    <div className="bg-white rounded-lg p-3 w-lg">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-black p-3 text-lg font-semibold">Students</h1>
        <EllipsisVerticalIcon className="h-5 w-5 text-gray-300 hover:text-2xl" />
      </div>

      {/* CHART */}
      <div className="w-full h-full ">
        <RadialBarChart
          style={{
            width: "100%",
            height:"80%",
            maxWidth: "700px",
            maxHeight: "80vh",
            aspectRatio: 1.618,
          }}
          responsive
          cx="30%"
          barSize={14}
          data={data}
        >
          <RadialBar
            label={{ position: "insideStart", fill: "#fff" }}
            background
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
          <Tooltip />
          <Tooltip />
        </RadialBarChart>
      </div>

      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-amber-100 rounded-full">
            <h1 className="font-bold">1,234</h1>
            <h2 className="text-xs text-gray-300">Boys (55%)</h2>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-amber-400 rounded-full">
              <h1 className="font-bold">1,234</h1>
              <h2 className="text-xs text-gray-300">Girls (55%)</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
