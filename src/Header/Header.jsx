import React from "react";
import { Logo } from "./Logo.jsx";
import { NavBar } from "./NavBar.jsx";
import { SignIn } from "./SignIn.jsx";
import "./medias.css";

const Header = () => {
  return (
    <div className="header flex w-full justify-between items-center px-32 pt-2 ">
      <Logo />
      <NavBar />
      <SignIn />
    </div>
  );
};

export { Header };
