import React from "react";

const Product = ({ children }) => {
  return (
    <section className="w-full flex items-center justify-center ">
      <div className="space-y-6  w-4/5  mt-16 grid space-x-2 grid-cols-2 items-center justify-center  lg:grid lg:grid-cols-3 lg:grid-flow-row lg:auto-rows-[minmax(100px, 200px)]  lg:place-items-center">
        {children}
      </div>
    </section>
  );
};

export { Product };
