import React from "react";

const SignIn = () => {
  return (
    <button className="flex items-center justify-evenly text-white text-sm bg-indigo-700 w-24 h-8 rounded-2xl ">
      Sign in
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  );
};

export { SignIn };
