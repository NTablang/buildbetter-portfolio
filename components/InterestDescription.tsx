import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PaddingMedium from "./Layouts/PaddingMedium";

function InterestDescription() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const description = [
    "I had a cool fun talk with Spencer about this",
    " and honestly he's actually a funny guy. ",
    "From my brief time with him, I've learned something about ",
    "kickstarting a startup and managing one. ",
    "He's someone that I feel like I can learn a lot from and part ",
    "of why I'm interested with BuildBetter is because I would simply ",
    "want to work with someone like him."
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
