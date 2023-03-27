import React from "react";

type TextGradientProps = {
  text: string;
  type: 1 | 2 | 3; // the reason why we are doing this is
  // because for some reason tailwind css is
  // acting wrong with temperate literals (for specific color) sometimes
};

function TextGradient({ text, type }: TextGradientProps) {
  if (type == 1) {
    return (
      <div>
        <h2
          className={`text-[4rem] md:text-[7rem] font-bold bg-clip-text text-transparent
             bg-gradient-to-r from-[#CDDB3D] to-[#B7E35D] font-gilroyMedium`}
        >
          {text}
        </h2>
      </div>
    );
  } else if (type == 2) {
    return (
        <div>
          <h2
            className={`text-[4rem] md:text-[7rem] font-bold bg-clip-text text-transparent
               bg-gradient-to-r from-[#0D96FD] to-[#1FB8F9] font-gilroyMedium`}
          >
            {text}
          </h2>
        </div>
      );
  }

  return (
    <div>
      <h2
        className={`text-[4rem] md:text-[7rem] font-bold bg-clip-text text-transparent
         bg-gradient-to-r from-[#FD8709] to-[#E23D57]  font-gilroyMedium`}
      >
        {text}
      </h2>
    </div>
  );
}

export default TextGradient;
