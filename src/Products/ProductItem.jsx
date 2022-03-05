import React from "react";

const ProductItem = (props) => {
  return (
    <div className="first:mt-6 first:ml-2 lg:space-y-2 h-32 lg:h-48 w-auto lg:w-4/5 rounded-xl p-4  border-2 border-gray-400 bg-white border-solid text-indigo-900 drop-shadow-xl flex lg:flex-col items-center justify-center hover:bg-violet-800 hover:text-white">
      <p className="text-center lg:text-left font-bold text-xl">
        {props.title}
      </p>
      <p className="hidden text-sm lg:block">{props.contain}</p>
    </div>
  );
};

export { ProductItem };
