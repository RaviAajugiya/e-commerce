import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Logo from "../common/Logo";
import { NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import Container from "../common/Container";
import SecondaryHeader from "./SecondaryHeader";
import Search from "../common/Search";
import IconContainer from "../common/IconContainer";
import { IoCartOutline } from "react-icons/io5";
import authService from "../../Firebase/authService";
import { auth } from "../../Firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../Redux/authSlice";
import { PiUser } from "react-icons/pi";
import { IoMenuOutline } from "react-icons/io5";

function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  console.log(loginStatus);

  return (
    <>
      <Container className="bg-violate text-white border-b border-b-[#333d4c]">
        <header>
          <div className="flex items-center justify-between h-16 ">
            <Logo />
            <nav className="hidden md:block text-base">
              <ul className="flex space-x-4 ">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Products</NavLink>
                </li>
                {loginStatus ? (
                  <li>
                    <NavLink to="/" onClick={() => dispatch(logout())}>
                      Logout
                    </NavLink>
                  </li>
                ) : (
                  <>
                    <li>
                      <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                      <NavLink to="/register">Register</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </nav>
            {/* <Search /> */}

            <div className="flex gap-4">
              <IconContainer onClick={() => Navigate("/")}>
                <IoCartOutline className="stroke-2 size-6" />
                <div className="bg-primary rounded-full size-4 flex items-center justify-center absolute -right-1 -top-1 text-xs p-2 top-0">
                  {4}
                </div>
              </IconContainer>
              <div className="hidden md:block">
                <IconContainer>
                  <PiUser className="stroke-2 size-5" />
                </IconContainer>
              </div>
              <IoMenuOutline className="size-9 md:hidden" />
            </div>
          </div>
        </header>
      </Container>

      {location.pathname === "/" ? <SecondaryHeader /> : null}
    </>
  );
}

export default Header;
