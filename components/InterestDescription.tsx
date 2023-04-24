import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PaddingMedium from "./Layouts/PaddingMedium";

function InterestDescription() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const description = [

    "I really cannot wait just to build something that brings value!",
    "I am not the best techie out there, but I am a fast learner and ",
    "amongst all, I often find myself trusting and being one with the process.",

  ];

  // settings
  const sentence = {
    hidden: { opacity: 0.1 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        staggerChildren: 0.02,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0.1, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <PaddingMedium>
      <motion.h3
        className="text-center text-2xl md:text-5xl mt-28 leading-[2rem] md:leading-[3.5rem]"
        variants={sentence}
        initial="hidden"
        ref={ref}
        animate={controls}
      >
        {description.map((line, index) => {
          return line.split("").map((char, i) => {
            return (
              <motion.span key={char + "-" + index + "-" + i} variants={letter}>
                {char}
              </motion.span>
            );
          });
        })}
      </motion.h3>
    </PaddingMedium>
  );
}

export default InterestDescription;
