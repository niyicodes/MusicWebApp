import React from "react";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { BsShuffle, BsFillVolumeUpFill,BsFillPauseFill } from "react-icons/bs";
import { FiRepeat } from "react-icons/fi";
import { TbPlayerPlay } from "react-icons/tb";
import Range from "../Range/Range";

const Player = ({audioElem, isPlaying, setIsPlaying, currentSong}) => {
 return (
  <main className="player">
   <div className="flex gap-3 items-center">
    <img
     src="/assets/person4.jpg"
     alt="person4"
     className="w-14 h-14 rounded-full"
    />
    <div className="d">
     <p>ljflsjfs</p>
     <small className="text-iconFill">slfn.smf</small>
    </div>
   </div>
   <div className="divplayer text-xl text-textFill">
    <div className="controls ">
     <BsShuffle className="hover:rounded-full hover:border-2" />
     <GiPreviousButton className="hover:rounded-full hover:border-2" />
     {isPlaying ? (<BsFillPauseFill />) :(<TbPlayerPlay className="hover:rounded-full hover:border-2" />)}
     <GiNextButton className="hover:rounded-full hover:border-2" />
     <FiRepeat className="hover:rounded-full hover:border-2" />
    </div>
    <Range className="w-full lg:w-96"/>
   </div>
   <div className="divVolumw cursor-pointer flex gap-2 items-center">
    <BsFillVolumeUpFill className=""/>
    <Range className="w-full" />
   </div>
  </main>
 );
};

export default Player;
