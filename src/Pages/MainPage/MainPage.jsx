import React from "react";
import BigCard from "../../Components/Card/BigCard/BigCard";
import LongCard from "../../Components/Card/LongCard/LongCard";
import SquareCard from "../../Components/Card/SquareCard/SquareCard";
import songsdata from "../../Songs/Song";
import Trending from "../../Songs/Trending";
const HomePage = ({ isPlaying, setIsPlaying }) => {
 return (
  <main className="mt-3 lg:ml-4 lg:mr-10 mr-6">
   <section className="flex flex-col lg:flex-row justify-between">
    <div className="big-card lg:w-5/6">
    <BigCard />
    </div>
    <div className="top text-textFill mt-6 lg:mt-0">
     <h3 className="text-4xl pb-1">Top charts</h3>
     <div className="card scroll lg:block lg:space-x-0">
      {Trending.map(({ artist, title, image, song, time }) => {
       return (
        <LongCard
         key={title}
         artist={artist}
         title={title}
         image={image}
         song={song}
         time={time}
        />
       );
      })}
     </div>
    </div>
   </section>
   <section className="right mt-8 mb-4 gap-4 ml-6 lg:mr-14">
    <div className="new my-6">
     <h3 className="scrolltext">New releases</h3>
     <div className="scroll">
      {songsdata.map(({ artist, title, image, song }) => {
       return (
        <SquareCard
         key={title}
         artist={artist}
         title={title}
         image={image}
         song={song}
        />
       );
      })}
     </div>
    </div>
    <div className="popular my-8">
     <h3 className="scrolltext">Popular in your area</h3>
     <div className="scroll">
      {songsdata.map(({ artist, title, image, song }) => {
       return (
        <SquareCard artist={artist} title={title} image={image} song={song} />
       );
      })}
     </div>
    </div>
   </section>
  </main>
 );
};

export default HomePage;
