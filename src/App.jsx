import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Pages/MainPage/MainPage";

function App() {
 return (
  <div className="flex gap-4">
   <div className="side w-20 p-5 pl-4 border border-red-400">
    <SideBar />
   </div>
   <div className="main border border-blue-400 w-screen h-screen">
    <Header />
    <Routes>
     <Route path="/" element={<Home />} />
    </Routes>
   </div>
  </div>
 );
}

export default App;
