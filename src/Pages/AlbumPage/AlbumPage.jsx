import React from "react";
import songsdata from "../../Songs/Song";
import { BsFillPlayFill } from "react-icons/bs";
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

    <div className="flex flex-col gap-3 text-textFill justify-end ml-3 mb-6">
     <h3 className="text-altFill text-xl lg:text-3xl">Twice As Tall</h3>
     <p className="text-primary">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, dolores.
     </p>
     <p>
      <span> 8 tracks </span> -<span> 4 hrs </span>
      <span> 700mins </span>
     </p>

     <div className="flex gap-4">
      <button className="button">
       <BsFillPlayFill /> Play all
      </button>
      <button className="button">
       <TbPlaylist /> Add to collection
      </button>
      <figure className="rounded-full border border-circleColor p-3 self-center ml-auto absolute right-0 -top-20 lg:block lg:top-6 lg:-right-28">
       <svg
        className="items-center justify-center fill-activeColor"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="#E5524A"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path d="M1.15388 7.69874C0.349134 5.18624 1.28963 2.31449 3.92738 1.46474C5.31488 1.01699 6.84638 1.28099 7.99988 2.14874C9.09113 1.30499 10.6789 1.01999 12.0649 1.46474C14.7026 2.31449 15.6491 5.18624 14.8451 7.69874C13.5926 11.6812 7.99988 14.7487 7.99988 14.7487C7.99988 14.7487 2.44838 11.7277 1.15388 7.69874Z" />
        <path
         opacity="0.4"
         d="M11 4.02501C11.8025 4.28451 12.3695 5.00076 12.4377 5.84151"
        />
       </svg>
      </figure>
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
