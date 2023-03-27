import React, { useEffect, useRef, useState } from "react";
import TextGradient from "../TextGradient";
import PaddingMedium from "./PaddingMedium";
import { motion, useScroll, useTransform } from "framer-motion";
import TwoPane from "./TwoPane";
import FeatureOneLeft from "../Subsections/FeatureOne/FeatureOneLeft";
import FeatureOneRight from "../Subsections/FeatureOne/FeatureOneRight";
import StatPoint from "../StatPoint";
import TechStack from "../Subsections/Skills/TechStack";
import ToolTip from "../ToolTip";
import Compatibility from "../Subsections/Skills/Compatibility";

function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const framerCardSettings = {
    skewX: useTransform(scrollYProgress, [0, 0.5, 1], [-36, -15, 0]),
    translateY: useTransform(scrollYProgress, [0.5, 1], [-400, -110]),
    translateX: useTransform(scrollYProgress, [0.5, 1], [200, 0]),
    height: useTransform(scrollYProgress, [0.5, 1], [350, 460]),
  };

  return (
    <div className="bg-white font-gilroyRegular text-black pt-64">
      <PaddingMedium>
        <div className="min-h-screen relative" ref={ref}>
          <TextGradient text="Front-End" type={1} />
          <div className="text-[4rem] md:text-[7rem] mt-[-3vh] md:mt-[-5vh] font-bold font-gilroyMedium">
            Chops.
          </div>
          <p className="gray-text mt-12 mb-8 w-[80%] md:w-[40%] ">
            I really enjoy building things that I can tangibly see and interact
            with. I honestly don't know what passion means but I've always lost
            track of time implementing front-end stuff.
          </p>
          <div className="bg-black w-full h-[350px] flex flex-row gap-4 rounded-2xl drop-shadow-2xl mb-10 relative">
            <div className=" w-full md:w-[40%] h-full p-8 flex justify-around flex-col py-24">
              <p>Versatile Coder</p>
              <p className="opacity-70 tracking-tighter">
                I've worked with a variety of languages and frameworks, not only
                within the realm of web dev't, but also on mobile and desktop
                applications.
              </p>
              <ToolTip buttonText="Compatibility Check">
                <Compatibility />
              </ToolTip>
            </div>
            <motion.div
              className={`gradient-card drop-shadow-xl w-[50%] md:flex hidden z-[3] rounded-xl p-10`}
              style={framerCardSettings}
            >
              <TechStack />
            </motion.div>
          </div>
        </div>
        <TwoPane
          gap={"gap-4"}
          padding={"p-1"}
          leftPane={<FeatureOneLeft />}
          rightPane={<FeatureOneRight />}
        />
        <div className="center flex-col md:flex-row gap-12 text-black mt-12">
          <StatPoint
            header={"A lot"}
            subtitle={"of times having fun making the product"}
          />
          <StatPoint
            header={"Intentional"}
            subtitle={`about your product ${"\n"}(see modest intentions)`}
          />
          <StatPoint header={"1x"} subtitle={"more FE help"} />
        </div>
      </PaddingMedium>
    </div>
  );
}

export default Skills;
