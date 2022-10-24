import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiRadio } from "react-icons/bi";
import { TbPlaylist, TbLogout } from "react-icons/tb";
import { HiOutlineFilm, HiHome } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { motion } from "framer-motion";

const SideBar = () => {
 let activeStyle = {
  color: "#FACD66",
 };

 const [click, setClick] = useState(false);
 const handleClick = () => setClick(!click)

 let activeClassName = "#FACD66";
 return (
  <aside className="flex flex-col gap-4">
   <div className="nav">
    <div className="hamburger">
     <motion.img src="/assets/music.svg" alt="music" />
    </div>
   </div>
   <div>
   <nav className="rounded bg-lcColor m-auto p-2">
    <ul className="mb-3 rounded bg-lcColor">
     <NavLink to="/">
      <HiHome className="icon" />
     </NavLink>
     <Link to="/playlist">
      <TbPlaylist className="icon" />
     </Link>
     <Link to="/radio">
      <BiRadio className="icon" />
     </Link>
     <Link to="/videos">
      <HiOutlineFilm className="icon" />
     </Link>
    </ul>
   </nav>
   <nav className="nav nav rounded bg-lcColor m-auto p-2">
    <ul>
     <Link to="/profile">
      <BsFillPersonFill className="icon" />
     </Link>
     <Link to="/">
      <TbLogout className="icon" />
     </Link>
    </ul>
   </nav>
   </div>
  </aside>
 );
};

export default SideBar;
