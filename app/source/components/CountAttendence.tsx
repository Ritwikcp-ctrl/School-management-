"use client";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
// import { RechartsDevtools } from '@recharts/devtools';
// #region Sample data
const data = [
  {
    name: "Sunday",
    Present: 590,
    Absent: 800,
    
  },
  {
    name: "Monday",
    Present: 868,
    Absent: 967,
    
  },
  {
    name: "Tuesday",
    Present: 1397,
    Absent: 1098,
    
  },
  {
    name: "Wednesday",
    Present: 1480,
    Absent: 1200,
    
  },
  {
    name: "Thrusday",
    Present: 1480,
    Absent: 1200,
    
  },
  {
    name: "Friday",
    Present: 1480,
    Absent: 1200,
    
  },
  {
    name: "Saturday",
    Present: 1480,
    Absent: 1200,
    
  },
  
  
];

const CountAttendence = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full ">
     <div className="flex justify-between items-center">
      <h1 className="text-black p-3 text-lg font-semibold">Attendence</h1>
       <EllipsisVerticalIcon className="h-5 w-5 text-gray-300 hover:text-te" />
       </div>
       <div className="w-full h-[90%] " >
       <ComposedChart
        style={{
          width: "100%",
          height:"90%",
        }}
        responsive
        data={data}
        margin={{
          top: 30,
          right: 30,
          bottom: 0,
          left: 10,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
         <Bar dataKey="Present" barSize={20} fill="#DCD0FF" /> 
        <Line type="monotone" dataKey="Present" stroke="#ff7300" />
        <Line type="monotone" dataKey="Absent" stroke="#aa7568" />
      </ComposedChart>
      
     </div>
    </div>
  );
};

export default CountAttendence;
