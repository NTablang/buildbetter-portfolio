import Image from "next/image";
import React from "react";
import mocks from "../../public/mocks.svg";

function IntroLeft() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src={mocks.src}
        className="w-full h-full"
        alt={"mockup"}
        unoptimized
        width={100}
        height={100}
      />
    </div>
  );
}

export default IntroLeft;
