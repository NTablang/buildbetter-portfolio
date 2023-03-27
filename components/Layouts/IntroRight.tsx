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
        Being able to hack something out of pure curiosity is one of the most
        consistently rewarding things I've ever done. I've taught myself a lot
        of things when it comes to programming and I've been growing to fit the
        best practices.
      </h4>
      <Divider />
      <h4 className="text-center text-[1rem] font-monumentExtended text-[magenta]">
        TLDR: when I choose to do something, I do it with all my heart.
      </h4>
    </div>
  );
}

export default IntroRight;
