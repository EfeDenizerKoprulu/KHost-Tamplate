import Image from "next/image";
import React from "react";
import { Map } from "../../img";
import { LocationSectionData } from "../../Data";
import { IoMdArrowDropleft } from "../../icons";
import Pointer from "../PartiteComponent/Pointer";

const LocationSection = () => {
  return (
    <section className="w-full bg-[#FAFAFA] items-center flex flex-col py-24 gap-16 h-fit">
      <div className="text-center gap-3 flex-col flex">
        <h2 className="font-bold text-3xl">Our Data centers Location</h2>
        <p className="text-slate-600 w-[39em]">
          Cloudhub offers a low latency worldwide network, enabling you to
          deploy your service infrastructure in close proximity to your customer
          base.
        </p>
      </div>

      <div className="relative object w-[1290px] h-[634px]-contain">
        <Image src={Map} alt="MyCompany" full />
        {LocationSectionData.map((item) => (
          <Pointer
            Class={item.Class}
            key={item.id}
            Description={item.Description}
          />
        ))}
      </div>
    </section>
  );
};

export default LocationSection;
