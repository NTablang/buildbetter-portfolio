import ToolTip from "@/components/ToolTip";
import { anecdote } from "@/constants";
import React from "react";
import myvideo from "../../../public/screenrecord.mp4";

function FeatureOneRight() {

  return (
    <div className="bg-white rounded-3xl h-[500px]  relative  overflow-hidden drop-shadow-2xl">
      <video
        className="object-cover absolute bottom-0"
        controls
        autoPlay
        muted
        loop
      >
        <source src={myvideo} type="video/mp4" />
      </video>
      <div className="w-full h-full absolute top-0 white-gradient" />
      <div className=" w-full h-full px-12 flex gap-4  flex-col pt-12 pb-48 absolute top-0">
        <p className="text-black">👨‍💻 Hacker</p>
        <p className="opacity-70 tracking-tighter text-black">
          Whenever I'm inspired by something whether it be by the idea, the
          design, or the code, I try to code it for fun. Overtime I just learned
          how to adapt to existing front-end code.
        </p>
        <ToolTip buttonText={"Click for an anecdote."} modalText={anecdote} />
      </div>
    </div>
  );
}

export default FeatureOneRight;
