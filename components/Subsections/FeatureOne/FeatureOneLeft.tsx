import React from "react";
import skillleft from "../../../public/skillleft.svg";

function FeatureOneLeft() {
  return (
    <div className="bg-black rounded-3xl h-[500px] relative overflow-hidden drop-shadow-2xl">
      <img src={skillleft.src} className="w-full h-full object-cover" />
      <div className=" absolute bottom-0 w-full h-full" />
      <div className=" w-full h-full px-6 md:px-12 flex justify-around flex-col pt-72 md:pt-64 text-white absolute bottom-0">
        <p>😌 Inquisitive</p>
        <p className="opacity-70 tracking-tighter md:mt-[-2rem]">
          I ask a lot of questions during the software dev process. Most of these
          are usually out of curiosity, but some are to ensure that we are on the same page.
        </p>
      </div>
    </div>
  );
}

export default FeatureOneLeft;
