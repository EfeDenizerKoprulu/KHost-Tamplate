import Link from "next/link";
import React from "react";
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
    <Link href={props.Href}
      className="list-none cursor-pointer p-2 flex  before:hover:bg-red-400 before:hover:w-[0.2rem] before:relative before:-left-6"
      onClick={() => {
        props.Arrow ? props.OpenSetstate(!props.Openstate) : null;  props.GetSubdropdownSetState(props.setGetSubdropdown);
      }}
      
    >
      {props.ItemName}
      {props.Arrow}
    </Link>
  );
}

export function SubDropdown(props) {
  return (
    <div className={`subdropdown ${props.top}`}>
      {" "}
      {props.children}
    </div>
  );
}

export function SubDropdownItem(props) {
  return <Link href={props.Href} className="px-1 py-2 flex  before:hover:bg-red-400 before:hover:w-[0.2rem] before:relative before:-left-3">{props.name}</Link>;
}
