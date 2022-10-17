import React,{useState, useRef, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Player from "./Components/Player/Player";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Pages/MainPage/MainPage";
import Playlist from "./Pages/Playlist/Playlist";
import Radio from "./Pages/Radio/Radio";
import Video from "./Pages/Videos/Video";

function App() {
 const [songs, setSongs] = useState();
 const [isPlaying, setIsPlaying] = useState(false);
 const [currentSong, setCurrentSong] =useState()
 const audioElem = useRef()

 useEffect(() => {
  if(isPlaying){
   audioElem.current.play()
  }else{
   audioElem.current.pause()
  }
 }, [isPlaying])
 
 const onplaying = () =>{
  const duration = audioElem.current.duration;
  const cTime = audioElem.current.currentTime;

  setCurrentSong({...currentSong, "progress": cTime / duration * 100, "length": duration  })
 }

 return (
  <div className="flex">
   <div className="side hidden lg:block w-20 p-5">
    <SideBar />
   </div>
   <div className="main pl-3 w-full relative">
    <Header />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/playlist" element={<Playlist />} />
     <Route path="/radio" element={<Radio />} />
     <Route path="/videos" element={<Video />} />
     <Route path="/profile" element={<Home />} />
    </Routes>
    <audio src="" ref={audioElem} onTimeUpdate={onplaying}/>

    <Player songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem} currentSong={currentSong}/>
   </div>
  </div>
 );
}

export default App;
