import Image from "next/image";
import React from "react";
import bomb from "../../public/bomb.png";
import Divider from "../Divider";

function IntroRight() {
  return (
    <div className="flex  flex-col text-white gap-20 justify-around items-center w-full h-full px-8 md:px-28 py-16">
      <div>
        <Image
          src={bomb.src}
          className="w-[75px] h-[75px] rounded-lg"
          alt={"bomb"}
          unoptimized
          width={100}
          height={100}
        />
      </div>
      <h4 className="text-center leading-8">
        The teams I've collaborated with in the past spend about 40% of
        time goofing around with user research and talking to people they plan to date.
      </h4>
      <Divider />
      <h4 className="text-center font-monumentExtended text-[magenta]">I plan to raise it <br/>up to 80%</h4>
    </div>
  );
}

export default IntroRight;
