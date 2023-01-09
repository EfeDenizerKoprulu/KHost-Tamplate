import Image from "next/image";
import React from "react";
import { Map } from "../../img";
import { LocationSectionData } from "../../Data";
import Pointer from "../PartiteComponent/Pointer/Pointer";

const LocationSection = () => {
  return (
    <section className="w-full bg-[#FAFAFA] items-center flex flex-col py-24 gap-16 h-fit">
      <div className="text-center gap-3 flex-col flex">
        <h2 className="font-bold text-3xl">Our Data centers Location</h2>
        <p className="text-slate-600 md:w-[39em] w-[24em]">
          Cloudhub offers a low latency worldwide network, enabling you to
          deploy your service infrastructure in close proximity to your customer
          base.
        </p>
      </div>

      <div className="relative object lg:w-[1290px] md:w-[780px] w-[385] h-[634px]-contain">
        <Image src={Map} alt="MyCompany" full />
        {LocationSectionData.map((item) => (
          <Pointer
            Class={item.Class}
            key={item.Id}
            Description={item.Description}
          />
        ))}
      </div>
    </section>
  );
};

export default LocationSection;
