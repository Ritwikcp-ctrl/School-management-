
import { useState } from "react";
import ScrollFeatures from "./ScrollFeature";

export const BackgroundStyle = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full  relative">
        {/* Magenta Orb Grid Background */}
<div
 className="absolute inset-0 z-0"
 style={{
   background: "white",
   backgroundImage: `
     linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
     linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
     radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
   `,
   backgroundSize: "40px 40px, 40px 40px, 100% 100%",
 }}
/>
  {/* Your Content/Components */}
  
        <div className="w-full min-h-screen flex items-center justify-center px-2 py-0  ">
          <div className="w-full h-1/2 bg-white mb-20  py-0 lg:p-20 m-0">
            <ScrollFeatures />
          </div>
        </div>

</div>
  );
};
