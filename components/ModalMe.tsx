import React from "react";
import logo from "../public/logo.png";

type ModalMeProps = {
  visible: boolean;
  toClose: () => void;
};
function ModalMe({ visible, toClose }: ModalMeProps) {
  if (!visible) return null;
  return (
    <div className="fixed h-screen w-screen top-0 left-0 center flex-col bg-[#00000091] z-[100]">
      <img src={logo.src} className="w-auto h-[60%] " />
      <h2>I'm the joke</h2>
      <p className="cursor-pointer" onClick={toClose}>
        close
      </p>
    </div>
  );
}

export default ModalMe;
