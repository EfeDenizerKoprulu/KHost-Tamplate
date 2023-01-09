import React from "react";
import Slider from "../../Components/Home/SlideSectionr";
import {
  BestHosting,
  FindDomain,
  Location,
  MainInfo,
  OptimizeWebsite,
  PricePlan,
  NewsEvent,
  Partner
} from "./";

const Home = () => {
  return (
    <>
      <FindDomain />
      <BestHosting />
      <OptimizeWebsite />
      <PricePlan />
      <MainInfo />
      <Location />
      <Slider/>
      <NewsEvent/>,
      <Partner/>

      
    </>
  );
};

export default Home;
