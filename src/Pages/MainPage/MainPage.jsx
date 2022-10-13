import React from "react";
import BigCard from "../../Components/Card/BigCard/BigCard";
import LongCard from "../../Components/Card/LongCard/LongCard";
import SquareCard from "../../Components/Card/SquareCard/SquareCard";

const HomePage = () => {
 return (
  <main className="mt-3 ml-4 mr-10">
   <section className="left flex ml-6">
    <BigCard />
    <div className="top text-textFill ml-20">
     <h3 className="text-4xl pb-1">Top charts</h3>
     <LongCard />
     <LongCard />
     <LongCard />
    </div>
   </section>
   <section className="right mt-8 mb-4 gap-4 ml-6 mr-14">
    <div className="new">
     <h3 className="py-3 text-2xl text-textFill">New releases</h3>
     <div className="cardarea scroll">
      <SquareCard />
      <SquareCard />
      <SquareCard />
      <SquareCard />
      <SquareCard />
      <SquareCard />
      <SquareCard />
     </div>
    </div>
    <div className="popular">
     <h3 className="py-3 text-2xl text-textFill">Popular in your area</h3>
     <div className="cardarea scroll">
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
