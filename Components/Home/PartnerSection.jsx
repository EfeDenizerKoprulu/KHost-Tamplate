import Image from "next/image";
import React from "react";
import { PartnerSectionData } from "../../Data";

const PartnerSection = () => {
  return (
    <section className="py-16 flex flex-col items-center w-full h-fit gap-4">
      <h2 className="font-bold text-3xl">Lots of Customer Love Us</h2>
      <p className="w-[40em] text-center text-slate-600"> Rapidiously morph transparent internal or sources whereas resource sucking e-business. Conveniently innovate formulate manufactured products compelling internal. </p>

      <marquee width="80%" direction="left" height="100px" behavior="scroll" scrollamount="5" scrolldelay="0" loop="5"className="mt-9">
        <div className="flex gap-28">
          {PartnerSectionData.map((item) => (
            <span
              className="relative w-[9em] h-[9em] object-contain"
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
