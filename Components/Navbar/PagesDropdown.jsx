import React, { useState } from "react";
import { PagesDropdownData } from "../../Data";
import { RiArrowDropDownLine } from "../../icons";
import {
  Dropdown,
  DropdownItem,
  SubDropdown,
  SubDropdownItem,
} from "../PartiteComponent/Navbar/Dropdown";

const PagesDropdown = () => {
  const [subdropdown, setSubDropdown] = useState(false);
  return (
    <>
      <Dropdown right="right-[26em]">
        {PagesDropdownData.map((item, index) => (
          <DropdownItem
            setState={setSubDropdown}
            state={subdropdown}
            key={index}
            ItemName={item.DropdownItemName}
            Arrow={
              item.Arrow ? (
                <span className="text-[1.6rem] -rotate-90 absolute right-3 font-semibold opacity-60">
                  <RiArrowDropDownLine />
                </span>
              ) : null
            }
          />
        ))}
      </Dropdown>
      {subdropdown && (
        <SubDropdown>
          <SubDropdownItem name="k" />
        </SubDropdown>
      )}
    </>
  );
};

export default PagesDropdown;
