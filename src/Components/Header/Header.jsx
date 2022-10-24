import React from "react";
import { FiSearch } from "react-icons/fi";



const Header = () => {
 return (
  <div className="flex items-center justify-between">
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
