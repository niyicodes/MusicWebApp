import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Pages/MainPage/MainPage";

function App() {
 return (
  <div className="flex">
   <div className="side w-20 p-5">
    <SideBar />
   </div>
   <div className="main pl-3 w-screen h-screen">
    <Header />
    <Routes>
     <Route exact path="/" element={<Home />} />
     <Route path="/playlist" element={<Home />} />
     <Route path="/radio" element={<Home />} />
     <Route path="/videos" element={<Home />} />
     <Route path="/profile" element={<Home />} />
     <Route path="/logout" element={<Home />} />
    </Routes>
   </div>
  </div>
 );
}

export default App;
