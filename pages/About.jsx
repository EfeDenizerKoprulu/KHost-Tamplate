import React from "react";
import { Location, Support, SliderSection } from "./Home";
import { WeShareingImage } from "../img";
import Image from "next/image";
import { TiTick } from "../icons";
import { WeShareSectionData, AboutUs_CloudSectionData } from "../Data";

const About = () => {
  return (
        <div className="w-full">
          <section className="h-[40%] bg-[#0948B3] text-white flex flex-col justify-center items-center py-20 from-blue-800 bg-gradient-to-t gap-3 font-inter">
            <p className="font-bold text-4xl">About Us </p>
            <p className="text-center lg:w-[45rem] w-[22rem]">
              Web hosting made easy & affordable, choose a fine-tuned web
              hosting services solution for successful personal and business
              websites.
            </p>
          </section>
        
          <section className="py-32 lg:px-40 px-4 lg:flex lg:justify-evenly">
            <div className="flex flex-col gap-6">
              <h2 className="font-bold lg:w-[45rem] md:w-[40rem] w-[25rem] md:text-3xl lg:text-4xl text-2xl">
                We Share the Same Values which Makes our Team Stronger
              </h2>
              <p className="lg:w-[48%] md:w-[40em] text-slate-600">
                Objectively deliver professional value with diverse
                web-readiness. Collaboratively transition wireless customer
                service without goal-oriented catalysts for change.
                Collaboratively.
              </p>
              <div>
                <ul className="flex flex-wrap flex-col gap-5 lg:w-[70%] md:w-[40em] lg:h-[50%] md:h-[15rem] h-[12em]">
                  {WeShareSectionData.map((item, index) => (
                    <li
                      key={index}
                      className="flex md:gap-6 gap-2 text-slate-600 md:text-base text-sm"
                    >
                      <div className="bg-[#0948B3] w-fit rounded-full p-0.5 md:text-xl text-lg text-white">
                        <TiTick />
                      </div>
                      {item.ItemName}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="relative object-contain h-full my-12 lg:my-0">
                <Image src={WeShareingImage} alt="WeShareingImage" />
              </div>
            </div>
          </section>
          <Location />
          <Support />
          <section className="py-12 lg:px-56 px-6 flex flex-col md:gap-0 gap-5">
            {AboutUs_CloudSectionData.map((item, index) => (
              <div className="flex justify-evenly gap-20" key={index}>
                {" "}
                <div
                  className={`flex flex-col gap-5 justify-center items-center ${
                    index === 1 ? "order-1" : ""
                  }`}
                >
                  <h2 className="font-bold text-3xl lg:w-[50%] lg:-ml-[5.5rem]">
                    {item.Title}
                  </h2>
                  <p className="lg:w-[60%] text-slate-600">{item.Content}</p>
                </div>
                <div className="relative object-contain  h-[40em] w-[120em] hidden md:block">
                  <Image src={item.Image} alt={item.Alt} fill />
                </div>{" "}
              </div>
            ))}
          </section>  
          <SliderSection />{" "}{/*
                */}
        </div>
  );
};

export default About;
