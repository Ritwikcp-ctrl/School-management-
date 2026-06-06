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
    <div className="bg-white rounded-lg px-4 py-4 w-lg ">
      {/* TITLE */}
      <div className="flex justify-between items-center ">
        <h1 className="text-black p-3 text-lg font-semibold px-3 ">Students</h1>
        <EllipsisVerticalIcon className="h-5 w-5 text-gray-300 hover:text-2xl" />
      </div>

      {/* CHART + BOTTOM (inside the white chart area) */}
      <div className="w-full h-full flex flex-col px-9 py-4 mt-0 items-center ">
        <RadialBarChart
          style={{
            width: "100%",
            height: "80%",
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
        </RadialBarChart>

        {/* BOTTOM */}
        <div className="flex justify-center gap-8  w-full">
          {/* Boys */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 bg-amber-300 rounded-full flex items-center justify-center">
              <span className="font-bold text-sm">1,234</span>
            </div>
            <span className="text-xs text-gray-500">Boys (55%)</span>
          </div>

          {/* Girls */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 bg-amber-400 rounded-full flex items-center justify-center">
              <span className="font-bold text-sm">1,234</span>
            </div>
            <span className="text-xs text-gray-500">Girls (55%)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountChart;