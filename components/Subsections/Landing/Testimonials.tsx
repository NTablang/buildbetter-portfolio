import ClassicPadding from "@/components/Layouts/ClassicPadding";
import { anaum, kamal, zach } from "@/constants";
import React from "react";
import TestimonialBubble from "../Testimonials/TestimonialBubble";

function Testimonials() {
  return (
    <div className="min-h-screen bg-[#F9F7F5] ">
      <ClassicPadding>
        <div className="py-36 px-2 md:px-14 md:pr-96 ">
          <h3 className="text-black leading-[1] md:leading-[1.5]">
            Somethings you just have to work with me to believe...
            but real professional, casual, and 
            personal comments can't hurt.
          </h3>
        </div>
        <div className="flex md:gap-6 flex-col md:flex-row text-black justify-around md:pl-14 md:pr-44">
          <div className="md:w-[50%]">
            <TestimonialBubble
              mediaHeaderSrc={
                "https://media.licdn.com/dms/image/C4D03AQF2S461IVnyaQ/profile-displayphoto-shrink_400_400/0/1645829110782?e=1685577600&v=beta&t=2CnYO2pKUp4-YXLGCV2javBh-yDmAotMZ6nfj3b-6MU"
              }
              text={anaum}
              subHeader={"Anaum Khan, Learn Prompting Co-Founder"}
              subTitle={
                "A prompt engineering ed tech platform with 250k+ users"
              }
              link={"https://www.linkedin.com/in/anaumkhan/"}
              alignment={"left"}
            />
            <TestimonialBubble
              mediaHeaderSrc={
                "https://media.licdn.com/dms/image/C4E03AQE-GcOQBBssBQ/profile-displayphoto-shrink_400_400/0/1607212698863?e=1685577600&v=beta&t=WvZLTP72iE4Ig4A0cVjNoxYqrJDqvsnJxjjqSOQuGJk"
              }
              text={zach}
              subHeader={"Zach Lefkovitz, EY Consultant, SWE Intern at Cranius"}
              link={"https://www.linkedin.com/in/zach-lefkovitz/"}
              alignment={"left"}
            />
          </div>
          <div className="md:w-[50%] md:pt-96">
            <TestimonialBubble
              mediaHeaderSrc={
                "https://media.licdn.com/dms/image/C4D03AQEvfynipp5MmQ/profile-displayphoto-shrink_400_400/0/1641009963977?e=1685577600&v=beta&t=KYs6ObWbKo4wX8IaBketVRcNroG0cszbVOZLWa8Syc4"
              }
              text={kamal}
              subHeader={"Kestrel Co-Founder"}
              subTitle={`Kestrel is a digital banking platform for the world's 480M smallholder farms.`}
              alignment={"right"}
              link={"https://www.linkedin.com/in/kamalnarra/"}
            />
            <TestimonialBubble
              mediaHeaderSrc={
                "https://media.giphy.com/media/26BkMadvsqSlAJdkY/giphy.gif"
              }
              text={"So glad to have you on the team!"}
              subHeader={"You"}
              subTitle={`... sometime in the future ${"\n"} (if you're into that)`}
              alignment={"right"}
            />
          </div>
        </div>
      </ClassicPadding>
    </div>
  );
}

export default Testimonials;
