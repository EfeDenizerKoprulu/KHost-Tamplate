import Image from "next/image";
import React from "react";
import { MainInfoSectionData } from "../../Data";
import { BsArrowRight } from "../../icons";

const MainInfoSection = () => {
  return (
    <section className="pt-20 md:px-20 px-7 w-full">
      {" "}
      {/* main info sectition */}
      {MainInfoSectionData.map((item) => (
        <div
          key={item.Id}
          className="lg:flex justify-around h-fit md:sm:mb-12 lg:my-0"
        >
          <div>
            <h2 className="text-3xl font-bold md:w-[18em] w-[10em]">
              {item.Title}
            </h2>
            <p className="lg:w-[30em] py-5 text-slate-600">{item.Content}</p>{" "}
            <div className="flex gap-2 items-center text-blue-700 cursor-pointer">
              <p>Know more about us</p>
              <span>
                <BsArrowRight />
              </span>
            </div>
          </div>
          <div className="relative object-contain md:w-[35em] w-[20em] lg:bottom-28 md:h-[28em] h-[18em] lg:my-12">
            <Image src={item.Image} alt="" fill />
          </div>
        </div>
      ))}
    </section>
  );
};

export default MainInfoSection;
