import React, { useState } from "react";
import Logo from "./PartiteComponent/Logo";
import { NavbarData } from "../Data";
import { RiArrowDropDownLine } from "../icons";
import PageDropdown from "./Navbar/PagesDropdown";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [TabName, setTabName] = useState("");

  const GetDropdownPage=()=>{
  return  open && NavbarData[1].NavItemName===TabName? <PageDropdown/> :null 
  }
  
  return (
    <header className="bg-[#0948B3] top-0 z-40 flex justify-between px-20 text-white p-6 sticky shadow-sm w-full">
      <Logo />
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
            { item.Arrow ? (
              <span>
                <RiArrowDropDownLine />
              </span>
            ) : null}
          </li>
        ))}
      </ul>
      {GetDropdownPage()}
    </header>
  );
};

export default Navbar;
