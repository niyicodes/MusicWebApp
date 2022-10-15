import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CollectionCard from "../../Components/Card/CollectionCard/CollectionCard";

const Playlist = () => {
 return (
  <main className="h-full text-textFill">
   <nav className="my-4">
    <ul className="flex gap-4 text-sm lg:text-lg">
     <li className="bg-activeColor p-4 py-2 rounded-full border border-circleColor text-center">
      <Link to="/playlist">My collection</Link>
     </li>
     <li className="px-8 py-2 rounded-full border border-circleColor text-center">
      <Link to="/playlist/">Likes</Link>
     </li>
    </ul>
   </nav>
   <div className="grid grid-rows-2 gap-4 md:grid-cols-2 md:justify-center md:place-content-center md:items-center lg:grid-cols-4">
    <CollectionCard />
    <CollectionCard />
    <CollectionCard />
    <CollectionCard />
   </div>
  </main>
 );
};

export default Playlist;
