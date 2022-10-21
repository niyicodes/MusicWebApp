import React from "react";
import songsdata from "../../Songs/Song";
import { BsFillPlayFill } from "react-icons/bs";
import { RiHeartAddFill } from "react-icons/ri";
import { TbPlaylist } from "react-icons/tb";
import TrackCard from "../../Components/Card/TrackCard/TrackCard";
const AlbumPage = ({ image, title, artist }) => {
 return (
  <div>
   <section className="flex">
    <img
     src="/assets/person4.jpg"
     alt=""
     className="h-60 w-72 object-cover rounded-3xl"
    />

    <div className="albumdiv">
     <h3 className="text-altFill text-xl lg:text-3xl">Twice As Tall</h3>
     <p className="text-primary">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, dolores.
     </p>
     <p>
      <span> 8 tracks </span> -<span> 4 hrs </span>
      <span> 25mins </span>
     </p>

     <div className="flex gap-4 items-center">
      <button className="button">
       <BsFillPlayFill /> Play all
      </button>
      <button className="button">
       <TbPlaylist /> Add to collection
      </button>
      <RiHeartAddFill className="text-3xl cursor-pointer hover:text-alt2Fill" />
     </div>
    </div>
   </section>

   <section className="tracks my-8 flex flex-col gap-3">
    <TrackCard />
    <TrackCard />
    <TrackCard />
    <TrackCard />
    <TrackCard />
    <TrackCard />
    <TrackCard />
    <TrackCard />
    <TrackCard />
    <TrackCard />
    <TrackCard />
    <TrackCard />
    <TrackCard />
    <TrackCard />
    <TrackCard />
    <TrackCard />
    <TrackCard />
    <TrackCard />
   </section>
  </div>
 );
};

export default AlbumPage;
