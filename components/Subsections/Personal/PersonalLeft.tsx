import React from "react";
import uiss from "../../../public/uistuff3.svg";
function PersonalLeft() {
  return (
    <div className="ui-grad rounded-3xl h-[500px] relative overflow-hidden drop-shadow-xl ">
      <img src={uiss.src} className="w-[100%] h-[100%] absolute md:mt-0 mt-14" />
      <div className=" w-full h-full px-6 md:px-12 flex gap-4  flex-col pt-12 pb-48 absolute top-0">
        <p className="text-black">🧑‍🎨 UI/UX</p>
        <p className="opacity-70 tracking-tighter text-black">
          I don't proclaim myself as a professional designer, but I do have a
          good eye for design. When I code, I instinctively think about how the
          user will interact with the UI. <br />
          <a href={"https://www.figma.com/file/aomSbu3YAAf8YjYb9Suei6/Welcome?node-id=0%3A1&t=bsV897ykLxCRYYqR-1"}>
          <span className="text-white hover:underline transition-all cursor-pointer">
            See Figma Designs.
          </span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default PersonalLeft;
