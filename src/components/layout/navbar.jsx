import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex m-3 sm:m-5 text-[#F8F9FA] justify-between">
        <div className="font-semibold rounded-lg text-2xl ">
          SkillsPath
        </div>
        <div className="bg-[#00071B] border-3 border-[#1c253e] items-center justify-around flex px-5 py-2 sm:px-0 w-[60%] sm:w-[40%] rounded-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-[#F8F9FA] sm:tracking-[4px] ${isActive ? "underline underline-offset-4" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-[#F8F9FA] sm:tracking-[4px] ${isActive ? "underline underline-offset-4" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-[#F8F9FA] sm:tracking-[4px] ${isActive ? "underline underline-offset-4" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
