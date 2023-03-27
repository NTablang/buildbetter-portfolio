import React from "react";

function PersonalRight() {
  return (
    <div className="bg-white drop-shadow-2xl rounded-3xl h-auto md:h-[700px] overflow-hidden p-6">
      <div className=" w-full h-full px-2 md:px-6 flex gap-4  flex-col pt-6 pb-4 md:pb-48 ">
        <div className="flex gap-3 flex-col">
          <p className="text-black">🙉 Product Oriented</p>
          <p className="opacity-70 tracking-tighter text-black">
            I'm a hopeless romantic ✋😔. The reason why that matters is because
            I tend to make products with a loved one in mind. My friends give me
            banter because of it, but I'm unapologetic.
          </p>
        </div>
        <div className="flex gap-3 flex-col">
          <p className="text-black">🦾 Machine Learning</p>
          <p className="opacity-70 tracking-tighter text-black">
            I'm really just a huge fan of solutions embedded with AI. I love
            tools like Rewind.AI and Artifact.
          </p>
        </div>
        <div className="flex gap-3 flex-col">
          <p className="text-black">🤝 Community Building</p>
          <p className="opacity-70 tracking-tighter text-black">
            Amongst many things, this is a new thing I'm learning. 
            I genuinely believe that building a strong community around your product
            is a great way to kickstart your venture. I've seen it in the
            past with companies like Discord and Notion.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonalRight;
