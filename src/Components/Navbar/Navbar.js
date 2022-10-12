import React from "react";
import { Link, Outlet } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  return (
    <div className="px-12 mx-auto">
      <div className="navbar  ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <CustomLink  to="/">
                  Home
                </CustomLink>
              </li>
              <li>
                <CustomLink  to="/dashboard">
                  Dashboard
                </CustomLink>
              </li>
              <li>
                <CustomLink  to="/blog">
                  Blog
                </CustomLink>
              </li>
            </ul>
          </div>
          <Link to="home" className="text-2xl text-pink-400">
          NANQUIZ
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal p-0 gap-2">
            <li>
              <CustomLink  to="/">
                Home
              </CustomLink>
            </li>
            <li>
              <CustomLink  to="/dashboard">
                Dashboard
              </CustomLink>
            </li>
            <li>
              <CustomLink  to="/blog">
                Blog
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
