import React from "react";
import fam from "../../../public/fam.jpg";

function ExperienceLeft() {
  return (
    <div className="bg-white rounded-3xl h-[630px] md:h-[550px] relative overflow-hidden drop-shadow-lg">
      <img src={fam.src} className="h-auto w-full absolute top-0" />
      <div className="w-full h-full mt-[4rem] rotate-[180deg] absolute top-0 white-gradient" />
      <div className=" w-full h-full px-12 flex justify-around flex-col pt-64  absolute bottom-0">
        <p className="text-black">👨‍👩‍👧‍👦 Family</p>
        <p className="opacity-70 tracking-tighter text-black mt-[-2rem]">
          I got here in the states about six or seven years ago and these are
          the loved ones that I think about the most. As a first gen, I would love to show to my siblings that
          the American Dream is still attainable if you put your mind to it.
        </p>
      </div>
    </div>
  );
}

export default ExperienceLeft;
