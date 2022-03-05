import React from "react";

const Showcase = () => {
  return (
    <div className="w-full flex justify-center mt-16">
      <div className="w-full lg:w-4/5 h-auto lg:h-48 bg-slate-900 lg:mt-52 rounded-t-[25px] text-white flex flex-col lg:flex-row text-center overflow-hidden justify-center items-center">
        <div className="w-full h-64 lg:h-full flex flex-col justify-center items-center w-full lg:w-1/4 space-y-4 hover:bg-violet-800">
          <p className="text-2xl">Pup's 🐶</p>
          <p className="text-sm w-1/2">
            Let us know what we can do for your Pet.
          </p>
        </div>
        <div className=" h-64 lg:h-full flex flex-col justify-center items-center w-full lg:w-1/4 space-y-2 hover:bg-violet-800 ">
          <img
            src="https://www.pngmart.com/files/4/Golden-Retriever-Puppy-PNG-Image.png"
            alt=""
            className="h-20"
          />
          <p className="text-xl">Superdog</p>
          <p className="text-sm w-1/2">Learn more</p>
        </div>
        <div className="h-64 lg:h-full flex flex-col justify-center items-center w-full lg:w-1/4 space-y-2 hover:bg-violet-800">
          <img
            src="https://www.pngmart.com/files/4/Golden-Retriever-Puppy-PNG-Transparent-Image.png"
            alt=""
            className="h-20"
          />
          <p className="text-xl">Feed with love</p>
          <p className="text-sm w-3/4">
            Feed your pet with love and cheer them using toys.
          </p>
        </div>
        <div className="h-64 lg:h-full flex flex-col justify-center items-center w-full lg:w-1/4 space-y-2 hover:bg-violet-800">
          <div className="bg-emerald-500 rounded-full p-6">
            <p>55+</p>
            <p>Stories</p>
          </div>
          <p className="text-xl">Pet stories</p>
          <p className="text-sm w-1/2">Learn more</p>
        </div>
      </div>
    </div>
  );
};

export { Showcase };
