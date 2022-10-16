import React from "react";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { BsShuffle, BsFillVolumeUpFill } from "react-icons/bs";
import { FiRepeat } from "react-icons/fi";
import Range from "../Range/Range";
const Player = () => {
 return (
  <main className="flex justify-around align-middle items-center bg-activeColor fixed w-screen bottom-8 z-50 -left-0">
   <div className="div">
    <img src="" alt="" />
    <p>ljflsjfs</p>
    <small>slfn.smf</small>
   </div>
   <div className="divplayer">
    <BsShuffle />
    <GiPreviousButton />
    <Range />
    <GiNextButton />
    <FiRepeat />
   </div>
   <div className="divVolumw">
    <BsFillVolumeUpFill />
    <Range />
   </div>
  </main>
 );
};

export default Player;
