import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
const TrackCard = () => {
 return (
  <div className="flex bg-lcColor p-2 text-textFill justify-between items-center">
   <div className="flex gap-4">
    <img src="/assets/person4.jpg" className="h-16 w-16 rounded-2xl" />
    {/* <img src={Heart} alt="" className="w-5" /> */}
   </div>
   <p>
    Bank on it ~ <span>Twice as tall</span>
   </p>
   <h2>Single</h2>
   <div className="div">
   <span>{Math.floor(300 / 60)}</span>:
   <span>{("0" + (300 % 60)).slice(-2)}</span>
   </div>
   <BsThreeDotsVertical />
  </div>
 );
};

export default TrackCard;
