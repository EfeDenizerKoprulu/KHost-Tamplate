import React from "react";
import { IoMdArrowDropleft } from "../../../icons";
import aa from "./Pointer.module.css";

const Pointer = (props) => {
  return (
    <div
      className={`h-fit w-fit z-20 rounded-full bg-[#0948B3] p-[6px] ${aa[props.Class]} items-center absolute`}
    >
      <div className="md:block absolute md:p-1 text-sm bg-black md:-top-[32px] -top-[25px] -left-12 w-24 text-center z-30 text-white rounded-l">
        {props.Description}
        <span className="absolute -rotate-90 text-[26px] md:top-4 top-2 text-black right-8">
          <IoMdArrowDropleft />
        </span>
      </div>
    </div>
  );
};

export default Pointer;
