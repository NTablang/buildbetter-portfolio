import React from "react";

function ExperienceRight() {
  return (
    <div className="brand-gradient rounded-3xl h-[750px] md:h-[700px]">
      <div className=" w-full h-full px-8 md:px-12 flex flex-col pt-12 gap-4">
        <p className="text-white">🚀 Humble Beginnings</p>
        <p className="opacity-70 tracking-tighter text-black ">
          I attended community college for two years before transferring at my
          current uni. I remember I didn't know much about tech and in fact I
          was working as a{" "}
          <a href={"https://nathantablang.com/personal/archives/starbucks"}>
          <span className="text-white hover:underline transition-all cursor-pointer">
            Starbucks Barista.
          </span></a>{
            " "}
          I was working so I can fund my studies and the things that I've
          learned in both places were fundamental into who I am today.
          <br />
          <br />
          In comm. college, I was studying alongside other people:
          highschoolers, immigrant working class parents, and old people who
          just want to learn something new. I've learned that these people have
          different beautiful problems; problems that allow me to emphasize with
          them, from where I am.
        </p>
      </div>
    </div>
  );
}

export default ExperienceRight;
