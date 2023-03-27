import React from "react";

type TwoPaneProps = {
  leftPane: React.ReactNode;
  rightPane: React.ReactNode;
  gap?: string;
  padding?: string;
};

function TwoPane({ leftPane, rightPane, gap, padding }: TwoPaneProps) {
  return (
    <div
      className={
        "w-full h-full flex flex-col md:flex-row" +
        " " +
        gap +
        " " +
        padding
      }
    >
      <div className="w-full md:w-[50%] h-full">{leftPane}</div>
      <div className="w-full md:w-[50%] h-full">{rightPane}</div>
    </div>
  );
}

export default TwoPane;
