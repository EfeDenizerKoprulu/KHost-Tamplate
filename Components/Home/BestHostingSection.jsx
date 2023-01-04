import React from "react";
import { BestCloudImage } from "../../img";
import { BestHostingSectionCard } from "../../Data";
import Image from "next/image";

const BestHostingSection = () => {
  return (
    <>
      <section>
        {/* title & subtitle */}
        <div className="items-center flex justify-center flex-col md:py-0 py-11">
          {" "}
          <h2 className="text-center font-inter md:leading-10 font-bold md:text-3xl md:w-[22em] text-2xl w-96">
            {" "}
            We Provide You World Class Best Hosting Features For You
          </h2>
          <p className="text-slate-500 md:w-[38em] md:my-3 my-8 text-center w-[22em]">
            Uniquely repurpose strategic core competencies with progressive
            content. Assertively transition ethical imperatives and
            collaborative manufactured products.
          </p>
        </div>

        <div className="lg:flex justify-center md:gap-8 gap-12 md:w-fit text-center md:mx-auto">
          {/* Card */}
          {BestHostingSectionCard.map((card) => (
            <div
              key={card.Id}
              className=" shadow-sm py-5  mt-5 px-5 items-center rounded-2xl shadow-slate-400 hover:bg-[#0948B3] hover:text-white aa transition-colors ease-out duration-700"
            >
              <div className="flex justify-center mb-8 text-[68px] text-[#0948B3] hover:text-white">
                {" "}
                <span className="relative">{card.Icon}</span>
              </div>
              <h3 className="font-inter font-bold text-center text my-3 text-xl">
                {card.Title}
              </h3>
              <p className="w-[24em] text-slate-600 text-center">
                {card.Content}
              </p>
              <div className="relative rounded-full w-8 bg-[#0948B3] h-8 mx-auto right-0 mt-5">
                {" "}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Cloud Hosting Section*/}
      <section className="md:flex justify-around w-full h-fit mt-24 md:px-8 lg:px-0 px-0 bg-[#0948B3] text-white py-12 items-center md:py-9">
        <div>
          <h2 className="font-inter font-bold lg:text-4xl md:text-3xl text-2xl w-[10em] mx-6 md:mx-0 my-3">Best Cloud Hosting With Trusted Service</h2>
          <p className="lg:w-[40em] w-[23em] md:mx-0 mx-6">
            Objectively innovate high standards in methodologies vis-a-vis
            sustainable compellingly architect front-end methods maintain
            multidisciplinary process proactively streamline mission-critical
            information via quality imperatives.{" "}
          </p>
          <button className="py-3 mx-6 md:mx-1 px-2 w-[10em] text-[13px] text-center bg-[#f67a3c] rounded-md items-center mt-5 md:mt">
            Get started now
          </button>
        </div>
        <div className="relative object-contain md:h-[30em] md:w-[30em] w-[24em] h-[24em]">
          <Image src={BestCloudImage} alt="Best Cloud Image" fill />
        </div>
      </section>
    </>
  );
};

export default BestHostingSection;
