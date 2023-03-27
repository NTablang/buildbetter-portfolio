import PaddingMedium from "@/components/Layouts/PaddingMedium";
import TextGradient from "@/components/TextGradient";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TwoPane from "@/components/Layouts/TwoPane";
import PersonalRight from "../Personal/PersonalRight";
import PersonalLeft from "../Personal/PersonalLeft";
import skills from "../../../public/skills.svg";

function Personal() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  return (
    <div
      className="bg-white min-h-screen font-gilroyRegular text-black pt-44 "
      ref={ref}
    >
      <PaddingMedium>
        <div className="pl- md:pl-56">
          <TextGradient text="Generalist" type={2} />
          <div className="text-[4rem] md:text-[7rem] mt-[-5vh] font-bold ">Mojo.</div>
          <p className="gray-text mt-5  ml-2">
            I am proud to say that I wear a lot of hats with my past
            collaborations. Since I was younger, I've always been used to doing
            stuff on my own, and I've always being a self-starter.
            <br />
            <br />I don't know how this happened but I tend to always give
            feedback to things that may not even be related to my field of
            expertise. Gradually I've learned how to make relatively beautiful
            things, and I've also learned how to be compassionate to the team,
            the product, and the end users.
          </p>
        </div>
        <div className="bg-white drop-shadow-2xl w-full h-[350px] flex flex-row gap-4 rounded-2xl mb-10 mt-16">
          <motion.div
            className={`bg-[#1A1B1C] w-[25%] z-[3] hidden md:flex rounded-xl shadow-2xl`}
            style={{
              skewX: useTransform(scrollYProgress, [0, 0.8, 1], [36, 0, 0]),
              translateY: useTransform(
                scrollYProgress,
                [0, 0.8, 1],
                [-500, -100, -100]
              ),
              translateX: useTransform(
                scrollYProgress,
                [0, 0.8, 1],
                [-200, 0, 0]
              ),
              height: useTransform(
                scrollYProgress,
                [0, 0.8, 1],
                [350, 450, 450]
              ),
            }}
          >
            <div className="flex flex-col justify-center items-center h-full p-4">
              <img src={skills.src} className="w-full h-full opacity-80" />
            </div>
          </motion.div>
          <div className=" w-full md:w-[60%] h-full p-8 flex justify-around flex-col py-24">
            <p className="text-black">
              Jack of all trades? I honestly don't know 🤔{" "}
            </p>
            <p className="gray-text tracking-tighter mt-2">
              I don't know man but it brings me so much joy being able to be
              part of a product (or a feature) since the ideation stage and
              *especially* coding it out. So long as I can code, titles or range of
              responsibilities hardly matter to me.
            </p>
          </div>
        </div>
        <TwoPane
          gap={"gap-4"}
          padding={"p-1"}
          leftPane={<PersonalLeft />}
          rightPane={<PersonalRight />}
        />
      </PaddingMedium>
    </div>
  );
}

export default Personal;
