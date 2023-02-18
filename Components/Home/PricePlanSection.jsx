import React from "react";
import { PricePlanSectionData } from "../../Data";
import { BiSupport } from "../../icons";

const PricePlanSection = () => {
  return (
    
    <section className="bg-[#FAFAFA] w-full h-fit py-12">
        {/* Title */}
      <div className="items text-center">
        <h2 className="font-inter font-bold text-3xl">
          Our Flexible Pricing Plan
        </h2>
        <p className="md:w-[40em] text-center mx-auto py-4 text-slate-500 w-[23em]">
          {" "}
          Professional hosting at an affordable price. Distinctively
          recaptiualize principle-centered core competencies through
          client-centered core competencies.{" "}
        </p>

        {/* Card */}
        <div className="flex gap-7 items-center justify-center my-8 flex-wrap">
          {PricePlanSectionData.map((item,index) => (
            <div
              key={index}
              className="bg-white px-20 md:px-32 py-12 items-center flex flex-col gap-3 w-fit shadow-sm"
            >
              <span className="text-blue-400 text-6xl">{item.Icon}</span>
              <h3 className="font-bold text-xl">{item.Title}</h3>
              <p className="text-sm text-slate-600">{item.SmallText}</p>
              <div className="h-[2px] w-8 bg-[#094883]"></div>
              <span className="text-slate-600 text-sm">Starting at</span>
              <div className="flex -mt-2 text-3xl">
                <span className="font-semibold mr-2">{item.PriceWeek}</span>
                <span className="text-2xl">/mo</span>
              </div>
              <button className="my-4 bg-blue-700 hover:bg-blue-800 p-3 text-white text-sm font-semibold rounded-l">
                Get Started Now
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2">
          {" "}
          <p className="w-fit flex text-xl gap-2 font-semibold">
            <span className="top-2 text-blue-700 text-2xl">
              <BiSupport />
            </span>{" "}
            We&apos;re Here to Help You
          </p>
          <p>
            {" "}
            Have some questions? <span className="text-blue-700 cursor-pointer">Chat with us now</span>, or <span className="text-blue-700 cursor-pointer">send us an email</span> to get in
            touch.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricePlanSection;
