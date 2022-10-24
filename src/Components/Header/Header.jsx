import React from "react";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";

const Header = ({handleClick, click}) => {
 
 return (
  <nav className="flex items-center justify-between gap-8 mx-4">
   <div className="flex gap-3 items-center ml-0 lg:hidden">
    <div className="menu-icon  text-3xl cursor-pointer" onClick={handleClick}>
     {click ? <GiTireIronCross className="text-activeColor"/> : <GiHamburgerMenu className="text-textFill"/>}
    </div>
    <div className="ano">
    <img src="/assets/music.svg" alt="music" className="w-20"/>
    </div>
   </div>
   <div className="search bg-gray-600">
    <FiSearch className="absolute top-6 left-4 text-lg" />
    <input
     type="search"
     name="search"
     placeholder="Search artists"
     id=""
     className="w-4/5 p-2 pr-0 bg-bgColor mt-3 ml-2 rounded outline-0 indent-10 border border-activeColor"
    />
   </div>
  </nav>
 );
};

export default Header;
