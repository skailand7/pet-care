import React from "react";
import { Card } from "./Card";

const IntroImage = () => {
  return (
    <div className="relative flex flex-col items-center space-y-8">
      <div className="hidden w-full h-[200px] lg:h-[500px]  bg-gradient-to-b from-sky-400 to-cyan-400 rounded-l-full lg:flex flex-col lg:flex-row justify-center items-center relative">
        <div className="w-3/5 h-3/4 rounded-full bg-yellow-400 absolute items-center"></div>
        <img
          src="https://www.pngmart.com/files/1/Dog-PNG-Transparent-Image.png"
          alt="Doggies"
          className="w-3/4 h-3/4 z-10 relative"
        />

        <img
          src="https://cdn.pixabay.com/photo/2020/06/08/22/50/dog-5276317_1280.png"
          alt=""
          className="hidden lg:absolute top-16 right-16 bg-pink-400 rounded-full w-16 border-2 border-white z-20 "
        />
        <img
          src="https://clipart-best.com/img/dog/dog-clip-art-67.png"
          alt=""
          className="hidden lg:absolute center left-8 right-16 bg-orange-400 rounded-full w-16 border-2 border-white z-20 "
        />
        <img
          src="https://www.pngall.com/wp-content/uploads/5/Black-Dog-PNG.png"
          className="hidden lg:absolute top-8 left-64 left-8 right-16 bg-gray-400 rounded-full w-16 border-2 border-white z-20 "
          alt=""
        />
      </div>
      <Card />
    </div>
  );
};

export { IntroImage };
