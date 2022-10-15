import React from "react";
import { TbPlayerPlay } from "react-icons/tb";

const CollectionCard = () => {
 return (
  <div className="collectionCard">
   <figure className="overflow-hidden">
    <img src="/assets/person2.jpg" alt="person2" className="album" />
   </figure>
   <div className="flex flex-col justify-between gap-3 absolute bottom-1 left-3 mb-3">
    <div id="details">
     <p className="text-textFill">Life in a bubble</p>
     <small className="text-iconFill">The Van</small>
    </div>
    <div className="likes flex relative lg:hidden lg:hover:block">
     <p>2.3M likes</p>
     <figure className="bg-circleColor py-2 px-2 rounded-full absolute bottom-8 -right-20 ">
      <TbPlayerPlay className="fill-activeColor text-activeColor border-0" />
     </figure>
    </div>
   </div>
  </div>
 );
};

export default CollectionCard;
