import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

type TestimonialBubbleProps = {
  mediaHeaderSrc: string;
  text: string;
  subHeader: string;
  subTitle?: string;
  alignment: "left" | "right";
  link?: string;
};
function TestimonialBubble({
  mediaHeaderSrc,
  text,
  subHeader,
  subTitle,
  alignment = "left",
  link,
}: TestimonialBubbleProps) {
  if (alignment == "right") {
    return (
      <div className={"flex flex-col mb-12 md:mb-44 items-end"}>
        <img
          src={mediaHeaderSrc}
          className="rounded-3xl w-[150px] md:w-[250px] h-[auto] mb-4 md:mb-16"
          alt={"gif"}
        />
        <div className="bg-white rounded-[3.5rem] p-10 w-auto pt-8 flex flex-col drop-shadow-sm">
          <h3 className={"text-black mb-4 text-right text-base"}>{text}</h3>
          <p className={"text-black mt-6 text-base text-right"}>{subHeader}</p>
          <p
            className={
              "text-black opacity-30 mt-1 text-sm md:pl-28 text-right whitespace-pre-wrap"
            }
          >
            {subTitle}
          </p>
          {link && (
          <a href={link} className="text-xl ml-[auto] opacity-30 mt-2 ">
            <FaLinkedin />
          </a>
        )}
        </div>
      </div>
    );
  }
  return (
    <div className={"flex flex-col mb-12 md:mb-44 "}>
      <img
        src={mediaHeaderSrc}
        className="rounded-3xl w-[150px] md:w-[250px] h-[auto] mb-4 md:mb-16"
        alt={"gif"}
      />
      <div className="bg-white rounded-[3.5rem] p-10 w-auto md:pt-8 flex flex-col drop-shadow-sm">
        <h3 className={"text-black mb-4 text-base"}>{text}</h3>
        <p className={"text-black mt-6 text-base "}>{subHeader}</p>
        <p className={"text-black opacity-30 mt-1 md:pr-44 text-sm whitespace-pre-wrap"}>
          {subTitle}
        </p>

        {link && (
          <a href={link} className="text-xl opacity-30 mt-2">
            <FaLinkedin />
          </a>
        )}
      </div>
    </div>
  );
}

export default TestimonialBubble;
