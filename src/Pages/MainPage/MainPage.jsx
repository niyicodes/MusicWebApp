import React from "react";
import BigCard from "../../Components/Card/BigCard/BigCard";
import LongCard from "../../Components/Card/LongCard/LongCard";
import SquareCard from "../../Components/Card/SquareCard/SquareCard";

const HomePage = () => {
 return (
  <div className="border mt-3">
   <div className="left flex mt-10 justify-evenly mr-10">
    <BigCard />
    <div className="top text-textFill">
     <h3 className="text-4xl pb-1">Top charts</h3>
     <LongCard />
     <LongCard />
     <LongCard />
    </div>
   </div>
   <div className="right mt-8 mb-4 gap-4 ml-6">
    <div className="new mr-6 snap-x">
     <h3 className="py-3 text-2xl text-textFill">New releases</h3>
     <div className="cardarea flex gap-2 max-w-screen overflow-x-auto ">
      <div className="snap-start">
       <SquareCard />
      </div>
      <div className="snap-start">
       <SquareCard />
      </div>
      <div className="snap-start">
       <SquareCard />
      </div>
      <div className="snap-start">
       <SquareCard />
      </div>
      <div className="snap-start">
       <SquareCard />
      </div>
      <div className="snap-start">
       <SquareCard />
      </div>
      <div className="snap-start">
       <SquareCard />
      </div>
     </div>
    </div>
    <div className="popular">
     <h3 className="py-3 text-2xl text-textFill">Popular in your area</h3>
     <div className="cardarea grid grid-cols-7 gap-2 snap-x">
      <SquareCard />
      <SquareCard />
      <SquareCard />
      <SquareCard />
      <SquareCard />
      <SquareCard />
      <SquareCard />
     </div>
    </div>
   </div>
  </div>
 );
};

export default HomePage;
