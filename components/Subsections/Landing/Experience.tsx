import PaddingMedium from "@/components/Layouts/PaddingMedium";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TextGradient from "@/components/TextGradient";
import TwoPane from "@/components/Layouts/TwoPane";
import ExperienceLeft from "../Experience/ExperienceLeft";
import ExperienceRight from "../Experience/ExperienceRight";
import venture1 from "../../../public/venture1.jpg";
import venture2 from "../../../public/venture2.jpg";
import venture3 from "../../../public/venture3.jpg";
import venture4 from "../../../public/venture4.jpg";
import venture5 from "../../../public/venture5.jpg";


function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const framerCard1 = {
    translateY: useTransform(scrollYProgress, [0, 1], [-600, 0]),
    rotateY: useTransform(scrollYProgress, [0, 1], [250, 0]),
  };
  const framerCard2 = {
    translateX: useTransform(scrollYProgress, [0, 1], [300, 0]),
    translateY: useTransform(scrollYProgress, [0, 1], [-900, 0]),
    rotateY: useTransform(scrollYProgress, [0, 1], [180, 0]),
  };
  const framerCard3 = {
    translateX: useTransform(scrollYProgress, [0, 1], [600, 0]),
    translateY: useTransform(scrollYProgress, [0, 1], [-1500, 0]),
    rotateY: useTransform(scrollYProgress, [0, 1], [280, 0]),
    scaleX: useTransform(scrollYProgress, [0, 1], [2, 1]),
  };
  const framerCard4 = {
    translateY: useTransform(scrollYProgress, [0, 1], [-1000, 0]),
    translateX: useTransform(scrollYProgress, [0, 1], [300, 0]),
    rotateY: useTransform(scrollYProgress, [0, 1], [250, 0]),
    scaleX: useTransform(scrollYProgress, [0, 1], [3, 1]),

  };
  const framerCard5 = {
    translateX: useTransform(scrollYProgress, [0, 1], [-300, 0]),
    translateY: useTransform(scrollYProgress, [0, 1], [-900, 0]),
    rotateY: useTransform(scrollYProgress, [0, 1], [40, 0]),
  };
  const framerCardStyle = "bg-[#373A3E] w-full h-[40%] rounded-lg mb-4 overflow-hidden";

  return (
    <div className="min-h-screen bg-white pb-28">
      <div className="pt-44 text-black font-gilroyRegular" ref={ref}>
        <PaddingMedium>
          <TextGradient text="Modest" type={3} />
          <div className="text-[4rem] md:text-[7rem] mt-[-5vh] font-bold ">Intentions.</div>
          <p className="gray-text mt-5 mb-8 ml-2 pr-4 md:pr-44">
            About a year ago, I've cofounded a social tech startup that matches
            young people together based on their event/social gathering tastes.
            We were able to win several pitch competitions as well as acceptance
            into several incubator programs; we've raised about $30k worth in
            resources, funding, and credits. We did a lot of hustling; a lot of
            user research, revisions, and pivots. Ultimately, we've decided to
            shut down the company due to the lack of traction, but I've learned
            so much from the experience: analysis on user content, user
            behavior, or even the question of who really our demographic was.
            <br />
            <br />
            This might be a bit cliche, but I truly did wish I came across a
            tool like BuildBetter. We could've had our research more organized,
            all congregated in one place so we could analyze things better. I'm
            interested with working on something like BuildBetter, because I
            would hate to see future ventures making the same mistakes I did and
            losing time and energy in the process.
          </p>
          <div className="bg-black w-full h-[350px] flex flex-row gap-4 rounded-2xl mb-10 mt-20">
            <div className=" w-full md:w-[55%] h-full p-8 flex justify-around flex-col py-24">
              <p>Past mistakes are guides for the present.</p>
              <p className="gray-text tracking-tighter">
                Because of my venture mistake and what I also assume to be as one
                that is filled with my spaghetti code, I've learned how to grow and impart 
                my don't do's to others.
              </p>
            </div>
            <div className={`bg-[#1A1B1C] w-full md:flex hidden relative rounded-xl `}>
              <div className="absolute md:flex left-28 hidden flex-row gap-4 top-[-2rem]">
                <div className=" w-[250px] h-[350px]">
                  <motion.div
                    className={framerCardStyle}
                    style={framerCard1}
                  >
                    <img src={venture1.src} className="w-full h-auto mt-[-4rem]"/>
                  </motion.div>
                  <motion.div
                    className={framerCardStyle + " center"}
                    style={framerCard2}
                  >
                     <img src={venture5.src} className="w-full h-[auto] "/>
                  </motion.div>
                  <motion.div
                    className={framerCardStyle}
                    style={framerCard3}
                  >
                    <img src={venture2.src} className="w-full h-full "/>
                  </motion.div>
                </div>
                <div className=" w-[300px] h-[350px]">
                  <motion.div
                    className="bg-[#373A3E] w-full h-[60%] rounded-lg mb-4 overflow-hidden"
                    style={framerCard4}
                  >
                    <img src={venture3.src} className="w-full h-auto "/>
                  </motion.div>
                  <motion.div
                    className="bg-[#373A3E] w-full h-[40%] rounded-lg mb-4 overflow-hidden"
                    style={framerCard5}
                  >
                    <img src={venture4.src} className="w-full h-auto mt-[-15rem]"/>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </PaddingMedium>
      </div>
      <PaddingMedium>
        <TwoPane
          gap={"gap-4"}
          padding={"p-1 pt-10"}
          leftPane={<ExperienceLeft />}
          rightPane={<ExperienceRight />}
        />
      </PaddingMedium>
    </div>
  );
}

export default Experience;
