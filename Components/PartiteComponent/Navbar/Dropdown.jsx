import React, { useState } from "react";
import { IoMdArrowDropleft } from "../../../icons";

export function Dropdown(props) {
  return (
    <div className={`dropdown ${props.right}`}>
      <span className="absolute text-5xl -top-[1.7rem] left-14 rotate-90 text-white">
        <IoMdArrowDropleft />
      </span>
      {props.children}
    </div>
  );
}
export function DropdownItem(props) {
  return (
    <li
      className="list-none cursor-pointer p-2 flex  before:hover:bg-red-400 before:hover:w-[0.2rem] before:relative before:-left-6"
      onClick={() => props.setState(!props.state)}
    >
      {props.ItemName}
      {props.Arrow}
      {console.log(props.aa)}
    </li>
  );
}

export function SubDropdown(props) {
  return <div className="dropdown"> {props.children}</div>;
}

export function SubDropdownItem(props) {
  return <div>{props.name}</div>;
}
