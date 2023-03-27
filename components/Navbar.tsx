import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/logo.png";
import BrandButton from "./BrandButton";
import ModalMe from "./ModalMe";

function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <>
    <div className="z-[500] pt-4 px-8 md:pt-12 md:px-20 text-[20px]  tracking-[-0.05em] text-white fixed top-0 w-full font-gilroySemiBold">
      <div className="flex justify-between items-center h-full gap-14 md:gap-4">
        <div className="flex items-center justify-center frosted gap-4 p-4 rounded-full">
          <Image
            height={65}
            width={65}
            className="rounded-lg h-[45px] w-[45px] md:h-[55px] md:w-[55px]"
            src={logo.src}
            alt={"logo"}
          />
          <div className="text-md md:text-xl pr-2 invert-text-color  ">
            BuildNathan
          </div>
        </div>

        <div className="items-center gap-8 hidden md:flex  rounded-xl">
          <div
            className="justify-between items-center gap-8 hidden md:flex frosted px-4 py-3 rounded-[2rem]"
            onClick={() => setVisible(true)}
          >
            <div className="hover:underline text-base font-gilroyBold cursor-pointer">
              Get joke of the day
            </div>
          </div>
          <a href={"mailto: nathantablang@yahoo.com"}><BrandButton text={"Reach Out!"} size={'lg'}/></a>
        </div>
      </div>
    </div>
    <ModalMe visible={visible} toClose={() => setVisible(false)}/>
    </>
  );
}

export default Navbar;
