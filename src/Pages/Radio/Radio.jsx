// import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import SquareCard from "../../Components/Card/SquareCard/SquareCard";

const Radio = () => {
 const [radio, setRadio] = useState([]);
 useEffect(() => {
  const options = {
   method: "GET",
   headers: {
    "X-RapidAPI-Key": "11c2e64a9bmsh30bc82dc262039ap110e07jsn34bfdddea5fa",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
   },
  };

  fetch(
   "https://shazam.p.rapidapi.com/charts/track?locale=en-NGN&pageSize=20&startFrom=0",
   options
  )
   .then((response) => response.json())
   .then((data) => {
    const tracks = data.tracks.map((track) => ({
     ...track,
     artist: track.artists,
     image: track.images.coverart,
     subtitle: track.subtitle,
     title: track.title,
     url: track.url,
    }));
    setRadio(tracks);
   })
   .catch((err) => console.error(err));
 }, []);
 return (
  <div
   className="flex mx-3 h-full text-textFill"
   // initial={{ opacity: 0, scale: 0.1, x:"-100vw", y:"-100vh", color:"white" }}
   //  animate={{ opacity: 1, scale: [0.5,1, 1.3, 1.5, 1, 1, 1.2, 1.5],
   //   rotate: [0, 90, 270, 360, 0], x:"0", y:"-10vh", color:"#C6BF5E",}}
   //  transition={{ duration: 3, type:"spring", stiffness:80,}}
  >
   <div className="radioarea grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
   {radio.map((track) => {
     return(
       <SquareCard key={track.title} image={track.image} title={track.title}artist={track.subtitle} url={track.url}/>
     )
   })}
   </div>
  </div>
 );
};

export default Radio;
