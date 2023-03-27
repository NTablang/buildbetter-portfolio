import React from "react";

type BrandButtonProps = {
  text: string;
  size?: "sm" | "lg" | "xl";
};
function BrandButton({ text, size = "sm" }: BrandButtonProps) {
  if (size == "xl") {
    return (
      <div className=" back-white p-1 transition-all rounded-3xl font-gilroyBold">
        <div className="bg-white text-black px-7 py-3 rounded-3xl cursor-pointer transition-all text-center text-xl">
          {text}
        </div>
      </div>
    );
  } else if (size == "lg") {
    return (
      <div className="flex justify-between back  items-center p-1 transition-all rounded-3xl font-gilroyBold">
        <div className="brand-bg hover:bg-[blue] px-7 py-3 rounded-3xl cursor-pointer transition-all text-xl">
          {text}
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-between back  items-center p-1 transition-all rounded-3xl font-gilroyBold">
      <div className="brand-bg hover:bg-[blue] px-7 py-3 rounded-3xl cursor-pointer transition-all">
        {text}
      </div>
    </div>
  );
}

export default BrandButton;
