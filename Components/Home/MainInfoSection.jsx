import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MainInfoData, CallCenterData } from "../../Data";
import { BsArrowRight, AiFillMail, AiFillPhone } from "../../icons";

const MainInfoSection = () => {
  return (
    <>
     {/* main info sectition */}
      <section className="pt-20 md:px-20 px-7 w-full">
        {MainInfoData.map((item) => (
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

      {/* support section */}
      <section className="bg-[#0948B3] p-10">
        {CallCenterData.map((item) => (
          <div className="md:flex justify-around items-center" key={item.Id}>
            <div className="text-white gap-3 flex flex-col">
              <h2 className="font-bold md:text-3xl text-2xl md:w-[20em] w-[15em]">{item.Title}</h2>
              <p className="md:w-[39em] w-[21em]">{item.content}</p>
              <div className="flex md:gap-9 gap-4 md:flex-row flex-col">
                <Link href={item.Mail} className="flex items-center">
                  <span className="mr-2 text-orange-400">
                    <AiFillMail />
                  </span>
                  {item.Mail.slice(7)}
                </Link>

                <Link href={item.Phone} className="flex items-center">
                  <span className="mr-2 text-orange-400">
                    <AiFillPhone />
                  </span>
                  {item.Phone.slice(4)}
                </Link>
              </div>
            </div>
            <div className="lg:block relative object-contain h-[250px]  w-[250px] hidden">
              <Image src={item.Image} alt="" fill />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default MainInfoSection;
