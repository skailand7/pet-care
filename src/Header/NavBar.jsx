import React from "react";

const NavBar = () => {
  return (
    <nav className="w-3/5 flex justify-between text-indigo-700 font-bold">
      <ul className="w-full flex justify-around">
        <a href="">
          <li>About</li>
        </a>
        <a href="">
          <li>Services</li>
        </a>
        <a href="">
          <li>Training</li>
        </a>
        <a href="">
          <li>Accesories</li>
        </a>
        <a href="">
          <li>Medi-care</li>
        </a>
      </ul>
    </nav>
  );
};

export { NavBar };
