import Image from "next/image";
import React, { useState } from "react";
import { NavbarData } from "../Data/index";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine, RiCloseFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [MobileNav, setMobileNav] = useState(false);
  return (
    <header className="bg-[#0948B3] text-white sticky w-full top-0 py-4 items-center lg:px-28 px-8 shadow-sm flex z-50 justify-between box-border">
      {/*left */}
      <span className="font-bold text-2xl italic cursor-pointer">EDKTamplate</span>
      {/* Right */}
      <div>
        <div
          className=" md:hidden text-2xl cursor-pointer"
          onClick={() => setMobileNav(!MobileNav)}
        >
          <span>{MobileNav ? <RiCloseFill /> : <RxHamburgerMenu />}</span>
        </div>
        <ul
          className={`md:static absolute left-0 bg-white md:left-auto lg:bg-transparent md:bg-transparent md:flex lg:flex md:w-auto z-10 md:z-auto w-full md:top-auto top-[3.5em] md:gap-4 py-3 md:py-0 ${
            MobileNav ? "block" : "hidden"
          }`}
        >
          {NavbarData.map((item) => (
            <li
              className=" flex items-center cursor-pointer filter opacity-80 hover:opacity-100 py-2 md:py-0 px-4 md:px-0  md:text-white text-black md:text-sm"
              key={item.Id}
            >
              {item.NavbarItem}{" "}
              {item.Arrow ? (
                <span className="md:ml-1 md:relative md:top-[1.8px] md:text-xl right-2 md:right-auto text-3xl absolute ">
                  <RiArrowDropDownLine />
                </span>
              ) : null}
            </li>
          ))}
          <div className="font-semibold flex py-3 px-6 text-[14px] text-center bg-[#f67a3c] rounded-full items-center mt-5 md:mt-0">
            {" "}
            <span className="pr-3">
              {" "}
              <FaUser />{" "}
            </span>{" "}
            Client Area
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
