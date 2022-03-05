import React from "react";
import { Introduce } from "./Introduce";
import { IntroImage } from "./IntroImage";

const Main = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="absolute top-0 w-full h-3/4 bg-gradient-to-b from-sky-400 to-cyan-400 rounded-br-[50px] lg:hidden"></div>
      <div className="w-4/5 flex flex-col lg:flex-row justify-center items-center space-y-8">
        <Introduce />
        <IntroImage />
      </div>
    </div>
  );
};

export { Main };
