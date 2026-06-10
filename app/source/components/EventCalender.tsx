"use client"
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

type ValuePiece = Date | null ;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary
const events = [

    {
        id:1,
        title: "time to go to gym",
        time :"12:00pm - 2:00pm",
        description:"we have to do this work by the time we go for holiday"
    },

    {
        id:2,
        title: "time to go to gym",
        time :"1:00pm - 2:00pm",
        description:"we have to do this work by the time we go for holiday"
    },

    {
        id:3,
        title: "time to go to gym",
        time :"1:00pm - 2:00pm",
        description:"we have to do this work by the time we go for holiday"
    },

    {
        id:4,
        title: "time to go to gym",
        time :"1:00pm - 2:00pm",
        description:"we have to do this work by the time we go for holiday"
    },

    {
        id:5,
        title: "time to go to gym",
        time :"1:00pm - 2:00pm",
        description:"we have to do this work by the time we go for holiday"
    },

    {
        id:6,
        title: "time to go to gym",
        time :"1:00pm - 2:00pm",
        description:"we have to do this work by the time we go for holiday"
    },

    {
        id:7,
        title: "time to go to gym",
        time :"1:00pm - 2:00pm",
        description:"we have to do this work by the time we go for holiday"
    },

]


const EventCalender =() => {

    const [value,onChange] = useState<Value>(new Date());
    return (
        <div className ="bg-white p-4 rounded-md text-black"> <Calendar onChange={onChange} value={value} />

        <div className="flex items-center justify-between">
            <h1 className ="text-xl font-semibold my-4">Events</h1>
            <EllipsisVerticalIcon  className="h-5 w-5 text-gray-900 hover:text-te"
            />
        </div>
        
        <div className = "flex flex-col gap-4">
          {events.map(event=>(
            <div className ="p-5 rounded-md boder-2 border-gray-100 border-t-4 odd:border-t-amber-400 even:border-t-amber-800" key={event.id}>
          <div className="flex items-center justify-between">
            <h1 className = "font-semibold text-gray-400">{event.title}</h1>
            <span className ="text-gray-800 text-xs">{event.time}</span>
          </div>
          <p className ="mt-2 text-gray-900 text-sm">{event.description}</p>

            </div>
          ))} 
        </div>
         
        </div>
    )
}
export default EventCalender;