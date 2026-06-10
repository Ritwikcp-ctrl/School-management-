import CountChart from "@/app/source/components/CountChart";
import UserCard from "@/app/source/components/userCards";
import CountAttendence from "@/app/source/components/CountAttendence";
import type { ComponentType } from "react";
import FinanceChart from "@/app/source/components/FinanceChart";
import EventCalender from "@/app/source/components/EventCalender";

// Cast the imported UserCard to a typed React component and use that alias where you render the cards.
// Made changes.
const UserCardComp = UserCard as unknown as ComponentType<{ type: string }>;

const Adminpage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* usercard */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCardComp type="Student" />
          <UserCardComp type="Teacher" />
          <UserCardComp type="Parents" />
          <UserCardComp type="Staffs" />
        </div>


        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row w-full">

          <div className ="bg-white rounded-lg px-3 py-3 flex-1">
            <CountChart />
          </div>

          {/* ATTENDENCE CHART */}
          <div className= "bg-white rounded-lg px-3 py-3 flex-1">
          <CountAttendence/>
          </div>

        </div>


        {/* BOTTOM CHART */}
       <div className="col-span-1 lg:col-span-2 w-full rounded-2xl border dark:border-gray-700 bg-white shadow-sm p-6">
  <div className="h-122.5">
    <FinanceChart />
  </div>
</div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 ">
      <EventCalender/></div>
    </div>
  );
};

export default Adminpage;
