import MotionButton from "../Component/MotionButton";
import Animate from "./Animate";

const HeroSection = () => {

    return (
  <div className="flex flex-col w-full h-[900px] bg-amber-200  px-10 py-30  ">
      <div className="flex-1 h-px  border-t-2  border-dotted border-black py-1 mx-auto w-245 " />
   
  <div className="grid grid-cols-2 items-center gap-x-16 gap-y-32 mt-0 mb-21 font-serif font-extrabold text-base text-black">
     
    <div className="flex flex-col grid-cols-2 gap-x-40 px-69 py-9">
  <h1 className="text-8xl font-black tracking-tight text-black ">
    Inspire.
    <br />
    Innovate.
    <br />
    Futurize.
  </h1>

  <p className="mt-5 w-2xl text-lg leading-relaxed text-gray-600">
     The power of blockchain-driven software, Secure, transparent, and future-ready solutions built
     
     
     for the next generation of digital transformation.
  </p>


 <div className="py-4 ">
     <MotionButton label="Get started" />
   

 </div>

   
</div>

    <div className="justify-end  flex gap-0 m-0 ml-40 mb-17 p-0 w-1/2 h-1/2 static items-center">
     <Animate/>
    </div>

  </div>
</div>
  );
};

export default HeroSection;
