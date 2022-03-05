import React from "react";

const Buttons = () => {
  return (
    <div className="flex w-full justify-center">
      <button className="bg-indigo-700 text-white text-sm w-28 h-8 rounded-2xl border-solid border-2 border-indigo-700">
        Our Services
      </button>
      <button className="text-indigo-700 text-sm w-28 h-8 rounded-2xl border-solid border-2 border-indigo-700">
        Schedule a Call
      </button>
    </div>
  );
};

export { Buttons };
