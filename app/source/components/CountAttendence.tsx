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
    <div className="bg-white rounded-lg px-3 py-3 flex-1 ">
     <div className="flex justify-between items-center">
      <h1 className="text-black p-3 text-lg font-semibold">Attendence</h1>
       <EllipsisVerticalIcon className="h-5 w-5 text-gray-900 hover:text-te" />
       </div>
       <div className="w-full h-full flex flex-col px-9 py-4 mt-0 items-center " >
       <ComposedChart
        style={{
          width: "100%",
          height:"100%",
        }}
        responsive
        data={data}
        margin={{
          top: 3,
          right: 3,
          bottom: 0,
          left: 0,
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
