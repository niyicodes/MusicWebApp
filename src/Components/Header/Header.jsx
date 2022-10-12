import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Header = () => {
 return (
  <div className="search w-full bg-gray-600 h-12 text-iconFill relative mb-3 mt-1.5">
   <FiSearch className="absolute top-6 left-4 text-lg"/>
   <input
    type="search"
    name="search"
    placeholder="Search artists"
    id=""
    className="w-2/5 p-2 pr-0 bg-bgColor mt-3 ml-2 rounded outline-0 indent-10 border border-activeColor"
   />
  </div>
 );
};

export default Header;
