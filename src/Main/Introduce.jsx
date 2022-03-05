import React from "react";
import { Buttons } from "./Buttons";
import { LargeCard } from "./LargeCard";
const Introduce = () => {
  return (
    <section className="w-full text-center lg:w-2/5 h-3/4 space-y-16 pt-16 relative">
      <div className="space-y-8 lg:w-4/5">
        <h1 className="text-6xl font-bold text-indigo-900">
          Your Pet
          <br />
          care center
        </h1>
        <p className="text-xl lg:text-sm text-white lg:text-gray-500">
          Before you bring home your pet, be sure you're ready to take care of
          it properly.
        </p>
        <Buttons />
      </div>
      <LargeCard />
    </section>
  );
};

export { Introduce };
