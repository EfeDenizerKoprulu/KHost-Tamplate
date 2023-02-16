import React, { useState } from "react";
import Logo from "./PartiteComponent/Logo";
import { NavbarData } from "../Data";
import {
  RiArrowDropDownLine,
  IoMdArrowDropleft,
  RxHamburgerMenu,
} from "../icons";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [TabName, setTabName] = useState("");
  const [mobilenav, setMobilenav] = useState(false);

  return (
    <header className="bg-[#0948B3] top-0 z-40 flex justify-between lg:px-20 text-white p-6 sticky shadow-sm w-full">
      <Logo />
      <nav>
        <span
          className="md:hidden text-3xl cursor-pointer active:opacity-60"
          onClick={() => setMobilenav(!mobilenav)}
        >
          <RxHamburgerMenu />
        </span>{" "}
        <ul className={`md:flex md:gap-6 gap-4 bg-white md:bg-transparent md:static absolute text-black md:text-white w-full py-4 md:py-0 md:w-fit left-0 md:left-auto top-20 md:p-0 p-2 flex flex-col md:flex-row ${mobilenav ? "block" : "hidden"}`}>
          {NavbarData.map((item, index) => (
            <li
              className="md:flex gap-1 items-center cursor-pointer md:flex-row flex-col font-semibold md:font-normal"
              key={index}
              onClick={() => {
                setOpen(!open);
                setTabName(item.NavItemName);
              }}
            >
              {item.NavItemName}{" "}
              {item.Arrow ? (
                <span className="md:static absolute right-2 text-4xl md:text-base">
                  <RiArrowDropDownLine />
                </span>
              ) : null}
              {open && item.NavItemName === TabName && item.Dropdowns ? (
                <ul className="dropdown">
                  <span className="text-5xl text-white absolute -top-6 rotate-90 mx-7 hidden md:block">
                    <IoMdArrowDropleft />
                  </span>
                  {item.Dropdowns?.map((subdropdown, subindex) => (
                    <Link href={`${subdropdown.Link}`} key={subindex}>
                      {" "}
                      <li className="p-2 flex before:hover:bg-[#f67a3c] hover:h-full hover:before:w-0.5 before:relative before:-left-5 font-normal">
                       <p className="last:hover:opacity-60"> {subdropdown.ItemName}</p>
                      </li>{" "}
                    </Link>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
