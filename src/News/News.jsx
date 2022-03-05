import React from "react";

const News = () => {
  return (
    <section className="mt-8">
      <div className="w-full h-auto bg-yellow-200 text-indigo-900 text-center p-8 space-y-4">
        <p className="text-sm">NEWS</p>
        <p className="text-2xl font-bold">Breaking Veterinary News</p>
        <p className="text-sm">
          Stay on top of the latest COVID-19 news, resources and updates.
        </p>
        <p className="text-sm">Published by PUPS</p>
        <button className="bg-indigo-900 text-white text-sm w-32 h-10 rounded-2xl border-indigo-900">
          Read The Latest
        </button>
      </div>
    </section>
  );
};

export { News };
