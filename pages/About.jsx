import React from "react";
import { Location, Support, Slider } from "./Home";
import { WeShareingImage } from "../img";
import Image from "next/image";
import { TiTick } from "../icons";
import { WeShareSectionData } from "../Data";

const About = () => {
  return (
    <>
      <section className="w-full h-[40%] bg-[#0948B3] text-white flex flex-col justify-center items-center py-20 from-blue-800 bg-gradient-to-t gap-3 font-inter">
        <p className="font-bold text-4xl">About Us </p>
        <p className="text-center w-[35%]">
          Web hosting made easy & affordable, choose a fine-tuned web hosting
          services solution for successful personal and business websites.
        </p>
      </section>
      <section className="py-32 px-40 flex justify-evenly">
        <div className="flex flex-col gap-6">
          <h2 className="font-bold w-[60%] text-4xl">
            We Share the Same Values which Makes our Team Stronger
          </h2>
          <p className="w-[48%] text-slate-600">
            Objectively deliver professional value with diverse web-readiness.
            Collaboratively transition wireless customer service without
            goal-oriented catalysts for change. Collaboratively.
          </p>
          <div>
            <ul className="flex flex-wrap flex-col  gap-5 w-[70%] h-[50%]">
              {WeShareSectionData.map((item, index) => (
                <li key={index} className="flex gap-6 text-slate-600">
                  <div className="bg-[#0948B3] w-fit rounded-full p-0.5 text-xl text-white">
                    <TiTick />
                  </div>
                  {item.ItemName}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="relative object-contain h-full">
            <Image src={WeShareingImage} alt="WeShareingImage" />
          </div>
        </div>
      </section>
      <Location />
      <Support />
      <section>
        jkabjkab
      </section>
      <Slider />
    </>
  );
};

export default About;
