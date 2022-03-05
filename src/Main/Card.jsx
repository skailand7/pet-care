import React from "react";

const Card = () => {
  let hidden = true;
  const onLike = () => {
    const heart = document.querySelector("#heart1");
    const heart2 = document.querySelector("#heart2");
    if (hidden === true) {
      heart.classList.add("hidden");
      heart2.classList.remove("hidden");
      hidden = false;
    } else {
      heart.classList.remove("hidden");
      heart2.classList.add("hidden");
      hidden = true;
    }
  };
  return (
    <div className="lg:absolute -bottom-8 right-16 bg-white w-44 h-52 p-2 text-indigo-900 rounded-xl z-20 drop-shadow-xl flex flex-col">
      <div className="w-full h-2/3 bg-pink-200 rounded-t-xl flex justify-center">
        <img
          src="http://assets.stickpng.com/images/580b57fbd9996e24bc43bbdf.png"
          alt=""
          className="h-full"
        />
      </div>
      <div className="w-full h-1/3 relative">
        <p className="text-2xl font-bold text-center">Pet Health</p>
        <p className="text-sm text-center">Blog | Article</p>
        <div>
          <svg
            id="heart1"
            onClick={onLike}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute right-0 bottom-0 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>

          <svg
            id="heart2"
            onClick={onLike}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute right-0 bottom-0 hidden text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export { Card };
