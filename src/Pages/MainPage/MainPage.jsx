import React from "react";
import BigCard from "../../Components/Card/BigCard/BigCard";
import LongCard from "../../Components/Card/LongCard/LongCard";
import SquareCard from "../../Components/Card/SquareCard/SquareCard";

const HomePage = () => {
 return (
  <main className="mt-3 lg:ml-4 lg:mr-10 mr-6">
   <section className="left flex flex-col lg:flex-row ml-6">
    <BigCard />
    <div className="top text-textFill lg:ml-20 mt-6 lg:mt-0">
     <h3 className="text-4xl pb-1">Top charts</h3>
     <div className="card scroll lg:block lg:space-x-0">
      <LongCard />
      <LongCard />
      <LongCard />
     </div>
    </div>
   </section>
   <section className="right mt-8 mb-4 gap-4 ml-6 lg:mr-14">
    <div className="new my-6">
     <h3 className="scrolltext">New releases</h3>
     <div className="scroll">
      <SquareCard />
      <SquareCard />
      <SquareCard />
      <SquareCard />
      <SquareCard />
      <SquareCard />
      <SquareCard />
     </div>
    </div>
    <div className="popular my-8">
     <h3 className="scrolltext">Popular in your area</h3>
     <div className="scroll">
      <SquareCard />
      <SquareCard />
      <SquareCard />
      <SquareCard />
      <SquareCard />
      <SquareCard />
      <SquareCard />
     </div>
    </div>
   </section>
  </main>
 );
};

export default HomePage;
