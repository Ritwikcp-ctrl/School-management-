"use client";

import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";

// #region Sample data
const data = [
  {
    name: "Boys",
    uv: 55,
    fill: "#8884d8",
  },
  {
    name: "Girls",
    uv: 55,
    fill: "#FFD700",
  },
  
];

// #endregion
const style = {
  top: "46%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CountChart = () => {
  return (
    // MAIN
    <div className="bg-white rounded-lg px-3 py-3 flex-1 ">
      {/* TITLE */}
      <div className="flex justify-between items-center ">
        <h1 className="text-black p-3 text-lg font-semibold px-3 ">Students</h1>
        <EllipsisVerticalIcon className="h-5 w-5 text-gray-900 hover:text-2xl" />
      </div>

      {/* CHART + BOTTOM (inside the white chart area) */}
      <div className="w-full h-full flex flex-col px-9 py-4 mt-0 items-center ">
        <RadialBarChart
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: 1.618,
          }}
          responsive
          cx="35%"
          barSize={30}
          data={data}
        >
          <RadialBar
            label={{ position: "insideStart", fill: "#fff" }}
            background
            dataKey="uv"
          />
          <Legend
            iconSize={12}
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
          <Tooltip />
        </RadialBarChart>

        {/* BOTTOM */}
        <div className="flex justify-center gap-6 p-7 w-1/2 mr-25  ">
          {/* Boys */}
          {/* <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 bg-amber-300 rounded-full flex items-center justify-center">
              <span className="font-bold text-sm">1,234</span>
            </div>
            <span className="text-xs text-gray-500">Boys (55%)</span>
          </div> */}

          {/* Girls */}
          {/* <div className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 bg-amber-400 rounded-full flex items-center justify-center">
              <span className="font-bold text-sm">1,234</span>
            </div>
            <span className="text-xs text-gray-500">Girls (55%)</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CountChart;