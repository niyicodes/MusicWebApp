import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Pages/MainPage/MainPage";
import Playlist from "./Pages/Playlist/Playlist";
import Radio from "./Pages/Radio/Radio";
import Video from "./Pages/Videos/Video";

function App() {
 return (
  <div className="flex">
   <div className="side hidden lg:block w-20 p-5">
    <SideBar />
   </div>
   <div className="main pl-3 w-full">
    <Header />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/playlist" element={<Playlist />} />
     <Route path="/radio" element={<Radio />} />
     <Route path="/videos" element={<Video />} />
     <Route path="/profile" element={<Home />} />
    </Routes>
   </div>
  </div>
 );
}

export default App;
