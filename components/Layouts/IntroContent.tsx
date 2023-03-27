import React from "react";
import ClassicPadding from "./ClassicPadding";
import IntroLeft from "./IntroLeft";
import IntroRight from "./IntroRight";
import TwoPane from "./TwoPane";
import startupshell from "../../public/startupshell.png";
import farama from "../../public/farama.png";
import waveli from "../../public/waveli.png";
import koala from "../../public/koala.png";
import kestrel from "../../public/kestrel.png";
import frick from "../../public/frick.png";

function IntroContent() {
  const logos = [startupshell, farama, waveli, koala, kestrel, frick];
  return (
    <ClassicPadding>
      <div className="min-h-screen bg-[#161616] rounded-[2rem] overflow-hidden">
        <TwoPane leftPane={<IntroLeft />} rightPane={<IntroRight />} />
      </div>

      <div className="my-24 pb-12">
        <h3 className="text-3xl md:text-5xl text-center px-6 md:px-44">
          Trusted by and collabrated with a{" "}
          <span>
            <a 
            href={"https://startupshell.org/"}
            className="text-[magenta] hover:underline transition-all cursor-pointer">
              student-led incubator
            </a>{" "}
          </span>
          and different startups
        </h3>
        <div className="center flex-col md:flex-row mt-12 gap-6">
          {logos.map((logo, index) => (
            <img
              src={logo.src}
              key={index}
              alt={"logo" + index}
              className="w-auto h-[55px]"
            />
          ))}
        </div>
      </div>
    </ClassicPadding>
  );
}

export default IntroContent;
