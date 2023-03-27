import React from "react";

type StatPointProps = {
  header: string;
  subtitle: string;
};
function StatPoint({ header, subtitle }: StatPointProps) {
  return (
    <div className="center flex-col ">
      <div className="text-7xl font-gilroyExtraBold">{header}</div>
      <div className="text-xl font-gilroySemiBold gray-text whitespace-pre-wrap text-center">{subtitle}</div>
    </div>
  );
}

export default StatPoint;
