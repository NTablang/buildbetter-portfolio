import React from "react";
import ClassicPadding from "./ClassicPadding";
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import BrandButton from "../BrandButton";
function HeroLayout() {
  return (
    <ClassicPadding>
      <div className="h-screen flex items-center justify-center text-white relative tracking-[-0.08em] font-gilroySemiBold">
        <div className="flex flex-col justify-items items-center">
          <div className="text-4xl md:text-8xl text-center ">
            Your merry go lucky <br />
            frontend of a{" "}
            <span className="font-monumentExtendedBold text-[magenta]">
              builder
            </span>
          </div>
          <div className=" tracking-normal text-sm text-center my-2 mb-4 md:px-96">
            <span className="text-2xl">🦸 </span> i got so intrigued with your
            landing page that i decided to make my own rendition of it to
            showcase my frontend skills
          </div>
          <a href={"mailto: nathantablang@yahoo.com"}>
            <BrandButton text={"Send Email!"} size={"lg"} />
          </a>
        </div>
        <div className="absolute w-full bottom-0 flex justify-between pb-8">
          <div className="flex flex-row gap-6 text-2xl">
            <a href="https://github.com/NTablang">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nathan-tablang-297b861b1/">
              <FaLinkedin />
            </a>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <FaPhoneAlt className="text-[gray]" />
            <div className="text-base font-gilroyBold -tracking-normal">
              +1 301-377-3076
            </div>
          </div>
        </div>
      </div>
    </ClassicPadding>
  );
}

export default HeroLayout;
