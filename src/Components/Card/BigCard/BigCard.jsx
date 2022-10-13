import React from "react";

const BigCard = () => {
 return (
  <div className="bigcard">
   <div className="text flex flex-col justify-between gap-10">
    <h4 className="text-lg mt-3 pt-5">Currated playlist</h4>
    <div className="details lg:mb-12 lg:mt-5 mt-16">
     <h1 className="text-4xl lg:text-5xl">R & B Hits</h1>
     <p className=" text-lg pt-3">
      All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit,and so much more
     </p>
    </div>
    <div className="figure mb-4 grid grid-cols-2 gap-6 align-middle items-center">
     <figure className="hitsimage relative -top-6">
      <img
       src="/assets/person1.jpg"
       alt="person1"
       className="hits z-10 left-1"
      />
      <img
       src="/assets/person2.jpg"
       alt="person2"
       className="hits z-20 left-4 lg:left-8"
      />
      <img
       src="/assets/person3.jpg"
       alt="person3"
       className="hits z-30 left-8 lg:left-12"
      />
      <img
       src="/assets/person4.jpg"
       alt="person4"
       className="hits z-40 left-10 lg:left-16"
      />
      <img
       src="/assets/person5.jpg"
       alt="person5"
       className="hits z-50 left-14 lg:left-24"
      />
     </figure>
     <div className="text h-10 flex gap-2 text-lg lg:text-3xl -ml-6">
      <svg
       width="16"
       height="16"
       className="lg:h-10 lg:w-10 h-7 w-7"
       viewBox="0 0 16 16"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path
        d="M5.51981 1.66697C5.93981 1.67975 6.34647 1.75308 6.74047 1.88708H6.77981C6.80647 1.89975 6.82647 1.91375 6.83981 1.92641C6.98714 1.97375 7.12647 2.02708 7.25981 2.10041L7.51314 2.21375C7.61314 2.26708 7.73314 2.36641 7.79981 2.40708C7.86647 2.44641 7.93981 2.48708 7.99981 2.53308C8.74047 1.96708 9.63981 1.66041 10.5665 1.66697C10.9871 1.66697 11.4071 1.72641 11.8065 1.86041C14.2671 2.66041 15.1538 5.36041 14.4131 7.72041C13.9931 8.92641 13.3065 10.0271 12.4071 10.9264C11.1198 12.1731 9.70714 13.2797 8.18647 14.2331L8.01981 14.3337L7.84647 14.2264C6.32047 13.2797 4.89981 12.1731 3.60047 10.9197C2.70714 10.0204 2.01981 8.92641 1.59314 7.72041C0.839808 5.36041 1.72647 2.66041 4.21381 1.84641C4.40714 1.77975 4.60647 1.73308 4.80647 1.70708H4.88647C5.07381 1.67975 5.25981 1.66697 5.44647 1.66697H5.51981ZM11.4598 3.77375C11.1865 3.67975 10.8865 3.82708 10.7865 4.10708C10.6931 4.38708 10.8398 4.69375 11.1198 4.79308C11.5471 4.95308 11.8331 5.37375 11.8331 5.83975V5.86041C11.8205 6.01308 11.8665 6.16041 11.9598 6.27375C12.0531 6.38708 12.1931 6.45308 12.3398 6.46708C12.6131 6.45975 12.8465 6.24041 12.8665 5.95975V5.88041C12.8865 4.94641 12.3205 4.10041 11.4598 3.77375Z"
        fill="white"
       />
      </svg>
      <span>30k Likes</span>
     </div>
    </div>
   </div>
   <div className="img ">
    <figure className="topimg relative">
     <img
      src="/assets/Esma.png"
      alt="Esma"
      className="absolute z-50 top-4 hidden lg:block lg:h-full"
     />
     <img src="/assets/tunnel.png" alt="tunnel" className="-skew-x-12 h-96 skew-y-3 hidden lg:block" />
    </figure>
   </div>
  </div>
 );
};

export default BigCard;
