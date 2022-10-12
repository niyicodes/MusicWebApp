import React from "react";

const BigCard = () => {
 return (
  <div className="rounded-xl bg-bigCard flex gap-3 w-2/4 p-10 py-40 h-80 text-textFill items-center font-quickSand font-700 overflow-hidden">
   <div className="text flex flex-col justify-between ">
    <h4 className="text-lg mt-3 pt-3">Currated playlist</h4>
    <div className="details mb-12 mt-5">
     <h1 className="text-5xl">R & B Hits</h1>
     <p className="w-3/5">
      All mine, Lie again, Petty call me everyday,Out of time, No love, Bad
      habit,and so much more
     </p>
    </div>
    <div className="figure mb-4 relative">
     <figure className="hitsimage relative -top-8">
      <img
       src="/assets/person1.jpg"
       alt="person1"
       className="w-12 h-10 rounded-full absolute justify-center z-10 left-1"
      />
      <img
       src="/assets/person2.jpg"
       alt="person2"
       className="w-12 h-10 rounded-full absolute justify-center z-20 left-6"
      />
      <img
       src="/assets/person3.jpg"
       alt="person3"
       className="w-12 h-10 rounded-full absolute justify-center z-30 left-10"
      />
      <img
       src="/assets/person4.jpg"
       alt="person4"
       className="w-12 h-10 rounded-full absolute justify-center z-40 left-14"
      />
      <img
       src="/assets/person5.jpg"
       alt="person5"
       className="w-12 h-10 rounded-full absolute justify-center z-50 left-20"
      />
     </figure>
     <span>i am here to stay</span>
    </div>
   </div>
   <div className="img -mt-10 relative">
    <img
     src="/assets/Esma.png"
     alt="Esma"
     className="z-50 absolute top-12 -ml-4 items-center justify-center align-middle mt-8 h-72 hidden lg:block"
    />
    <img src="/assets/tunnel.png" alt="tunnel" className="z-10 h-96 " />
   </div>
  </div>
 );
};

export default BigCard;
