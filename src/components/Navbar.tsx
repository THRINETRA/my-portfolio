"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-[70px] bg-black items-center p-3 rounded-b-2xl bg-opacity-50 fixed z-10 border-b-[2px] border-[#70A038]">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="flex pl-5">
          <div className="w-[60px] h-[50px] bg-[#70A038] p-2 flex items-center justify-center border-[#70A038] border">
            <span className="text-3xl text-black font-bold">My</span>
          </div>
          <div className="w-[140px] h-[50px] bg-[#1E1E1E] p-2 flex items-center justify-center border-[#70A038] border">
            <span className="text-3xl text-[#70A038] font-bold">Portfolio</span>
          </div>
        </div>

        {/* Navbar Links for Large Screens */}
        <div className="hidden md:flex lg:flex pr-10 lg:pr-20">
          <ul className="flex flex-row gap-8">
            <li>
              <a href="/#">
                <span className="text-md text-white hover:text-[#70A038]">
                  Home
                </span>
              </a>
            </li>
            <li>
              <a href="#Aboutus">
                <span className="text-md text-white hover:text-[#70A038]">
                  About
                </span>
              </a>
            </li>
            <li>
              <a href="#Experience">
                <span className="text-md text-white hover:text-[#70A038]">
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a href="#Skill">
                <span className="text-md text-white hover:text-[#70A038]">
                  Skills
                </span>
              </a>
            </li>
            <li>
              <a href="#Projects">
                <span className="text-md text-white hover:text-[#70A038]">
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon for Medium and Small Screens */}
        <div className="md:hidden lg:hidden pr-5">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="text-white w-7 h-7"
            />
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Medium and Small Screens */}
      {menuOpen && (
        <div className="md:hidden absolute top-[70px] left-0 w-full bg-black bg-opacity-75 py-5">
          <ul className="flex flex-col items-center gap-6">
            <li>
              <a href="/#" onClick={toggleMenu}>
                <span className="text-lg text-white hover:text-[#70A038]">
                  Home
                </span>
              </a>
            </li>
            <li>
              <a href="#Aboutus" onClick={toggleMenu}>
                <span className="text-lg text-white hover:text-[#70A038]">
                  About
                </span>
              </a>
            </li>
            <li>
              <a href="#Experience" onClick={toggleMenu}>
                <span className="text-lg text-white hover:text-[#70A038]">
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a href="#Skill" onClick={toggleMenu}>
                <span className="text-lg text-white hover:text-[#70A038]">
                  Skills
                </span>
              </a>
            </li>
            <li>
              <a href="#Projects" onClick={toggleMenu}>
                <span className="text-lg text-white hover:text-[#70A038]">
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
