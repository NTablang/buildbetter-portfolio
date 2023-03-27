import React from "react";

type ConnectCardProps = {
  children: React.ReactNode;
  wrapperStyle?: string;
  gradientBackground?: string;
};
function ConnectCard({
  children,
  wrapperStyle,
  gradientBackground
}: ConnectCardProps) {
  return (
    <div
      className={
        `w-[330px] rounded-[2rem] p-10 overflow-hidden  drop-shadow-lg h-[450px] ` +
        wrapperStyle  + (gradientBackground == undefined ?  " bg-white " : "")
      }
    >
      {children}
    </div>
  );
}

export default ConnectCard;
