import React from "react";
import { Item, SliderComponent } from "../PartiteComponent/Slider/Slider";
import { SliderSectionData } from "../../Data";

const SliderSection = () => {
  return (
    <section className="w-full h-fit pt-16">
      <div className="text-center gap-3 flex flex-col items-center">
        <h2 className="font-bold md:text-3xl text-2xl">
          Our Lovely Client Say About Us
        </h2>
        <p className="text-slate-600 md:w-[38em] w-[22em]">
          Uniquely repurpose strategic core competencies with progressive
          content. Assertively transition ethical imperatives and collaborative
          manufactured products.{" "}
        </p>
      </div>
      <hr className="my-8" />
      <SliderComponent>
        {SliderSectionData.map((item) => (
          <Item
            key={item.Id}
            Title={item.Title}
            Description={item.Description}
            Img={item.Avatar}
            AvatarName={item.AvatarName}
            CompanyName={item.CompanyName}
          />
        ))}
      </SliderComponent>
      <hr className="my-8" />
    </section>
  );
};

export default SliderSection;
