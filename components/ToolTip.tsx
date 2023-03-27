import React, { useEffect, useState } from "react";

type ToolTipProps = {
  buttonText: string;
  modalText?: string;
  children?: React.ReactNode;
};

function ToolTip({ buttonText, modalText, children }: ToolTipProps) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    console.log("isVisible: ", isVisible);
  });
  return (
    <>
      <div
        className="bg-[#f5b05c] cursor-pointer transition-all hover:outline hover:outline-[#f4a13d] opacity-70 
      inline w-auto mr-auto px-3 py-2 rounded-md"
        onClick={() => setIsVisible(true)}
      >
        <p className="text-sm text-black">{buttonText}</p>
      </div>
      {isVisible && (
        <div
          className="fixed w-[80%] md:w-[60%] h-[80%] self-center bg-[#F9F7F5] rounded-xl 
      drop-shadow-md p-4 border hover:border-[#666666] transition-all z-[99999]"
        >
          <div
            className="w-[10%] ml-[auto]"
            onClick={() => setIsVisible(false)}
          >
            <p className="text-black cursor-pointer ml-2">x</p>
          </div>
          <p className="text-black whitespace-pre-wrap mt-4 text-xs truncate  pr-8">
            {!children && modalText}
            {children}
          </p>
        </div>
      )}
    </>
  );
}

export default ToolTip;
