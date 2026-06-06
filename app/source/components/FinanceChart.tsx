"use client";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const FinanceChart =() => {

  return (
    <div className="bg-white rounded-lg p-4 h-full">
      {/* main */}
      <div className="flex justify-between items-center">
        <h1 className ="text-black p-3 text-lg font-semibold ">Finance</h1>
        <EllipsisVerticalIcon className="h-5 w-5 text-gray-300 hover:text-te" />
      </div>
      <div className="w-full h-[90%]  rounded-xl p-6">
        {/* chart */}
        <LineChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
      <XAxis dataKey="name" stroke="var(--color-text-3)" />
      <YAxis width="auto" stroke="var(--color-text-3)" />
      <Tooltip
        cursor={{
          stroke: 'var(--color-border-2)',
        }}
        contentStyle={{
          backgroundColor: 'var(--color-surface-raised)',
          borderColor: 'var(--color-border-2)',
        }}
      />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#2C5282"
        dot={{
          fill: 'var(--color-surface-base)',
        }}
        activeDot={{ r: 8, stroke: 'var(--color-surface-base)' }}
      />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="#D2691E"
        dot={{
          fill: 'var(--color-surface-base)',
        }}
        activeDot={{ stroke: 'var(--color-surface-base)' }}
      />
      
    </LineChart>
      </div>
    </div>
  );
};

export default FinanceChart;
