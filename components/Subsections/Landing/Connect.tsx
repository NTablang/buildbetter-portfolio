import PaddingMedium from "@/components/Layouts/PaddingMedium";
import React from "react";
import ConnectCard from "../Connect/ConnectCard";
import phone from "../../../public/phone.svg";
import BrandButton from "@/components/BrandButton";
import discord from "../../../public/discord.svg";
import mail from "../../../public/mail.svg";

function Connect() {
  return (
    <div className="bg-white min-h-screen py-44">
      <PaddingMedium>
        <div className="center flex-col">
          <h2 className="text-black">Convinced Enough?</h2>
          <p className="opacity-70 md:px-[5.5rem] text-black md:text-center">
            I hope I was able to impress you a bit about what I can do. This
            took me to do about 16 hours of coding time — half is implementing
            the site and the other half is getting the right content and the
            visual assets.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-10">
            <ConnectCard>
              <div className="flex flex-col justify-around">
                <div className="w-[75px] h-[75px] rounded-md drop-shadow-sm mb-4 bg-white center">
                  <img
                    src={phone.src}
                    className="w-[35px] h-[35px] object-cover"
                  />
                </div>
                <p className="text-black text-2xl mt-4">+1 (301) 377-3076</p>
                <p className="text-black opacity-60 text-base font-gilroyBold">
                  Anytime really.
                </p>
                <p className="text-black text-md my-6">
                  Don't be shy to just call or send me a message :)
                </p>
                <a
                  href={"tel: 1-301-377-3076"}
                  className="inline mr-[auto]  mt-12"
                >
                  <BrandButton text="Call Me!" />
                </a>
              </div>
            </ConnectCard>
            <ConnectCard wrapperStyle="brand-gradient">
              <div className="flex flex-col justify-around">
                <div className="w-[75px] h-[75px] rounded-md drop-shadow-sm mb-4 bg-white center">
                  <img
                    src={discord.src}
                    className="w-[55px] h-[55px] object-cover"
                  />
                </div>
                <p className="text-2xl mt-4">Nathan Tablang#1793</p>
                <p className=" opacity-60 text-base font-gilroyBold">
                  Anytime really.
                </p>
                <p className="text-md my-6">Quite active at Discord too!</p>
              </div>
            </ConnectCard>
            <ConnectCard wrapperStyle="bg-[black]" gradientBackground="">
              <div className="flex flex-col justify-around">
                <div className="w-[75px] h-[75px] rounded-md drop-shadow-sm mb-4 bg-[#3A3A39] center">
                  <img
                    src={mail.src}
                    className="w-[55px] h-[55px] object-cover"
                  />
                </div>
                <p className="text-2xl mt-4">nathantablang@yahoo</p>
                <p className=" opacity-60 text-base font-gilroyBold">
                  Anytime really.
                </p>
                <p className="text-md my-6">
                  I know I still use yahoo ✋😔 <br />I just use it to feel
                  special
                </p>
                <a href={"mailto: nathantablang@yahoo.com"} className=" mt-12">
                  <BrandButton text="Email Me!" size={"xl"} />
                </a>
              </div>
            </ConnectCard>
          </div>
        </div>
      </PaddingMedium>
    </div>
  );
}

export default Connect;
