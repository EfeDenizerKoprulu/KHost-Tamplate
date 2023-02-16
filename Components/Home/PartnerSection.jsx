import Image from "next/image";
import React from "react";
import { PartnerSectionData } from "../../Data";

const PartnerSection = () => {
  return (
    <section className="py-16 flex flex-col md:items-center text-center w-full h-fit gap-4">
      <h2 className="font-bold text-3xl">Lots of Customer Love Us</h2>
      <p className="w-[25em] md:w-[40em] text-center text-slate-600"> Rapidiously morph transparent internal or sources whereas resource sucking e-business. Conveniently innovate formulate manufactured products compelling internal. </p>

      <marquee width="100%" direction="left" height="100px" behavior="scroll" scrollamount="3" scrolldelay="0" className="mt-5 p-5">
        <div className="flex gap-28">
          {PartnerSectionData.map((item) => (
            <span
              className="relative md:w-[9em] md:h-[9em] w-[8em] h-[8em] object-contain"
              key={item.Id}
            >
              <Image src={item.Image} alt=""  className="hover:scale-125"/>
            </span>
          ))}
        </div>
      </marquee>
    </section>
  );
};

export default PartnerSection;
