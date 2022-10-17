import React from "react";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { BsShuffle, BsFillVolumeUpFill } from "react-icons/bs";
import { FiRepeat } from "react-icons/fi";
import { TbPlayerPlay } from "react-icons/tb";
import Range from "../Range/Range";
const Player = () => {
 return (
  <main className="player">
   <div className="flex gap-3 items-center">
    <img src="/assets/person4.jpg" alt="person4" className="w-14 h-14 rounded-full"/>
    <div className="d">
    <p>ljflsjfs</p>
    <small className="text-iconFill">slfn.smf</small>
    </div>
   </div>
   <div className="divplayer">
    <div className="controls">
    <BsShuffle className=""/>
    <GiPreviousButton className=""/>
    <TbPlayerPlay className=""/>
    <GiNextButton className=""/>
    <FiRepeat className=""/>
    </div>
    <Range className="w-full lg:w-96 control"/>
   </div>
   <div className="divVolumw cursor-pointer flex gap-2">
    <BsFillVolumeUpFill />
    <Range className="w-full control"/>
   </div>
  </main>
 );
};

export default Player;
