import React from "react";

const LargeCard = () => {
  return (
    <div className="w-full h-40 lg:absolute bg-white flex rounded-2xl drop-shadow-xl">
      <div className="bg-yellow-300 rounded-2xl flex items-center">
        <img
          src="https://www.pngplay.com/wp-content/uploads/9/Puppies-PNG-HD-Quality.png"
          alt=""
          className="w-52"
        />
      </div>
      <div className=" p-8 text-indigo-900 flex flex-col justify-center space-y-2  ">
        <p>🐶</p>
        <p className="font-bold text-lg">How to take care of your pets</p>
        <p className="text-sm">
          Learn how to take care of your pet with proper guidance.
        </p>
      </div>
    </div>
  );
};

export { LargeCard };
