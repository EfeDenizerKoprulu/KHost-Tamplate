import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export function SliderComponent(props) {
  var settings = {
    autoplay: true,
    speed: 2200,
    autoplaySpeed:1500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 412,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        
        }
      },
    ]
  };

  return (
    <div className="pt-3">
      {" "}
      <Slider {...settings}>{props.children}</Slider>
    </div>
  );
}
export function Item(props) {
  return (
    <div className="pt-6 p-4 flex flex-col rounded-2xl shadow-xl md:h-[25em] lg:h-[18em] h-[20em] mr-5 mb-3 py- gap-3">
        <h3 className="font-bold text-xl">{props.Title}</h3>
        <p className="text-slate-600 lg:w-[28em]">{props.Description}</p>
      <div className="flex mt-7 gap-4">
      <div className="relative object-contain w-[4em] h-[4em]">
        <Image src={props.Img} alt={props.ImgAlt} fill className="rounded-full" />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="font-bold">{props.AvatarName}</h3>
        <h5>{props.CompanyName}</h5>
      </div>
      </div>
    </div>
  );
}
