import React from "react";
import { Card } from "./Card";

const Commends = ({ children }) => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="lg:mt-48 p-4 w-full lg:w-4/5">
        <p className="ml-4 mt-8 text-indigo-900 text-2xl font-bold">
          What people say about us:
        </p>
        <div className="w-auto h-56 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-6 ">
          {children}
        </div>
      </div>
    </section>
  );
};

export { Commends };
