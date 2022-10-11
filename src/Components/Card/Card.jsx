import React from "react";

const Card = ({img, name, paragraph}) => {
 return (
  <div className="relative bg-slate-200 py-5 px-10">
   <img src={img} alt={name} className="absolute w-14  lg:w-16  -translate-y-3 -translate-x-6" />
   <div className="text">
    <h3 className="text-center mt-7 py-4 text-2xl text-slate-900 font-bold">{name}</h3>
    <p className="pb-4 text-justify text-lg text-gray-600 py-3 font-semibold">
     {paragraph}
    </p>
   </div>
  </div>
 );
};

export default Card;
