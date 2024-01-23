import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import Container from "../container";
import SecondaryHeader from "./SecondaryHeader";
import Search from "../Search";
import IconContainer from "../IconContainer";
import { IoCartOutline } from "react-icons/io5";

function Header() {
  const location = useLocation();

  return (
    <>
      <Container className="bg-violate text-white border-b border-b-[#333d4c]">
        <header>
          <div className="flex items-center justify-between  h-16 ">
            <Logo />
            <nav className="hidden md:block text-base">
              <ul className="flex space-x-4 ">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                  <NavLink to="/productdetail">Product Detail</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/cart">cart</NavLink>
                </li>
              </ul>
            </nav>
            {/* <Search /> */}
            <IconContainer>
              <IoCartOutline className="stroke-2 size-6" />
            </IconContainer>
            <IoMenuSharp className="size-9 " />
          </div>
        </header>
      </Container>

      {location.pathname === "/" ? <SecondaryHeader /> : null}
    </>
  );
}

export default Header;
