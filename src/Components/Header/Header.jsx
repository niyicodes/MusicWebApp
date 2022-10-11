import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const Header = () => {
 return (
  <div className="search w-full bg-gray-600 h-12">
   <input type="search" name="search" id="" className="w-2/4 mt-3 ml-2 rounded" />
  </div>
 );
};

export default Header;
