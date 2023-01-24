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
  const [GetSubdropdown, setGetSubdropdown] = useState("");

  const GetTopValue = () => {
    if (PagesDropdownData[4].DropdownItemName === GetSubdropdown) {
      return "top-[11em]";
    }
    if (PagesDropdownData[5].DropdownItemName === GetSubdropdown) {
      return "top-[13.2em]";
    }
    if (PagesDropdownData[6].DropdownItemName === GetSubdropdown) {
      return "top-[16em]";
    }
    if (PagesDropdownData[7].DropdownItemName === GetSubdropdown) {
      return "top-[18em]";
    }
  };
  return (
    <>
      <Dropdown right="right-[26em]">
        {PagesDropdownData.map((item, index) => (
          <DropdownItem
            OpenSetstate={setSubDropdown}
            Openstate={subdropdown}
            GetSubdropdownSetState={setGetSubdropdown}
            setGetSubdropdown={item.DropdownItemName}
            key={index}
            ItemName={item.DropdownItemName}
            Arrow={
              item.Arrow? (
                <span className="text-[1.6rem] -rotate-90 absolute right-3 font-semibold opacity-60">
                  <RiArrowDropDownLine />
                </span>
              ) : null
            }
            Href={`${item.Arrow? "": item.Link}`}
          />
        ))}
        {subdropdown &&
          PagesDropdownData.map((getdropdown, index) =>
            getdropdown.DropdownItemName === GetSubdropdown ? (
              <SubDropdown key={index} top={`${GetTopValue()}`}>
                {getdropdown.Subdropdown?.map((subdropdown, indexsub) => (
                  <SubDropdownItem
                    key={indexsub}
                    name={subdropdown.SubdropdownItemName}
                    Href={`${subdropdown.Link}`}
                  />
                ))}
              </SubDropdown>
            ) : null
          )}
      </Dropdown>
    </>
  );
};

export default PagesDropdown;
