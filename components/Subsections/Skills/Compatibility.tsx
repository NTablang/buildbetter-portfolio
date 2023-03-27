import React from "react";

function Compatibility() {
  return (
    <div>
      {" "}
      <div className="pr-28 text-md mt-[-2vh]">
        <div className=" font-gilroyBold">
          Based from your tech stack and mine here is how we match up.{" "}
        </div>
        <div>
          <span className="font-gilroyBold">Strong: </span>
          Typescript, React
        </div>
        <div>
          <span className="font-gilroyBold">Has some familiarity: </span>
          GraphQL
        </div>
        <div>
          <span className="font-gilroyBold">Never touched: </span>
          Electron
        </div>
      </div>
      <div className="pr-28 text-md mt-4">
        <div className=" font-gilroyBold">
          Based from your "nice to haves" this is what I can do:
        </div>
        <div>
          <span className="font-gilroyBold">Strong: </span>
          GPT-3, Python, DB to DOM, Excellent Googler and GPT Prompter
        </div>
        <div>
          <span className="font-gilroyBold">Has some familiarity: </span>
          Bash and CLI writing
        </div>
        <div>
          <span className="font-gilroyBold">Never touched: </span>
          Kubernetes, Hasura, AWS
        </div>
      </div>
    </div>
  );
}

export default Compatibility;
