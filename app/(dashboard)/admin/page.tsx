import CountChart from "@/app/source/components/CountChart";
import UserCard from "@/app/source/components/userCards";
import type { ComponentType } from "react";

// Cast the imported UserCard to a typed React component and use that alias where you render the cards.
// Made changes.
const UserCardComp = UserCard as unknown as ComponentType<{ type: string }>;

const Adminpage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        {/* usercard */}
        <div className="flex gap-4 justify-between flex-wrap">
           <UserCardComp type= "Student" /> 
          <UserCardComp type="Teacher" />
          <UserCardComp type="Parents" />
          <UserCardComp type="Staffs" /> 
        </div>
        {/* MIDDLE CHARTS */}
        <div className="">
            <CountChart/>
        </div>
        {/* BOTTOM CHART */}
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 "></div>
    </div>
  );
};

export default Adminpage;
