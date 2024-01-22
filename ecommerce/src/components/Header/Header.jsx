import React from "react";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

function Header() {
  return (
    <header className="">
      <div className="flex items-center justify-between  h-16 w-11/12 m-auto">
        <Logo />
        <nav className="hidden md:block text-base">
          <ul className="flex space-x-4 ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <IoMenuSharp className="size-9 "/>
      </div>
    </header>
  );
}

export default Header;
