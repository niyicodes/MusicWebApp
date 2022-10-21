import React, { useRef } from "react";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import {
 BsShuffle,
 BsFillVolumeUpFill,
 BsFillPauseFill,
 BsFillPlayFill,
} from "react-icons/bs";
import { FiRepeat } from "react-icons/fi";
import Range from "../Range/Range";
import { motion } from "framer-motion";

const Player = ({
 audioElem,
 isPlaying,
 setIsPlaying,
 currentSong,
 setCurrentSong,
 songs,
}) => {
 const xCoordinate = useRef();

 const playPause = () => {
  setIsPlaying(!isPlaying);
 };

 // prev song
 const prev = () => {
  const index = songs.findIndex((x) => x.title == currentSong.title);
  if (index == 0) {
   setCurrentSong(songs[songs.length - 1]);
  } else {
   setCurrentSong(songs[index - 1]);
  }
  audioElem.current.currentTime = 0;
 };

 // Next song
 const next = () => {
  const index = songs.findIndex((x) => x.title == currentSong.title);
  if (index == songs.length - 1) {
   setCurrentSong(songs[0]);
  } else {
   setCurrentSong(songs[index + 1]);
  }
  audioElem.current.currentTime = 0;
 };

 // select any area of the track
 const checkWidth = (e) => {
  let width = xCoordinate.current.clientWidth;
  const offset = e.nativeEvent.offsetX;

  const rangeProgress = (offset / width) * 100;
  audioElem.current.currentTime = (rangeProgress / 100) * currentSong.length;
 };

 return (
  <main className="player">
   <div className="flex gap-3 items-center">
    {isPlaying ? <motion.img
    animate={{rotate:360}}
    transition={{ repeat: Infinity, repeatType:"loop", ease:'linear'  }}
     src={currentSong.image}
     alt="person4"
     className="w-14 h-14 rounded-full"
    /> : (<img
      src={currentSong.image}
      alt="person4"
      className="w-14 h-14 rounded-full"
     />)}
    <div className="d">
     <p>{currentSong.title}</p>
     <small className="text-iconFill">{currentSong.artist}</small>
    </div>
   </div>
   <div className="divplayer text-2xl text-textFill">
    <div className="controls ">
     <BsShuffle className="control hidden lg:block" />
     <GiPreviousButton className="control hidden lg:block" onClick={prev} />
     {isPlaying ? (
      <BsFillPauseFill className="control" onClick={playPause} />
     ) : (
      <BsFillPlayFill className="control" onClick={playPause} />
     )}
     <GiNextButton className="control" onClick={next} />
     <FiRepeat className="control hidden lg:block" />
    </div>
    <Range
     className="w-full lg:w-96"
     style={{ width: `${currentSong.progress + "%"}` }}
     ref={xCoordinate}
     onClick={checkWidth}
    />
   </div>
   <div className="divVolumw cursor-pointer  gap-2 items-center hidden lg:flex">
    <BsFillVolumeUpFill className="" />
    <Range className="w-full" />
   </div>
  </main>
 );
};

export default Player;
