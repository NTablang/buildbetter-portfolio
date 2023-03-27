import BrandButton from "@/components/BrandButton";
import InterestDescription from "@/components/InterestDescription";
import PaddingMedium from "@/components/Layouts/PaddingMedium";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import CodeView from "../Interest/CodeView";
import InterestFooter from "../Interest/InterestFooter";

function Interest() {
  return (
    <div className="bg-black min-h-screen flex items-center flex-col pt-44">
      <Image
        height={85}
        width={85}
        className="rounded-lg h-[45px] w-[45px] md:h-[55px] md:w-[55px] p-2 bg-[#19191a]"
        src={logo.src}
        alt={"logo"}
      />
      <PaddingMedium>
        <div className="center flex-col gap-4 text-center py-12">
          <h1 className="text-3xl md:text-7xl">Builder with a Heart.</h1>
          <p className="opacity-70 px-[2rem] md:px-[4.5rem]">
            Honestly I just want to build products that add value to the world.
            I'm not a genius with anything that I do, but I'm teachable and a
            hard worker that would love to solve other people's problems with a
            heart.
          </p>
        </div>
      </PaddingMedium>
      <div className="hidden md:flex">
        <CodeView />
      </div>
      <InterestDescription />
      <InterestFooter />
    </div>
  );
}

export default Interest;
