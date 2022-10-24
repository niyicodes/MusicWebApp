import React from "react";
import { Link } from "react-router-dom";

const SquareCard = ({ artist, title, image, song, url}) => {
 return (
  <div className="inline-block">
   <audio src={url}/>
   <Link to={`/albums/${title}`}>
   <img
    src={image}
    alt="person2"
    className="rounded-2xl h-44 w-48 mb-2 object-cover"
   />
   <p className="text-textFill">{title}</p>
   <small className="text-iconFill">{artist}</small>
   </Link>
  </div>
 );
};

export default SquareCard;
