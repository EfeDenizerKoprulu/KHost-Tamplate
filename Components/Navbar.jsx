import React, { useState } from "react";
import Logo from "./PartiteComponent/Logo";
import { NavbarData } from "../Data";
import { RiArrowDropDownLine } from "../icons";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [TabName, setTabName] = useState("");

  return (
    <header className="bg-[#0948B3] top-0 z-40 flex justify-between px-20 text-white p-6 sticky shadow-sm w-full">
      <Logo />
      <nav>
        {" "}
        <ul className="flex gap-6">
          {NavbarData.map((item, index) => (
            <li
              className="flex gap-1 items-center cursor-pointer"
              key={index}
              onClick={() => {
                setOpen(!open);
                setTabName(item.NavItemName);
              }}
            >
              {item.NavItemName}{" "}
              {item.Arrow ? (
                <span>
                  <RiArrowDropDownLine />
                </span>
              ) : null}
              {open && item.NavItemName === TabName && item.Dropdowns ? (
                <ul className="dropdown">
                  <div className="relative"></div>
                  {item.Dropdowns?.map((subdropdown, subindex) => (
                    <Link href={`${subdropdown.Link}`} key={subindex}>
                      {" "}
                      <li className="p-2 flex before:hover:bg-[#f67a3c] hover:h-full hover:before:w-0.5 before:relative before:-left-5">
                        {subdropdown.ItemName}
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
