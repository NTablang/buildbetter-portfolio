import React from "react";
import screenshot from "../../../public/screenshot.png";
import { motion } from "framer-motion";

function CodeView() {
  return (
    <div className="relative">
      <img src={screenshot.src} className="w-[80vw] mt-20 h-auto" />
      <div className="absolute top-0 dark-gradient w-full h-full" />
      <motion.div
        className="w-[200px] h-[200px] rounded-md absolute top-20 right-44 shadow-2xl bg-[#1A1B1C] p-4"
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 400, damping: 50 }}
      >
        <p className="mb-4">🪂</p>
        <p className="text-sm">
          I admit I don't know a lot about certain code best practices, but I am
          learning a lot about maintainability AND optimizability.
        </p>
      </motion.div>
      <motion.div
        className="w-[200px] h-[200px] rounded-md absolute top-96 right-72 shadow-2xl bg-[#1A1B1C] p-4"
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 400, damping: 50 }}
      >
        <p className="mb-4">🏎</p>
        <p className="text-sm">
          I ask hard questions fast so I don't waste much time solving problems
          that could have been solved earlier.
        </p>
      </motion.div>
    </div>
  );
}

export default CodeView;
