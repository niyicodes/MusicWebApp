import React,{useState} from "react";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";

const Header = () => {
 const [click, setClick] = useState(false);
 const handleClick = () => setClick(!click)
 return (
  <div className="flex items-center justify-between mx-4">
   <div className="flex gap-3 items-center">
    <div className="menu-icon lg:hidden text-3xl" onClick={handleClick}>
     {click ? <GiTireIronCross /> : <GiHamburgerMenu />}
    </div>
    <div className="ano">
    <img src="/assets/music.svg" alt="music" />
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
  </div>
 );
};

export default Header;
